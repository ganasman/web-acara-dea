const fs   = require('fs')
const path = require('path')

const BASE_URL = 'https://acara-khitan-ghaisan.vercel.app'

const daftarTamu = [
  'Leni & Dani',
  'Lela And Family',
  'Hj. Ade',
  'Iin Indrayati',
  'Rojali',
  'Hani Intan & Anto',
  'Lusiyani',
  'Bdn. Eneng Nurasiah',
  'Bpk. Nurman & Ibu Dati',
  'Ibu Yopi Kusmiati',
  'Bidan Lia',
  'Heklen Martin',
  'Shinta Rosita',
  'Mastari',
  'Kyai H. Ardian & Istri',
  'Kyai H. Faisal Hadiq & Istri',
  'Kyai Hj. Nurwahyudi & Istri',
  'Kyai Hj. Firmansyah & Istri',
  'Ustadzah Ubik & Suami',
  'Ustadzah Umiyati',
  'Yuliati',
  'Romadona',
  'Firman Wiwi And Family',
  'Mamah Atha',
  'Mamah Kyanu',
  'Mamah Daru',
  'Mamah Adit',
  'Atik',
  'Mike',
  'Ranti',
  'Rere',
  'Hj. Saffa Kamila & Family',
  'Hj. Ida Farida',
  'Fachrudin',
  'Uda Yuli & Keluarga',
  'Bundah Indah',
  'Nurmalasari Dan Suami',
  'Siti Maemunah',
  'Siti Maesoroh',
  'Niken',
  'Fuji Dan Keluarga',
  'Tita & Suami',
  'Siti Novianti & Suami',
  'Tante Euis & Suami',
  'Nunik Nurjanah & Suami',
  'Meita Dini & Suami',
  'Zaenudin & Istri',
  'Devi & Suami',
  'Bidan Asmawati & Suami',
  'Neneng Kurniasih & Suami',
  'Masitoh & Suami',
  'Lia Juliana',
  'Raden Tita',
  'Tante Nina',
  'Andi Wahyudi',
  'Ruli',
  'Iwan Rosihan',
  'Rijalul Fitri',
  'Kyai Hj. Rahmat',
  'Tomi & Keluarga',
  'Ari Wibowo',
  'Imelda',
  'Ivan Kurniawan',
  'Gun Sigantara',
  'Bayu',
  'Pujo Jatmiko',
  'Vira',
  'Ucok Nobi',
  'Tubagus Azmi',
  'Rosdianti Astuti',
  'Farid Gumanti',
  'Suhada',
  'Anton',
  'Joindra',
  'Sudarmono',
  'Randi Setiawan',
  'Ahmad Junaedi',
  'Nana Supriatno',
  'Widiarto',
  'Jadiarto',
  'Uwais',
  'Latief',
  'Pak Indra',
  'Pak Dedi',
  'Pak Irwan',
  'Pak Dahri',
  'Pak Roni',
  'Pak Azka',
  'Pak Yamin',
  'Jajang',
  'Aziz',
  'Ipul',
  'Zei',
  'Ari',
  'Erwin',
  'Tuti & Suami',
  'Farah',
  'Reihana',
  'Siti',
  'Ganesha',
  'Vinza',
  'Fina',
  'Nayla',
  'Raeka',
  'Shaira',
  'Roro',
  'Raisya',
  'Zoreatty',
  'Ahdina',
  // ── Tamu baru ──
  'Ust Hafidz Muzakki',
  'Ust Dedek Kurniawan',
  'Ust Syamsul Muarif',
  'Adit',
  'Atha',
  'Aldy',
  'Randy',
  'Bilal',
  'Daru',
  'Syakira',
  'K.H Adrian Mafatihallah Kariem M.A & Istri',
  'K.H Rahmat & Istri',
  'K.H Andi & Istri',
  'K.H Faisal Hadiq & Istri',
  'K.H Nurwahyudi & Istri',
  'Firmansyah & Istri',
  'Lusiana',
  'Bunda Indah',
  'Siti Maisaroh',
  'Hj. Nadiyah',
  'Gupe',
  'Indah & Suami',
  'Indrayani & Suami',
  'Salsa',
  'Wasidi & Istri',
  'Mamah Rendra',
]

console.log('='.repeat(65))
console.log(`  LINK UNDANGAN KHITAN Ghaisan — ${daftarTamu.length} Tamu`)
console.log('='.repeat(65))
console.log()

daftarTamu.forEach((nama, i) => {
  const link = `${BASE_URL}/?nama=${encodeURIComponent(nama)}`
  const no   = String(i + 1).padStart(3, ' ')
  console.log(`${no}. ${nama}`)
  console.log(`     ${link}`)
  console.log()
})

const lines = daftarTamu.map((nama, i) => {
  const link = `${BASE_URL}/?nama=${encodeURIComponent(nama)}`
  return `${i + 1}. ${nama}\n   ${link}`
})

const output = [
  'LINK UNDANGAN KHITAN Muhammad Ghaisan Al Faqih',
  `Total: ${daftarTamu.length} tamu`,
  `Generated: ${new Date().toLocaleString('id-ID')}`,
  '='.repeat(60),
  '',
  ...lines.map(l => l + '\n'),
].join('\n')

const outPath = path.join(__dirname, 'links.txt')
fs.writeFileSync(outPath, output, 'utf8')

console.log('='.repeat(65))
console.log(`  Total: ${daftarTamu.length} undangan`)
console.log('='.repeat(65))
console.log()
console.log('File tersimpan di: links.txt')
console.log()