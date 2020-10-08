# Nilai-Nilai Jenis Operator
	Dalam dunia komputer hanya ada data. Dan dapat dibaca diubah dan membuat data baru, semua data tersebut diurutkan disimpan dalam urutan bit yang panjang. Bit adalah segala jenis benda bernilai dua, biasanya digambarkan sebagai nol dan satu. Setiap bagian dari informasi diskrit dapat direduksi menjadi urutan nol dan satu dan dengan demikian direpresentasikan dalam bit.
 Cara kerjanya sama seperti bilangan desimal, tetapi alih-alih 10 digit yang berbeda, Anda hanya memiliki 2, dan bobot masing-masing bertambah dengan faktor 2 dari kanan ke kiri. Berikut adalah bit-bit yang menyusun angka 13, dengan bobot dari angka-angka yang ditunjukkan di bawahnya:
   0   0   0   0   1   1   0   1
 128  64  32  16   8   4   2   1
Jadi itulah bilangan biner 00001101. Angka bukan nolnya adalah singkatan dari 8, 4, dan 1, dan dijumlahkan hingga 13.
Nilai 
Komputer modern yang khas memiliki lebih dari 30 miliar bit dalam penyimpanan data volatilnya Penyimpanan nonvolatile (hard disk atau sejenisnya) cenderung memiliki beberapa kali lipat lebih banyak. kita harus memisahkannya menjadi beberapa bagian yang mewakili potongan informasi. Dalam lingkungan JavaScript, potongan tersebut disebut nilai . Meskipun semua nilai terbuat dari bit, mereka memainkan peran yang berbeda. Beberapa nilai adalah angka, beberapa nilai adalah potongan teks, beberapa nilai adalah fungsi, dan seterusnya.
Anda hanya perlu memanggil namanya. Ini nyaman. Anda tidak perlu mengumpulkan bahan bangunan untuk nilai-nilai Anda atau membayarnya. Anda hanya memanggil satu, dan whoosh , Anda memilikinya. Mereka tidak benar-benar diciptakan dari udara tipis, tentu saja. Setiap nilai harus disimpan di suatu tempat, dan jika Anda ingin menggunakannya dalam jumlah yang sangat besar pada saat yang sama, Anda mungkin kehabisan memori.
Angka
	Nilai dari jenis angka , tidak mengherankan, adalah nilai numerik. Dalam program JavaScript, mereka ditulis sebagai berikut:
