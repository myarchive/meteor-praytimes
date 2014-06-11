Package.describe({
    summary: "Islamic prayer times smart package"
});

Package.on_use(function (api) {
    api.use();
    api.add_files("praytimes.js");
});
