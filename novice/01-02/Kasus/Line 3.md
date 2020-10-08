# Ekspresi dan pernyataan
Di Bab 1 , kami membuat nilai dan menerapkan operator padanya untuk mendapatkan nilai baru. Menciptakan nilai seperti ini adalah substansi utama dari setiap program JavaScript. Tetapi substansi itu harus dibingkai dalam struktur yang lebih besar agar bisa bermanfaat. Jadi itulah yang akan kita bahas selanjutnya.
Fragmen kode yang menghasilkan nilai disebut ekspresi . Setiap nilai yang ditulis secara harfiah (seperti 22atau "psychoanalysis") adalah ungkapan. Ekspresi di antara tanda kurung juga merupakan ekspresi, seperti halnya operator biner yang diterapkan ke dua ekspresi atau operator unary yang diterapkan ke satu.
Ini menunjukkan bagian dari keindahan antarmuka berbasis bahasa. Ekspresi dapat berisi ekspresi lain dengan cara yang mirip dengan bagaimana sub-kalimat dalam bahasa manusia disarangkan — sebuah sub-kalimat dapat berisi sub-kalimatnya sendiri, dan seterusnya. Ini memungkinkan kita untuk membuat ekspresi yang mendeskripsikan komputasi kompleks yang sewenang-wenang.
Jika ekspresi sesuai dengan fragmen kalimat, pernyataan JavaScript terkait dengan kalimat lengkap. Program adalah daftar pernyataan.
Jenis pernyataan yang paling sederhana adalah ekspresi dengan titik koma setelahnya. Ini adalah program:
edit & jalankan kode dengan mengkliknya
1 ;
! salah ;
Ini adalah program yang tidak berguna. Sebuah ekspresi bisa menjadi isi hanya untuk menghasilkan nilai, yang kemudian bisa digunakan oleh kode yang melampirkan. Sebuah pernyataan berdiri sendiri, jadi itu berarti sesuatu hanya jika itu mempengaruhi dunia. Itu bisa menampilkan sesuatu di layar — yang dianggap mengubah dunia — atau bisa mengubah keadaan internal mesin dengan cara yang akan memengaruhi pernyataan yang muncul setelahnya. Perubahan ini disebut efek samping . Laporan pada contoh sebelumnya hanya menghasilkan nilai-nilai 1dan truedan kemudian segera membuangnya. Ini sama sekali tidak meninggalkan kesan di dunia. Ketika Anda menjalankan program ini, tidak ada yang terlihat terjadi.
Dalam beberapa kasus, JavaScript memungkinkan Anda menghilangkan titik koma di akhir pernyataan. Dalam kasus lain, itu harus ada, atau baris berikutnya akan diperlakukan sebagai bagian dari pernyataan yang sama. Aturan tentang kapan itu dapat dihilangkan dengan aman agak rumit dan rawan kesalahan. Jadi dalam buku ini, setiap pernyataan yang membutuhkan titik koma akan selalu mendapatkan satu. Saya sarankan Anda melakukan hal yang sama, setidaknya sampai Anda mempelajari lebih lanjut tentang seluk-beluk titik koma yang hilang.
# Binding
Bagaimana sebuah program mempertahankan status internal? Bagaimana cara mengingat sesuatu? Kita telah melihat bagaimana menghasilkan nilai-nilai baru dari nilai-nilai lama, tetapi ini tidak mengubah nilai-nilai lama, dan nilai-nilai baru harus segera digunakan atau akan hilang lagi. Untuk menangkap dan menahan nilai, JavaScript menyediakan sesuatu yang disebut pengikatan , atau variabel :
biarkan  tertangkap  =  5  *  5 ;
Itu adalah pernyataan jenis kedua. Kata khusus ( kata kunci ) letmenunjukkan bahwa kalimat ini akan mendefinisikan pengikatan. Ini diikuti dengan nama binding dan, jika kita ingin segera memberinya nilai, dengan =operator dan ekspresi.
Pernyataan sebelumnya membuat pengikatan yang disebut caughtdan menggunakannya untuk memegang bilangan yang dihasilkan dengan mengalikan 5 dengan 5.
Setelah penjilidan didefinisikan, namanya dapat digunakan sebagai ekspresi. Nilai ekspresi semacam itu adalah nilai yang saat ini dimiliki binding. Berikut contohnya:
biarkan  sepuluh  =  10 ;
konsol . log ( sepuluh  *  sepuluh );
// → 100
Ketika suatu ikatan menunjuk pada suatu nilai, itu tidak berarti terikat pada nilai itu selamanya. The =operator dapat digunakan setiap saat pada binding yang ada untuk memutuskan mereka dari nilai mereka saat ini dan memiliki titik mereka ke yang baru.
biarkan  suasana hati  =  "ringan" ;
konsol . log ( suasana hati );
// → 
suasana  terang =  "gelap" ;
konsol . log ( suasana hati );
// → gelap
Anda harus membayangkan binding sebagai tentakel, bukan kotak. Mereka tidak mengandung nilai; mereka memahaminya — dua ikatan dapat merujuk pada nilai yang sama. Program hanya dapat mengakses nilai yang masih dirujuknya. Ketika Anda perlu mengingat sesuatu, Anda menumbuhkan tentakel untuk dipegang atau Anda memasang kembali salah satu tentakel Anda yang ada padanya.
Mari kita lihat contoh lainnya. Untuk mengingat jumlah dolar yang masih dimiliki Luigi, Anda membuat penjilidan. Dan kemudian ketika dia membayar kembali $ 35, Anda memberikan nilai baru yang mengikat ini.
biarkan  luigisDebt  =  140 ;
luigisDebt  =  luigisDebt  -  35 ;
konsol . log ( luigisDebt );
// → 105
Saat Anda menentukan penjilidan tanpa memberinya nilai, tentakel tidak memiliki apa pun untuk dipegang, sehingga berakhir di udara tipis. Jika Anda meminta nilai pengikatan kosong, Anda akan mendapatkan nilainya undefined.
letPernyataan tunggal dapat mendefinisikan banyak ikatan. Definisi harus dipisahkan dengan koma.
biarkan  satu  =  1 , dua  =  2 ;
konsol . log ( satu  +  dua );
// → 3
Kata-kata vardan constjuga dapat digunakan untuk membuat binding, dengan cara yang mirip dengan let.
var  name  =  "Ayda" ;
const  salam  =  "Halo" ;
konsol . log ( salam  +  nama );
// → Halo Ayda
Yang pertama, var(kependekan dari "variabel"), adalah cara pengikatan dideklarasikan di JavaScript sebelum 2015. Saya akan kembali ke perbedaan persisnya letdengan bab berikutnya . Untuk saat ini, ingatlah bahwa sebagian besar melakukan hal yang sama, tetapi kami jarang menggunakannya dalam buku ini karena memiliki beberapa properti yang membingungkan.
Kata itu constberarti konstan . Ini mendefinisikan pengikatan konstan, yang menunjuk pada nilai yang sama selama ia hidup. Ini berguna untuk binding yang memberi nama pada suatu nilai sehingga Anda dapat dengan mudah merujuknya nanti.
# Nama yang mengikat
Nama yang mengikat bisa berupa kata apa saja. Digit dapat menjadi bagian dari nama yang mengikat — misalnya catch22adalah nama yang valid — tetapi nama tidak boleh dimulai dengan digit. Nama yang mengikat dapat menyertakan tanda dolar ( $) atau garis bawah ( _) tetapi tidak ada tanda baca atau karakter khusus lainnya.
Kata-kata dengan arti khusus, seperti let, adalah kata kunci , dan tidak boleh digunakan sebagai nama yang mengikat. Ada juga sejumlah kata yang "dicadangkan untuk digunakan" di versi JavaScript mendatang, yang juga tidak dapat digunakan sebagai nama yang mengikat. Daftar lengkap kata kunci dan kata yang dipesan agak panjang.
break case catch class const lanjutkan debugger default
delete do else enum export extends false akhirnya untuk
berfungsi jika mengimplementasikan antarmuka impor di instanceof let
paket baru swasta dilindungi publik kembali super statis
Ganti lemparan ini dengan benar coba jenis var void sementara dengan hasil
Jangan khawatir tentang menghafal daftar ini. Saat membuat pengikatan menghasilkan kesalahan sintaksis yang tidak terduga, lihat apakah Anda mencoba untuk menentukan kata khusus.
# Lingkungan
Kumpulan binding dan nilainya yang ada pada waktu tertentu disebut lingkungan . Saat program dijalankan, lingkungan ini tidak kosong. Itu selalu berisi binding yang merupakan bagian dari standar bahasa, dan sebagian besar waktu, juga memiliki binding yang menyediakan cara untuk berinteraksi dengan sistem di sekitarnya. Misalnya pada browser, terdapat fungsi untuk berinteraksi dengan website yang sedang dimuat dan untuk membaca input mouse dan keyboard.
# Fungsi
Banyak nilai yang diberikan di lingkungan default memiliki fungsi tipe . Fungsi adalah bagian dari program yang dibungkus dengan nilai. Nilai-nilai tersebut dapat diterapkan untuk menjalankan program yang dibungkus. Misalnya, di lingkungan browser, pengikatan promptmemiliki fungsi yang menampilkan kotak dialog kecil yang meminta masukan pengguna. Ini digunakan seperti ini:
prompt ( "Masukkan kode sandi" );
 
