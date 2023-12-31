import React from 'react';
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom"
export default function Footer() {
  return (
    <footer className='bg-[#F6F5F4]'>
      <div className='container grid xl:grid-cols-5 md:grid-cols-5 grid-cols-1 xl:gap-y-0 gap-y-6'>
        <div className='flex flex-col justify-between xl:col-span-2 md:col-span-2 col-span-1 xl:text-start text-center xl:items-start items-center gap-y-4'>
          <div className='grid gap-y-3'>
            <NavLink to="/"><img src={logo} alt="logo" className='xl:mx-0 mx-auto'/></NavLink>
            <h4 className='text-gray font-semibold'>Kelajak sari yo’lingizni biz bilan yoriting!</h4>
          </div>
          <li className='text-gray'>© Shamchiroq 2023. Barcha huquqlar himoyalangan.</li>
        </div>
        <ul className='xl:text-start text-center'>
          <li className='mb-2 font-bold'>Biz bilan bog'lanish</li>
          <li className='text-gray my-1'>+998 (90) 123-45-67</li>
          <li className='text-gray my-1'>info@shamchiroq.uz</li>
        </ul>
        <ul className='xl:text-start text-center'>
          <li className='mb-2 font-bold'>Ma'lumot</li>
          <NavLink to="about"><li className='text-gray my-1'>Loyiha haqida</li></NavLink>
        </ul>
        <ul className='xl:text-start text-center'>
          <li className='mb-2 font-bold'>Platforma</li>
          <NavLink to="test"><li className='text-gray my-1'>Psixologik test</li></NavLink>
          <NavLink to="scholarships"><li className='text-gray my-1'>Grantlar</li></NavLink>
          <NavLink to="jobs"><li className='text-gray my-1'>Kasblar</li></NavLink>
          <NavLink to="universities"><li className='text-gray my-1'>Universitetlar</li></NavLink>
          <NavLink to="vacancies"><li className='text-gray my-1'>Vakansiyalar</li></NavLink>
          <NavLink to="entertainment"><li className='text-gray my-1'>Ko’ngilochar</li></NavLink>
        </ul>
      </div>
    </footer>
  )
}
