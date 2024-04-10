<script setup>
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76, 37.64], // Координаты центра карты
    zoom: 10 // Уровень масштабирования карты
  });

  // Массив данных с контентом для балунов
  const balloonContent = [
    '<div style="width: 200px;">Содержимое вашего div</div>',
    '<div style="width: 200px;">Другое содержимое вашего div</div>',
    '<div style="width: 200px;">Еще одно содержимое вашего div</div>'
    // Добавьте свои данные сюда
  ];

  // Функция для добавления балуна с контентом к точке на карте
  function addBalloon(lat, lon, content) {
    var point = new ymaps.Placemark(
        [lat, lon],
        {},
        {
          balloonContent: content // Ваш контент для балуна
        }
    );

    // Обработчик события для отображения балуна при клике на метку
    point.events.add('click', function (e) {
      myMap.balloon.open([lat, lon], content);
    });

    myMap.geoObjects.add(point);
  }

  // Массив данных с координатами точек
  const points = [
    {lat: 55.76, lon: 37.64},
    {lat: 55.75, lon: 37.65},
    {lat: 55.77, lon: 37.63}
    // Добавьте свои координаты сюда
  ];

  // Добавление всех балунов с контентом из массива на карту
  points.forEach((point, index) => {
    addBalloon(point.lat, point.lon, balloonContent[index]);
  });
}
</script>

<template>
  <div id="map" style="width: 600px; height: 400px;"></div>
</template>

<style scoped>
#map {
  width: 600px;
  height: 400px;
}
</style>
