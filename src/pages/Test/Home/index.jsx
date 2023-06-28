import React, { useState } from 'react'
import test from "../../../assets/images/test.png";
import RoundedButton from "../../../components/Button";
import TestModal from '../../../components/Modal';

export default function Test() {
  window.scrollTo(0, 0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const show = () => {
    setIsModalOpen(true);
  };
  const ok = () => {
    setIsModalOpen(false);
  };
  const cancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='main_block'>
      <div className='flex flex-col justify-center items-center'>
        <ul className='grid gap-y-10 px-20'>
          <h1 className='text-orange'>Psixologik test</h1>
          <h3 className='text-gray'>Ushbu psixologik test sizning qaysi kasbga qiziqishingiz va moyilligingiz
            borligini aniqlab beradi. Har bir bo'limda berilgan <span className='text-black font-bold'>2 ta variantdan o'zingizga ma'qulrog'ini</span> tanlang.
            Agar siz hech birini yoqtirmasangiz yoki ikkalasini ham yoqtirsangiz, shunchaki <span className='text-black font-bold'>ko'nglingizga
              yaqinroq</span> birini tanlang.</h3>
          <RoundedButton onClick={show}>Testni topshirish →</RoundedButton>
        </ul>
      </div>
      <div className='flex justify-center items-center'>
        <img src={test} alt="jobImg" />
      </div>
      <TestModal cancel={cancel} ok={ok} isModalOpen={isModalOpen} />
    </div>
  )
}
