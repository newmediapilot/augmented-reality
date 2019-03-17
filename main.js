(function () {
    var app = this;
    var server = '';
    var element = document.getElementsByTagName('a-scene')[0];
    app.generateShape = function (url, index) {
        var aMarker = document.createElement('a-marker');
        aMarker.setAttribute('type', 'barcode');
        aMarker.setAttribute('value', index);
        var aImage = document.createElement('a-image');
        aImage.setAttribute('position', '0 0 0');
        aImage.setAttribute('rotation', '90 0 180');
        aImage.setAttribute('scale', '4.5 -5 5');
        aImage.setAttribute('material', 'opacity: 1;');
        aImage.setAttribute('transparent', 'true');
        aImage.setAttribute('src', url);
        aMarker.appendChild(aImage);
        return aMarker;
    };
    app.processData = function () {
        for (var i = 1; i <= 62; i++) {
            var url = [server, 'shapes/slide' + i + '.png'].join('/');
            var shape = app.generateShape(url, i);
            element.appendChild(shape);
        }
    };
    app.processData();
})();