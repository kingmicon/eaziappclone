import React from 'react'
import download2 from "../images/download.png"
import {useForm} from "react-hook-form"

const FourthMain = () => {
  const {
    register, handleSubmit, formState: { errors},
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <section className='fourthmain'>
      <div className='fourthmain1'>
        <div className='simpleformimg'>
          <img src={download2} alt='pic'/>
        </div>
        <div className='simpleform'>
          <div className='simpleformtext'>
            <h1>Get an Exclusive Demo of Eazipay</h1>
            <p>Our greatest priority is to put you and your business first. Let’s show you how we can help.</p>
          </div>
          <div className='simpleform1'>
            <div className='simpleformheading'>
              <h1>First things first</h1>
              <h4>We want to serve you better. Tell us a bit about yourself or company</h4>
            </div>
            <div className='indicatorbutton'>
              <div className='indicatorbuttonbody'>
                <div className='indicatorbutton1'>
                  <button><a href='/'>Individual</a></button>
                </div>
                <div className='indicatorbutton2'>
                  <button><a href='/'>company</a></button>
                </div>
              </div>
            </div>
            <div className='simpleform2'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input  placeholder='First Name'{...register("firstName", {required: true})} />
                {errors.firstName && <span>This field is required</span>}
                <input  placeholder='Last Name'{...register("lastName", {required: true})} />
                {errors.lastName && <span>This field is required</span>}
                <input placeholder='Email' {...register("email", {required: true, maxLength: 20, pattern: /^[A-Za-z]$/i})} />
                {errors.email && <span>This field is required</span>}
                <input placeholder='Job Title' {...register("jobTitle", {required: true})} />
                {errors.jobTitle && <span>This field is required</span>}
                <input placeholder='Company Size' {...register("companySize", {required: true})} />
                {errors.companySize && <span>This field is required</span>}
                <button>Request Demo</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FourthMain