Menjalankan suatu fungsi disebut memanggil , memanggil , atau menerapkannya . Anda dapat memanggil suatu fungsi dengan meletakkan tanda kurung setelah ekspresi yang menghasilkan nilai fungsi. Biasanya Anda akan langsung menggunakan nama binding yang memegang fungsi tersebut. Nilai di antara tanda kurung diberikan ke program di dalam fungsi. Dalam contoh, promptfungsi menggunakan string yang kami berikan sebagai teks untuk ditampilkan di kotak dialog. Nilai yang diberikan ke fungsi disebut argumen . Fungsi yang berbeda mungkin memerlukan angka yang berbeda atau tipe argumen yang berbeda.
The promptFungsi tidak banyak digunakan dalam pemrograman web modern, terutama karena Anda tidak memiliki kontrol atas jalan dialog penampilan yang dihasilkan, tetapi dapat membantu dalam program mainan dan eksperimen.
# Fungsi console.log
Dalam contoh, saya biasa console.logmenampilkan nilai. Sebagian besar sistem JavaScript (termasuk semua browser web modern dan Node.js) menyediakan console.logfungsi yang menuliskan argumennya ke beberapa perangkat keluaran teks. Di browser, keluarannya berada di konsol JavaScript. Bagian dari antarmuka browser ini tersembunyi secara default, tetapi sebagian besar browser membukanya saat Anda menekan F12 atau, di Mac, PERINTAH - OPSI -I. Jika itu tidak berhasil, cari melalui menu untuk item bernama Alat Pengembang atau serupa.
Saat menjalankan contoh (atau kode Anda sendiri) di halaman buku ini, console.logkeluaran akan ditampilkan setelah contoh, bukan di konsol JavaScript browser.
misalkan  x  =  30 ;
konsol . log ( "nilai x adalah" , x );
// → nilai x adalah 30
Meskipun nama yang mengikat tidak boleh berisi karakter titik, console.logmemang memiliki satu. Ini karena console.logbukan penjilidan sederhana. Ini sebenarnya adalah ekspresi yang mengambil logproperti dari nilai yang dipegang oleh consolepengikatan. Kita akan mengetahui dengan tepat apa artinya ini di Bab 4 .
# Kembalikan nilai
Menampilkan kotak dialog atau menulis teks ke layar adalah efek samping . Banyak fungsi yang berguna karena efek samping yang dihasilkannya. Fungsi juga dapat menghasilkan nilai, dalam hal ini tidak perlu memiliki efek samping agar berguna. Misalnya, fungsi Math.maxmengambil sejumlah argumen angka dan mengembalikan yang terbesar.
konsol . log ( Math . max ( 2 , 4 ));
// → 4
Ketika suatu fungsi menghasilkan nilai, dikatakan mengembalikan nilai itu. Apa pun yang menghasilkan nilai adalah ekspresi dalam JavaScript, yang berarti pemanggilan fungsi dapat digunakan dalam ekspresi yang lebih besar. Di sini panggilan ke Math.min, yang merupakan kebalikan dari Math.max, digunakan sebagai bagian dari ekspresi plus:
konsol . log ( Math . min ( 2 , 4 ) +  100 );
// → 102
The bab berikutnya menjelaskan bagaimana menulis fungsi sendiri.
# Aliran kontrol
Ketika program Anda berisi lebih dari satu pernyataan, pernyataan dijalankan seolah-olah itu adalah sebuah cerita, dari atas ke bawah. Program contoh ini memiliki dua pernyataan. Yang pertama menanyakan nomor kepada pengguna, dan yang kedua, yang dieksekusi setelah yang pertama, menunjukkan kuadrat dari nomor itu.
let  theNumber  =  Number ( prompt ( "Pilih nomor" ));
konsol . log ( "  Bilangan Anda adalah akar kuadrat dari" + 
            theNumber  *  theNumber );
