var page = tabris.create("Page", {
  title: "Developer Console",
  topLevel: true
});

var logTextInput = tabris.create("TextInput", {
  layoutData: {left: 10, top: 20, right: 10},
  text: "Message",
  message: "Log message"
}).appendTo(page);

["debug", "log", "info", "warn", "error"].forEach(function(method) {
  tabris.create("Button", {
    layoutData: {left: 10, right: 10, top: "prev() 10"},
    text: method
  }).on("select", function() {
    console[method](logTextInput.get("text"));
  }).appendTo(page);
});

page.open();
