import React from 'react'
import RoundedButton from "../Button/index";
import logo from "../../assets/images/logo.svg"
import { NavLink } from 'react-router-dom';
import { Dropdown, Space } from "antd";
import { DownOutlined } from '@ant-design/icons';

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
  return (
    <header className='bg-pale'>
      <nav className="container flex justify-between items-center !py-3">
          <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
          <ul className='flex gap-x-8'>
            <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray"} to="/">Asosiy</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray"} to="/test">Psixologik test</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray"} to="/scholarships">Grantlar</NavLink></li>
            <Dropdown menu={{ items }} >
              <Space className='text-gray hover:text-black cursor-pointer'>
                <li>Kelajak sari</li>
                <DownOutlined className='relative bottom-[3px]' />
              </Space>
            </Dropdown>
            <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray"} to="/entertainment">Ko’ngilochar</NavLink></li>
          </ul>
          <RoundedButton type="blue" link="about">Biz haqimizda</RoundedButton>
      </nav>
    </header>
  )
}
