import Logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom';
import Dots from "./progressdots/dots";
import { useContext, useState } from 'react';
import { LanguageContext } from '../context/translationcontext';
import { NationalityContext } from '../context/nationalityContext';
import { Strings } from '../constant/strings';
import { DataModelContext } from '../context/dataModelContext';
import { useForm } from 'react-hook-form';

function Form3() {
    const navigate = useNavigate();
    const { language, setLanguage } = useContext(LanguageContext);
    const { nationality, setNationality } = useContext(NationalityContext);
    const { Data, setData } = useContext(DataModelContext);
    const [birthdate, setDate] = useState('');
    const [error, setError] = useState('');
    
    console.log(setLanguage, setNationality);
    
    const handleBackClick = () => {
        navigate('/form2');
    };
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" })
    const onSubmit = (data) => {
        if(!isDateAtLeast18YearsOld(birthdate)){
            return;
        }
        data.BirthDate=birthdate;
        setData({ ...Data, ...data });
        navigate('/form4');
    }
    console.log(Data);
    function isDateAtLeast18YearsOld(date) {
        const today = new Date();
        const selectedDate = new Date(date);
        const age = today.getFullYear() - selectedDate.getFullYear();
        const monthDifference = today.getMonth() - selectedDate.getMonth();

        // Check if age is at least 18 years
        return age > 18 || (age === 18 && monthDifference >= 0);
    }

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);

        if (isDateAtLeast18YearsOld(selectedDate)) {
            setError('');
        } else {
            setError('You must be at least 18 years old.');
        }
    };
    return (<>
        <div className="container-fluid mt-2">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8"> <div className="text-center">
                    <img src={Logo} alt="Amwal Logo" className="my-5 imageLogo" />
                    <p className='main-text'>{nationality == 'iraq' ? language == "ar" ? Strings.titleiraq.ar : Strings.titleiraq.en : language == "ar" ? Strings.titleNotIraq.ar : Strings.titleNotIraq.en} </p>
                    <p className='text-muted step'>{language == "en" ? Strings.form3.step.en : Strings.form3.step.ar}</p>
                    <h5 style={{ fontSize: "15px" }}>{language == "en" ? Strings.form3.order.en : Strings.form3.order.ar}</h5>
                </div>
                    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label text-muted font">{language == "en" ? Strings.form3.birthdt.en : Strings.form3.birthdt.ar}<span className='required'>*</span></label>
                            <input
                            id="date"
                                className='form-color'
                                type="date"
                                value={birthdate}
                                onChange={handleDateChange}
                                max={new Date().toISOString().split('T')[0]} // Optional: Limit future dates
                            />
                            {error && <p className='err'>{error}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mothersName" className="form-label text-muted font">{language == "en" ? Strings.form3.motherName.en : Strings.form3.motherName.ar}<span className='required'>*</span></label>
                            <input type="text" className="form-color" id="mothersName" placeholder={language == "en" ? Strings.form3.Placehold.en : Strings.form3.Placehold.ar}
                                {...register('mothername', { required: true, pattern: /^[a-zA-Z\u0600-\u06FF\s]+$/ })} />
                            {errors.mothername?.type == "required" && <p className='err'>Note: The field is required.</p>}
                            {errors.mothername?.type == "pattern" && <p className='err'>Note: The field must contain only letters.</p>}


                        </div>
                        <div className='d-flex justify-content-end'>
                            <button onClick={handleBackClick} className="backbutton me-2">{language == "en" ? Strings.backbutton.en : Strings.backbutton.ar}</button>
                            <button type="submit" className="next-button">{language == "en" ? Strings.nextbutton.en : Strings.nextbutton.ar}</button>


                        </div>
                    </form>
                    <Dots index="3" />

                </div>

            </div>
        </div>
    </>);
}

export default Form3;