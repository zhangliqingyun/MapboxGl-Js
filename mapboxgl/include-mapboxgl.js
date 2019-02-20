(function () {
    var r = new RegExp("(^|(.*?\\/))(include-mapboxgl\.js)(\\?|$)"),
        s = document.getElementsByTagName('script'),
        targetScript;
    for (var i = 0; i < s.length; i++) {
        var src = s[i].getAttribute('src');
        if (src) {
            var m = src.match(r);
            if (m) {
                targetScript = s[i];
                break;
            }
        }
    }

    function inputScript(url) {
        var script = '<script type="text/javascript" src="' + url + '"><' + '/script>';
        document.writeln(script);
    }

    function inputCSS(url) {
        var css = '<link rel="stylesheet" href="' + url + '">';
        document.writeln(css);
    }

    function inArray(arr, item) {
        for (i in arr) {
            if (arr[i] == item) {
                return true;
            }
        }
        return false;
    }

    function supportES6() {
        var code = "'use strict'; class Foo {}; class Bar extends Foo {};";
        try {
            (new Function(code))();
        } catch (err) {
            return false;
        }
        if (!Array.from) {
            return false;
        }
        return true;
    }

    //加载类库资源文件
    function load() {
        var includes = (targetScript.getAttribute('include') || "").split(",");
        var excludes = (targetScript.getAttribute('exclude') || "").split(",");
        if (!inArray(excludes, 'mapbox-gl')) {
            inputCSS("../../dist/css/web/mapbox-gl.css");
            inputScript("../../dist/js/web/mapbox-gl.js");
        }
        if (inArray(includes, 'draw')) {
            inputCSS("../../dist/css/web/mapbox-gl-draw.css");
            inputScript("../../dist/js/web/mapbox-gl-draw.js");
        }
        if (inArray(includes, 'compare')) {
            inputCSS("../../dist/css/web/mapbox-gl-compare.css");
            inputScript("../../dist/js/web/mapbox-gl-compare.js");
        }
        if (inArray(includes, 'mapv')) {
            inputScript("../../dist/js/web/mapv.min.js");
        }
        if (inArray(includes, 'echarts')) {
            inputScript("../../dist/js/web/echarts.min.js");
            inputScript("../../dist/js/web/EchartsLayer.js");
        }
        if (inArray(includes, 'three')) {
            inputScript("../../dist/js/web/three.min.js");
        }
        if (inArray(includes, 'deck')) {
            inputScript("../../dist/js/web/deck.gl.min.js");
        }
        if (!inArray(excludes, 'iclient9-mapboxgl')) {
            if (supportES6()) {
                inputScript("../../dist/mapboxgl/iclient9-mapboxgl-es6.min.js");
            } else {
                inputScript("../../dist/mapboxgl/iclient9-mapboxgl.min.js");
            }
        }
        if (inArray(includes, 'LoaderSupport')) {
            inputScript("../../dist/js/web/LoaderCommons.js");
            inputScript("../../dist/js/web/LoaderBuilder.js");
            inputScript("../../dist/js/web/LoaderWorkerSupport.js");
        }
        if (inArray(includes, 'OBJLoader')) {
            inputScript("../../dist/js/web/OBJLoader.js");
        }
        if (inArray(includes, 'OBJLoader2')) {
            inputScript("../../dist/js/web/OBJLoader2.js");
        }
        if (inArray(includes, 'MTLLoader')) {
            inputScript("../../dist/js/web/MTLLoader.js");
        }
        if (inArray(includes, 'GLTFLoader')) {
            inputScript("../../dist/js/web/GLTFLoader.js");
        }
        if (inArray(includes, 'proj4')) {
            inputScript("../../dist/js/web/proj4.js");
        }
        if (inArray(includes, 'echarts-gl')) {
            inputScript("../../dist/js/web/echarts-gl.min.js");
        }
        if (inArray(includes, 'shapefile')) {
            inputScript("../../dist/js/web/shapefile.js");
        }
    }

    load();
    window.isLocal = false;
    window.server = document.location.toString().match(/file:\/\//) ? "http://localhost:8090" : document.location.protocol + "//" + document.location.host;
})();