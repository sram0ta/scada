<script setup>
const powers = [
  { status: 'В норме', mode: 'автоматический', strength: '8', frequency: '90', },
];
</script>

<template>
  <div class="content__item">
    <div v-for="(power, index) in powers" :key="index" class="wrapper-content__item">
      <div class="content__item__name">
        <span>Электропитание</span><span>({{ power.status }})</span>
      </div>
      <div class="container-content__item__param">
        <div class="content__item__param">
          <div class="content__item__param__name">Питание на вводе 1</div>
          <div class="content__item__param__value">{{ power.mode }}</div>
        </div>
        <div class="content__item__param">
          <div class="content__item__param__name">Питание на вводе 2</div>
          <div class="content__item__param__value">{{ power.strength }} A</div>
        </div>
        <div class="content__item__param">
          <div class="content__item__param__name">Вольтметр ввод 1</div>
          <div class="content__item__param__value">{{ power.mode }} V</div>
        </div>
        <div class="content__item__param">
          <div class="content__item__param__name">Питание на вводе 2</div>
          <div class="content__item__param__value">{{ power.strength }} V</div>
        </div>
        <div class="content__item__param">
          <div class="content__item__param__name">Контроль фазы</div>
          <div class="content__item__param__value">{{ power.frequency }} HZ</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>