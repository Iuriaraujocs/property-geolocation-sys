(function () {

    window.geolocationSys = window.geolocationSys || {};
    window.geolocationSys.module = window.geolocationSys.module || {};

    function registerModule(name, moduleObj) {
        if (window.geolocationSys.module[name]) {
            console.warn("Module '" + name + "' already exist");
            return;
        }
        window.geolocationSys.module[name] = moduleObj;
    }

    function getModule(name) {
        return window.geolocationSys.module[name] || null;
    }

    function getModules(names) {
        var map = {};
        var i;

        for (i = 0; i < names.length; i++) {
            map[names[i]] = window.geolocationSys.module[names[i]] || null;
        }

        return map;
    }

    window.geolocationSys.registerModule = registerModule;
    window.geolocationSys.getModule = getModule;
    window.geolocationSys.getModules = getModules;

})();
