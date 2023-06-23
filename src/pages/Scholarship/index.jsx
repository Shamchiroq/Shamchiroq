import React from 'react'
import scholarships from "../../assets/images/about.png";
import { Search } from '../../components/Search';
import award from "../../assets/icons/award.svg";
import books from "../../assets/icons/books.svg";
import cap from "../../assets/icons/cap.svg";
import hat from "../../assets/icons/hat.svg";
import heart from "../../assets/icons/heart.svg";
import queen from "../../assets/icons/queen.svg";

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
        </div>
    )
}
