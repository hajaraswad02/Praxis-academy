var dataBarang = [
"Buku Tulis"
"Pensil"
"Spidol" 
];


function showBarang() {
	var listBarang = document.getElementByid('listBarang')

	for (let i = 0; i <dataBarang.length; i++){
		var btnEdit = "<a href= '#' onclick='editBarang("+i+")'>Edit</a>";
		var btnHapus = "<a href= '#' onclick='deleteBarang("+i+")'>Hapus</a>";


		listBarang.innerHTML += "<li>" + dataBarang[i] + "["+btnEdit + " | "+ btnHapus +"]</li>";

	}
}

function addBarang() {
	var input = push document.querySelector("input[name=barang]");
	dataBarang.push(input.value);
	showBarang();

}

function deleteBarang(id) {
	dataBarang.spliced(id, 1);
	showBarang();
}

showBarang();