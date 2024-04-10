<script setup>
import { ref } from 'vue';
const data = ref([
  { content: 'Блок 1', height: 100 },
]);

const powers = [
  { status: '62%', mode: 'автоматический', strength: '8', frequency: '90', },
];
</script>

<template>
  <div class="content__item">
    <div v-for="(power, index) in powers" :key="index" class="wrapper-content__item">
      <div class="content__item__name">
        <span>Резервуар</span><span>({{ power.status }})</span>
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
    <div class="tank__diagram">
      <div class="tank__bg"></div>
      <img src="@/assets/img/line.svg" alt="" class="tank__img__line" loading="eager">
      <div v-for="(item, index) in data" :key="index" :style="{ height: item.height + 'px' }" class="tank__diagram__line"></div>
    </div>
  </div>
</template>

<style scoped>
  .content__item{
    width: fit-content;
    display: flex;
    gap: 0 50px;
    flex-direction: row;
  }
  .tank__diagram{
    position: relative;
    width: 353px;
    height: 495px;
    border-radius: 25px;
    overflow: hidden;
  }
  .tank__img__line{
    position: absolute;
    bottom: 25px;
    right: 25px;
    z-index: 9;
  }
  .tank__bg{
    width: 100%;
    height: 100%;
    background: #ffffff;
    position: relative;
    z-index: 7;
  }
  .tank__diagram__line{
    width: 100%;
    //height: 10%;
    background: #7EC1FF;
    z-index: 8;
    position: absolute;
    bottom: 0;
  }
</style>