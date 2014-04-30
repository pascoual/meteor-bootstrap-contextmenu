Package.describe({
  summary: "A context menu extension of Twitter Bootstrap made for everyone's convenience."
});

Package.on_use(function (api) {
  api.add_files(['bootstrap-contextmenu.js'], 'client');
});