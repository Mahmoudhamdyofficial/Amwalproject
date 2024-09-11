import { useState, useContext } from 'react';
import Logo from '../assets/Logo.svg';
import { useNavigate } from 'react-router-dom';
import Dots from "./progressdots/dots";
import { NationalityContext } from '../context/nationalityContext';
import { LanguageContext } from '../context/translationcontext';
import { Strings } from '../constant/strings';
import { Arrays } from '../constant/arrays';
import { DataModelContext } from '../context/dataModelContext';
import { useForm } from 'react-hook-form';

function Form6() {
    const { Data, setData } = useContext(DataModelContext);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ mode: "onChange" });
    const [displayValue, setDisplayValue] = useState('');
    const navigate = useNavigate();
    const { language } = useContext(LanguageContext);
    const { nationality } = useContext(NationalityContext);

    const onSubmit = (data) => {
        setData({ ...Data, ...data });
        navigate('/form7');
    };

    const formatInput = (value) => {
        // Remove all non-digit characters
        const numValue = value.replace(/\D/g, '');

        // Format the number by adding commas
        const formatted = numValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        return formatted;
    };

    const handleChange = (event) => {
        const value = event.target.value;

        // Update the formatted display value with "IQD"
        const formattedValue = formatInput(value);
        setDisplayValue(`${formattedValue} IQD`);

        // Update the value in the React Hook Form without commas
        setValue('MonthlyIncome', value.replace(/\D/g, ''));
    };

    const handleBackClick = () => {
        navigate('/form5');
    };

    return (
        <div className="container-fluid mt-2">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8">
                    <div className="text-center">
                        <img src={Logo} alt="Amwal Logo" className="my-5 imageLogo" />
                        <p className='main-text'>
                            {nationality === 'iraq' ?
                                (language === "ar" ? Strings.titleiraq.ar : Strings.titleiraq.en) :
                                (language === "ar" ? Strings.titleNotIraq.ar : Strings.titleNotIraq.en)
                            }
                        </p>
                        <p className='text-muted step'>
                            {language === "en" ? Strings.form6.step.en : Strings.form6.step.ar}
                        </p>
                        <h5 style={{ fontSize: "15px" }}>
                            {language === "en" ? Strings.form6.order.en : Strings.form6.order.ar}
                        </h5>
                    </div>
                    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label text-muted font">
                                {language === "en" ? Strings.form6.Occupation.en : Strings.form6.Occupation.ar}
                                <span className='required'>*</span>
                            </label>
                            <select id="departments" name="departments" className="form-color"
                                {...register('Occupation', { required: true })}>
                                {Arrays.departments.map((dep, index) => (
                                    <option key={index} value={dep}>
                                        {dep}
                                    </option>
                                ))}
                            </select>
                            {errors.Occupation?.type === "required" &&
                                <p className='err'>Note: The field is required.</p>
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Income" className="form-label text-muted font">
                                {language === "en" ? Strings.form6.MonthlyIncome.en : Strings.form6.MonthlyIncome.ar}
                                <span className='required'>*</span>
                            </label>
                            <input
                                type="text"
                                className="form-color"
                                id="Income"
                                placeholder={language === "en" ? Strings.form6.Placehold.en : Strings.form6.Placehold.ar}
                                {...register('MonthlyIncome', {
                                    required: true,
                                    validate: value => {
                                        const numValue = value.replace(/\D/g, '');
                                        return numValue.length >= 4 || "Minimum length is 4 digits";
                                    }
                                })}
                                value={displayValue}
                                onChange={handleChange}
                            />
                            {errors.MonthlyIncome?.type === "required" &&
                                <p className='err'>Note: The field is required.</p>
                            }
                            {errors.MonthlyIncome?.type === "validate" &&
                                <p className='err'>Note: should enter 4 numbers minimum.</p>
                            }
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button onClick={handleBackClick} className="backbutton me-2">
                                {language === "en" ? Strings.backbutton.en : Strings.backbutton.ar}
                            </button>
                            <button type="submit" className="next-button">
                                {language === "en" ? Strings.nextbutton.en : Strings.nextbutton.ar}
                            </button>
                        </div>
                    </form>
                    <Dots index="6" />
                </div>
            </div>
        </div>
    );
}

export default Form6;
