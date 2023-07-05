import React from 'react';
import { Pagination } from 'antd';
import university from "../../assets/images/test.png";
import { Search } from '../../components/Search';
import univer from "../../assets/images/univer.svg";
import { universityList } from '../../utils/data';

export default function University() {
    window.scrollTo(0, 0);
    return (
        <div className='bg-[#F6F5F4]'>
            <div className="container">
                <div className='main_block_v2'>
                    <div className='banner'>
                        <div className='flex flex-col justify-center items-center'>
                            <ul className='main_text'>
                                <h1>Universitetlar ro'yxati</h1>
                                <li className='text-gray'>Universitetlar haqida to’liq ma’lumot oling va o’zingizga mos oliygoh tanlang</li>
                            </ul>
                        </div>
                        <div className='flex justify-center items-center colImg'>
                            <img src={university} alt="universityImg" />
                        </div>
                    </div>
                    <Search placeholder="Qaysi universitetni izlayabsiz?" />
                </div>
                <div className="job flex flex-col items-center pt-10 pb-8">
                    <h2 className='mb-10'>Yangi qo’shilganlar</h2>
                    <div className='university_wrapper grid grid-cols-2 gap-x-8 gap-y-5 w-full'>
                        {universityList.map((item, key) =>
                            <div key={key} className="job_card">
                                <img src={item.logo} alt="img" className='w-24 h-20 rounded-lg' />
                                <div className='flex flex-col gap-y-4'>
                                    <li className='font-bold'>{item.name}</li>
                                    <li className='text-gray flex items-center gap-x-1'>{item.location}</li>
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
