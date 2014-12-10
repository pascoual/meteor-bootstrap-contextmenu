Package.describe({
  summary: "A context menu extension of Twitter Bootstrap made for everyone's convenience.",
  version: "1.0.1",
  git: "https://github.com/pascoual/meteor-bootstrap-contextmenu"
});

Package.on_use(function (api) {
  api.add_files(['bootstrap-contextmenu.js'], 'client');
});
