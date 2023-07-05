import React, { useState } from 'react';
import { questions } from '../../../utils/data';
import { Button } from 'antd';
import Result from '../Result';

export default function Process() {
  const [letterBox, setLetterBox] = useState([]);
  const [resultSign, setResultSign] = useState(null);
  const [isResult, setIsResult] = useState(false);
  const repeatedNumber = () => {
    const counts = {};
    letterBox.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    const rpNum = Object.values(counts);
    const max = Math.max(...rpNum);
    setResultSign(Object.keys(counts).find(key => counts[key] == max));
    setIsResult(true);
  }
  console.log(resultSign);
  return !isResult ? (<div className='container min-h-[90vh] py-10'>
    <div className='flex flex-col items-center justify-center gap-y-8 pb-10 xl:px-0 px-5'>
      <h2>Psixologik test</h2>
      <p className='text-gray xl:text-start text-center'>*Iltimos, har bir blokdagi 2 ta variantdan o'zingizga ma'qulrog'ini tanlang</p>
    </div>
    <div className='test_body flex flex-col items-center gap-y-5 xl:px-0 px-5'>
      {questions.map(item =>
        <div className='bg-[#fff] flex flex-col py-6 px-10 rounded-lg gap-y-4 w-full relative' key={item.id}>
          {item.option.map((item, id) =>
            <li style={{ fontSize: "20px" }} key={id}>
              <input type="radio" name={item.name} value={item.value} id="myRadio" onChange={(e) => { setLetterBox([...letterBox, e.target.value]) }} /> {item.title}
            </li>
          )}
        </div>
      )}
      <Button shape='round' className='greenBtn border-1 border-[#fff]' size="large" onClick={repeatedNumber}>Testni yakunlash</Button>
    </div>
  </div>) : (<Result resultSign={resultSign}/>)
}
