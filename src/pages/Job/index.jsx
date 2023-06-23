import React from 'react'
import job from "../../assets/images/job.png";
import { Search } from '../../components/Search';
import coin from "../../assets/icons/coin.svg";
import color from "../../assets/icons/color.svg";
import laptop from "../../assets/icons/laptop.svg";
import medicine from "../../assets/icons/medicine.svg";
import react from "../../assets/icons/react.svg";
import other from "../../assets/icons/other.svg";

export default function Job() {
  window.scrollTo(0,0);
  const categories = [
    { title: "Tibbiyot", icon: medicine },
    { title: "Axborot texnologiyalari (IT)", icon: laptop },
    { title: "Ilm-fan", icon: react },
    { title: "Moliya, buxgalteriya", icon: coin },
    { title: "Dizayn va amaliy sanʼat", icon: color },
    { title: "Boshqalar", icon: other }
  ]
  return (
    <div className='container bg-[#F6F5F4] py-5'>
      <div className='h-[90vh]'>
        <div className='grid grid-cols-2'>
          <div className='flex flex-col justify-center items-center'>
            <ul className='grid gap-y-10 px-20'>
              <h1>Kasblar ro'yxati</h1>
              <li className='text-gray'>Kelajakda egallamoqchi bo’lgan sohangiz uchun yo’nalishlar</li>
            </ul>
          </div>
          <div className='flex justify-center items-center'>
            <img src={job} alt="aboutImg" />
          </div>
        </div>
        <Search placeholder="Qanaqa kasb qidiryabsiz?"/>
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
