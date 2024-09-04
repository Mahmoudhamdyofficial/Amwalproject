import Dots from "./progressdots/dots";
import Logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from "../context/translationcontext";
import { useContext, useState } from "react";
import { NationalityContext } from "../context/nationalityContext";
import { Strings } from "../constant/strings";
import { useForm } from "react-hook-form";
import { DataModelContext } from "../context/dataModelContext";
function Form2() {
    const navigate = useNavigate();
    const { language, setLanguage } = useContext(LanguageContext);
    const { nationality, setNationality } = useContext(NationalityContext);
    const { Data, setData } = useContext(DataModelContext);
    // const [phoneNumber, setPhoneNumber] = useState('');

    // const handleChange = (e) => {
    //     setPhoneNumber(e.target.value);
    // };
    console.log(setLanguage, setNationality);
    console.log(Data);

    const handleBackClick = () => {
        navigate('/');
    };
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" })
    const onSubmit = (data) => {
        console.log(phoneNumber);
        const cleanedPhoneNumber = phoneNumber.replace(/[ ()-]/g, '');
        data.phoneNumber = '+964'+cleanedPhoneNumber;
        console.log(data);
        
        setData({ ...Data, ...data });
        navigate('/form3');
    }
    const [phoneNumber, setPhoneNumber] = useState('');

    const formatPhoneNumber = (input) => {
        // Remove all non-digits except + sign
        const cleaned = ('' + input).replace(/\D/g, '');

        // Format number based on the length
        let formattedNumber;
        if (cleaned.length <= 3) {
            formattedNumber = cleaned;
        } else if (cleaned.length <= 6) {
            formattedNumber = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        } else if (cleaned.length <= 10) {
            formattedNumber = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} - ${cleaned.slice(6)}`;
        } else {
            formattedNumber = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} - ${cleaned.slice(6, 10)}`;
        }

        return formattedNumber;
    };

    const handleChange = (e) => {
        const input = e.target.value;
        // Format and update the phone number
        setPhoneNumber(formatPhoneNumber(input));
    };

    return (<>
        <div className="container-fluid mt-2" >
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8"> <div className="text-center">
                    <img src={Logo} alt="Amwal Logo" className="my-5 imageLogo" />
                    <p className='main-text'>{nationality == 'iraq' ? language == "ar" ? Strings.titleiraq.ar : Strings.titleiraq.en : language == "ar" ? Strings.titleNotIraq.ar : Strings.titleNotIraq.en} </p>
                    <p className='text-muted step'>{language == "en" ? Strings.form2.step.en : Strings.form2.step.ar}</p>
                    <h5 style={{ fontSize: "15px" }}>{language == "en" ? Strings.form2.order.en : Strings.form2.order.ar}</h5>
                </div>
                    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                                Phone Number<span className='required'>*</span>
                            </label>
                            <div className="input-group">
                                <span className="input-group-text border-end-0 fs-5" style={{backgroundColor:'#f0f0f0'}} id="basic-addon1">+964</span>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={phoneNumber}
                                    onChange={handleChange}
                                    className="form-control form-control-lg border-start-0 form-color"
                                    placeholder="(123) 456 - 7890"
                                    minLength={16}
                                    
                                // {...register('phonenumber', { required: true})}
                                />
                            </div>
                               {phoneNumber.length<16 && phoneNumber.length>0 ? <p className='err'>Note:please enter valid number.</p>:<p></p> }

                        </div>

                        <div className="mb-3">
                            <label htmlFor="fathersName" className="form-label text-muted font">{language == "en" ? Strings.form2.mail.en : Strings.form2.mail.ar}<span className='required'>*</span></label>
                            <input type="email" className="form-color" id="fathersName" placeholder="example@email.com"
                                {...register('email', { required: true, pattern: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/ })} />
                            {errors.email?.type == "required" && <p className='err'>Note: The field is required.</p>}
                            {errors.email?.type == "pattern" && <p className='err'>Note:Invalid Email.</p>}
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button onClick={handleBackClick} className="backbutton me-2">{language == "en" ? Strings.backbutton.en : Strings.backbutton.ar}</button>
                            <button type="submit" className="next-button">{language == "en" ? Strings.nextbutton.en : Strings.nextbutton.ar}</button>


                        </div>
                    </form>
                    <Dots index="2" />

                </div>

            </div>
        </div></>);
}

export default Form2;
