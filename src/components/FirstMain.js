import { Slideshow, SlideshowItem } from "./Slider";

const FirstMain = () => {
  return (

    <section className='main1'>
      <div className='mainbackground' >
          <div className="maintext">
            <h1>For Individuals and Businesses</h1>
            <p>Join 200+ businesses using Eazipay's easy solution.</p>
          </div>

          <div className='slides' >
          <Slideshow>
        <SlideshowItem>
            <div className='slide1' >
              <div className='slidetext1'>
                <h2>Tamper-proof Payroll for LIfe</h2>
                <ul>
                  <li>Your staff payroll history is kept in one place forever.</li>
                  <li>No more excel sheet or manual records.</li>
                  <li>Download your payroll history anytime you need it.</li>
                </ul>
              </div>
            </div>
            </SlideshowItem>
        <SlideshowItem>
            <div className='slide1' >
              <div className='slidetext1'>
                <h2>All Payroll, Anytime Anywhere</h2>
                <ul>
                  <li>Wherever you are Eazipay has got you covered on ALL your Payroll tasks.</li>
                  <li>Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay handle all your compliamces in one place and easily, in seconds!</li>
                </ul>
              </div>
            </div>
            </SlideshowItem>
        <SlideshowItem>
            <div className='slide1' >
              <div className='slidetext1'>
                <h2>Payroll in Seconds</h2>
                <ul>
                  <li>Never again wil you spend more than 2 minutes on payroll.</li>
                  <li>Just click on your staff annd bulk-pay them at once.</li>
                  <li>Payment is done permanently.</li>
                </ul>
              </div>
            </div>
            </SlideshowItem>
      </Slideshow>
          </div>
            <div className='maintext2'>
                <h4>
                We are happy to answer your queries. Please, reach us at <span>hello@myeazipay.com</span>  and expect our response shortly after.
                </h4>
              </div>
      </div>
    </section>
  )
}

export default FirstMain