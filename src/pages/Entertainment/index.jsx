import React from 'react';
import entertainment from "../../assets/images/entertainment.png";
import brain_q from "../../assets/icons/brain_q.svg";
import brain_s from "../../assets/icons/brain_s.svg";
import bx_brain from "../../assets/icons/bx_brain.svg";
import speed from "../../assets/icons/speed.svg";
import target from "../../assets/icons/target.svg";
import other from "../../assets/icons/other.svg";


export default function Entertainment() {
  window.scrollTo(0,0);
  const categories = [
    { title: "Fikrlashni rivojlantiruvchi o’yinlar", icon: brain_q },
    { title: "Tezlikni oshiruvchi o’yinlar", icon: speed },
    { title: "Diqqatni oshiruvchi o’yinlar", icon: target },
    { title: "Mantiqni rivojlantiruvchi o’yinlar", icon: bx_brain },
    { title: "Xotirani rivojlantiruvchi o’yinlar", icon: brain_s },
    { title: "Boshqalar", icon: other }
  ]
  return (
    <div className='container bg-[#F6F5F4] py-5'>
      <div className='main_block'>
        <div className='flex flex-col justify-center items-center'>
          <ul className='grid gap-y-10 px-20'>
            <h1>Ko’ngilochar</h1>
            <li className='text-gray'>Bilim olishga yo'naltirilgan o'yinlar yordamida vaqtingizdan unumli foydalaning</li>
          </ul>
        </div>
        <div className='flex justify-center items-center'>
          <img src={entertainment} alt="aboutImg" />
        </div>
      </div>
      <div className='category text-center'>
        <h2 className='mb-10'>Kategoriyalar</h2>
        <div className='grid grid-cols-3 gap-5'>
          {categories.map((item, id) =>
            <div key="id" className="bg-[white] py-6 cursor-pointer rounded-xl flex flex-col items-center hover:shadow hover:shadow-dark-green">
              <img src={item.icon} alt="icon" />
              <li className='text-gray mt-4'>{item.title}</li>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}