<script setup>
const powers = [
  { mode: 'автоматический', strength: '8', frequency: '90', }
];
</script>

<template>
  <div class="content__item">
    <div v-for="(power, index) in powers" :key="index" class="wrapper-content__item">
      <div class="content__item__name">
        <span>Потребление</span><span></span>
      </div>
      <div class="container-content__item__param">
        <div class="content__item__param">
          <div class="content__item__param__name">Электропотребление</div>
          <div class="content__item__param__value">{{ power.mode }}</div>
        </div>
        <div class="content__item__param">
          <div class="content__item__param__name">Расход воды (накоп.)</div>
          <div class="content__item__param__value">{{ power.strength }} <span>А</span></div>
        </div>
        <div class="content__item__param">
          <div class="content__item__param__name">Расход воды (мгновен.)</div>
          <div class="content__item__param__value">{{ power.mode }} V</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>