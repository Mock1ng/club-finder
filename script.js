// CLASS

// class Orang {
//     constructor(nama, umur) {
//         this.nama = nama;
//         this.umur = umur;
//     }

//     identitas() {
//         console.log(`nama: ${this.nama} dan umur: ${this.umur}`);
//     }
// }

// class Profesi extends Orang {
//     constructor(nama, umur, pekerjaan) {
//         super(nama, umur);

//         this.pekerjaan = pekerjaan;
//     }

//     info() {
//         console.log(`nama: ${this.nama}, umur: ${this.umur} dan memiliki pekerjaan sebagai ${this.pekerjaan}`);
//     }
// }

// const developer = new Profesi('Budi', 23, 'Developer')

// developer.identitas();


// Asyncronous

// const kopi = callback => {
//     let kopiJadi = null;
//     console.log('Silahkan tunggu, kopi sedang dibuat');
//     setTimeout(() => {
//         kopiJadi = 'kopi sudah jadi!';
//         callback(kopiJadi);
//     }, 3000)
// }

// kopi(hasil => {
//     console.log(hasil);
// })

// PROMISE

// const buatKopi = (oke, gagal) => {
//     const bahanAda = true;
//     console.log('Pesanan diterima, sedang memeriksa bahan...');
//     setTimeout(() => {
//         bahanAda ? oke(true) : gagal('Sorry bos bahannya abis');
//     }, 3000)
// }

// const pelanggan1 = new Promise(buatKopi);

// const bahannyaAda = (ada) => {
//     return new Promise((bahanSiap, gagal) => {
//         if (ada) console.log('Bahannya ada dan sedang disiapkan...');
//         const bahanSudahSiap = true;
//         setTimeout(() => {
//             bahanSudahSiap ? bahanSiap(true) : gagal("pas disiapin, malah rusak!")
//         }, 2000)
//     })
// }

// const bahanDiolah = (bahanSiap) => {
//     return new Promise((telahDiolah, gagal) => {
//         if (bahanSiap) console.log('Bahan sudah siap, sekarang sedang diolah...');
//         const terolah = false;
//         setTimeout(() => {
//             terolah ? telahDiolah(true) : gagal("Bahan gagal diolah bos!")
//         }, 4000)
//     })
// }

// const disajikan = (telahDiolah) => {
//     return new Promise((siapSaji, gagal) => {
//         if (telahDiolah) console.log('Bahan sedang disajikan...');
//         const siap = true;
//         setTimeout(() => {
//             siap ? siapSaji('Silahkan dinikmati!!') : gagal('Bahan gagal disajikan');
//         }, 3000)
//     })
// }

// const suksesnt = data => {
//     console.log(data);
// }

// pelanggan1.then(bahannyaAda)
//     .then(bahanDiolah)
//     .then(disajikan)
//     .then(data => {
//         console.log(data);
//     })
//     .catch(e => {
//         console.log({
//             error: e
//         });
//     });


// ASYNC AWAIT
// const buatKopi = () => {
//     return new Promise((oke = true, gagal) => {
//         setTimeout(() => {
//             oke ? oke('kopi jadi') : gagal('gagal boyy')
//         }, 3000)
//     })
// }

// const getData = async () => {
//     try {
//         const cobaBikinKopi = await pelanggan1;
//         const bahannyaUdahAdaWoi = await bahannyaAda(cobaBikinKopi);
//         const bahanTerolah = await bahanDiolah(bahannyaUdahAdaWoi);
//         const tersaji = await disajikan(bahanTerolah);
//         console.log(tersaji);
//     } catch (error) {
//         console.log({
//             err: error
//         });
//     }
// }

// getData();