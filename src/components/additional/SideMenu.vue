<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
const isActiveRoute = (routeName) => {
  return route.name === routeName;
};
</script>

<template>
  <div class="container-side">
    <div class="side__item">
      <router-link :to="{ name: 'Home' }" class="header__line__item" :class="{ 'header__line__item': isActiveRoute('Personal') }">
        <img src="@/assets/img/Vector - 0.svg" alt="" class="header__line__item__img">Личный кабинет
      </router-link>
      <router-link :to="{ name: 'Map' }" class="header__line__item" :class="{ 'header__line__item': isActiveRoute('Map') }">
        <img src="@/assets/img/Vector - 1.svg" alt="" class="header__line__item__img">Карта
      </router-link>
      <router-link :to="{ name: 'Reports' }" class="header__line__item" :class="{ 'header__line__item': isActiveRoute('Reports') }">
        <img src="@/assets/img/Vector - 6.svg" alt="" class="header__line__item__img">Отчеты
      </router-link>
      <router-link :to="{ name: 'Notifications' }" class="header__line__item" :class="{ 'header__line__item': isActiveRoute('Notifications') }">
        <img src="@/assets/img/Vector - 5.svg" alt="" class="header__line__item__img">Уведомления
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .side__item{
    padding: 50px 54px 0 35px;
    width: 100%;
    height: 100%;
    max-width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 18px 0;
    border-right: 3px solid #F0F2F5;
  }
  .header__line__item{
    display: flex;
    align-items: center;
    gap: 0 12px;
    color: #121417;
    font-feature-settings: 'dlig' on;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 131%;
  }
  .router-link-exact-active .header__line__item{

  }
</style>