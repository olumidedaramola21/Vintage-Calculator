import  { useState } from 'react';
import * as math from 'mathjs';
import './App.css';

function App() {
  const [input, setInput] = useState('0');

  const handleClear = () => setInput('0');

  const handleAppend = (value) => {
    setInput((prev) => (prev === '0' ? value : prev + value));
  };

  const handleEvaluate = () => {
    try {
      setInput(math.evaluate(input).toString());
    } catch (error) {
      setInput('error');
    }
    }

  return (
   <div className='container'>
    <form action="" name='calc'  className='calculator'>
      <input type="text" className='value' value={input} readOnly  />
      <span className='num  clear' onClick={() => handleClear()}><i>C</i></span>
      <span className='num' onClick={() => handleAppend('/')}><i>/</i></span>
      <span className='num' onClick={() => handleAppend('*')}><i>*</i></span>
      <span className='num' onClick={() => handleAppend('7')}><i>7</i></span>
      <span className='num' onClick={() => handleAppend('8')}><i>8</i></span>
      <span className='num' onClick={() => handleAppend('9')}><i>9</i></span>
      <span className='num' onClick={() => handleAppend('-')}><i>-</i></span>
      <span className='num' onClick={() => handleAppend('4')}><i>4</i></span>
      <span className='num' onClick={() => handleAppend('5')}><i>5</i></span>
      <span className='num' onClick={() => handleAppend('6')}><i>6</i></span>
      <span className='num plus' onClick={() => handleAppend('+')}><i>+</i></span>
      <span className='num' onClick={() => handleAppend('1')}><i>1</i></span>
      <span className='num' onClick={() => handleAppend('2')}><i>2</i></span>
      <span className='num' onClick={() => handleAppend('3')}><i>3</i></span>
      <span className='num' onClick={() => handleAppend('0')}><i>0</i></span>
      <span className='num' onClick={() => handleAppend('00')}><i>00</i></span>
      <span className='num' onClick={() => handleAppend('.')}><i>.</i></span>


      <span className='num equal' onClick={() => handleEvaluate()}><i>=</i></span>
    </form>
   </div>
  )
}

export default App
