import React from 'react'
import download1 from "../images/download1.png"
import download2 from "../images/free-forever.9a58e2e5.png"

const ThirdMain = () => {
  return (
    <section className='thirdmain'>
      <div className="thirdmain1">
        <div className='thirdmainimg'>
        <img src= {download1} alt=''/>
        </div>
        <div className='thirdmaintext'>
          <div className='thirdmaintext1'>
            <h1>Free forever for your <span>salary payment</span></h1>
          </div>
          <div className='subscritiontext'>
            <h4>Subscribe to the Eazilife today</h4>
            <div className='wheretosubscribe'>
              <div className='applesub'>
                  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24.5088" r="24" fill="#F2F1F1"/>
                      <path d="M29.0499 32.7888C28.0699 33.7388 26.9999 33.5888 25.9699 33.1388C24.8799 32.6788 23.8799 32.6588 22.7299 33.1388C21.2899 33.7588 20.5299 33.5788 19.6699 32.7888C14.7899 27.7588 15.5099 20.0988 21.0499 19.8188C22.3999 19.8888 23.3399 20.5588 24.1299 20.6188C25.3099 20.3788 26.4399 19.6888 27.6999 19.7788C29.2099 19.8988 30.3499 20.4988 31.0999 21.5788C27.9799 23.4488 28.7199 27.5588 31.5799 28.7088C31.0099 30.2088 30.2699 31.6988 29.0399 32.7988L29.0499 32.7888ZM24.0299 19.7588C23.8799 17.5288 25.6899 15.6888 27.7699 15.5088C28.0599 18.0888 25.4299 20.0088 24.0299 19.7588Z" fill="black"/>
                  </svg>
                  <div className='appletext'>
                    <h4>Download on the</h4>
                    <h2>Appstore</h2>
                  </div>
              </div>
              <div className='applesub'>
              <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24.5088" r="24" fill="#F2F1F1"/>
                  <g clip-path="url(#clip0_4_4350)">
                  <path d="M23.2837 23.9504L13.2349 34.4786C13.3477 34.8786 13.5505 35.2474 13.8277 35.5569C14.105 35.8664 14.4493 36.1085 14.8344 36.2645C15.2195 36.4206 15.6352 36.4865 16.0497 36.4573C16.4642 36.4281 16.8666 36.3045 17.226 36.096L28.5329 29.6563L23.2837 23.9504Z" fill="#EA4335"/>
                  <path d="M33.4449 22.161L28.5555 19.3604L23.0518 24.19L28.5779 29.6413L33.4301 26.8707C33.86 26.6457 34.22 26.3072 34.4712 25.8921C34.7224 25.477 34.8552 25.001 34.8552 24.5158C34.8552 24.0306 34.7224 23.5546 34.4712 23.1395C34.22 22.7244 33.86 22.386 33.4301 22.1609H33.4451L33.4449 22.161Z" fill="#FBBC04"/>
                  <path d="M13.2349 14.5007C13.1742 14.7253 13.144 14.957 13.145 15.1896V33.7898C13.1457 34.0223 13.1759 34.2538 13.2349 34.4787L23.6283 24.2201L13.2349 14.5007Z" fill="#4285F4"/>
                  <path d="M23.3586 24.4896L28.5553 19.3603L17.2635 12.8907C16.8386 12.6419 16.3554 12.5101 15.8631 12.5088C14.6413 12.5064 13.5671 13.3173 13.2349 14.4932L23.3586 24.4896Z" fill="#34A853"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_4_4350">
                    <rect width="21.7102" height="24" fill="white" transform="translate(13.145 12.5088)"/>
                  </clipPath>
                  </defs>
              </svg>

                  <div className='appletext'>
                    <h4>Get on </h4>
                    <h2>Google Play</h2>
                  </div>
              </div>
            </div>
          </div>
        </div>
          <div className='image'>
            <img src={download2} alt='pic'/>
          </div>
      </div>
    </section>
  )
}

export default ThirdMain