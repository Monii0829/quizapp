import React from 'react'
import javaimg from '../assets/javalogo.svg'
import pythonimg from '../assets/python.svg'
import c from '../assets/c++.svg'
import js from '../assets/js.svg'
import '../css/home.css';
import { useNavigate } from 'react-router-dom'
export const Home = () => {
const nav=useNavigate();
function java(){
nav("/java")
}
function python(){
  nav("/python")
}
function javascript(){
  nav("/code")
}

  return (
    <div>
      <h1>First, solve the problem. Then, write the code.</h1>
      <table>
        <tr>
          <td>
            <div>
            <img src={javaimg} alt='java' className='img' style={{width:'350px',height:'300px'}}></img>
            <button className='button' onClick={java}>QUIZ</button>
            </div>
          </td>
          <td>
            <div>
            <img src={pythonimg} alt='python' className='img' style={{width:'350px',height:'300px'}}></img>
            <button className='button' onClick={python}>QUIZ</button>
            </div>
          </td>
          <td>
            <div>
            <img src={c} alt='c++' className='img' style={{width:'350px',height:'300px'}}></img>
            <button className='button'>QUIZ</button>
            </div>
          </td>
          <td>
            <div>
            <img src={js} alt='js' className='img' style={{width:'350px',height:'300px'}}></img>
            <button className='button' onClick={javascript}>QUIZ</button>
            <button className='button' onClick={javascript}>COMPILER</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  )
}