Fungsi Numbermengubah nilai menjadi angka. Kami membutuhkan konversi itu karena hasilnya promptadalah nilai string, dan kami ingin angka. Ada fungsi serupa yang dipanggil Stringdan Booleanyang mengubah nilai menjadi tipe tersebut.
Berikut adalah representasi skema yang agak sepele dari aliran kontrol garis lurus:
 
# Eksekusi bersyarat
Tidak semua program adalah jalan lurus. Kita mungkin, misalnya, ingin membuat jalan bercabang, di mana program mengambil cabang yang tepat berdasarkan situasi yang dihadapi. Ini disebut eksekusi bersyarat .
 
Eksekusi bersyarat dibuat dengan ifkata kunci dalam JavaScript. Dalam kasus sederhana, kami ingin beberapa kode dieksekusi jika, dan hanya jika, kondisi tertentu berlaku. Kita mungkin, misalnya, ingin menampilkan kuadrat dari input hanya jika inputnya sebenarnya adalah angka.
let  theNumber  =  Number ( prompt ( "Pilih nomor" ));
jika ( ! Nomor . Isnan ( thenumber )) {
   konsol . log ( "  Bilangan Anda adalah akar kuadrat dari" + 
              theNumber  *  theNumber );
}
Dengan modifikasi ini, jika Anda memasukkan "burung beo", tidak ada keluaran yang ditampilkan.
Kata ifkunci menjalankan atau melewatkan pernyataan tergantung pada nilai ekspresi Boolean. Ekspresi penentuan ditulis setelah kata kunci, di antara tanda kurung, diikuti dengan pernyataan untuk dieksekusi.
The Number.isNaNfungsi standar fungsi JavaScript yang kembali truehanya jika argumen itu diberikan adalah NaN. The NumberFungsi terjadi kembali NaNketika Anda memberikan string yang tidak mewakili angka yang benar. Jadi, kondisi diterjemahkan menjadi "kecuali theNumberbukan-angka, lakukan ini".
Pernyataan setelah ifdibungkus dengan tanda kurung ( {dan }) dalam contoh ini. Tanda kurung dapat digunakan untuk mengelompokkan sejumlah pernyataan ke dalam satu pernyataan, yang disebut blok . Anda juga dapat menghilangkannya dalam kasus ini, karena mereka hanya menyimpan satu pernyataan, tetapi untuk menghindari keharusan memikirkan apakah mereka diperlukan, sebagian besar programmer JavaScript menggunakannya dalam setiap pernyataan yang dibungkus seperti ini. Kami sebagian besar akan mengikuti konvensi itu dalam buku ini, kecuali sesekali satu baris.
jika ( 1  +  1  ==  2 ) konsol . log ( "Itu benar" );
// → Itu benar
Seringkali Anda tidak hanya memiliki kode yang dijalankan ketika suatu kondisi bernilai true, tetapi juga kode yang menangani kasus lain. Jalur alternatif ini diwakili oleh panah kedua pada diagram. Anda dapat menggunakan elsekata kunci, bersama dengan if, untuk membuat dua jalur eksekusi alternatif yang terpisah.
let  theNumber  =  Number ( prompt ( "Pilih nomor" ));
jika ( ! Nomor . Isnan ( thenumber )) {
   konsol . log ( "  Bilangan Anda adalah akar kuadrat dari" + 
              theNumber  *  theNumber );
} lain {
   konsol . log ( "Hei. Mengapa Anda tidak memberi saya nomor?" );
}
Jika Anda memiliki lebih dari dua jalur untuk dipilih, Anda dapat "merangkai" beberapa if/ elsepasangan bersama. Berikut contohnya:
let  num  =  Number ( prompt ( "Pilih nomor" ));

