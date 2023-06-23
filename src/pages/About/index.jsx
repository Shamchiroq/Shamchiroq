import React from 'react';
import about from "../../assets/images/main-pic.svg";
export default function About() {
  window.scrollTo(0,0);
  return (
    <div className='container bg-[#F6F5F4] py-5'>
      <div className='main_block'>
        <div className='flex flex-col justify-center items-center'>
          <ul className='grid gap-y-10'>
            <h1>Loyiha haqida</h1>
            <li className='text-gray'>Loyiha haqida batafsil ma’lumot oling</li>
          </ul>
        </div>
        <div className='flex justify-center items-center'>
          <img src={about} alt="aboutImg" />
        </div>
      </div>
      <div className='about_desc flex flex-col items-center gap-y-10'>
        <h2>Loyiha haqida ma’lumot</h2>
        <div className='bg-[#fff] p-8 rounded-xl'>
          <h3>
            Kelajakda qaysi oliygohda ta'lim olib qanaqa kasb egasi bo'lsam ekan?" degan savol, deyarli, har bir maktab o'quvchisini, ayniqsa, yuqori sinf o'quvchisini hayolida tez-tez aylanadi. Lekin ota-ona va yaqinlarning xohishi yoxud ayrim ustozlarning tajribasizligi natijasida ushbu savolga noto'g'ri javob olinadi yoki savol ochiq qolgan holda maktab tugatiladi. Natijada, bitiruvchilar, yo'nalishidan qat'iy nazar, kirish balli eng past bo'lgan OTMga "eplab kirib olsam bo'ldi" degan tamoyil asosida hujjat topshirishadi. Shu vaqtda ular 2 xil holatga duch kelishlari mumkin. Birinchisi - o'qishdan yiqilib pul topish taraddusini ko'rish. Ikkinchisi - o'qishga kirib umuman o'ziga yoqmagan narsalarni o'rganish va ishini "eplab" qiladigan kadr bo'lib chiqish. Qarabsizki, kelajakda jamiyat foydasiga ulkan hissa qo'shishi mumkin bo'lgan potensial yoshlar qo'ldan boy beriladi. <br /><br /> Bizning ushbu platformamiz esa maktab o'quvchisiga o'z qobiliyati va qiziqishlaridan kelib chiqqan holda to'g'ri yo'nalish va oliygoh tanlashga ko'mak beradi. Ushbu jarayon o'z ishining ustasi bo'lgan mutaxassislar tomonidan tashkil etilgan psixologik sinov-testlari natijasi asosida amalga oshiriladi.

            <br /><br />Bundan tashqari, o'quvchilar xalqaro miqyosda va respublikamizda bo'lib o'tishi rejalashtirilayotgan turli xil grant, musobaqa, tanlovlar, hakaton, konferensiya va shu kabi bir qancha maktab yoshiga mos voqea va hodisalardan xabardor etib boriladi.

            <br /><br />O'quvchilarning bo'sh vaqtini unumli o'tkazish maqsadida portalda bilim olishga yo'naltirilgan o'yinlarni tashkil etish ko'zda tutilgan.
          </h3>
        </div>
      </div>
      <div className='about_video flex flex-col items-center my-20 gap-y-10'>
      <h2>Loyiha haqida video</h2>
      <iframe className="h-[60vh] w-[60%] rounded-lg" src="https://www.youtube.com/embed/BoswxN6sx6g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}
