import Logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom';
import Dots from "./progressdots/dots";
import { useContext } from 'react';
import { LanguageContext } from '../context/translationcontext';
import { NationalityContext } from '../context/nationalityContext';
import { Strings } from '../constant/strings';
import { Arrays } from '../constant/arrays';
import { DataModelContext } from '../context/dataModelContext';
import { useForm } from 'react-hook-form';
function Form8() {
    const navigate = useNavigate();
    const { language, setLanguage } = useContext(LanguageContext);
    const { nationality, setNationality } = useContext(NationalityContext);

    console.log(setLanguage,setNationality);

    const handleBackClick = () => {
        navigate('/form7');
    };
    const { Data, setData } = useContext(DataModelContext);
    const onSubmit = (data) => {
        setData({ ...Data, ...data });
        navigate('/form9');
    }
    console.log(Data);
    
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" })
    return (<>
        <div className="container-fluid mt-2">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8"> <div className="text-center">
                    <img src={Logo} alt="Amwal Logo" className="my-5 imageLogo" />
                    <p className='main-text'>{nationality == 'iraq' ? language == "ar" ? Strings.titleiraq.ar : Strings.titleiraq.en : language == "ar" ? Strings.titleNotIraq.ar : Strings.titleNotIraq.en} </p>
                    <p className='text-muted step'>{language == "en" ? Strings.form8.step.en : Strings.form8.step.ar}</p>
                    <h5 style={{ fontSize: "15px" }}>{language == "en" ? Strings.form8.order.en : Strings.form8.order.ar}</h5>
                </div>
                    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label text-muted font">{language == "en" ? Strings.form8.DeliveryAgent.en : Strings.form8.DeliveryAgent.ar}</label>
                            <select id="departments" name="departments" className="form-color"
                            {...register('DeliveryAgent', { required: true })}>
                                {Arrays.places.map((place, index) => (
                                    <option key={index} value={place}>
                                        {place}
                                    </option>
                                ))}
                            </select>
                            {errors.DeliveryAgent?.type == "required" && <p className='err'>Note: The field is required.</p>}
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button onClick={handleBackClick} className="backbutton me-2">{language == "en" ? Strings.backbutton.en : Strings.backbutton.ar}</button>
                            <button type="submit"
                                className="next-button">{language == "en" ? Strings.nextbutton.en : Strings.nextbutton.ar}</button>


                        </div>
                    </form>
                    <Dots index="8" />

                </div>

            </div>
        </div>
    </>);
}

export default Form8;