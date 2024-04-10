<script setup>
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('/holderк/2');
    console.log(response.data);
    // Далее вы можете обработать данныеы
  } catch (error) {
    console.error('Ошибка при загрузке данных из API:', error);
  }
};

// Вызовите функцию для отправки запроса при загрузке страницы или в нужном месте в вашем Vue компоненте
fetchData();
</script>

<template>
  <div class="content__item">
    <div v-for="(pump, index) in pumps" :key="index" class="wrapper-content__item">
      <div class="content__item__name">
        <span>{{ pump.name }}</span><span>({{ pump.status }})</span>
      </div>
      <div class="container-content__item__param">
        <div class="content__item__param">
          <div class="content__item__param__name">Режим работы</div>
          <div :class="['content__item__param__value', { 'automatic': pump.mode === 'автоматический', 'manual': pump.mode === 'ручной', 'emergency': pump.mode === 'авария' }]">{{ pump.mode }}</div>
        </div>
        <div class="content__item__param">
          <div class="content__item__param__name">Сила тока</div>
          <div class="content__item__param__value">{{ pump.strength }} A</div>
        </div>
        <div class="content__item__param">
          <div class="content__item__param__name">Частота насоса</div>
          <div class="content__item__param__value">{{ pump.frequency }} HZ</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ваши стили */
</style>
