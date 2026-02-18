<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__column">
        <h3 class="footer__heading">Каталог</h3>
        <ul class="footer__list">
          <li class="footer__item"><a href="#" class="footer__link">Все бренды</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Nike</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Adidas</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Puma</a></li>
          <li class="footer__item"><a href="#" class="footer__link">New Balance</a></li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__heading">Помощь</h3>
        <ul class="footer__list">
          <li class="footer__item"><a href="#" class="footer__link">Доставка</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Заказ и оплата</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Обмен и Возврат</a></li>
          <li class="footer__item"><a href="#" class="footer__link">F.A.Q.</a></li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__heading">Информация</h3>
        <ul class="footer__list">
          <li class="footer__item"><a href="#" class="footer__link">Преимущества</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Гарантия и безопасность</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Индивидуальный заказ</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Акции</a></li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__heading">Компания</h3>
        <ul class="footer__list">
          <li class="footer__item"><a href="#" class="footer__link">О нас</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Блог</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Отзывы</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Контакты</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid $color-border;
  padding: 40px 0;
  margin-top: 60px;

  &__inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    @include mobile {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__heading {
    font-size: 14px;
    font-weight: 400;
    color: $color-gray;
    margin-bottom: 16px;
    font-style: italic;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__link {
    font-size: 14px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
