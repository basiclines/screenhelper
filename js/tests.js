function min_device_width() {
	var match = window.matchMedia("(min-device-width: 320px)").matches;
	var size = 320;

	while (match) {
		size++;
		match = window.matchMedia("(min-device-width: "+size+"px)").matches
	}
	return size - 1;
}

function min_device_pixel_ratio() {
	var match = window.matchMedia("(min--moz-device-pixel-ratio: 1)").matches;
	var size = 1;

	while (match) {
		size++;
		match = window.matchMedia("min--moz-device-pixel-ratio: "+size+"px)").matches
	}
	return size - 1;
}

function min_resolution() {
	var match = window.matchMedia("(min-resolution: 96)").matches;
	var size = 96;

	while (match) {
		size++;
		match = window.matchMedia("min-resolution: "+size+"px)").matches
	}
	return size;
}
