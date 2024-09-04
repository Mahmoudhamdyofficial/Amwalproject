import Logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom';
import Dots from "./progressdots/dots";
import './form.css'
import { useContext } from 'react';
import { LanguageContext } from '../context/translationcontext';
import { NationalityContext } from '../context/nationalityContext';
import { Strings } from '../constant/strings';
import { DataModelContext } from '../context/dataModelContext';
import { useForm } from 'react-hook-form';
function Form9() {
    const navigate = useNavigate();
    const { language, setLanguage } = useContext(LanguageContext);
    const { nationality, setNationality } = useContext(NationalityContext);

    console.log(setLanguage, setNationality);
    const handleBackClick = () => {
        navigate('/form8');
    };
    const { Data, setData } = useContext(DataModelContext);
    const onSubmit = (data) => {
        setData({ ...Data, ...data });
    }

    console.log(Data);
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" })
    return (<>
        <div className="container-fluid mt-2">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8"> <div className="text-center">
                    <img src={Logo} alt="Amwal Logo" className="my-5 imageLogo" />
                    <p className='main-text'>{nationality == 'iraq' ? language == "ar" ? Strings.titleiraq.ar : Strings.titleiraq.en : language == "ar" ? Strings.titleNotIraq.ar : Strings.titleNotIraq.en} </p>
                    <p className='text-muted step'>{language=="en"?Strings.form9.step.en:Strings.form9.step.ar}</p>
                    <h5 style={{ fontSize: "15px" }}>{language=="en"?Strings.form9.order.en:Strings.form9.order.ar}</h5>
                </div>
                    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label text-muted font">{language=="en"?Strings.form9.nternationalAmwalcard.en:Strings.form9.nternationalAmwalcard.ar} <span className='required'>*</span></label>
                            <div className="row justify-content-center">
                                <div className=" btn-group" role="group" aria-label="Amwal Card Options">
                                    {nationality == "iraq" ?
                                        <>
                                            <input type="radio" className="btn-check" name="amwalCard" value="International" id="yesOption" autoComplete="off"
                                                {...register('amwalCard', { required: true })} />
                                            <label className="btn btn-outline-primary" htmlFor="yesOption">{language=="en"?Strings.form9.international.en:Strings.form9.international.ar}</label>

                                            <input type="radio" className="btn-check" name="amwalCard" value="Local" id="noOption" autoComplete="off"
                                                {...register('amwalCard', { required: true })} />
                                            <label className="btn btn-outline-primary" htmlFor="noOption">{language=="en"?Strings.form9.international.en:Strings.form9.local.ar}</label></>
                                        :
                                        // swapping tow views
                                        <><input type="radio" className="btn-check" name="amwalCard" value="International" id="yesOption" autoComplete="off"
                                            {...register('amwalCard', { required: true })} />
                                            <label className="btn btn-outline-primary" htmlFor="yesOption">{language=="en"?Strings.form9.international.en:Strings.form9.international.ar}</label></>}
                                </div>
                                {errors.amwalCard?.type === "required" && <p className='err'>Note: Please select an option.</p>}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label text-muted font">{language=="en"?Strings.form9.PurposeOfCard.en:Strings.form9.PurposeOfCard.ar}<span className='required'>*</span></label>
                            <input type="text" className="form-color input-textu" id="firstName" placeholder={language=="en"?Strings.form9.Placehold.en:Strings.form9.Placehold.ar}
                                {...register('Purposeofcard', { required: true })} />
                            {errors.Purposeofcard?.type == "required" && <p className='err'>Note: The field is required.</p>}

                        </div>
                        <a target='_blank' href="https://amwalps-my.sharepoint.com/personal/samara_moayad_amwalps_iq/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsamara%5Fmoayad%5Famwalps%5Fiq%2FDocuments%2FPublic%20Folder%2FTerms%20and%20Conditions%20%2D%20Arabic%20%2D%20Amwal%20May%2D2024%20Fina%2E%2E%2E%2Epdf&parent=%2Fpersonal%2Fsamara%5Fmoayad%5Famwalps%5Fiq%2FDocuments%2FPublic%20Folder&ga=1"
                            className='navbar-link'>{language=="en"?Strings.form9.Terms.en:Strings.form9.Terms.ar}</a>
                        <div className="terms-content">
                            <span className="circle-check"></span>
                            <p>
                               {language=="en"?Strings.form9.textTerms.en:Strings.form9.textTerms.ar}
                            </p>
                        </div>
                        <div className='d-flex justify-content-end mb-3'>
                            <button type="submit" onClick={handleBackClick} className="backbutton me-2">Back</button>
                            <button type="submit" className="sub-button">Submit</button>
                        </div>
                    </form>
                    <Dots index="9" />

                </div>

            </div>
        </div></>);
}

export default Form9;