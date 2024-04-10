<script setup>

import Pump from "@/components/item/Pump.vue";
import Power from "@/components/item/Power.vue";
import Consumption from "@/components/item/Consumption.vue";
import Tank from "@/components/item/Tank.vue";


</script>

<template>
  <Pump/>
  <div class="wrapper-power">
    <power/>
    <Consumption/>
  </div>
  <Tank/>
</template>
<style>
.content__item{
  display: flex;
  width: 354px;
  flex-direction: column;
  gap: 25px 0;
  border-radius: 25px;
  background: #F0F2F5;
  padding: 25px;
  height: fit-content;
}
.wrapper-content__item{
  display: flex;
  flex-direction: column;
  gap: 25px 0;
}
.content__item__name{
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0 5px;
  padding: 10px 15px;
  border-radius: 25px;
  background: #FFF;
}
.content__item__name > span:first-child{
  color: #121417;
  font-feature-settings: 'dlig' on;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 105%;
}
.content__item__name > span:last-child {
  color: rgba(18, 20, 23, 0.50);
  font-feature-settings: 'dlig' on;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 161%;
}
.container-content__item__param{
  display: flex;
  flex-direction: column;
  gap: 12px 0;
}
.content__item__param{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 2px solid #ffffff;
  color: #1E1E1E;
  font-feature-settings: 'dlig' on;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
}
.content__item__param__value{
  font-weight: 500;
}
.automatic {
  color: #1C88F5;
}
.manual {
  color: #6EDC5F;
}
.emergency {
  color: #F65421;
}
.wrapper-power{
  display: flex;
  flex-direction: column;
  gap: 50px 0;
}

</style>