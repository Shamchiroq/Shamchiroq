import React from 'react';
import mainPic from "../../assets/images/main-pic.svg";
import about from "../../assets/images/about.png";
import test from "../../assets/images/test.png";
import job from "../../assets/images/job.png";
import entertainment from "../../assets/images/entertainment.png";
import RoundedButton from "../../components/Button";

export default function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      {/* 1 */}
      <div className='bg-pale'>
        <div className='container grid grid-cols-2 py-20'>
          <div className='flex flex-col justify-center items-center px-10 gap-y-8'>
            <h1 className="leading-[60px]"><span className='text-orange'>Kelajak sari</span> yo’lingizni biz bilan yoriting!</h1>
            <h3>Foydalanuvchiga kelajak uchun maqsadlarga qo’yishga yordam beruvchi ta’lim platformasi</h3>
          </div>
          <div className='flex justify-end'>
            <img src={mainPic} alt="img" />
          </div>
        </div>
      </div>
      {/* 2 */}
      <div>
        <div className='container grid grid-cols-2 py-20'>
          <div className='flex justify-center'>
            <img src={about} alt="img" />
          </div>
          <div className='flex flex-col justify-center px-10 gap-y-8'>
            <h1 className="leading-[60px]">Biz haqimizda <span className='text-orange'>ko’proq</span> bilib oling</h1>
            <h3>Platforma kelajagingiz uchun qay darajada muhimligini bilish uchun, avval, qanday ishlashini tushinib oling</h3>
            <div className='flex gap-x-3'>
              <RoundedButton type="blue" link="about">O’qib chiqish →</RoundedButton>
              <RoundedButton type="red" link="about">Videoni ko’rish →</RoundedButton>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className='bg-pale'>
        <div className='container grid grid-cols-2 py-20'>
          <div className='flex flex-col justify-center items-start px-10 gap-y-8'>
            <h1 className="leading-[60px]"><span className='text-orange'>Psixologik test</span> bilan kelajak sohangizni aniqlang</h1>
            <h3>Unutmang, kelajagingiz shuyerdan boshlanadi</h3>
            <RoundedButton type="blue" link="test">Testni topshirish →</RoundedButton>
          </div>
          <div className='flex justify-end'>
            <img src={test} alt="img" />
          </div>
        </div>
      </div>
      {/* 4 */}
      <div>
      <div className='container grid grid-cols-2 py-20'>
        <div className='flex justify-center'>
          <img src={job} alt="img" />
        </div>
        <div className='flex flex-col justify-center px-10 gap-y-8'>
          <h1 className="leading-[60px]"><span className='text-orange'>Barcha kasblar</span> haqida ma’lumotga ega bo’ling</h1>
          <h3>Kelajakda egallamoqchi bo’lgan sohangiz uchun yo’nalishlar</h3>
          <RoundedButton type="blue" link="jobs">Kirish →</RoundedButton>
        </div>
      </div>
      </div>
      {/* 5 */}
      <div className='bg-pale'>
        <div className='container grid grid-cols-2 py-20'>
        <div className='flex flex-col justify-center px-10 gap-y-8'>
          <h1 className="leading-[60px]">Bizda siz uchun <span className='text-orange'>ko’ngilochar o’yinlar</span> ham mavjud!</h1>
          <h3>Vaqtingizni chog’ o’tkazing</h3>
          <RoundedButton type="blue" link="entertainment">Bo’limga o’tish →</RoundedButton>
        </div>
        <div className='flex justify-end'>
          <img src={entertainment} alt="img" />
        </div>
        </div>
      </div>
    </>
  )
}
