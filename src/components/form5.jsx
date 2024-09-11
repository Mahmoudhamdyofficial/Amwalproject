import Logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom';
import Dots from "./progressdots/dots";
import { useContext } from 'react';
import { NationalityContext } from '../context/nationalityContext';
import { LanguageContext } from '../context/translationcontext';
import { Strings } from '../constant/strings';
import { Arrays } from '../constant/arrays';
import { DataModelContext } from '../context/dataModelContext';
import { useForm } from 'react-hook-form';

function Form5() {
    const navigate = useNavigate();
    const { language, setLanguage } = useContext(LanguageContext);
    const { nationality, setNationality } = useContext(NationalityContext);
    const { Data, setData } = useContext(DataModelContext);
    const onSubmit = (data) => {
        setData({ ...Data, ...data });
        navigate('/form6');
    }
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" })

    console.log(setLanguage, setNationality);
    const handleBackClick = () => {
        navigate('/form4');
    };

    return (<>
        <div className="container-fluid mt-2">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8"> <div className="text-center">
                    <img src={Logo} alt="Amwal Logo" className="my-5 imageLogo" />
                    <p className='main-text'>{nationality == 'iraq' ? language == "ar" ? Strings.titleiraq.ar : Strings.titleiraq.en : language == "ar" ? Strings.titleNotIraq.ar : Strings.titleNotIraq.en} </p>
                    <p className='text-muted step'>{language == "en" ? Strings.form5.step.en : Strings.form5.step.ar}</p>
                    <h5 style={{ fontSize: "15px" }}>{language == "en" ? Strings.form5.order.en : Strings.form5.order.ar}</h5>
                </div>
                    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="cities" className="form-label text-muted font">{language == "en" ? Strings.form5.CurrentResidence.en : Strings.form5.CurrentResidence.ar}<span className='required'>*</span></label>
                            <select id="cities" name="cities" className='form-color'
                                {...register('CurrentResidence', { required: true })} >
                                {Arrays.cities[language].map((city, index) => (<option key={index} value={city}>
                                    {city}
                                </option>))}
                            </select>
                            {errors.CurrentResidence?.type == "required" && <p className='err'>Note: The field is required.</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label text-muted font">{language == "en" ? Strings.form5.Location.en : Strings.form5.Location.ar}<span className='required'>*</span></label>
                            <input type="text" className="form-color" id="location" placeholder={language == "en" ? Strings.form5.Placehold.en : Strings.form5.Placehold.ar}
                                {...register('Location', { required: true })} />
                            {errors.Location?.type == "required" && <p className='err'>Note: The field is required.</p>}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="cardnumber" className="form-label text-muted font">{language == "en" ? Strings.form5.ResidenceCardNumber.en : Strings.form5.ResidenceCardNumber.ar}<span className='required'>*</span></label>
                            <input type="number" id="cardnumber" name="cardnumber" className="form-color text-muted" placeholder={language == "en" ? Strings.form5.placehold123.en : Strings.form5.placehold123.ar}
                                {...register('ResidenceCardNumber', { required: true, pattern: /^\d+$/ })} />
                            {errors.ResidenceCardNumber?.type == "required" && <p className='err'>Note: The field is required.</p>}
                            {errors.ResidenceCardNumber?.type == "pattern" && <p className='err'>Note: The field must contain only numbers.</p>}
                        </div>
                        <div className='row mb-3'>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <label htmlFor="Residentialarea" className="form-label text-muted font">{language == "en" ? Strings.form5.Residentialarea.en : Strings.form5.Residentialarea.ar}<span className='required'>*</span></label>
                                <input type="number" id="Residentialarea" name="Residential area" className="form-color text-muted" placeholder={language=="en"?"EX. 701":"مثال 701"}
                                    {...register('ResidentialArea', { required: true, pattern: /^\d+$/ })} />
                                {errors.ResidentialArea?.type == "required" && <p className='err'>Note: The field is required.</p>}
                                {errors.ResidentialArea?.type == "pattern" && <p className='err'>Note: The field must contain only numbers.</p>}                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <label htmlFor="Residence" className="form-label text-muted font">Residence<span className='required'>*</span></label>
                                <input type="number" id="Residence" name="Residence" className="form-color text-muted" placeholder={language=="en"?"EX. 701":"مثال 22"}
                                    {...register('Residence', { required: true, pattern: /^\d+$/ })} />
                                {errors.Residence?.type == "required" && <p className='err'>Note: The field is required.</p>}
                                {errors.Residence?.type == "pattern" && <p className='err'>Note: The field must contain only numbers.</p>}                              </div>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <label htmlFor="Alley" className="form-label text-muted font">Alley<span className='required'>*</span></label>
                                <input type="number" id="Alley" name="Alley" className="form-color text-muted" placeholder={language=="en"?"EX. 701":"مثال 2"}
                                    {...register('Alley', { required: true, pattern: /^\d+$/ })} />
                                {errors.Alley?.type == "required" && <p className='err'>Note: The field is required.</p>}
                                {errors.Alley?.type == "pattern" && <p className='err'>Note: The field must contain only numbers.</p>}                                </div>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button onClick={handleBackClick} className="backbutton me-2">{language == "en" ? Strings.backbutton.en : Strings.backbutton.ar}</button>
                            <button type="submit"
                                className="next-button">{language == "en" ? Strings.nextbutton.en : Strings.nextbutton.ar}</button>


                        </div>
                    </form>
                    <Dots index="5" />

                </div>

            </div>
        </div>
    </>);
}

export default Form5;