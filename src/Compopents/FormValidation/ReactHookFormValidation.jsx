import React from 'react'
import { useForm } from 'react-hook-form'
import fs from './customformvalidation.module.css'

function ReactHookFormValidation()
{
    const {register, handleSubmit, formState:{errors}}=useForm()

    let submitFormData=(fdata)=>console.log(fdata);

    // console.log(handleSubmit(submitFormData));
    // console.log(register());
    // console.log(register("fn"));
    // console.log(errors);

    return (
        <div className={fs.div}>
            <form action="" onSubmit={handleSubmit(submitFormData)}>
                <div  className={fs.inputdiv}>
                    <input type="text" placeholder='Fullname'
                    {...register ("fn",
                    {required:{value:true,message:"Fullname is Mandatory"},
                    minLength:{value:6,message:"Fullname should atleat contain 6 characters"},
                    pattern:{value:/^[A-Za-z]*$/,message:"Fullname should only contain alphabets"}})} />
                    <small>{errors.fn?.message}</small>
                </div>
                <div  className={fs.inputdiv}>
                    <input type="tel" placeholder='Mobile Number' 
                    {...register ("mob",
                    {required:{value:true,message:"Mobile is Required"},
                    pattern:{value:/^[6-9][0-9]{9}$/,message:"Mobile Should only contain 10 Numbers starting from 9,8,7,6"}})}/>
                    <small>{errors.mob?.message}</small>
                </div>
                <div  className={fs.inputdiv}>
                    <input type="text" placeholder='email' 
                    {...register ("email",
                    {required:{value:true,message:"Email is Required"},
                    pattern:{value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Invalid Email"}})}/>
                    <small>{errors.email?.message}</small>
                </div>
                <div  className={fs.inputdiv}>
                    <input type="password" placeholder='password' 
                    {...register ("pwd",
                    {required:{value:true,message:"Password is Required"},
                    minlength:{value:10,message:"Password should contain 10 numbers"},
                    pattern:{value:/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,message:"Password must be eight characters including one uppercase letter, one lowercase letter, and one number or special character."}})}/>
                    <small>{errors.pwd?.message}</small>
                </div>

                <div className={fs.buttondiv} >
                    <button type='submit'>Register</button>
                </div>
            </form>

            
        </div>
    )
}

export default ReactHookFormValidation