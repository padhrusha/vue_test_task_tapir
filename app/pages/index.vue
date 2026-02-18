<template>
  <div class="home">
    <div class="home__inner container">
      <div class="home__content">
        <NuxtLink to="/catalog" class="home__button">
          В каталог
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
  }

  &__button {
    display: inline-block;
    padding: 16px 48px;
    border: 2px solid $color-black;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: $color-black;
      color: $color-white;
    }
  }
}
</style>
