import React, {useEffect} from 'react';
import about from "../../assets/images/main-pic.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(()=>{
    window.scrollTo(0, 0);
    AOS.init({duration:2000});
    })
  return (
    <div className='bg-[#F6F5F4]'>
      <div className='container pb-10 grid gap-y-12'>
        <div className='main_block' data-aos="fade">
          <div className='flex flex-col justify-center items-center'>
            <ul className='grid xl:gap-y-10 gap-y-5 xl:text-start text-center' data-aos="fade">
              <h1>Loyiha haqida</h1>
              <li className='text-gray'>Loyiha haqida batafsil ma’lumot oling</li>
            </ul>
          </div>
          <div className='flex justify-center items-center colImg'>
            <img src={about} alt="aboutImg" className='relative xl:left-0 left-10'/>
          </div>
        </div>
        <div className='about_desc flex flex-col items-center gap-y-10 xl:px-0 px-5' data-aos="fade-right">
          <h2>Loyiha haqida ma’lumot</h2>
          <div className='bg-[#fff] p-8 rounded-xl'>
            <h3>
              Kelajakda qaysi oliygohda ta'lim olib qanaqa kasb egasi bo'lsam ekan?" degan savol, deyarli, har bir maktab o'quvchisini, ayniqsa, yuqori sinf o'quvchisini hayolida tez-tez aylanadi. Lekin ota-ona va yaqinlarning xohishi yoxud ayrim ustozlarning tajribasizligi natijasida ushbu savolga noto'g'ri javob olinadi yoki savol ochiq qolgan holda maktab tugatiladi. Natijada, bitiruvchilar, yo'nalishidan qat'iy nazar, kirish balli eng past bo'lgan OTMga "eplab kirib olsam bo'ldi" degan tamoyil asosida hujjat topshirishadi. Shu vaqtda ular 2 xil holatga duch kelishlari mumkin. Birinchisi - o'qishdan yiqilib pul topish taraddusini ko'rish. Ikkinchisi - o'qishga kirib umuman o'ziga yoqmagan narsalarni o'rganish va ishini "eplab" qiladigan kadr bo'lib chiqish. Qarabsizki, kelajakda jamiyat foydasiga ulkan hissa qo'shishi mumkin bo'lgan potensial yoshlar qo'ldan boy beriladi. <br /><br /> Bizning ushbu platformamiz esa maktab o'quvchisiga o'z qobiliyati va qiziqishlaridan kelib chiqqan holda to'g'ri yo'nalish va oliygoh tanlashga ko'mak beradi. Ushbu jarayon o'z ishining ustasi bo'lgan mutaxassislar tomonidan tashkil etilgan psixologik sinov-testlari natijasi asosida amalga oshiriladi.

              <br /><br />Bundan tashqari, o'quvchilar xalqaro miqyosda va respublikamizda bo'lib o'tishi rejalashtirilayotgan turli xil grant, musobaqa, tanlovlar, hakaton, konferensiya va shu kabi bir qancha maktab yoshiga mos voqea va hodisalardan xabardor etib boriladi.

              <br /><br />O'quvchilarning bo'sh vaqtini unumli o'tkazish maqsadida portalda bilim olishga yo'naltirilgan o'yinlarni tashkil etish ko'zda tutilgan.
            </h3>
          </div>
        </div>
        <div className='about_video flex flex-col items-center gap-y-10' data-aos="fade-left">
          <h2>Loyiha haqida video</h2>
          <iframe className="xl:h-[60vh] h-[30vh] xl:w-[60%] w-[95%] rounded-lg" src="https://www.youtube.com/embed/sHBm84DMsLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}
