ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
        center: [65, 100],
        zoom: 0,
        type: null,
        controls: ['zoomControl'],
       
    },{
        restrictMapArea: [[10, 10], [85,-160]],
        searchControlProvider: 'yandex#search'
    })

    ////////////////////////////////////////////////////////////////////////////////////////////
    
    map.controls.get('zoomControl').options.set({size: 'small'});
    // Добавим заливку цветом.
    let pane = new ymaps.pane.StaticPane(map, {
        zIndex: 100, css: {
            width: '100%', height: '100%', backgroundColor: '#f7f7f7'
        }
    });
    map.panes.append('white', pane);
    // Зададим цвета федеральных округов.
    let districtColors = {
        cfo: '#ffff6f',
        szfo: '#54cbba',
        yfo: '#f9768e',
        skfo: '#9a5597',
        pfo: '#30cb05',
        urfo: '#bac1cc',
        sfo: '#16acdb',
        dfo: '#fbc520'
    };
    // Зададим подсказки при наведении на федеральный округ.
    let districtsHints = {
        cfo: 'ЦФО',
        szfo: 'СЗФО',
        yfo: 'ЮФО',
        skfo: 'СКФО',
        pfo: 'ПФО',
        urfo: 'УрФО',
        sfo: 'СФО',
        dfo: 'ДФО'
    };
    // Создадим балун.
    let districtBalloon = new ymaps.Balloon(map);
    districtBalloon.options.setParent(map.options);

    let crimes = {
        cfo: '',
        szfo: '',
        yfo: '',
        skfo: '',
        pfo: '',
        urfo: '',
        sfo: '',
        dfo: ''

    };

    // data.forEach(
    //     element => console.log(element)
    // );

    for (let i = 0; i < data.length; i++) {
        crimes[data[i].iso] = data[i].value;
    }


    // Загрузим регионы.
    ymaps.borders.load('RU', {
        lang: 'ru',
        quality: 2
    }).then(function (result) {
        // Создадим объект, в котором будут храниться коллекции с нашими регионами.
        let districtCollections = {};
        // Для каждого федерального округа создадим коллекцию.
        for (let district in districtColors) {
            districtCollections[district] = new ymaps.GeoObjectCollection(null, {
                fillColor: districtColors[district],
                strokeColor: districtColors[district],
                strokeOpacity: 0.3,
                fillOpacity: 0.3,
                hintCloseTimeout: 0,
                hintOpenTimeout: 0
            });
            // Создадим свойство в коллекции, которое позже наполним названиями субъектов РФ.
            districtCollections[district].properties.districts = [];
        }

        result.features.forEach(function (feature) {
            let iso = feature.properties.iso3166;
            let name = feature.properties.name;
            let district = districtByIso[iso];
            // Для каждого субъекта РФ зададим подсказку с названием федерального округа, которому он принадлежит.
            feature.properties.hintContent = districtsHints[district];
            // Добавим субъект РФ в соответствующую коллекцию.
            districtCollections[district].add(new ymaps.GeoObject(feature));
            // Добавим имя субъекта РФ в массив.
            districtCollections[district].properties.districts.push(name);

        });
        // Создадим переменную, в которую будем сохранять выделенный в данный момент федеральный округ.
        let highlightedDistrict;
        for (let districtName in districtCollections) {
            // Добавим коллекцию на карту.
            map.geoObjects.add(districtCollections[districtName]);
            // При наведении курсора мыши будем выделять федеральный округ.
            districtCollections[districtName].events.add('mouseenter', function (event) {
                let district = event.get('target').getParent();
                district.options.set({fillOpacity: 1});
            });
            // При выводе курсора за пределы объекта вернем опции по умолчанию.
            districtCollections[districtName].events.add('mouseleave', function (event) {
                let district = event.get('target').getParent();
                if (district !== highlightedDistrict) {
                    district.options.set({fillOpacity: 0.3});
                }
            });

            

            

            // Подпишемся на событие клика.
            districtCollections[districtName].events.add('click', function (event) {
                let target = event.get('target');
                let district = target.getParent();
                // Если на карте выделен федеральный округ, то мы снимаем с него выделение.
                if (highlightedDistrict) {
                    highlightedDistrict.options.set({fillOpacity: 0.3})
                }
                // Откроем балун в точке клика. В балуне будут перечислены регионы того федерального округа,
                // по которому кликнул пользователь.
                // district.properties.districts.join('<br>')
                districtBalloon.open(event.get('coords'), "Всего преступлений: " + crimes[districtName]);
                
                // Выделим федеральный округ.
                district.options.set({fillOpacity: 1});
                // Сохраним ссылку на выделенный федеральный округ.
                highlightedDistrict = district;
            });
        }
    })
}