jika ( num  <  10 ) {
   konsol . log ( "Kecil" );
} lain  jika ( num  <  100 ) {
   konsol . log ( "Sedang" );
} lain {
   konsol . log ( "Besar" );
}
Program pertama-tama akan memeriksa apakah numkurang dari 10. Jika ya, program memilih cabang itu, menunjukkan "Small", dan selesai. Jika tidak, dibutuhkan elsecabang, yang berisi satu detik if. Jika kondisi kedua ( < 100) berlaku, itu berarti jumlahnya antara 10 dan 100, dan "Medium"ditampilkan. Jika tidak, cabang kedua dan terakhir elsedipilih.
Skema untuk program ini terlihat seperti ini:
 
sementara dan melakukan loop
Pertimbangkan program yang mengeluarkan semua bilangan genap dari 0 hingga 12. Salah satu cara untuk menulisnya adalah sebagai berikut:
konsol . log ( 0 );
konsol . log ( 2 );
konsol . log ( 4 );
konsol . log ( 6 );
konsol . log ( 8 );
konsol . log ( 10 );
konsol . log ( 12 );
Itu berhasil, tetapi gagasan menulis program adalah membuat sesuatu menjadi lebih sedikit , tidak lebih. Jika kita membutuhkan semua bilangan genap kurang dari 1.000, pendekatan ini tidak akan bisa diterapkan. Yang kita butuhkan adalah cara menjalankan sepotong kode beberapa kali. Bentuk aliran kontrol ini disebut loop .
 
