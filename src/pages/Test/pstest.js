export function myFunction(value) {
  console.log(value);
var A = 0;
var B = 0;
var C = 0;
var D = 0;
var E = 0;
var F = 0;
var G = 0;
var H = 0;
var I = 0;
var J = 0;
var K = 0;
var L = 0;
var M = 0;
var N = 0;
var O = 0;
var P = 0;
var Q = 0;
var R = 0;

switch ("A") {
  case 'A':
    console.log('Case A');
    A = A+1;
    break;
    case 'B':
    console.log('Case B');
    B = B+1;
    break;
    case 'C':
    console.log('Case C');
    C = C+1;
    break;
    case 'D':
    console.log('Case D');
    D = D+1;
    break;
    case 'E':
    console.log('Case E');
    E = E+1;
    break;
    case 'F':
    console.log('Case F');
    F = F+1;
    break;
    case 'G':
    console.log('Case G');
    G = G+1;
    break;
    case 'H':
    console.log('Case H');
    H = H+1;
    break;
    case 'I':
    console.log('Case I');
    I = I+1;
    break;
    case 'J':
    console.log('Case J');
    J = J+1;
    break;
    case 'K':
    console.log('Case K');
    K = K+1;
    break;
    case 'L':
    console.log('Case L');
    L = L+1;
    break;
    case 'M':
    console.log('Case M');
    M = M+1;
    break;
    case 'N':
    console.log('Case N');
    N = N+1;
    break;
    case 'O':
    console.log('Case O');
    O = O+1;
    break;
    case 'P':
    console.log('Case P');
    P = P+1;
    break;
    case 'Q':
    console.log('Case Q');
    Q = Q+1;
    break;
    case 'R':
    console.log('Case R');
    R = R+1;
    break; 
}





console.log(A);
console.log(B);
console.log(C);

const arrAll = [A, B, C, D, E, F, G, H, J, K, L, M, N, O, P, Q, R];
//var maxx = arrAll[arrAll.indexOf(Math.max(...arrAll))]
//console.log(maxx)
var maxx = Math.max(...arrAll)

const dicAll = {
  "A" : A, 
  "B" : B,
  "C" : C,
  "D" : D,
  "E" : E,
  "F" : F,
  "G" : G,
  "H" : H,
  "I" : I,
  "J" : J,
  "K" : K,
  "L" : L,
  "M" : M,
  "N" : N,
  "O" : O,
  "P" : P,
  "Q" : Q,
  "R" : R
  };

function getObjKey(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}

//const obj = {country: 'Chile', city: 'Santiago'};

var z = (getObjKey(dicAll, maxx));

switch (z) {
  case 'A':
  document.getElementById("soha").innerHTML = "San'at, Audio/Video (A/V) kommunikatsiya texnologiyalari";
  document.getElementById("izoh").innerHTML = "Ijodiy san'at, drama, musiqa va raqsga,qiziqish";
  document.getElementById("otm").innerHTML = "Toshkent moliya instituti,Toshkent to'qimachilik va yengil sanoat instituti, O'zbekiston davlat konservatoriyasi";
  break;

  case 'B':
    document.getElementById("soha").innerHTML = "Fan, Texnologiya, Muhandislik va Matematika";
    document.getElementById("izoh").innerHTML = "Muammoni hal qilishga qiziqish, kashf qilish, to'plash va ma'lumotni tahlil qilish hamda natijalarni fan, matematika va muhandislik muammolariga qo'llash.";
    document.getElementById("otm").innerHTML = "Toshkent moliya instituti, Toshkent to'qimachilik va yengil sanoat instituti, Toshkent davlat sharqshunoslik universiteti, Toshkent kimyo-texnologiya instituti, Toshkent davlat pedagogika universiteti";
  break;

  case 'C':
    document.getElementById("soha").innerHTML = "O'simliklar, Qishloq xo'jaligi va Tabiiy boyliklar";
    document.getElementById("izoh").innerHTML = "O'simliklarni o'z ichiga olgan faoliyatga qiziqish (odatda ochiq havoda";
    document.getElementById("otm").innerHTML = "Toshkent to'qimachilik va yengil sanoat instituti";
  break;

  case 'D':
    document.getElementById("soha").innerHTML = "Qonun, Jamoat Xavfsizligi,  ";
    document.getElementById("izoh").innerHTML = "Odamlar va mulk uchun sud, qonuniy va himoyaviy xizmatlariga qiziqish";
    document.getElementById("otm").innerHTML = "Toshkent davlat pedagogika universiteti";
  break;

  case 'E':
    document.getElementById("soha").innerHTML = "Mexanik ishlab chiqarish";
    document.getElementById("izoh").innerHTML = "Mashina, qo'l asboblari yoki texnikadan foydalangan holda amaliy vaziyatlarda mexanik prinsiplarni qo'llashga qiziqish";
    document.getElementById("otm").innerHTML = "Toshkent to'qimachilik va yengil sanoat instituti, Toshkent davlat pedagogika universiteti";
  break;

  case 'F':
    document.getElementById("soha").innerHTML = "Sanoat ishlab chiqarishi";
    document.getElementById("izoh").innerHTML = "Zavod yoki sanoat sharoitida takrorlanadigan, uyushgan faoliyatga qiziqish";
    document.getElementById("otm").innerHTML = "Toshkent kimyo-texnologiya instituti";
  break;

  case 'G':
    document.getElementById("soha").innerHTML = "Biznes, Menejment va Administratsiya";
    document.getElementById("izoh").innerHTML = "Biznes faoliyatlarini tashkil etish, boshqarish va baholashga qiziqish.";
    document.getElementById("otm").innerHTML = "Toshkent moliya instituti, G.V.Plexanov nomli Rossiya iqtisodiyot universiteti Toshkent filiali (Rossiya), Toshkent shahridagi Singapur Menejmentni rivojlantirish instituti, Qarshi muhandislik-iqtisodiyot instituti";
  break;

  case 'H':
    document.getElementById("soha").innerHTML = "Marketing, Savdo va Xizmat ko'rsatish";
    document.getElementById("izoh").innerHTML = "Savdo yoki reklama usullaridan foydalangan holda, shaxsiy ishontirish orqali boshqalarga bir fikrni singdirishga qiziqish";
    document.getElementById("otm").innerHTML = "Toshkent moliya instituti,";
  break;

  case 'I':
    document.getElementById("soha").innerHTML = "Mehmonxona va turizm";
    document.getElementById("izoh").innerHTML = "Mehmonxonalar, restoranlar va dam olish maskanlarida sayohatni rejalashtirish va mehmonxona xizmatlarida boshqalarga xizmatlar ko'rsatishga qiziqish";
    document.getElementById("otm").innerHTML = "Rossiya davlat jismoniy tarbiya, sport, yoshlar va turizm universiteti federal davlat byudjeti oliy ta'lim muassasasining Samarqand filiali (Rossiya)";
  break;

  case 'J':
    document.getElementById("soha").innerHTML = "Inson xizmatlari";
    document.getElementById("izoh").innerHTML = "Boshqalarga aqliy, ma'naviy, ijtimoiy, jismoniy yoki martaba ehtiyojlari bilan yordam berishga qiziqish";
    document.getElementById("otm").innerHTML = "Toshkent davlat sharqshunoslik universiteti";
  break;

  case 'K':
    document.getElementById("soha").innerHTML = "Hukumat va Davlat Boshqaruvi";
    document.getElementById("izoh").innerHTML = "Mahalliy, hudud yoki federal darajada davlat faoliyatlarini bajarishga qiziqish";
    document.getElementById("otm").innerHTML = "Toshkent davlat yuridik universiteti";
  break;

  case 'L':
    document.getElementById("soha").innerHTML = "Arxitektura, Dizayn va Qurilish";
    document.getElementById("izoh").innerHTML = "Jismoniy tuzilmalarni loyihalash, rejalashtirish, boshqarish, qurish va saqlashga qiziqish";
    document.getElementById("otm").innerHTML = "Toshkent arxitektura-qurilish instituti";
  break;

  case 'M':
    document.getElementById("soha").innerHTML = "Ta'lim va Tarbiya";
    document.getElementById("izoh").innerHTML = "Ta'lim xizmatlarini, shu jumladan qo'llab-quvvatlash xizmatlari, kutubxona va axborot xizmatlarini rejalashtirish, boshqarish va taqdim etishga qiziqish";
    document.getElementById("otm").innerHTML = "Toshkent davlat pedagogika universiteti";
  break;

  case 'N':
    document.getElementById("soha").innerHTML = "Moliya, Bank, Investitsiyalar va Sug'urta";
    document.getElementById("izoh").innerHTML = "Moliyaviy va investitsion rejalashtirish, boshqarish hamda bank va sug'urta xizmatlarini ko'rsatishga qiziqish";
    document.getElementById("otm").innerHTML = "Toshkent moliya instituti,";
  break;

  case 'O':
    document.getElementById("soha").innerHTML = "Sog'liqni saqlash fanlari, Parvarishlash va Profilaktika";
    document.getElementById("izoh").innerHTML = "Diagnostik, terapevtik, axborot va ekologik xizmatlarni taqdim etish, jumladan, yangi sog'liqni saqlash xizmatlarini tadqiq qilish va rivojlantirish orqali boshqalarga yordam berishga qiziqish";
    document.getElementById("otm").innerHTML = "Toshkent tibbiyot akademiyasi";
  break;

  case 'P':
    document.getElementById("soha").innerHTML = "Axborot texnologiyalari (IT)";
    document.getElementById("izoh").innerHTML = ": Uskuna, dasturiy ta'minot, multimediya, tizim integratsiyasi xizmatlari va texnik yordamni loyihalash, ishlab chiqish, qo'llab-quvvatlash va boshqarishga qiziqish";
    document.getElementById("otm").innerHTML = "Toshkent moliya instituti, Toshkent to'qimachilik va yengil sanoat instituti, Toshkent davlat sharqshunoslik universiteti, Toshkent kimyo-texnologiya instituti";
  break;

  case 'Q':
    document.getElementById("soha").innerHTML = "Hayvonlar, qishloq xo'jaligi va tabiiy resurslar";
    document.getElementById("izoh").innerHTML = "Hayvonlarni o'rgatish, boqish, oziqlantirish va parvarish qilishni o'z ichiga olgan faoliyatga qiziqish";
    document.getElementById("otm").innerHTML = "Toshkent irrigatsiya va qishloq xo‘jaligini mexanizatsiyalash muhandislari instituti";
  break;

  case 'R':
    document.getElementById("soha").innerHTML = "Transport, Taqsimlash va Logistika";
    document.getElementById("izoh").innerHTML = "Odamlar, materiallar va tovarlarning avtomobil, quvur, havo, temir yo'l yoki suv orqali harakatlanishiga qiziqish";
    document.getElementById("otm").innerHTML = "Toshkent shahridagi Inxa universiteti";
  break;
}
}


