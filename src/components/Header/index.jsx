import React, { useState } from 'react'
import RoundedButton from "../Button/index";
import logo from "../../assets/images/logo.svg"
import { NavLink } from 'react-router-dom';
import { Dropdown, Space, Drawer } from "antd";
import { DownOutlined, MenuOutlined } from '@ant-design/icons';

export default function Header() {
  const items = [
    {
      label: <NavLink to="/jobs">Kasblar →</NavLink>,
      key: '1',
    },
    {
      label: <NavLink to="/universities">Universitetlar →</NavLink>,
      key: '2',
    },
    {
      label: <NavLink to="/vacancies">Vakansiyalar →</NavLink>,
      key: '3',
    },
  ];
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <header className='bg-pale'>
      <nav className="container flex justify-between items-center py-3 xl:px-0 md:px-0 px-4">
        <NavLink to="/"><img src={logo} alt="logo" className='xl:w-fit w-36' /></NavLink>
        <ul className='xl:flex md:flex hidden gap-x-8'>
          <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray"} to="/">Asosiy</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray"} to="/test">Psixologik test</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray"} to="/scholarships">Grantlar</NavLink></li>
          <Dropdown menu={{ items }} trigger={['click']}>
            <Space className='text-gray hover:text-black cursor-pointer'>
              <li>Kelajak sari</li>
              <DownOutlined className='relative bottom-[3px]' />
            </Space>
          </Dropdown>
          <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray"} to="/entertainment">Ko’ngilochar</NavLink></li>
        </ul>
        <RoundedButton link="about" className="xl:block hidden">Biz haqimizda</RoundedButton>
        <MenuOutlined className="xl:hidden md:hidden block" onClick={showDrawer}/>
      </nav>
      <Drawer placement="left" onClose={onClose} open={open}>
        <div className='flex flex-col items-center'>
        <ul className='flex flex-col gap-y-2 text-center'>
          <li onClick={onClose}><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray"} to="/">Asosiy</NavLink></li>
          <li onClick={onClose}><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray"} to="/test">Psixologik test</NavLink></li>
          <li onClick={onClose}><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray"} to="/scholarships">Grantlar</NavLink></li>
          <Dropdown menu={{ items, onClick:onClose }}>
            <Space className='text-gray hover:text-black cursor-pointer'>
              <li>Kelajak sari</li>
              <DownOutlined className='relative bottom-[3px]' />
            </Space>
          </Dropdown>
          <li onClick={onClose}><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray"} to="/entertainment">Ko’ngilochar</NavLink></li>
        </ul>
        <RoundedButton link="about" className="mt-6" onClick={onClose}>Biz haqimizda</RoundedButton>
        </div>
      </Drawer>
    </header>
  )
}
