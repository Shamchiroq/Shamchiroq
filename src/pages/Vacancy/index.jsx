import React, {useEffect} from 'react';
import { Pagination } from 'antd';
import { EnvironmentOutlined } from "@ant-design/icons";
import job from "../../assets/images/job.png";
import { Search } from '../../components/Search';
import coin from "../../assets/icons/coin.svg";
import color from "../../assets/icons/color.svg";
import laptop from "../../assets/icons/laptop.svg";
import medicine from "../../assets/icons/medicine.svg";
import react from "../../assets/icons/react.svg";
import other from "../../assets/icons/other.svg";
import { vacancy } from '../../utils/data';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Vacancy() {
    useEffect(()=>{
        window.scrollTo(0, 0);
        AOS.init({duration:2000});
        })
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
                <div className='main_block_v2' data-aos="fade">
                    <div className='banner'>
                        <div className='flex flex-col justify-center items-center'>
                            <ul className='main_text'>
                                <h1>Vakansiyalar</h1>
                                <li className='text-gray'>Orzuyingizdagi kasbni egallang!</li>
                            </ul>
                        </div>
                        <div className='flex justify-center items-center xl:order-none colImg'>
                            <img src={job} alt="jobImg" className='relative xl:left-0 md:left-14 left-8'/>
                        </div>
                    </div>
                    <Search placeholder="Qanaqa bo’sh ish o’rni qidiryabsiz?" />
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
                <div className="vacancy flex flex-col items-center pt-16 pb-8">
                    <h2 className='mb-10'>Yangi qo’shilganlar</h2>
                    <div className='vacancy_wrapper grid gap-y-5 w-full xl:px-0 px-5' data-aos="fade-left">
                        {vacancy.map((item, key) =>
                            <a key={key} href={item.link} target="_blank">
                                <div className="vacancy_card">
                                    <img src={item.logo} alt="img" className='w-24 h-20 rounded-lg' />
                                    <div className='grid xl:grid-cols-3 md:grid-cols-3 grid-cols-2 w-[90%]'>
                                        <div className='flex flex-col justify-between gap-y-4'>
                                            <li className='font-bold xl:text-[16px] !text-[13px]'>{item.title}</li>
                                            <li className='text-gray flex items-center gap-x-1 xl:text-[16px] !text-[13px]'><EnvironmentOutlined /> {item.location}</li>
                                        </div>
                                        <div className='flex flex-col justify-between gap-y-4'>
                                            <li className='font-bold xl:text-[16px] !text-[13px]'>{item.salary}</li>
                                            <li className='text-gray xl:text-[16px] !text-[13px]'>{item.company}</li>
                                        </div>
                                        <div className='xl:flex md:flex hidden flex-col gap-y-4 items-end'>
                                            <li className='font-bold text-gray'>{item.deadline}</li>
                                            <li className='text-gray'>{item.experience}</li>
                                        </div>
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
