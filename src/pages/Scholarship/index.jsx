import React from 'react';
import { Pagination } from 'antd';
import { EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons";
import scholarships from "../../assets/images/about.png";
import { Search } from '../../components/Search';
import award from "../../assets/icons/award.svg";
import books from "../../assets/icons/books.svg";
import cap from "../../assets/icons/cap.svg";
import hat from "../../assets/icons/hat.svg";
import heart from "../../assets/icons/heart.svg";
import queen from "../../assets/icons/queen.svg";
import { scholarshipsList } from '../../utils/data';

export default function Scholarship() {
    window.scrollTo(0,0);
    const categories = [
        { title: "Grantlar va stipendiyalar", icon: cap },
        { title: "Yozgi va qishki maktablar", icon: hat },
        { title: "Konferensiyalar", icon: queen },
        { title: "Tanlovlar", icon: award },
        { title: "Onlayn va oflayn kurslar", icon: books },
        { title: "Volontyorlik", icon: heart }
    ]
    return (
        <div className='container bg-[#F6F5F4] py-5'>
            <div className='h-[90vh]'>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col justify-center items-center'>
                        <ul className='grid gap-y-10 px-20'>
                            <h1>Grantlar</h1>
                            <li className='text-gray'>Dunyo bo’ylab grantlar va imkoniyatlar</li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={scholarships} alt="scholarshipsImg" />
                    </div>
                </div>
                <Search placeholder="Qanaqa grant qidiryabsiz?" />
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
            <div className="scholarships flex flex-col items-center pt-16 pb-8">
                <h2 className='mb-10'>Yangi qo’shilganlar</h2>
                <div className='scholarship_wrapper grid gap-y-5 w-full'>
                    {scholarshipsList.map((item, key)=>
                        <a href={item.link} target="__blank">
                            <div key={key} className="scholarship_card ">
                        <img src={item.image} alt="img" className='w-24 h-24 rounded-lg' />
                        <div className='flex flex-col justify-around gap-y-8'>
                            <li className='font-bold'>{item.name}</li>
                            <div className='flex gap-x-10'>
                                <li className='flex items-center gap-x-1 text-gray'><EnvironmentOutlined className='text-dark-green' /> {item.country}</li>
                                <li className='flex items-center gap-x-1 text-gray'><ClockCircleOutlined className='text-dark-green' /> {item.deadline}</li>
                            </div>
                        </div>
                    </div>
                        </a>
                        )}
                </div>
                <Pagination defaultCurrent={1} total={50} className="mt-5"/>
            </div>
        </div>
    )
}
