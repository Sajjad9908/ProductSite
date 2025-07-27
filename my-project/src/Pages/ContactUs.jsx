import React from 'react'
import { number } from 'yup';
import * as yup from 'yup'; // ✅ Import yup correctly
import { ErrorMessage, Formik,Field,Form } from 'formik';
import NewArrival from '../Components/NewArrival';
import PagesFooter from './PagesFooter';

const ContactUs = () => {

    const initialvalues={
    name:"",
    subject:"",
    email:"",
   

}
const validate= yup.object({
    name:yup.string().min(8,"min 8 charc should be there in name").required("The Name is Required!"),
    subject:yup.string().min(6, "min 8 charac are allowed").required("The Subject is Required!"),
    email:yup.string().required("The Email is Required!")
})

  return (
    <>
    <div className='w-full h-32 bg-red-500 flex justify-center items-center  '>
    <h1 className='text-white laptop:text-[44px] text-center font-sans font-bold text-[34px]'>Contact us</h1>
    </div>

    <div className='p-3 w-full flex flex-row items-center justify-center m-2 flex-wrap'>
         <Formik initialValues={initialvalues}
            validationSchema={validate} 
            onSubmit={(values,{resetForm})=>{
                console.log(values)
                resetForm()

            }}>
 {({handleSubmit,handleBlur,handleChange,values,errors,touched})=>(

                  <Form onSubmit={handleSubmit}  >
                    <div className='laptop:w-lg tablet:w-[400px] mt-5 mobile:w-[300px]'>
                        <p className='font-bold text-[22px] font-sans ml-1'>Name:</p>
                        <Field type='text'   name="name"
                onChange={handleChange} onBlur={handleBlur} value={values.name}
               className={`w-full focus:outline-none h-4 bg-white p-6 border-2 ${
  touched.name && errors.name ? 'border-red-500 transition-all duration-75' : 'border-[#cccccc]'
}`}
                placeholder='Enter Your Name' />
                <ErrorMessage name="name" component="div" className="text-red-600 ml-2.5 transition-all duration-75" />
                    </div>


                      <div className='tablet:w-[400px] laptop:w-lg mt-9 mobile:w-[300px]'>
                         <p className='font-bold text-[22px] font-sans ml-1'>Email:</p>
                        <Field type='email'   name="email"
                onChange={handleChange} onBlur={handleBlur} value={values.email}
               className={`w-full focus:outline-none h-4 bg-white p-6 border-2 ${
  touched.email && errors.email ? 'border-red-500 transition-all duration-75' : 'border-[#cccccc]'
}`}
                placeholder='Enter Your Email' />
                <ErrorMessage name="email" component="div" className="text-red-600 ml-2.5 transition-all duration-75" />
                    </div>


                     <div className='tablet:w-[400px] laptop:w-lg mt-9 mobile:w-[300px]'>
                         <p className='font-bold text-[22px] font-sans ml-1'>Subject:</p>
                        <Field type="text"   name="subject"
                onChange={handleChange} onBlur={handleBlur} value={values.password}
               className={`w-full focus:outline-none h-4 bg-white p-6 border-2 ${
  touched.subject &&errors.subject ? 'border-red-500 transition-all duration-75' : 'border-[#cccccc]'
}`}
                placeholder='Enter Your Subject' />
                <ErrorMessage name="subject" component="div" className="text-red-600 ml-2.5 transition-all duration-75" />
                    </div>

                    <div className='tablet:w-[400px] laptop:w-lg mt-9 mobile:w-[300px]'> 
                         <p className='font-bold text-[22px] font-sans ml-1'>Message:</p>

<Field
              as="textarea"
              name="message"
              rows="6"
              placeholder="Enter your message"
              className='w-full p-4 rounded-md border-2 
                 border-gray-300' />
                 </div>

                 <div className='flex items-center justify-center w-full mt-3.5' >

                 <button className='w-56 p-4 bg-black text-white font-sans cursor-pointer mx-auto my-auto hover:bg-red-500 transition-all duration-100'> Submit</button>
</div>
                  </Form>



 )}
            </Formik>
      
    </div>

    <NewArrival/>
    <PagesFooter/>


    </>
  )
}

export default ContactUs