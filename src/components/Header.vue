<template>
  <header class="header">
    <div class="content">
      <div class="header__inner">
        <router-link to="/" class="header__logo">
          <img :src="require('@/assets/img/logo.svg')" alt="">
        </router-link>
        <div class="header__menu">
          <a href="#" class="header__item">
            Новинки
          </a>
          <a href="#" class="header__item">
            Фильмы
          </a>
          <a href="#" class="header__item">
            Сериалы
          </a>
          <a href="#" class="header__item">
            Смотреть позже
          </a>
        </div>
        <div class="header__buttons">
          <input type="text" class="header__input" placeholder="Поиск по ключевым словам...">
          <button class="btn-icon btn-search">
            <img :src="require('@/assets/img/search.svg')" alt="Поиск">
            <span>Найти</span>
          </button>
          <button class="btn-icon btn-search">
            <img :src="require('@/assets/img/user.svg')" alt="Поиск">
            <span>Профиль</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>