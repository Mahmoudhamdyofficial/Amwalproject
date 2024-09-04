import Logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom';
import Dots from "./progressdots/dots";
import { NationalityContext } from '../context/nationalityContext';
import { useContext } from 'react';
import { Strings } from '../constant/strings';
import { LanguageContext } from '../context/translationcontext';
import { DataModelContext } from '../context/dataModelContext';
import { useForm } from 'react-hook-form';
import { Arrays } from '../constant/arrays';
function Form4() {
    const navigate = useNavigate();
    const { language, setLanguage } = useContext(LanguageContext);

    const { nationality, setNationality } = useContext(NationalityContext);
    const { Data, setData } = useContext(DataModelContext);
    console.log(Data);
    console.log(setNationality, setLanguage);


    const handleBackClick = () => {
        navigate('/form3');
    };

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" })
    const onSubmit = (data) => {
        setData({ ...Data, ...data });
        navigate('/form5');
    }
    return (<>
        <div className="container-fluid mt-2">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8"> <div className="text-center">
                    <img src={Logo} alt="Amwal Logo" className="my-5 imageLogo" />
                    <p className='main-text'>{nationality == 'iraq' ? language == "ar" ? Strings.titleiraq.ar : Strings.titleiraq.en : language == "ar" ? Strings.titleNotIraq.ar : Strings.titleNotIraq.en} </p>
                    <p className='text-muted step'>{language == "en" ? Strings.form4.step.en : Strings.form4.step.ar}</p>
                    <h5 style={{ fontSize: "15px" }}>{language == "en" ? Strings.form4.order.en : Strings.form4.order.ar}</h5>
                </div>
                    {nationality == "iraq" ? <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="nationalid" className="form-label text-muted font">{language == "en" ? Strings.form4.NationalID.en : Strings.form4.NationalID.ar} <span className='required'>*</span></label>
                            <input type="number" id="nationalid" name="nationalid" className="form-color text-muted" placeholder={language == "en" ? Strings.form4.placehold123.en : Strings.form4.placehold123.ar}
                                {...register('nationalidNumber', { required: true, pattern: /^\d+$/ })} />
                            {errors.nationalidNumber?.type == "required" && <p className='err'>Note: The field is required.</p>}
                            {errors.nationalidNumber?.type == "pattern" && <p className='err'>Note: The field must contain only numbers.</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="idissuing" className="form-label text-muted font">{language == "en" ? Strings.form4.NationalIDIssuing.en : Strings.form4.NationalIDIssuing.ar}<span className='required'>*</span></label>
                            <input type="text" className="form-color" id="idissuing" placeholder={language == "en" ? Strings.form4.placeholdBaghdad.en : Strings.form4.placeholdBaghdad.ar}
                                {...register('nationalidAuthority', { required: true })} />
                            {errors.nationalidAuthority?.type == "required" && <p className='err'>Note: The field is required.</p>}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="nationid" className="form-label text-muted font">{language == "en" ? Strings.form4.NationalIDDate.en : Strings.form4.NationalIDDate.ar}<span className='required'>*</span></label>
                            <input type="date" id="nationid" name="date" className="form-color text-muted"
                                {...register('nationalidDate', { required: true })} />
                            {errors.nationalidDate?.type == "required" && <p className='err'>Note: The field is required.</p>}

                        </div>
                        <div className='d-flex justify-content-end'>
                            <button onClick={handleBackClick} className="backbutton me-2">{language == "en" ? Strings.backbutton.en : Strings.backbutton.ar}</button>
                            <button type="submit" className="next-button">{language == "en" ? Strings.nextbutton.en : Strings.nextbutton.ar}</button>
                        </div>
                    </form>
                        :
                        //  swapping tow forms
                        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label text-muted font">{language == "en" ? Strings.form4.Nationality.en : Strings.form4.Nationality.ar}<span className='required'>*</span></label>
                                <select id="departments" name="departments" className="form-color">
                                    {Arrays.nationalitis.map((nat, index) => (
                                        <option key={index} value={nat}>
                                            {nat}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passnum" className="form-label text-muted font">{language == "en" ? Strings.form4.PassportNumber.en : Strings.form4.PassportNumber.ar}<span className='required'>*</span></label>
                                <input type="text" className="form-color" id="passnum" placeholder={language == "en" ? Strings.form4.placehold123.en : Strings.form4.placehold123.ar}
                                    {...register('passportNumber', { required: true })} />
                                {errors.passportNumber?.type == "required" && <p className='err'>Note: The field is required.</p>}

                            </div>
                            <div className="mb-3">
                                <label htmlFor="dateid" className="form-label text-muted font">{language == "en" ? Strings.form4.PassportAuthority.en : Strings.form4.PassportAuthority.ar}<span className='required'>*</span></label>
                                <input type="text" id="dateid" name="date" className="form-color text-muted" placeholder={language == "en" ? Strings.form4.Placehold.en : Strings.form4.Placehold.ar}
                                    {...register('passportAuthority', { required: true })} />
                                {errors.passportAuthority?.type == "required" && <p className='err'>Note: The field is required.</p>}

                            </div>
                            <div className='d-flex justify-content-end'>
                                <button onClick={handleBackClick} className="backbutton me-2">{language == "en" ? Strings.backbutton.en : Strings.backbutton.ar}</button>
                                <button type="submit" className="next-button">{language == "en" ? Strings.nextbutton.en : Strings.nextbutton.ar}</button>
                            </div>
                        </form>
                    }

                    <Dots index="4" />

                </div>

            </div>
        </div>
    </>);
}

export default Form4;