Alur kontrol perulangan memungkinkan kita untuk kembali ke beberapa titik dalam program di mana kita sebelumnya dan mengulanginya dengan status program kita saat ini. Jika kita menggabungkan ini dengan pengikatan yang penting, kita dapat melakukan sesuatu seperti ini:
biarkan  nomor  =  0 ;
sementara ( nomor  <=  12 ) {
   konsol . log ( nomor );
  angka  =  angka  +  2 ;
}
// → 0 
// → 2 
//… dan sebagainya
Pernyataan yang dimulai dengan kata kunci whilemembuat loop. Kata whileitu diikuti dengan ekspresi dalam tanda kurung dan kemudian pernyataan, mirip seperti if. Perulangan terus memasukkan pernyataan itu selama ekspresi menghasilkan nilai yang diberikan truesaat dikonversi ke Boolean.
The numbermengikat menunjukkan cara mengikat dapat melacak kemajuan program. Setiap kali loop berulang, numbermendapat nilai 2 lebih banyak dari nilai sebelumnya. Pada awal setiap pengulangan, dibandingkan dengan angka 12 untuk menentukan apakah pekerjaan program selesai.
Sebagai contoh yang benar-benar melakukan sesuatu yang berguna, sekarang kita dapat menulis program yang menghitung dan menunjukkan nilai 2 10 (2 pangkat 10). Kami menggunakan dua binding: satu untuk melacak hasil kami dan satu lagi untuk menghitung seberapa sering kami mengalikan hasil ini dengan 2. Loop menguji apakah binding kedua telah mencapai 10 dan, jika belum, mengupdate kedua binding.
biarkan  hasilnya  =  1 ;
biarkan  counter  =  0 ;
while ( counter  <  10 ) {
   result  =  result  *  2 ;
  counter  =  counter  +  1 ;
}
konsol . log ( hasil );
// → 1024
Penghitung juga dapat dimulai 1dan diperiksa <= 10, tetapi untuk alasan yang akan terlihat pada Bab 4 , adalah ide yang baik untuk membiasakan diri menghitung dari 0.
Sebuah dolingkaran adalah struktur kontrol mirip dengan whilelingkaran. Ini hanya berbeda pada satu titik: doloop selalu mengeksekusi tubuhnya setidaknya sekali, dan mulai menguji apakah harus berhenti hanya setelah eksekusi pertama itu. Untuk mencerminkan ini, tes muncul setelah badan loop.
biarkan  yourName ;
do {
   yourName  =  prompt ( "Who are you?" );
} sementara ( ! NamaAnda );
konsol . log ( namaanda );
Program ini akan memaksa Anda untuk memasukkan nama. Ini akan bertanya lagi dan lagi sampai mendapatkan sesuatu yang bukan string kosong. Menerapkan !operator akan mengonversi nilai menjadi tipe Boolean sebelum meniadakannya, dan semua string kecuali ""dikonversi menjadi true. Ini berarti pengulangan terus berputar sampai Anda memberikan nama yang tidak kosong.
Kode Indentasi
Dalam contoh, saya telah menambahkan spasi di depan pernyataan yang merupakan bagian dari beberapa pernyataan yang lebih besar. Ruang-ruang ini tidak diperlukan — komputer akan menerima program dengan baik tanpa mereka. Faktanya, bahkan jeda baris dalam program adalah opsional. Anda dapat menulis program sebagai satu baris panjang jika Anda menginginkannya.
Peran lekukan di dalam blok ini adalah untuk membuat struktur kode menonjol. Dalam kode di mana blok baru dibuka di dalam blok lain, akan sulit untuk melihat di mana satu blok berakhir dan blok lainnya dimulai. Dengan lekukan yang tepat, bentuk visual dari suatu program sesuai dengan bentuk blok di dalamnya. Saya suka menggunakan dua spasi untuk setiap blok terbuka, tetapi rasanya berbeda — beberapa orang menggunakan empat spasi, dan beberapa orang menggunakan karakter tab. Yang penting adalah setiap blok baru menambahkan jumlah ruang yang sama.
if ( false  ! =  true ) {
   konsol . log ( "Itu masuk akal." );
  jika ( 1  <  2 ) {
     konsol . log ( "Tidak mengherankan." );
  }
}
Kebanyakan program editor kode (termasuk yang ada di buku ini) akan membantu dengan memasukkan baris baru secara otomatis ke jumlah yang sesuai.
untuk loop
Banyak loop mengikuti pola yang ditunjukkan pada whilecontoh. Pertama, pengikatan "counter" dibuat untuk melacak kemajuan loop. Kemudian muncul whileperulangan, biasanya dengan ekspresi tes yang memeriksa apakah penghitung telah mencapai nilai akhirnya. Di akhir badan perulangan, penghitung diperbarui untuk melacak kemajuan.
Karena pola ini sangat umum, JavaScript dan bahasa serupa menyediakan bentuk yang sedikit lebih pendek dan lebih komprehensif, forloop.
untuk ( biarkan  angka  =  0 ; angka  <=  12 ; angka  =  angka  +  2 ) {
   konsol . log ( nomor );
}
// → 0 
// → 2 
//… dan sebagainya
Program ini sama persis dengan contoh pencetakan angka genap sebelumnya . Satu-satunya perubahan adalah bahwa semua pernyataan yang terkait dengan "status" dari perulangan dikelompokkan bersama setelahnya for.
Tanda kurung setelah forkata kunci harus berisi dua titik koma. Bagian sebelum titik koma pertama menginisialisasi loop, biasanya dengan mendefinisikan pengikatan. Bagian kedua adalah ekspresi yang memeriksa apakah perulangan harus dilanjutkan. Bagian terakhir memperbarui status loop setelah setiap iterasi. Dalam kebanyakan kasus, ini lebih pendek dan lebih jelas daripada whilekonstruksi.
Ini adalah kode yang menghitung 2 10 menggunakan foralih-alih while:
biarkan  hasilnya  =  1 ;
untuk ( let  counter  =  0 ; counter  <  10 ; counter  =  counter  +  1 ) {
   result  =  result  *  2 ;
}
konsol . log ( hasil );
// → 1024
Breaking Out of a Loop
Memiliki kondisi looping yang dihasilkan falsebukanlah satu-satunya cara untuk menyelesaikan loop. Ada pernyataan khusus yang disebut breakyang memiliki efek melompat keluar dari loop penutup.
Program ini menggambarkan breakpernyataan tersebut. Ia menemukan angka pertama yang lebih besar dari atau sama dengan 20 dan habis dibagi 7.
untuk ( biarkan  saat ini  =  20 ;; saat ini  =  saat ini  +  1 ) {
   if ( saat ini  %  7  ==  0 ) {
     konsol . log ( saat ini );
    istirahat ;
  }
}
// → 21
Menggunakan %operator sisa ( ) adalah cara mudah untuk menguji apakah suatu bilangan dapat dibagi dengan bilangan lain. Jika ya, sisa pembagiannya adalah nol.
The forkonstruk dalam contoh tidak memiliki bagian yang memeriksa akhir loop. Ini berarti bahwa loop tidak akan pernah berhenti kecuali breakpernyataan di dalamnya dijalankan.
Jika Anda menghapus breakpernyataan itu atau tidak sengaja menulis kondisi akhir yang selalu menghasilkan true, program Anda akan macet dalam loop tak terbatas . Program yang terjebak dalam putaran tak terbatas tidak akan pernah selesai berjalan, yang biasanya merupakan hal yang buruk.
Jika Anda membuat pengulangan tak terbatas di salah satu contoh di laman ini, Anda biasanya akan ditanyai apakah Anda ingin menghentikan skrip setelah beberapa detik. Jika gagal, Anda harus menutup tab tempat Anda bekerja, atau pada beberapa browser menutup seluruh browser Anda, untuk memulihkan.
Kata continuekuncinya mirip dengan break, karena itu mempengaruhi kemajuan sebuah loop. Saat continueditemui di badan perulangan, kontrol melompat keluar dari badan dan berlanjut dengan iterasi berikutnya dari perulangan.
Memperbarui binding secara ringkas
Terutama saat melakukan perulangan, program sering kali perlu "memperbarui" pengikatan untuk menyimpan nilai berdasarkan nilai pengikatan sebelumnya.
counter  =  counter  +  1 ;
JavaScript menyediakan jalan pintas untuk ini.
counter  + =  1 ;
Pintasan serupa berfungsi untuk banyak operator lain, seperti result *= 2menggandakan resultatau counter -= 1menghitung mundur.
Ini memungkinkan kita untuk mempersingkat contoh penghitungan kita sedikit lagi.
untuk ( biarkan  angka  =  0 ; angka  <=  12 ; angka  + =  2 ) {
   konsol . log ( nomor );
}
Untuk counter += 1dan counter -= 1, bahkan ada padanan yang lebih pendek: counter++dan counter--.
Mengirimkan nilai dengan sakelar
Tidak jarang kode terlihat seperti ini:
jika ( x  ==  "nilai1" ) aksi1 ();
lain  jika ( x  ==  "nilai2" ) aksi2 ();
lain  jika ( x  ==  "nilai3" ) aksi3 ();
lain  defaultAction ();
Ada konstruksi yang disebut switchyang dimaksudkan untuk mengekspresikan "pengiriman" semacam itu dengan cara yang lebih langsung. Sayangnya, sintaksis JavaScript yang digunakan untuk ini (yang diwarisi dari bahasa pemrograman C / Java) agak janggal — rangkaian ifpernyataan mungkin terlihat lebih baik. Berikut ini contohnya:
switch ( prompt ( "Bagaimana cuaca hari ini?" )) {
   case  "rainy" :
     console . log ( "Ingatlah untuk membawa payung." );
    istirahat ;
  kasus  "cerah" :
     konsol . log ( "Berpakaianlah dengan ringan." );
  case  "cloudy" :
     konsol . log ( "Pergi ke luar." );
    istirahat ;
  default :
     konsol . log ( ");
    istirahat ;
}
Anda dapat meletakkan sejumlah caselabel di dalam blok yang dibuka oleh switch. Program akan mulai mengeksekusi di label yang sesuai dengan nilai yang switchdiberikan, atau defaultjika tidak ada nilai yang cocok ditemukan. Ini akan terus dijalankan, bahkan di label lain, hingga mencapai breakpernyataan. Dalam beberapa kasus, seperti "sunny"kasus pada contoh, ini dapat digunakan untuk berbagi beberapa kode antar kasus (disarankan untuk pergi keluar saat cuaca cerah dan berawan). Tapi hati-hati — ini mudah untuk melupakan hal seperti itu break, yang akan menyebabkan program mengeksekusi kode yang tidak ingin Anda jalankan.
Kapitalisasi
Nama binding mungkin tidak berisi spasi, namun sering kali berguna menggunakan beberapa kata untuk mendeskripsikan dengan jelas apa yang diwakili oleh binding tersebut. Ini adalah cukup banyak pilihan Anda untuk menulis nama yang mengikat dengan beberapa kata di dalamnya:
fuzzylittleturtle
fuzzy_little_turtle
FuzzyLittleTurtle
fuzzyLittleTurtle
Gaya pertama mungkin sulit dibaca. Saya lebih suka tampilan garis bawah, meskipun gaya itu agak menyakitkan untuk diketik. Fungsi JavaScript standar, dan sebagian besar pemrogram JavaScript, mengikuti gaya bawah — mereka menggunakan huruf besar pada setiap kata kecuali yang pertama. Tidak sulit untuk membiasakan diri dengan hal-hal kecil seperti itu, dan kode dengan gaya penamaan campuran bisa sangat sulit dibaca, jadi kami mengikuti konvensi ini.
Dalam beberapa kasus, seperti Numberfungsinya, huruf pertama penjilidan juga menggunakan huruf besar. Ini dilakukan untuk menandai fungsi ini sebagai konstruktor. Apa itu konstruktor akan menjadi jelas di Bab 6 . Untuk saat ini, yang penting adalah jangan sampai diganggu oleh kurangnya konsistensi ini.
Komentar
Seringkali, kode mentah tidak menyampaikan semua informasi yang Anda ingin program sampaikan kepada pembaca manusia, atau menyampaikannya dengan cara yang samar sehingga orang mungkin tidak memahaminya. Di lain waktu, Anda mungkin hanya ingin memasukkan beberapa pemikiran terkait sebagai bagian dari program Anda. Untuk inilah komentar .
Komentar adalah sepotong teks yang merupakan bagian dari program tetapi diabaikan sama sekali oleh komputer. JavaScript memiliki dua cara untuk menulis komentar. Untuk menulis komentar satu baris, Anda dapat menggunakan dua karakter garis miring ( //) dan kemudian teks komentar setelahnya.
biarkan  accountBalance  =  calculateBalance ( akun );
// Ini adalah cekungan hijau tempat sungai menyanyikan 
akunBalance . sesuaikan ();
// Dengan gila-gilaan menangkap serpihan putih di rumput. 
let  report  =  new  Report ();
// Di mana matahari di cincin gunung bangga: 
addToReport ( accountBalance , laporan );
// Ini lembah kecil, berbusa seperti cahaya di gelas.
Sebuah //komentar pergi hanya untuk akhir baris. Bagian teks antara /*dan */akan diabaikan secara keseluruhan, terlepas dari apakah teks tersebut berisi jeda baris. Ini berguna untuk menambahkan blok informasi tentang file atau bagian dari program.
/ * 
  Saya pertama kali menemukan nomor ini tertulis di bagian belakang buku catatan lama. 
  Sejak itu, sering mampir, muncul di nomor telepon 
  dan nomor seri produk yang saya beli. Dia jelas 
  menyukaiku, jadi aku memutuskan untuk menyimpannya. 
* / 
const  myNumber  =  11213 ;
Ringkasan
Anda sekarang tahu bahwa program dibangun dari pernyataan, yang terkadang berisi lebih banyak pernyataan. Pernyataan cenderung berisi ekspresi, yang dengan sendirinya dapat dibangun dari ekspresi yang lebih kecil.
Menempatkan pernyataan satu sama lain memberi Anda program yang dijalankan dari atas ke bawah. Anda dapat memperkenalkan gangguan pada aliran kontrol dengan menggunakan bersyarat ( if, else, dan switch) dan perulangan ( while, do, dan for) pernyataan.
Binding dapat digunakan untuk mengarsipkan potongan data di bawah sebuah nama, dan berguna untuk melacak status dalam program Anda. Lingkungan adalah sekumpulan binding yang ditentukan. Sistem JavaScript selalu menempatkan sejumlah binding standar yang berguna ke dalam lingkungan Anda.
Fungsi adalah nilai khusus yang merangkum sebuah program. Anda bisa memintanya dengan menulis functionName(argument1, argument2). Panggilan fungsi seperti itu adalah ekspresi dan dapat menghasilkan nilai.
Latihan
Jika Anda tidak yakin bagaimana cara menguji solusi Anda untuk latihan, lihat Pendahuluan .
Setiap latihan dimulai dengan deskripsi masalah. Bacalah deskripsi ini dan cobalah untuk menyelesaikan latihannya. Jika Anda mengalami masalah, pertimbangkan untuk membaca petunjuk setelah latihan. Solusi lengkap untuk latihan ini tidak termasuk dalam buku ini, tetapi Anda dapat menemukannya secara online di https://eloquentjavascript.net/code . Jika Anda ingin mempelajari sesuatu dari latihan ini, saya sarankan untuk melihat solusinya hanya setelah Anda menyelesaikan latihan, atau setidaknya setelah Anda menyerang cukup lama dan keras hingga mengalami sedikit sakit kepala.
Membuat lingkaran segitiga
Tulis perulangan yang membuat tujuh panggilan console.loguntuk menghasilkan segitiga berikut:
#
##
###
####
#####
######
#######
Mungkin berguna untuk mengetahui bahwa Anda dapat menemukan panjang string dengan menulis .lengthsetelahnya.
biarkan  abc  =  "abc" ;
konsol . log ( abc . panjang );
// → 3
Kebanyakan latihan berisi sepotong kode yang dapat Anda modifikasi untuk menyelesaikan latihan. Ingatlah bahwa Anda dapat mengklik blok kode untuk mengeditnya.
// Kode Anda di sini.
FizzBuzz
Tulis program yang digunakan console.loguntuk mencetak semua angka dari 1 hingga 100, dengan dua pengecualian. Untuk nomor yang habis dibagi 3, cetak "Fizz"sebagai pengganti nomornya, dan untuk nomor yang habis dibagi 5 (dan bukan 3), cetak "Buzz"sebagai gantinya.
Ketika Anda sudah membuatnya bekerja, ubah program Anda untuk mencetak "FizzBuzz"untuk angka yang habis dibagi oleh 3 dan 5 (dan masih mencetak "Fizz"atau "Buzz"untuk angka yang habis dibagi hanya oleh salah satu dari mereka).
(Ini sebenarnya adalah pertanyaan wawancara yang diklaim telah menyisihkan sebagian besar kandidat pemrogram. Jadi jika Anda menyelesaikannya, nilai pasar tenaga kerja Anda akan naik.)
// Kode Anda di sini.
Papan catur
Tulis program yang membuat string yang mewakili kisi 8 × 8, menggunakan karakter baris baru untuk memisahkan baris. Di setiap posisi kisi ada spasi atau karakter "#". Karakter harus membentuk papan catur.
Meneruskan string ini ke console.logseharusnya menunjukkan sesuatu seperti ini:
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
Saat Anda memiliki program yang menghasilkan pola ini, tentukan pengikatan size = 8dan ubah program agar berfungsi untuk apa pun size, yang menghasilkan kisi dengan lebar dan tinggi yang diberikan.
// Kode Anda di sini.

