import React from 'react'
import result from "../../../assets/images/result.svg";
import RoundedButton from "../../../components/Button";
import no_result from "../../../assets/images/no_result.png";
import { results } from "../../../utils/data.js";

export default function Result({ resultSign }) {
  console.log(results);
  window.scrollTo(0, 0);
  return (
    <div className='container flex flex-col justify-around items-center min-h-[90vh] pb-10'>
      {resultSign == undefined || null ? (
        <div className='flex flex-col justify-center items-center gap-y-10 w-[70%] text-center'>
          <img className='w-[50%]' src={no_result} alt="img" />
          <h3 className='font-bold'>Siz hali test yechmadingiz, sahifaga qaytib psixologik testimizni yechib
            ko'rishingizni maslaxat beramiz</h3>
          <RoundedButton link="/test">Testga qaytish</RoundedButton>
        </div>

      ) : (
        <>
          <h1 className='text-dark-green'>Natija 🎉🎉🎉</h1>
          <div className='grid grid-cols-2'>
            <div className='grid gap-y-5'>
              <li className='text-black !text-[18px]'>Sizda <span className='text-dark-green font-bold'>{results[resultSign].soha}</span> yo'nalishiga qiziqish va qobiliyat bor!</li>
              <li className='text-black !text-[18px]'>Izoh: <span className='text-dark-green font-bold'>{results[resultSign].soha}</span></li>
              <ul className='text-dark-green leading-normal'>
                <li className='text-black font-normal !text-[18px]'>Ushbu yo'nalishi bo'yicha o'qish tavsiya etiladigan oliygohlar:</li>

                {results[resultSign].otm.map((item, id) =>
                  <li key={id} className='list-disc !text-[18px]'>{item}</li>
                )}
              </ul>
            </div>
            <div className='flex justify-end items-center'>
              <img src={result} alt="result" />
            </div>
          </div>
          <RoundedButton link="/">Bosh sahifa</RoundedButton>
        </>
      )}
    </div>
  )
}
