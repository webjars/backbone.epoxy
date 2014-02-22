requirejs.config({
    paths: { "backbone.epoxy": webjars.path("backbone.epoxy", "backbone.epoxy.js") },
    shim: { "backbone.epoxy": [ "jquery", "backbonejs" ] }
});
