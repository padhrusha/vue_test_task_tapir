import type { Product, ProductsResponse } from '~/types/product'

const API_URL = 'https://test-task-api.tapir.ws/products'

export function useProducts() {
  const products = ref<Product[]>([])
  const currentPage = ref(1)
  const totalPages = ref(1)
  const loading = ref(false)
  const error = ref(false)

  const hasMore = computed(() => currentPage.value < totalPages.value)

  const { data, error: fetchError } = useFetch<ProductsResponse>(API_URL, {
    params: { page: 1, limit: 12 },
    lazy: false
  })

  watch(data, (val) => {
    if (val) {
      products.value = val.products
      currentPage.value = val.currentPage
      totalPages.value = val.totalPages
    }
  }, { immediate: true })

  if (fetchError.value) {
    error.value = true
  }

  async function loadMore() {
    if (loading.value || !hasMore.value) return

    loading.value = true
    error.value = false

    try {
      const response = await $fetch<ProductsResponse>(API_URL, {
        params: { page: currentPage.value + 1, limit: 12 }
      })

      products.value = [...products.value, ...response.products]
      currentPage.value = response.currentPage
      totalPages.value = response.totalPages
    } catch {
      error.value = true
    } finally {
      loading.value = false
    }
  }

  async function retry() {
    await loadMore()
  }

  return {
    products,
    loading,
    error,
    hasMore,
    loadMore,
    retry
  }
}
