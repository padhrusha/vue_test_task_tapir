<template>
  <div class="catalog">
    <div class="catalog__inner container">
      <div class="catalog__header">
        <h1 class="catalog__title">КАТАЛОГ</h1>
        <div class="catalog__divider"></div>
      </div>

      <div class="catalog__grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>

      <div class="catalog__actions">
        <button
          v-if="hasMore && !loading && !error"
          class="catalog__show-more"
          type="button"
          @click="loadMore"
        >
          Показать ещё
        </button>

        <div v-if="loading" class="catalog__loading">
          Загрузка...
        </div>

        <div v-if="error && !loading" class="catalog__error">
          <p class="catalog__error-text">Произошла ошибка, попробуйте позже</p>
          <button
            class="catalog__retry"
            type="button"
            @click="retry"
          >
            Повторить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { products, loading, error, hasMore, loadMore, retry } = useProducts()
</script>

<style lang="scss" scoped>
.catalog {
  padding: 40px 0;

  &__header {
    text-align: center;
    margin-bottom: 40px;
  }

  &__title {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 4px;
    margin-bottom: 16px;
  }

  &__divider {
    width: 60px;
    height: 1px;
    background-color: $color-black;
    margin: 0 auto;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px 20px;

    @include tablet {
      grid-template-columns: repeat(3, 1fr);
    }

    @include mobile {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px 12px;
    }
  }

  &__actions {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  &__show-more {
    padding: 12px 40px;
    border: 1px solid $color-black;
    background: none;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: $color-black;
      color: $color-white;
    }
  }

  &__loading {
    font-size: 14px;
    color: $color-gray;
    padding: 12px;
  }

  &__error {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  &__error-text {
    font-size: 14px;
    color: $color-gray-dark;
  }

  &__retry {
    padding: 10px 32px;
    border: 1px solid $color-black;
    background: none;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: $color-black;
      color: $color-white;
    }
  }
}
</style>
