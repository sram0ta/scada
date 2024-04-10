<script setup>

import { useRoute } from 'vue-router';

const route = useRoute();

const isActiveRoute = (routeName) => {
  return route.name === routeName;
};

</script>

<template>
  <div class="container-header">
    <div class="header__object">
      <div class="header__object__name">Насосная станция 1</div>
      <div class="header__object__description">Обновлено 1 минуту назад</div>
    </div>
    <div class="container-header__line">
      <div class="wrapper-header__line">
        <router-link :to="{ name: 'Panel' }" class="header__line__item" :class="{ 'active': isActiveRoute('Panel') }">Панель управления</router-link>
        <router-link :to="{ name: 'Indicators' }" class="header__line__item" :class="{ 'active': isActiveRoute('Indicators') }">Показатели</router-link>
        <router-link :to="{ name: 'Events' }" class="header__line__item" :class="{ 'active': isActiveRoute('Events') }">События</router-link>
        <router-link :to="{ name: 'Reports' }" class="header__line__item" :class="{ 'active': isActiveRoute('Reports') }">Отчеты</router-link>
      </div>
      <div class="header__personal">
        <div class="header__personal">

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header__object{

}
.header__object__name{
  color: #121417;
  font-feature-settings: 'dlig' on;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 133%;
}
.header__object__description{
  color: #61788A;
  font-feature-settings: 'dlig' on;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.container-header {
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 3px solid #F0F2F5;
}
.header__object {
  display: flex;
  flex-direction: column;
  padding: 27px 32px;
  border-right: 3px solid #F0F2F5;
  width: 100%;
  max-width: 252px;
}
.wrapper-header__line {
  padding: 21px 50px;
  display: flex;
  align-items: center;
  gap: 0 40px;
}
.header__line__item {
  padding: 15px;
  color: #121417;
  font-feature-settings: 'dlig' on;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 105%;
  border: 3px solid #F0F2F5;
  border-radius: 10px;
  transition: .5s;
}
.header__line__item.active {
  border-radius: 10px;
  border: 3px solid #F0F2F5;
  background: #F0F2F5;
  transition: .5s;
}
</style>
