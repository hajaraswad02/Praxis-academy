	var plat =  /^[a-zA-z]{1,2}\s?\d{1,4}\s?[a-zA-Z]{1,3}$/;
	
	function platnomor (platinput){
		var right = plat.test(platinput.value);
		if(right) {
			document.write('Plat Anda Benar 🙂');
		}
		else {
			document.write('Plat Anda Salah 🙂');
		}

	}