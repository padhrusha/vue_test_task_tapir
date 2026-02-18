<template>
  <div class="app">
    <AppHeader />
    <main class="app__main">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    flex: 1;
  }
}
</style>
