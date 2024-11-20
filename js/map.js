ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map("map", {
        center: [48.872185, 2.354224],
        zoom: 19
      });

    myPlacemark1 = new ymaps.Placemark([48.872185, 2.354224], {
      hintContent: ' дю Фобур Сен Дени  54 '

    }, {

      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/subtract.svg',
      iconImageSize: [28, 40],
      iconImageOffset: [0, 0],
      iconContentOffset: [15, 15],
    })

  myMap.geoObjects
    .add(myPlacemark1)
    }



