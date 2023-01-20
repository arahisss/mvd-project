ymaps.ready(init);



function init() {
    let myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота»..
        center: [63.56156587483154, 104.12911707273814],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 3
    }, {
        searchControlProvider: 'yandex#search'
    });

    // Создаем многоугольник, используя класс GeoObject.
    let myGeoObject = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
                // Координаты вершин внешнего контура.
                [
                    [52.5873886111,	54.5498665349],
                    [52.6289278289,	54.5378600553],
                    [52.6312920311,	54.5383468383],
                    [52.6429048199,	54.5402641175],
                    [52.654618141, 54.5414177789],
                    [52.6663818359,	54.5418028824],
                    [52.6733709239,	54.5416670418],
                    [52.6947561168,	54.5408354377],
                    [52.6995307238,	54.5405861749],
                    [52.7112440448,	54.5394325135],
                    [52.7118237993,	54.5393552282],
                    [52.7571042558,	54.5332440832],
                    [52.7619114749,	54.5325290332],
                    [52.7721882693,	54.5308581958],
                    [52.7784140846,	54.5297332519],
                    [52.7872923375,	54.5277325001],
                    [52.7987006447,	54.5258422607],
                    [52.8101631736,	54.5231695738],
                    [52.8123061792,	54.5225811438],
                    [52.8300750391,	54.5175838904],
                    [52.8391952182,	54.5147556706],
                    [52.8470890389,	54.5118686832],
                    [52.8684061414,	54.5035027053],
                    [52.8685991531,	54.5034485295],
                    [52.8778075839,	54.5005955144],
                    [52.8860291637,	54.4975795261],
                    [52.8905487061,	54.4976363175],
                    [52.8997830621,	54.4973991121],
                    [52.9106168024,	54.4968421663]
    
                ],
                // Координаты вершин внутреннего контура.
                
            ],
            // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
            fillRule: "nonZero"
        },
        // Описываем свойства геообъекта.
        properties:{
            // Содержимое балуна.
            balloonContent: "Многоугольник"
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF00',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 5,
        // Стиль обводки.
        strokeStyle: 'shortdash'
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myGeoObject);

    // // Создаем многоугольник, используя вспомогательный класс Polygon.
    // let myPolygon = new ymaps.Polygon([
    //     // Указываем координаты вершин многоугольника.
    //     // Координаты вершин внешнего контура.
    //     [
    //         [55.75, 37.50],
    //         [55.80, 37.60],
    //         [55.75, 37.70],
    //         [55.70, 37.70],
    //         [55.70, 37.50]
    //     ],
    //     // Координаты вершин внутреннего контура.
    //     [
    //         [55.75, 37.52],
    //         [55.75, 37.68],
    //         [55.65, 37.60]
    //     ]
    // ], {
    //     // Описываем свойства геообъекта.
    //     // Содержимое балуна.
    //     hintContent: "Многоугольник"
    // }, {
    //     // Задаем опции геообъекта.
    //     // Цвет заливки.
    //     fillColor: '#00FF0088',
    //     // Ширина обводки.
    //     strokeWidth: 5
    // });

    // // Добавляем многоугольник на карту.
    // myMap.geoObjects.add(myPolygon);
}