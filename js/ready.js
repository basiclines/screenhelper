// Define global key elements  and initialize UI listeners
document.addEventListener("DOMContentLoaded", function () {

	// Main wrappers
	dom = document.body;
	dom.sidebar = document.getElementById("sidebar");
	dom.main = document.getElementById("main");
	dom.views = document.getElementById("views");

	// Auto views objects generator
	// I.E: dom.view.list
	dom.view = (function() {
		var view = dom.views.querySelectorAll("[data-viewport]");
		var obj = {};
		for (var i = 0; i < view.length; i++) {
			obj[view[i].id] = view[i]
		}
		return obj;
	})();

	var printers = dom.view.features.querySelectorAll("[data-exec]");
	for ( var i = 0; i < printers.length; i++ ) {
		printers[i].querySelector("strong").innerHTML = eval(printers[i].dataset.exec);
	}



});
