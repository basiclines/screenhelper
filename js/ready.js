// Define global key elements  and initialize UI listeners
document.addEventListener("DOMContentLoaded", function () {

	// Main wrappers
	dom = document.body;
	dom.main = document.getElementById("main");
	dom.views = document.getElementById("views");

	// Triggers
	dom.toggleViewport = dom.querySelector("[data-trigger=toggle-viewport]")
	dom.toggleSidebar = dom.querySelector("[data-trigger=toggle-sidebar]")


	// Auto views objects generator
	// I.E: dom.view.features
	dom.view = (function() {
		var view = dom.views.querySelectorAll("[data-viewport]");
		var obj = {};
		for (var i = 0; i < view.length; i++) {
			obj[view[i].id] = view[i]
		}
		return obj;
	})();

	// Print screen information
	var printers = dom.view.features.querySelectorAll("[data-exec]");
	for ( var i = 0; i < printers.length; i++ ) {
		printers[i].querySelector("strong").innerHTML = eval(printers[i].dataset.exec);
	}

	// Toggle Sidebar options
	dom.toggleSidebar.addEventListener("click", function(e) {
		if ( dom.dataset.sidebar == "on" ) {
			dom.dataset.sidebar = "";
		} else {
			dom.dataset.sidebar = "on";
		}
		e.preventDefault();
	});

	// Toggle viewport metatag
	dom.toggleViewport.addEventListener("change", function(e){
		toggleViewport();
	});

	// Check on ready
	if ( localStorage.getItem("viewport") == "true" ) {
		dom.toggleViewport.checked = true;
	} else {
		dom.toggleViewport.checked = false;
	}

});
