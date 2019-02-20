/* Copyright© 2000 - 2018 SuperMap Software Co.Ltd. All rights reserved.*/
(function () {
    var r = new RegExp("(^|(.*?\\/))(include-web\.js)(\\?|$)"),
        s = document.getElementsByTagName('script'), targetScript;
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

    //加载类库资源文件
    function load() {
        var includes = (targetScript.getAttribute('include') || "").split(",");
        var excludes = (targetScript.getAttribute('exclude') || "").split(",");

        var jQueryInclude = false;
        if (!inArray(excludes, 'example-i18n')) {
            inputScript("../../dist/js/ajax/jquery.min.js");

            inputScript("../../dist/js/ajax/i18next.min.js");
            inputScript("../../dist/js/ajax/jquery-i18next.min.js");

            inputScript("../../dist/js/utils.js");
            inputScript("../../dist/js/localization.js");             
            document.writeln("<script>Localization.initializeI18N('../', function () {Localization.localize();Localization.initGlobal();}); </script>");
            jQueryInclude = true;
        }
        if (inArray(includes, 'jquery') && !jQueryInclude) {
            inputScript("../../dist/js/ajax/jquery.min.js");
        }

        if (inArray(includes, 'bootstrap')) {
            inputScript("../../dist/js/ajax/jquery.min.js");
            inputCSS("../../dist/css/ajax/bootstrap.min.css");
            inputScript("../../dist/js/ajax/bootstrap.min.js");
        }
        if (inArray(includes, 'bootstrap-css')) {
            inputCSS("../../dist/css/ajax/bootstrap.min.css")
        }

        if (inArray(includes, 'bootstrap-js')) {
            inputScript("../../dist/js/ajax/bootstrap.min.js");
        }

        if (inArray(includes, 'jquery-ui')) {
            inputCSS("../../dist/css/ajax/jquery-ui.css");
            inputScript("../../dist/js/ajax/jquery-ui.min.js");
        }

        if (inArray(includes, 'template')) {
            inputScript("../../dist/js/ajax/template-web.js");
        }
        if (inArray(includes, 'randomcolor')) {
            inputScript("../../dist/js/ajax/randomColor.min.js");
        }
        if (inArray(includes, 'papaparse')) {
            inputScript("../../dist/js/ajax/papaparse.min.js");
        }
        if (inArray(includes, 'moment')) {
            inputScript("../../dist/js/ajax/moment.min.js");
            inputScript("../../dist/js/ajax/zh-cn.js");
        }
        if (inArray(includes, 'bootstrap-datetimepicker')) {
            inputCSS("../../dist/css/ajax/bootstrap-datetimepicker.min.css");
            inputScript("../../dist/js/ajax/bootstrap-datetimepicker.min.js");
        }
        if (inArray(includes, 'bootstrap-select')) {
            inputCSS("../../dist/css/ajax/bootstrap-select.min.css");
            inputScript("../../dist/js/ajax/bootstrap-select.min.js");
        }
        if (inArray(includes, 'geohash')) {
            inputScript("../../dist/js/ajax/geohash.js");
        }
        if (inArray(includes, 'dat-gui')) {
            inputScript("../../dist/js/ajax/dat.gui.min.js");    
            datGuiI18N();
        }
        if (inArray(includes, 'admin-lte')) {
            inputCSS("../../dist/css/ajax/AdminLTE.min.css");
            inputCSS("../../dist/css/ajax/skin-blue.min.css");
            inputCSS("../../dist/css/ajax/font-awesome.min.css");
            inputScript("../../dist/js/ajax/app.min.js");
        }
        if (inArray(includes, 'jquery.scrollto')) {
            inputScript("../../dist/js/ajax/jquery.scrollTo.min.js");
        }
        if (inArray(includes, 'ace')) {
            inputScript("../../dist/js/ajax/ace.js");
        }
        if (inArray(includes, 'widgets.alert')) {
            inputScript("../../dist/js/widgets.js");
        }

        if (inArray(includes, 'widgets')) {
            inputCSS("../../dist/css/ajax/css-loader.css");
            inputScript("../../dist/js/widgets.js");
        }
        if (inArray(includes, 'zTree')) {
            inputCSS("../../dist/css/ajax/zTreeStyle.min.css");
            inputScript("../../dist/js/ajax/jquery.ztree.all.min.js");
        }
        if (inArray(includes, 'jquery-scontextMenu')) {
            inputCSS("../../dist/css/ajax/jquery.contextMenu.min.css");
            inputScript("../../dist/js/ajax/jquery.contextMenu.min.js");
        }
        if (inArray(includes, 'colorpicker')) {
            inputScript("../../dist/js/ajax/jquery.js");
            inputScript("../../dist/js/ajax/jquery.colorpicker.js");
        }
        if (inArray(includes, 'fileupLoad')) {
            inputScript("../../dist/js/ajax/jquery.js");
            inputScript("../../dist/js/ajax/fileupLoad.js");
        }
        if (inArray(includes, 'sticklr')) {
            inputCSS("../../dist/css/ajax/jquery-sticklr.css");
            inputCSS("../../dist/css/ajax/icon.css");
        }
        if (inArray(includes, 'responsive')) {
            inputCSS("../../dist/css/ajax/bootstrap-responsive.min.css");
        }
        if (inArray(includes, 'lazyload')) {
            inputScript("../../dist/js/ajax/jquery.lazyload.min.js");
        }
        if (inArray(includes, 'i18n')) {
            inputScript("../../dist/js/ajax/i18next.min.js");
            inputScript("../../dist/js/ajax/jquery-i18next.min.js");
        }
        if (inArray(includes, 'react')) {
            inputScript("../../dist/js/ajax/react.production.min.js");
            inputScript("../../dist/js/ajax/react-dom.production.min.js");
            inputScript("../../dist/js/ajax/babel.min.js");
        }
        if (inArray(includes, 'vue')) {
            inputScript("../../dist/js/ajax/vue.min.js");
        }
        if (inArray(includes, 'ionRangeSlider')) {
            inputCSS("../../dist/css/ajax/ion.rangeSlider.css");
            inputCSS("../../dist/css/ajax/normalize.css");
            inputCSS("../../dist/css/ajax/ion.rangeSlider.skinHTML5.css");
            inputScript("../../dist/js/ajax/ion.rangeSlider.min.js");
        }
        if (inArray(includes, 'plottingPanel')) {
            inputScript("../../dist/js/ajax/jquery.ztree.core.js");
            inputCSS("../../dist/css/ajax/zTreeStyle.css");
            inputScript("../../dist/js/ajax/jquery.easyui.min.js");
            inputCSS("../../dist/css/ajax/easyui.css");
            inputScript("../../dist/js/ajax/colorpicker.js");
            inputCSS("../../dist/css/ajax/colorpicker.css");
        }
    }    

    function datGuiI18N() {
        document.writeln("<script>function registerEventListener(evt,fn){" +
            "if(window.attachEvent){window.attachEvent('on'+evt,fn);}" +
            "else{window.addEventListener(evt,fn,false);}" +
            "}</script>");
        document.writeln("<script>registerEventListener('load',function() { " +
            "dat.GUI.TEXT_CLOSED=resources.text_close;dat.GUI.TEXT_OPEN=resources.text_open;" +
            "})</script>")
    }       

    load();
    window.isLocal = false;
    window.server = document.location.toString().match(/file:\/\//) ? "http://localhost:8090" : document.location.protocol + "//" + document.location.host;
    window.version = "9.1.0";
    window.preRelease = "";
})();
