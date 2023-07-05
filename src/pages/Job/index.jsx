import React from 'react';
import { Pagination } from 'antd';
import job from "../../assets/images/job.png";
import { Search } from '../../components/Search';
import coin from "../../assets/icons/coin.svg";
import color from "../../assets/icons/color.svg";
import laptop from "../../assets/icons/laptop.svg";
import medicine from "../../assets/icons/medicine.svg";
import react from "../../assets/icons/react.svg";
import other from "../../assets/icons/other.svg";
import jobs from "../../assets/images/jobs.svg";
//data
import {jobsList} from "../../utils/data.js";

export default function Job() {
  window.scrollTo(0, 0);
  const categories = [
    { title: "Tibbiyot", icon: medicine },
    { title: "Axborot texnologiyalari (IT)", icon: laptop },
    { title: "Ilm-fan", icon: react },
    { title: "Moliya, buxgalteriya", icon: coin },
    { title: "Dizayn va amaliy sanʼat", icon: color },
    { title: "Boshqalar", icon: other }
  ]
  return (
    <div className='bg-[#F6F5F4]'>
      <div className='container'>
      <div className='main_block_v2'>
        <div className='banner'>
          <div className='flex flex-col justify-center items-center xl:px-0 px-5'>
            <ul className='main_text'>
              <h1>Kasblar ro'yxati</h1>
              <li className='text-gray'>Kelajakda egallamoqchi bo’lgan sohangiz uchun yo’nalishlar</li>
            </ul>
          </div>
          <div className='flex justify-center items-center colImg'>
            <img src={job} alt="aboutImg" className='relative xl:left-0 md:left-14 left-8'/>
          </div>
        </div>
        <Search placeholder="Qanaqa kasb qidiryabsiz?" />
      </div>
      <div className='text-center py-10'>
        <h2 className='mb-10'>Kategoriyalar</h2>
        <div className='category'>
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
        <div className='job_wrapper grid grid-cols-2 gap-x-8 gap-y-5 w-full'>
          {jobsList.map((item, key) =>
            <div key={key} className="job_card">
              <img src={item.logo} alt="img" className='w-24 h-20 rounded-lg' />
              <div className='flex flex-col gap-y-4'>
                <li className='font-bold'>{item.name}</li>
                <li className='text-gray flex items-center gap-x-1'>{item.category}</li>
              </div>
            </div>
          )}
        </div>
        <Pagination defaultCurrent={1} total={50} className="mt-5" />
      </div>
      </div>
    </div>
  )
}
