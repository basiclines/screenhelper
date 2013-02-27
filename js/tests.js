function min_device_width() {
	var size = window.matchMedia("(min-device-width: 320px)").matches;
	for (var i = 0; i < 3000; i++ ){

		if (size) {
			var size = window.matchMedia("(min-device-width: "+i+"px)").matches
		} else {
			var matchedSize = i;
			i = 3001;
		}
	}
	return matchedSize;
}
