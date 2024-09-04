// import React from 'react';
import './form.css'
import Logo from '../assets/Logo.svg'
import Dots from './progressdots/dots';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/translationcontext';
import { useContext } from 'react';
import { Strings } from '../constant/strings';
import { NationalityContext } from '../context/nationalityContext';
import { useForm } from 'react-hook-form';
import { DataModelContext } from '../context/dataModelContext';


const Formone = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const { nationality, setNationality } = useContext(NationalityContext);
    const { Data, setData } = useContext(DataModelContext);


    console.log(setLanguage);
    console.log(setNationality);

    console.log(Data);

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" })
    const onSubmit = (data) => {
        setData({ ...Data, ...data });
        navigate('/form2');
        console.log(data);

    }
    return (

        <div className="container-fluid mt-2">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8"> <div className="text-center">
                    <img src={Logo} alt="Amwal Logo" className="my-5 imageLogo" />
                    <p className='main-text'>{nationality == 'iraq' ? language == "ar" ? Strings.titleiraq.ar : Strings.titleiraq.en : language == "ar" ? Strings.titleNotIraq.ar : Strings.titleNotIraq.en} </p>
                    <p className='text-muted step'>{language == "en" ? Strings.form1.step.en : Strings.form1.step.ar}</p>
                    <h5 style={{ fontSize: "15px" }}>{language == "en" ? Strings.form1.order.en : Strings.form1.order.ar}</h5>
                </div>
                    <form className="mt-4" onSubmit={handleSubmit(onSubmit)} >
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label text-muted font">{language == "en" ? Strings.form1.FirstName.en : Strings.form1.FirstName.ar}<span className='required'>*</span></label>
                            <input type="text" {...register('firstName', { required: true, pattern: /^[a-zA-Z\u0600-\u06FF\s]+$/ })} className="form-color" id="firstName" placeholder={language == "en" ? Strings.form1.Placehold.en : Strings.form1.Placehold.ar} />
                            {errors.firstName?.type == "required" && <p className='err'>Note: The field is required.</p>}
                            {errors.firstName?.type == "pattern" && <p className='err'>Note: The field must contain only letters.</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fathersName" className="form-label text-muted font">{language == "en" ? Strings.form1.fatherName.en : Strings.form1.fatherName.ar}<span className='required'>*</span></label>
                            <input type="text" {...register('fatherName', { required: true, pattern: /^[a-zA-Z\u0600-\u06FF\s]+$/ })} className="form-color" id="fathersName" placeholder={language == "en" ? Strings.form1.Placehold.en : Strings.form1.Placehold.ar} />
                            {errors.fatherName?.type == "required" && <p className='err'>Note: The field is required.</p>}
                            {errors.fatherName?.type == "pattern" && <p className='err'>Note: The field must contain only letters.</p>}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="grandfathersName" className="form-label text-muted font">{language == "en" ? Strings.form1.grandfName.en : Strings.form1.grandfName.ar}<span className='required'>*</span></label>
                            <input type="text" {...register('grandfName', { required: true, pattern: /^[a-zA-Z\u0600-\u06FF\s]+$/ })} className="form-color" id="grandfathersName" placeholder={language == "en" ? Strings.form1.Placehold.en : Strings.form1.Placehold.ar} />
                            {errors.grandfName?.type == "required" && <p className='err'>Note: The field is required.</p>}
                            {errors.grandfName?.type == "pattern" && <p className='err'>Note: The field must contain only letters.</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label text-muted font ">{language == "en" ? Strings.form1.lastName.en : Strings.form1.lastName.ar}<span className='required'>*</span></label>
                            <input type="text" {...register('lastName', { required: true, pattern: /^[a-zA-Z\u0600-\u06FF\s]+$/ })} className="form-color" id="lastName" placeholder={language == "en" ? Strings.form1.Placehold.en : Strings.form1.Placehold.ar} />
                            {errors.lastName?.type == "required" && <p className='err'>Note: The field is required.</p>}
                            {errors.lastName?.type == "pattern" && <p className='err'>Note: The field must contain only letters.</p>}
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button type="submit" className="next-button">{language == "en" ? Strings.nextbutton.en : Strings.nextbutton.ar}</button>


                        </div>
                    </form>

                    <Dots index="1" />

                </div>

            </div>
        </div>

    );
};

export default Formone;