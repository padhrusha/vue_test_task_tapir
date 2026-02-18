<template>
  <a href="#" class="product-card">
    <div class="product-card__image-wrapper">
      <img
        :src="product.image"
        :alt="product.name"
        class="product-card__image"
        loading="lazy"
      />
      <button
        type="button"
        class="product-card__favorite"
        aria-label="Добавить в избранное"
        @click.prevent
      >
        <svg
          class="product-card__favorite-icon"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 17.5L8.55 16.18C3.4 11.52 0 8.44 0 4.69C0 1.61 2.42 -0.5 5.5 -0.5C7.24 -0.5 8.91 0.31 10 1.59C11.09 0.31 12.76 -0.5 14.5 -0.5C17.58 -0.5 20 1.61 20 4.69C20 8.44 16.6 11.52 11.45 16.18L10 17.5Z"
            stroke="#999"
            stroke-width="1.5"
            fill="none"
          />
        </svg>
      </button>
    </div>
    <div class="product-card__info">
      <div class="product-card__prices">
        <span class="product-card__price">{{ formatPrice(product.price) }} ₽</span>
        <span class="product-card__price-half">{{ formatPrice(halfPrice) }} ₽ × 2</span>
      </div>
      <p class="product-card__name">{{ product.name }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

const props = defineProps<{
  product: Product
}>()

const halfPrice = computed(() => Math.ceil(props.product.price / 2))

function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
</script>

<style lang="scss" scoped>
.product-card {
  display: block;

  &__image-wrapper {
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
    margin-bottom: 12px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__favorite {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    padding: 4px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__prices {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__price {
    font-size: 16px;
    font-weight: 700;
  }

  &__price-half {
    font-size: 11px;
    font-weight: 700;
    color: $color-price-badge-text;
    background-color: $color-price-badge;
    padding: 2px 6px;
    border-radius: 3px;
    white-space: nowrap;
  }

  &__name {
    font-size: 13px;
    color: $color-gray-dark;
  }
}
</style>
