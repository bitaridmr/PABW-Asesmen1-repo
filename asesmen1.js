//data mahasiswa
var dataMahasiswa = {
    foto: "DSC03645.JPG",
    nama: "I Gusti Agung Ayu Bitari Damar Ratih",
    nim : "6701223073",
    kelas : "D3SI-46-02"
}


//menampilkan data mahasiswa
document.getElementById("Foto-Profile").src = dataMahasiswa.foto;
document.getElementById('nama').textContent = dataMahasiswa.nama;
document.getElementById('nim').textContent = 'NIM: ' + dataMahasiswa.nim;
document.getElementById('kelas').textContent = "Kelas: " + dataMahasiswa.kelas;

//buat array buku
let buku = [
    {"Nama": "sherlock", "jumlah": 2},
    {"Nama": "lupin", "jumlah": 2},
    {"Nama": "aladin", "jumlah": 2}
];

//fungsi cek buku
document.getElementById("cekBuku").addEventListener("click", function(){
    var jumlah = document.getElementById('jumlah').value;
    var bukuTerpilih = document.getElementById('buku').value;
    if(jumlah === ""){
        alert('Masukkan Jumlah Buku!');
    } else {
        //memeriksa ada apa engga di dalam array buku
        var bukuDitemukan = false;
        for (var i = 0; i < buku.length; i++){
            if(buku[i].Nama === bukuTerpilih){
                bukuDitemukan = true;
        //memeriksa jumlah buku yg diminta tersedia
        if (parseInt(jumlah) > buku[i].jumlah){
            alert("Jumlah buku tidak tersedia");
        } else {
            alert('Silahkan ambil buku anda')
        }
            break;
        }
    }
    //menampilkan pesan jika buku tidak ada di array buku 
    if (!bukuDitemukan){
        alert('Buku Tidak Ditemukan');
    }
    }
});

