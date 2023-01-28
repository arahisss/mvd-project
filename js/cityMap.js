ymaps.ready(init);

function init() {

    var map = new ymaps.Map('map', {
        center: [68, 100],
        zoom: 3,
        type: null,
        controls: ['zoomControl']
    },{
        // restrictMapArea: [[10, 10], [85,-160]]
    });
    map.controls.get('zoomControl').options.set({size: 'small'});

    // Добавим заливку цветом.
    var pane = new ymaps.pane.StaticPane(map, {
        zIndex: 100,
        css: {
            width: '100%', height: '100%', backgroundColor: '#212529'
        }
    });
    map.panes.append('background', pane);

    for (let i = 0; i < data.length; i++) {
        if (cityData[data[i].iso]) {
            cityData[data[i].iso]["crimes"] = Number(data[i].value);
        }
      
    }

    console.log(cityData);

    // Каждый регион мы будем относить к одной из 4-x групп
    var crimes = [10000, 25000, 40000, 130000];
    // Зададим изображения, которые будут использоваться для этих групп.
    var images = [
        '#FFA07A',
        '#FF8C00',
        '#FF6347',
        '#FF0000'
    ];
    var objectManager = new ymaps.ObjectManager();
    // Загрузим регионы.
    ymaps.borders.load('RU', {
        lang: 'ru',
        quality: 2
    }).then(function (result) {
        // Подготовим данные для objectManager.
        result.features.forEach(function (feature) {
            // Добавим iso код региона в качестве feature.id для objectManager.
            var iso = feature.properties.iso3166;
            feature.id = iso;
            // Получим процент населения, проживающего на данной территории.
            // Данные лежат в файле data.js.
            var crime = cityData[iso].crimes;
            // Зададим изображение в зависимости от количества проживающего населения.
            for (var i = 0; i < crimes.length; i++) {
                if (crime < crimes[i]) {
                    feature.options = {
                        // fillImageHref: images[i],
                        fillMethod: 'tile',
                        fillColor: images[i]
                    };
                    break;
                }
            }
        });
        // Добавим регионы на карту.
        objectManager.add(result);
        map.geoObjects.add(objectManager);
    })

    // Создаем собственный класс.
    CustomControlClass = function (options) {
        CustomControlClass.superclass.constructor.call(this, options);
        this._$content = null;
        this._geocoderDeferred = null;
    };
    // И наследуем его от collection.Item.
    ymaps.util.augment(CustomControlClass, ymaps.collection.Item, {
    onAddToMap: function (map) {
        CustomControlClass.superclass.onAddToMap.call(this, map);
        this._lastCenter = null;
        this.getParent().getChildElement(this).then(this._onGetChildElement, this);
    },

    _onGetChildElement: function (parentDomContainer) {
        // Создаем HTML-элемент с текстом.
        this._$content = $('<div class="customControl"><span id="color1">< 10000</span>' +
        '<span id="color2">< 25000</span>' +
        '<span id="color3">< 40000</span>' +
        '<span id="color4">> 40000</span>' +

        '</div>').appendTo(parentDomContainer);
       
    },

    });

    var customControl = new CustomControlClass();
    map.controls.add(customControl, {
        float: 'none',
        position: {
            top: 10,
            left: 10
        }
    });
}