Package.describe({
    summary: "Islamic prayer times smart package"
});

Package.on_use(function (api) {
    api.use("client");
    api.add_files("praytimes.js", "client");
});