13 
Gunakan itu dalam sebuah program, dan itu akan menyebabkan pola bit untuk angka 13 muncul di dalam memori komputer.
JavaScript menggunakan sejumlah bit tetap, 64 di antaranya, untuk menyimpan satu nilai bilangan. Ada begitu banyak pola yang dapat Anda buat dengan 64 bit, yang berarti jumlah bilangan berbeda yang dapat direpresentasikan terbatas. Dengan N digit desimal, Anda dapat mewakili 10 angka N. Demikian pula, dengan 64 digit biner, Anda dapat mewakili 2 64 angka yang berbeda, yaitu sekitar 18 triliun (angka 18 dengan 18 angka nol setelahnya). Itu banyak.
Memori komputer dulu jauh lebih kecil, dan orang cenderung menggunakan kelompok 8 atau 16 bit untuk mewakili nomor mereka. Sangat mudah untuk secara tidak sengaja melimpah angka sekecil itu — berakhir dengan angka yang tidak sesuai dengan jumlah bit yang ditentukan. Saat ini, bahkan komputer yang muat di saku Anda memiliki banyak memori, jadi Anda bebas menggunakan potongan 64-bit, dan Anda hanya perlu khawatir tentang overflow ketika berhadapan dengan angka yang benar-benar astronomis.
Namun, tidak semua bilangan bulat kurang dari 18 triliun cocok dengan nomor JavaScript. Bit-bit tersebut juga menyimpan bilangan negatif, sehingga satu bit menunjukkan tanda bilangan tersebut. Masalah yang lebih besar adalah bahwa angka yang tidak utuh juga harus diwakili. Untuk melakukan ini, beberapa bit digunakan untuk menyimpan posisi titik desimal. Bilangan bulat maksimum sebenarnya yang dapat disimpan lebih banyak dalam kisaran 9 kuadriliun (15 nol) —yang masih cukup besar.
Bilangan pecahan ditulis dengan menggunakan titik.
9.81
Untuk bilangan yang sangat besar atau sangat kecil, Anda juga dapat menggunakan notasi ilmiah dengan menambahkan e (untuk eksponen ), diikuti dengan eksponen bilangan tersebut.
2.998e8
Yaitu 2.998 × 10 8 = 299.800.000.
Perhitungan dengan bilangan bulat (juga disebut bilangan bulat ) lebih kecil dari 9 kuadriliun yang disebutkan di atas dijamin selalu tepat. Sayangnya, perhitungan dengan bilangan pecahan umumnya tidak. Sama seperti π (pi) tidak dapat diekspresikan secara tepat oleh sejumlah digit desimal yang terbatas, banyak angka kehilangan beberapa ketepatan ketika hanya 64 bit yang tersedia untuk menyimpannya. Ini memalukan, tetapi ini menyebabkan masalah praktis hanya dalam situasi tertentu. Yang penting adalah menyadarinya dan memperlakukan bilangan digital pecahan sebagai perkiraan, bukan sebagai nilai yang tepat.
Hitung
Hal utama yang harus dilakukan dengan angka adalah aritmatika. Operasi aritmatika seperti penjumlahan atau perkalian mengambil dua nilai bilangan dan menghasilkan bilangan baru darinya. Inilah tampilannya di JavaScript:
100 + 4 * 11
The +dan *simbol yang disebut operator . Yang pertama berarti penjumlahan, dan yang kedua berarti perkalian. Menempatkan operator di antara dua nilai akan menerapkannya ke nilai tersebut dan menghasilkan nilai baru.
Tetapi apakah contoh tersebut berarti “tambahkan 4 dan 100, dan kalikan hasilnya dengan 11,” atau apakah perkaliannya dilakukan sebelum penjumlahan? Seperti yang sudah Anda duga, perkalian terjadi lebih dulu. Tetapi seperti dalam matematika, Anda dapat mengubahnya dengan membungkus penjumlahan dalam tanda kurung.
(100 + 4) * 11
Untuk pengurangan, ada -operator, dan pembagian bisa dilakukan dengan /operator.
Saat operator muncul bersama tanpa tanda kurung, urutan penerapannya ditentukan oleh prioritas operator. Contoh tersebut menunjukkan bahwa perkalian terjadi sebelum penjumlahan. The /operator memiliki prioritas yang sama seperti *. Begitu juga untuk +dan -. Ketika beberapa operator dengan prioritas yang sama muncul di sebelah satu sama lain, seperti dalam 1 - 2 + 1, mereka diterapkan kiri ke kanan: (1 - 2) + 1.
Aturan prioritas ini bukanlah sesuatu yang perlu Anda khawatirkan. Jika ragu, tambahkan saja tanda kurung.
Ada satu lagi operator aritmatika, yang mungkin tidak langsung Anda kenali. The %simbol yang digunakan untuk mewakili sisa operasi. X % Yadalah sisa pembagian Xdengan Y. Misalnya, 314 % 100menghasilkan 14, dan 144 % 12memberi 0. Prioritas operator sisa sama dengan perkalian dan pembagian. Anda juga akan sering melihat operator ini disebut modulo .
Nomor khusus
Ada tiga nilai khusus dalam JavaScript yang dianggap angka tetapi tidak berperilaku seperti angka normal.
Dua yang pertama adalah Infinitydan -Infinity, yang mewakili infinitas positif dan negatif. Infinity - 1masih Infinity, dan seterusnya. Namun, jangan terlalu percaya pada komputasi berbasis infinity. Hal ini tidak matematis terdengar, dan itu akan cepat mengarah pada nomor khusus berikutnya: NaN.
NaNsingkatan dari "bukan angka", meskipun itu adalah nilai dari jenis angka. Anda akan mendapatkan hasil ini saat, misalnya, mencoba menghitung 0 / 0(nol dibagi nol) Infinity - Infinity, atau sejumlah operasi numerik lain yang tidak memberikan hasil yang berarti.
# String
Tipe data dasar selanjutnya adalah string . String digunakan untuk merepresentasikan teks. Mereka ditulis dengan melampirkan isinya dalam tanda kutip.
`Down on the sea` 
" Lie on the ocean " 
'Float on the ocean'
Anda dapat menggunakan tanda kutip tunggal, tanda kutip ganda, atau tanda kutip belakang untuk menandai string, selama tanda kutip di awal dan akhir string cocok.
Hampir semua hal dapat diletakkan di antara tanda kutip, dan JavaScript akan membuat nilai string darinya. Tetapi beberapa karakter lebih sulit. Anda bisa membayangkan betapa sulitnya menempatkan kutipan di antara kutipan. Baris baru (karakter yang Anda dapatkan saat Anda menekan ENTER ) dapat dimasukkan tanpa keluar hanya jika string dikutip dengan tanda kutip ( `).
Untuk memungkinkan memasukkan karakter seperti itu dalam string, digunakan notasi berikut: setiap kali garis miring terbalik ( \) ditemukan di dalam teks kutipan, ini menunjukkan bahwa karakter setelahnya memiliki arti khusus. Ini disebut melarikan diri dari karakter. Kutipan yang diawali dengan garis miring terbalik tidak akan mengakhiri string tetapi menjadi bagian darinya. Ketika nkarakter muncul setelah garis miring terbalik, itu ditafsirkan sebagai baris baru. Demikian pula, tsetelah garis miring terbalik berarti karakter tab. Ambil string berikut:
"Ini baris pertama \ nDan ini baris kedua"
Teks sebenarnya yang terkandung adalah ini:
Ini baris pertama
Dan ini yang kedua
Ada, tentu saja, situasi di mana Anda ingin garis miring terbalik dalam string hanya berupa garis miring terbalik, bukan kode khusus. Jika dua garis miring terbalik mengikuti satu sama lain, keduanya akan menciut bersama, dan hanya satu yang tersisa dalam nilai string yang dihasilkan. Ini adalah bagaimana string “ Karakter baris baru ditulis seperti "\ n ". "Dapat diungkapkan:
"Karakter baris baru ditulis seperti \" \\ n \ "."
String, juga, harus dimodelkan sebagai rangkaian bit agar bisa ada di dalam komputer. Cara JavaScript melakukan ini didasarkan pada standar Unicode . Standar ini menetapkan angka ke hampir setiap karakter yang Anda perlukan, termasuk karakter dari Yunani, Arab, Jepang, Armenia, dan sebagainya. Jika kita memiliki angka untuk setiap karakter, string dapat dijelaskan dengan urutan angka.
Dan itulah yang dilakukan JavaScript. Namun ada kerumitan: Representasi JavaScript menggunakan 16 bit per elemen string, yang dapat mendeskripsikan hingga 2 16 karakter berbeda. Tetapi Unicode mendefinisikan lebih banyak karakter dari itu — sekitar dua kali lebih banyak, pada saat ini. Jadi beberapa karakter, seperti banyak emoji, mengambil dua "posisi karakter" dalam string JavaScript. Kami akan kembali ke ini di Bab 5 .
String tidak dapat dibagi, dikalikan, atau dikurangi, tetapi +operator dapat menggunakannya. Itu tidak menambah, tapi menggabungkan — itu merekatkan dua string menjadi satu. Baris berikut akan menghasilkan string "concatenate":
"con"  +  "cat"  +  "e"  +  "nate"
Nilai string memiliki sejumlah fungsi ( metode ) terkait yang dapat digunakan untuk melakukan operasi lain padanya. Saya akan mengatakan lebih banyak tentang ini di Bab 4 .
String yang ditulis dengan tanda kutip tunggal atau ganda memiliki perilaku yang hampir sama — satu-satunya perbedaan adalah jenis kutipan mana yang Anda perlukan untuk menyela di dalamnya. String yang dikutip backtick, biasanya disebut template literals , dapat melakukan beberapa trik lagi. Selain dapat menjangkau garis, mereka juga dapat menyematkan nilai lain.
`setengah dari 100 adalah $ { 100  /  2 } `
Saat Anda menulis sesuatu di ${}dalam template literal, hasilnya akan dihitung, diubah menjadi string, dan dimasukkan pada posisi itu. Contoh menghasilkan " setengah dari 100 adalah 50 ".
Operator unary
Tidak semua operator adalah simbol. Beberapa ditulis sebagai kata-kata. Salah satu contohnya adalah typeofoperator, yang menghasilkan nilai string yang menamai jenis nilai yang Anda berikan.
edit & jalankan kode dengan mengkliknya
konsol . log ( typeof  4.5 )
 // → 
konsol angka . log ( tipe  "x" )
 // → string
Kami akan menggunakan console.logkode contoh untuk menunjukkan bahwa kami ingin melihat hasil evaluasi sesuatu. Lebih lanjut tentang itu di bab berikutnya .
Operator lain yang ditampilkan semuanya dioperasikan pada dua nilai, tetapi typeofhanya mengambil satu. Operator yang menggunakan dua nilai disebut operator biner , sedangkan yang mengambil satu disebut operator unary . Operator minus dapat digunakan baik sebagai operator biner maupun sebagai operator unary.
konsol . log ( - ( 10  -  2 ))
 // → -8
Nilai Boolean
Seringkali berguna untuk memiliki nilai yang membedakan hanya antara dua kemungkinan, seperti "ya" dan "tidak" atau "aktif" dan "tidak aktif". Untuk tujuan ini, JavaScript memiliki tipe Boolean , yang hanya memiliki dua nilai, benar dan salah, yang ditulis sebagai kata-kata tersebut.
Perbandingan
Berikut salah satu cara untuk menghasilkan nilai Boolean:
konsol . log ( 3  >  2 )
 // → 
konsol sejati . log ( 3  <  2 )
 // → false
Tanda >dan <adalah simbol tradisional untuk "lebih besar dari" dan "lebih kecil dari". Mereka adalah operator biner. Menerapkannya menghasilkan nilai Boolean yang menunjukkan apakah benar dalam kasus ini.
String dapat dibandingkan dengan cara yang sama.
konsol . log ( "Aardvark"  <  "Zoroaster" )
 // → benar
Cara string disusun secara kasar alfabet tetapi tidak benar-benar seperti yang Anda harapkan di kamus: huruf besar selalu "lebih kecil" dari huruf kecil, jadi "Z" < "a", dan karakter nonalfabetis (!, -, dan sebagainya) juga disertakan dalam pemesanan. Saat membandingkan string, JavaScript memeriksa karakter dari kiri ke kanan, membandingkan kode Unicode satu per satu.
Operator serupa lainnya adalah >=(lebih besar dari atau sama dengan), <=(kurang dari atau sama dengan), ==(sama dengan), dan !=(tidak sama dengan).
konsol . log ( "Itchy"  ! =  "Scratchy" )
 // → 
konsol sejati . log ( "Apple"  ==  "Orange" )
 // → false
Hanya ada satu nilai dalam JavaScript yang tidak sama dengan dirinya sendiri, dan itu adalah NaN("bukan angka").
konsol . log ( NaN  ==  NaN )
 // → false
NaNseharusnya menunjukkan hasil dari komputasi yang tidak masuk akal, dan karena itu, tidak sama dengan hasil perhitungan tidak masuk akal lainnya .
Operator logika
Ada juga beberapa operasi yang dapat diterapkan ke nilai Boolean itu sendiri. JavaScript mendukung tiga operator logika: dan , atau , dan tidak . Ini dapat digunakan untuk "bernalar" tentang Boolean.
The &&Operator mewakili logis dan . Ini adalah operator biner, dan hasilnya benar hanya jika kedua nilai yang diberikan padanya benar.
konsol . log ( true  & &  false )
 // → false 
console . log ( true  & &  true )
 // → true
Operator menunjukkan logis atau . Ini menghasilkan true jika salah satu nilai yang diberikan padanya benar.
konsol . log ( false  | |  true )
 // → 
konsol benar . log ( false  | |  false )
 // → false
Not ditulis sebagai tanda seru ( !). Ini adalah operator unary yang membalik nilai yang diberikan padanya — !truemenghasilkan false, dan !falsememberi true.
Saat mencampur operator Boolean ini dengan aritmatika dan operator lain, tidak selalu terlihat jelas kapan tanda kurung diperlukan. Dalam prakteknya, Anda biasanya dapat bertahan dengan mengetahui bahwa operator yang telah kita lihat sejauh ini, ||memiliki prioritas terendah, kemudian datang &&, maka operator perbandingan ( >, ==, dan sebagainya), dan kemudian sisanya. Urutan ini telah dipilih sedemikian rupa sehingga, dalam ekspresi tipikal seperti yang berikut, sesedikit mungkin tanda kurung:
1  +  1  ==  2  & &  10  *  10  >  50
Operator logika terakhir yang akan saya bahas bukanlah unary, bukan binary, tetapi ternary , yang beroperasi pada tiga nilai. Itu ditulis dengan tanda tanya dan titik dua, seperti ini:
konsol . log ( benar  ?  1 : 2 );
// → 1 
konsol . log ( salah  ?  1 : 2 );
// → 2
Yang ini disebut operator bersyarat (atau terkadang hanya operator terner karena ini adalah satu-satunya operator dalam bahasa tersebut). Nilai di sebelah kiri tanda tanya "memilih" yang mana dari dua nilai lainnya yang akan keluar. Jika benar, ia memilih nilai tengah, dan jika salah, ia memilih nilai di sebelah kanan.
Nilai kosong
Ada dua nilai khusus, tertulis nulldan undefined, yang digunakan untuk menunjukkan tidak adanya nilai yang bermakna . Mereka sendiri adalah nilai-nilai, tetapi mereka tidak membawa informasi.
Banyak operasi dalam bahasa yang tidak menghasilkan nilai yang berarti (Anda akan lihat nanti) menghasilkan undefinedhanya karena harus menghasilkan beberapa nilai.
Perbedaan makna antara undefineddan nullmerupakan kecelakaan desain JavaScript, dan itu tidak masalah sebagian besar waktu. Dalam kasus di mana Anda benar-benar harus memperhatikan diri sendiri dengan nilai-nilai ini, saya sarankan untuk memperlakukannya sebagian besar dapat dipertukarkan.
Jenis konversi otomatis
Dalam Pendahuluan, saya menyebutkan bahwa JavaScript berusaha keras untuk menerima hampir semua program yang Anda berikan, bahkan program yang melakukan hal-hal aneh. Ini ditunjukkan dengan baik oleh ekspresi berikut:
konsol . log ( 8  *  null )
 // → 0 
konsol . log ( "5"  -  1 )
 // → 4 
konsol . log ( "5"  +  1 )
 // → 51 
konsol . log ( "five"  *  2 )
 // → 
konsol NaN . log ( false  ==  0 )
 // → true
Saat operator diterapkan ke jenis nilai yang "salah", JavaScript akan diam-diam mengonversi nilai tersebut ke jenis yang dibutuhkannya, menggunakan sekumpulan aturan yang sering kali tidak sesuai dengan keinginan atau harapan Anda. Ini disebut pemaksaan tipe . Dalam nullekspresi pertama menjadi 0, dan "5"dalam ekspresi kedua menjadi 5(dari string ke angka). Namun pada ekspresi ketiga, +mencoba penggabungan string sebelum penambahan numerik, sehingga 1diubah menjadi "1"(dari angka ke string).
Ketika sesuatu yang tidak dipetakan ke angka dengan cara yang jelas (seperti "five"atau undefined) diubah menjadi angka, Anda mendapatkan nilainya NaN. Operasi aritmatika lebih lanjut NaNterus berproduksi NaN, jadi jika Anda mendapati diri Anda mendapatkan salah satu dari mereka di tempat yang tidak terduga, cari konversi jenis yang tidak disengaja.
Saat membandingkan nilai dari jenis yang sama menggunakan ==, hasilnya mudah diprediksi: Anda harus mendapatkan true jika kedua nilai sama, kecuali dalam kasus NaN. Namun jika jenisnya berbeda, JavaScript menggunakan sekumpulan aturan yang rumit dan membingungkan untuk menentukan apa yang harus dilakukan. Dalam kebanyakan kasus, ini hanya mencoba untuk mengonversi salah satu nilai ke tipe nilai lainnya. Namun, jika nullatau undefinedterjadi di kedua sisi operator, ini menghasilkan true hanya jika kedua sisi adalah salah satu dari nullatau undefined.
konsol . log ( null  ==  undefined );
// → 
konsol sejati . log ( null  ==  0 );
// → salah
Perilaku itu seringkali bermanfaat. Saat Anda ingin menguji apakah suatu nilai memiliki nilai riil, bukan nullatau undefined, Anda dapat membandingkannya nulldengan operator ==(atau !=).
Tetapi bagaimana jika Anda ingin menguji apakah sesuatu mengacu pada nilai yang tepat false? Ekspresi suka 0 == falsedan "" == falsejuga benar karena konversi jenis otomatis. Jika Anda tidak ingin konversi jenis apa pun terjadi, ada dua operator tambahan: ===dan !==. Yang pertama menguji apakah suatu nilai sama persis dengan yang lain, dan yang kedua menguji apakah nilainya tidak persis sama. Jadi "" === falsesalah seperti yang diharapkan.
Saya sarankan menggunakan operator perbandingan tiga karakter secara defensif untuk mencegah konversi jenis yang tidak terduga membuat Anda tersandung. Tetapi jika Anda yakin tipe di kedua sisi akan sama, tidak ada masalah dengan menggunakan operator yang lebih pendek.
Hubungan arus pendek operator logika
Operator logika &&dan ||menangani nilai dari tipe yang berbeda dengan cara yang aneh. Mereka akan mengonversi nilai di sisi kirinya menjadi jenis Boolean untuk memutuskan apa yang harus dilakukan, tetapi bergantung pada operator dan hasil konversi tersebut, mereka akan mengembalikan nilai asli di sisi kiri atau nilai di sisi kanan.
The ||operator, misalnya, akan mengembalikan nilai ke kiri ketika yang dapat dikonversi ke true dan akan mengembalikan nilai di sebelah kanan yang sebaliknya. Ini memiliki efek yang diharapkan ketika nilainya adalah Boolean dan melakukan sesuatu yang analog untuk nilai jenis lain.
konsol . log ( null  | |  "user" )
 // → 
konsol pengguna . log ( "Agnes"  | |  "pengguna" )
 // → Agnes
Kita dapat menggunakan fungsionalitas ini sebagai cara untuk kembali ke nilai default. Jika Anda memiliki nilai yang mungkin kosong, Anda dapat meletakkannya ||setelahnya dengan nilai pengganti. Jika nilai awal dapat diubah menjadi salah, Anda akan mendapatkan penggantinya. Aturan untuk mengkonversi string dan nomor ke Boolean nilai menyatakan bahwa 0, NaN, dan string kosong ( "") dihitung sebagai false, sementara semua nilai-nilai lain dihitung sebagai true. Jadi 0 || -1menghasilkan -1, dan "" || "!?"hasil "!?".
The &&Operator bekerja mirip tapi sebaliknya. Ketika nilai di sebelah kirinya adalah sesuatu yang diubah menjadi salah, ia mengembalikan nilai itu, dan sebaliknya ia mengembalikan nilai di sebelah kanannya.
Properti penting lainnya dari kedua operator ini adalah bagian di sebelah kanan mereka dievaluasi hanya jika diperlukan. Dalam kasus true || X, apa pun Xitu — bahkan jika itu adalah bagian dari program yang melakukan sesuatu yang buruk — hasilnya akan benar, dan Xtidak pernah dievaluasi. Hal yang sama berlaku untuk false && X, yang salah dan akan diabaikan X. Ini disebut evaluasi hubung singkat .
Operator bersyarat bekerja dengan cara yang serupa. Dari nilai kedua dan ketiga, hanya nilai yang dipilih yang dievaluasi.
Ringkasan
Kami melihat empat jenis nilai JavaScript di bab ini: angka, string, Boolean, dan nilai tak terdefinisi.
Nilai tersebut dibuat dengan mengetikkan namanya ( true, null) atau value ( 13, "abc"). Anda dapat menggabungkan dan mengubah nilai dengan operator. Kami melihat operator biner untuk aritmatika ( +, -, *, /, dan %), penggabungan string ( +), perbandingan ( ==, !=, ===, !==, <, >, <=, >=), dan logika ( &&, ||), serta beberapa operator unary ( -untuk meniadakan nomor, !untuk meniadakan logis, dan typeofuntuk menemukan tipe nilai) dan operator terner ( ?:) untuk memilih salah satu dari dua nilai berdasarkan nilai ketiga.
Ini memberi Anda informasi yang cukup untuk menggunakan JavaScript sebagai kalkulator saku tetapi tidak lebih. The bab berikutnya akan mulai mengikat ekspresi ini bersama-sama ke dalam program dasar.






