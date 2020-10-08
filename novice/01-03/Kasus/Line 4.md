# Loop dan iterasi
loop merupakan salah fitur yang terdapat di java script yang menawarkan pengulangan berungkali 
Anda dapat menganggap loop sebagai versi game yang terkomputerisasi di mana Anda memberi tahu seseorang untuk mengambil X langkah ke satu arah, lalu Y langkah ke arah lain. Misalnya, gagasan "Pergi lima langkah ke timur" dapat diekspresikan seperti ini sebagai lingkaran:

for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}

Ada banyak jenis pengulangan yang berbeda, tetapi semuanya pada dasarnya melakukan hal yang sama: mengulangi tindakan beberapa kali. (Perhatikan bahwa mungkin saja angkanya bisa nol!)

Berbagai mekanisme perulangan menawarkan cara berbeda untuk menentukan titik awal dan akhir perulangan. Ada berbagai situasi yang lebih mudah dilayani oleh satu jenis loop di atas yang lain.

# for pernyataan
Sebuah formengulangi loop sampai kondisi mengevaluasi ditentukan untuk false. forLoop JavaScript mirip dengan forloop Java dan C.
Sebuah forpernyataan terlihat sebagai berikut:
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement
Ketika forloop dijalankan, hal berikut terjadi:

Ekspresi inisialisasi initialExpression, jika ada, dijalankan. Ekspresi ini biasanya menginisialisasi satu atau lebih penghitung pengulangan, tetapi sintaksis memungkinkan ekspresi dengan tingkat kerumitan apa pun. Ekspresi ini juga dapat mendeklarasikan variabel.
The conditionExpressionekspresi dievaluasi. Jika nilai conditionExpressionbenar, pernyataan loop dieksekusi. Jika nilai conditionsalah, forloop berhenti. (Jika conditionekspresi dihilangkan seluruhnya, kondisinya dianggap benar.)
The statementmengeksekusi. Untuk menjalankan beberapa pernyataan, gunakan pernyataan blok ( { ... }) untuk mengelompokkan pernyataan tersebut.
Jika ada, ekspresi pembaruan incrementExpressiondijalankan.
Kontrol kembali ke Langkah 2.
Contoh
Dalam contoh di bawah ini, fungsi berisi forpernyataan yang menghitung jumlah opsi yang dipilih dalam daftar gulir ( <select>elemen yang memungkinkan banyak pilihan). The forpernyataan menyatakan variabel idan menginisialisasi ke 0. Ia memeriksa yang ikurang dari jumlah opsi dalam <select>elemen, melakukan ifpernyataan berikutnya , dan bertambah isetelah setiap melewati loop.

<form name="selectForm">
  <p>
    <label for="musicTypes">Choose some music types, then click the button below:</label>
    <select id="musicTypes" name="musicTypes" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classical</option>
      <option>Opera</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="How many are selected?" /></p>
</form>

<script>
function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  alert('Number of options selected: ' + howMany(document.selectForm.musicTypes));
});
</script>

# do...while pernyataan
The do...whilePernyataan mengulangi sampai kondisi mengevaluasi ditetapkan ke false.
Sebuah do...whilepernyataan terlihat sebagai berikut:
do
  statement
while (condition);
statementselalu dijalankan sekali sebelum kondisi dicentang. (Untuk menjalankan beberapa pernyataan, gunakan pernyataan blok ( { ... }) untuk mengelompokkan pernyataan itu.)

Jika conditionadalah true, pernyataan mengeksekusi lagi. Di akhir setiap eksekusi, kondisinya diperiksa. Ketika kondisinya false, eksekusi berhenti, dan kontrol diteruskan ke pernyataan berikut do...while.