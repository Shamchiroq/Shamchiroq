import React, {useEffect} from 'react';
import { Pagination } from 'antd';
import entertainment from "../../assets/images/entertainment.png";
import brain_q from "../../assets/icons/brain_q.svg";
import brain_s from "../../assets/icons/brain_s.svg";
import bx_brain from "../../assets/icons/bx_brain.svg";
import speed from "../../assets/icons/speed.svg";
import target from "../../assets/icons/target.svg";
import other from "../../assets/icons/other.svg";
import {games} from "../../utils/data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Entertainment() {
  useEffect(()=>{
    window.scrollTo(0, 0);
    AOS.init({duration:2000});
  })
  const categories = [
    { title: "Fikrlashni rivojlantiruvchi o’yinlar", icon: brain_q },
    { title: "Tezlikni oshiruvchi o’yinlar", icon: speed },
    { title: "Diqqatni oshiruvchi o’yinlar", icon: target },
    { title: "Mantiqni rivojlantiruvchi o’yinlar", icon: bx_brain },
    { title: "Xotirani rivojlantiruvchi o’yinlar", icon: brain_s },
    { title: "Boshqalar", icon: other }
  ]
  return (
    <div className='bg-[#F6F5F4]'>
      <div className='container'>
      <div className='main_block' data-aos="fade">
        <div className='flex flex-col justify-center items-center'>
          <ul className='grid xl:gap-y-10 gap-y-5 xl:px-20 px-5 xl:text-start text-center'>
            <h1>Ko’ngilochar</h1>
            <li className='text-gray'>Bilim olishga yo'naltirilgan o'yinlar yordamida vaqtingizdan unumli foydalaning</li>
          </ul>
        </div>
        <div className='flex justify-center items-center xl:order-none colImg xl:py-0 py-5'>
          <img src={entertainment} alt="aboutImg" className='relative xl:left-0 md:left-24 left-14'/>
        </div>
      </div>
      <div className='text-center pt-10'>
        <h2 className='mb-10'>Kategoriyalar</h2>
        <div className='category' data-aos="fade-right">
          {categories.map((item, id) =>
            <div key={id} className="bg-[white] py-6 cursor-pointer rounded-xl flex flex-col items-center hover:shadow hover:shadow-dark-green">
              <img src={item.icon} alt="icon" />
              <li className='text-gray mt-4'>{item.title}</li>
            </div>
          )}
        </div>
      </div>
      <div className="job flex flex-col items-center pt-10 pb-8">
        <h2 className='mb-10'>Yangi qo’shilganlar</h2>
        <div className='job_wrapper' data-aos="fade-left">
          {games.map((item, key) =>
            <a key={key} href={item.link} target="_blank">
              <div className="job_card">
              <img src={item.image} alt="img" className='w-24 h-20 rounded-lg' />
              <div className='flex flex-col gap-y-4'>
                <li className='font-bold'>{item.name}</li>
                <li className='text-gray flex items-center gap-x-1'>{item.desc}</li>
              </div>
            </div>
            </a>
          )}
        </div>
        <Pagination defaultCurrent={1} total={50} className="mt-5" />
      </div>
      </div>
    </div>
  )
}
