import React from 'react'
import university from "../../assets/images/test.png";
import { Search } from '../../components/Search';

export default function University() {
    window.scrollTo(0,0);
    return (
        <div className='container bg-[#F6F5F4]'>
            <div className='h-[90vh]'>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col justify-center items-center'>
                        <ul className='grid gap-y-10 px-20'>
                            <h1>Universitetlar ro'yxati</h1>
                            <li className='text-gray'>Universitetlar haqida to’liq ma’lumot oling va o’zingizga mos oliygoh tanlang</li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={university} alt="universityImg" />
                    </div>
                </div>
                <Search placeholder="Qaysi universitetni izlayabsiz?"/>
            </div>
        </div>
    )
}
