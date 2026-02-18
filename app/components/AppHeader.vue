<template>
  <header class="header">
    <div class="header__inner container">
      <div class="header__logo">
        <a href="#">
          <span class="header__logo-icon"></span>
        </a>
      </div>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Мужчинам</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Женщинам</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Каталог</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Доставка</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Блог</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">О нас</a>
          </li>
        </ul>
      </nav>
      <button class="header__burger" type="button" aria-label="Меню">
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid $color-border;

  &__inner {
    display: flex;
    align-items: center;
    height: 60px;
    gap: 40px;
  }

  &__logo-icon {
    display: block;
    width: 24px;
    height: 24px;
    background-color: #f0547b;
  }

  &__nav {
    flex: 1;

    @include mobile {
      display: none;
    }
  }

  &__nav-list {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__nav-link {
    font-size: 14px;
    font-weight: 500;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

  &__burger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    width: 24px;
    height: 24px;
    background: none;
    border: none;
    padding: 0;

    @include mobile {
      display: flex;
    }
  }

  &__burger-line {
    display: block;
    width: 100%;
    height: 2px;
    background-color: $color-black;
  }
}
</style>
