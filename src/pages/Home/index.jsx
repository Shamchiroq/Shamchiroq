import React, {useEffect} from 'react';
import mainPic from "../../assets/images/main-pic.svg";
import about from "../../assets/images/about.png";
import test from "../../assets/images/test.png";
import job from "../../assets/images/job.png";
import entertainment from "../../assets/images/entertainment.png";
import RoundedButton from "../../components/Button";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0);
    AOS.init({duration:2000});
  })
  return (
    <>
      {/* 1 */}
      <div className='bg-pale'>
        <div className='container grid xl:grid-cols-2 grid-cols-1 xl:py-36 md:py-20 py-10 gap-y-10' data-aos="fade">
          <div className='flex flex-col justify-center items-center xl:text-start text-center xl:px-10 px-0 gap-y-8'>
            <h1 className="xl:leading-[65px]"><span className='text-orange'>Kelajak sari</span> yo’lingizni biz bilan yoriting!</h1>
            <h3 className="xl:text-base text-sm">Foydalanuvchiga kelajak uchun maqsadlarga qo’yishga yordam beruvchi ta’lim platformasi</h3>
          </div>
          <div className='flex justify-end xl:order-none colImg'>
            <img src={mainPic} alt="img" className='relative xl:left-0 left-10'/>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div>
        <div className='container grid xl:grid-cols-2  grid-cols-1 py-20'>
          <div className='flex justify-center'>
            <img src={about} alt="img" className='relative xl:left-0 left-4' data-aos="fade-right"/>
          </div>
          <div className='flex flex-col justify-center xl:px-10 px-2 gap-y-8 xl:text-start text-center'>
            <h1 className="xl:leading-[60px]" data-aos="fade-right">Biz haqimizda <span className='text-orange'>ko’proq</span> bilib oling</h1>
            <h3 data-aos="fade-right">Platforma kelajagingiz uchun qay darajada muhimligini bilish uchun, avval, qanday ishlashini tushinib oling</h3>
            <div className='flex gap-x-3 xl:justify-start justify-center' data-aos="fade-right">
              <RoundedButton type="blue" link="about">O’qib chiqish →</RoundedButton>
              <RoundedButton type="red" link="about">Videoni ko’rish →</RoundedButton>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className='bg-pale'>
        <div className='container grid xl:grid-cols-2 grid-cols-1 py-20' data-aos="fade-left">
          <div className='flex flex-col justify-center xl:px-10 px-2 gap-y-8 xl:text-start text-center'>
            <h1 className="xl:leading-[60px]"><span className='text-orange'>Psixologik test</span> bilan kelajak sohangizni aniqlang</h1>
            <h3>Unutmang, kelajagingiz shuyerdan boshlanadi</h3>
            <RoundedButton type="blue" link="test">Testni topshirish →</RoundedButton>
          </div>
          <div className='flex justify-center md:colImg mb-10'>
            <img src={test} alt="img" />
          </div>
        </div>
      </div>
      {/* 4 */}
      <div>
      <div className='container grid xl:grid-cols-2 grid-cols-1 py-20' data-aos="fade-right">
        <div className='flex justify-center'>
          <img src={job} alt="img" className='relative xl:left-0 left-10'/>
        </div>
        <div className='flex flex-col justify-center gap-y-8 xl:text-start text-center xl:px-10 px-2'>
          <h1 className="xl:leading-[60px]"><span className='text-orange'>Barcha kasblar</span> haqida ma’lumotga ega bo’ling</h1>
          <h3>Kelajakda egallamoqchi bo’lgan sohangiz uchun yo’nalishlar</h3>
          <RoundedButton type="blue" link="jobs">Kirish →</RoundedButton>
        </div>
      </div>
      </div>
      {/* 5 */}
      <div className='bg-pale'>
        <div className='container grid xl:grid-cols-2 grid-cols-1 py-20' data-aos="fade-left">
        <div className='flex flex-col justify-center xl:px-10 px-2 gap-y-8 xl:text-start text-center'>
          <h1 className="xl:leading-[60px]">Bizda siz uchun <span className='text-orange'>ko’ngilochar o’yinlar</span> ham mavjud!</h1>
          <h3>Vaqtingizni chog’ o’tkazing</h3>
          <RoundedButton type="blue" link="entertainment">Bo’limga o’tish →</RoundedButton>
        </div>
        <div className='flex xl:justify-end justify-center xl:order-none colImg'>
          <img src={entertainment} alt="img" className="relative xl:left-0 left-16"/>
        </div>
        </div>
      </div>
    </>
  )
}
