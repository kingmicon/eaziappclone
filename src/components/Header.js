import React from 'react'
import dashboard from "../images/Frame 48096508.png"
import {DiApple } from "react-icons/di";
import {BiLogoPlayStore} from "react-icons/bi"

const Header = () => {
 
  return (
    <section className='headerbody'>
    <div className='headertext'>
      <div className='headertext1'>
      <h1>
        Pay your <span className='payroll'>payroll</span> <span className='easily'>easily</span> in <span className='seconds'>seconds</span>
      </h1>
      <p>
      We’ve built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once.
      </p>
      <a href='/#' ><button>Start Using Free, Forever</button></a>
      </div>
      <div className='headertext2'>
        <h2>Download the Eazipay App</h2>
        <div className='textframe'>
        <div className='text3'>
          <DiApple  className= "text3image"size={50}/>
          <div>
            <p>Download on the</p>
            <p>Appstore</p>
          </div>
        </div>
        <div className='text3'>
          <BiLogoPlayStore className= "text3image" size={50}/>
          <div>
            <p>Get on </p>
            <p>Google Play</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className='frame2'>
    <img src={dashboard} className="dashboard" alt="logo" />
    </div>
    </section>
  )
}

export default Header