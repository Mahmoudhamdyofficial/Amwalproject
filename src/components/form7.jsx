
import './form7.css';

import { useContext } from 'react';
import Logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom';
import { SlCloudUpload } from "react-icons/sl";
import Dots from './progressdots/dots';
import { LanguageContext } from '../context/translationcontext';
import { NationalityContext } from '../context/nationalityContext';
import { Strings } from '../constant/strings';
import { DataModelContext } from '../context/dataModelContext';
import { useForm } from 'react-hook-form';

function Form7() {
    const { Data, setData } = useContext(DataModelContext);
    const onSubmit = (data) => {
        setData({ ...Data, ...data });
        navigate('/form8');
    }
    console.log(Data);
    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({ mode: "onChange" })
    // const fileinp = watch('frontUnifiedCard');
    const files = {
        file1: watch('passportPhoto'),
        file2: watch('frontUnifiedCard'),
        file3: watch('backUnifiedCard'),
        file4: watch('frontResidenceCard'),
        file5: watch('backResidenceCard'),
        file6: watch('nonIraqPassportPhoto'),
        file7: watch('ResidenceVisaPhoto'),

    };
    const renderFileText = (file) => {
        return file && file[0] ? (
            <>
                <SlCloudUpload style={{ marginRight: '8px', fontSize: '25px' }} />
                {file[0].name}
            </>
        ) : (<> <span><SlCloudUpload style={{ marginRight: '8px', fontSize: '25px' }} />{language == "ar" ? Strings.form7.placeholdphoto.ar : Strings.form7.placeholdphoto.en}
        </span></>);
    };
    const navigate = useNavigate();
    const { language, setLanguage } = useContext(LanguageContext);
    const { nationality, setNationality } = useContext(NationalityContext);

    console.log(setLanguage, setNationality);

    const handleBackClick = () => {
        navigate('/form6');
    };

    const handleFileChange = (e, key) => {
        const file = e.target.files[0];
        // console.log(file);

        // setFiles({ ...files, [key]: file });
        setValue(key, file);

    };

    return (
        <>
            <div className="container-fluid mt-2">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-8"> <div className="text-center">
                        <img src={Logo} alt="Amwal Logo" className="my-5 imageLogo" />
                        <p className='main-text'>{nationality == 'iraq' ? language == "ar" ? Strings.titleiraq.ar : Strings.titleiraq.en : language == "ar" ? Strings.titleNotIraq.ar : Strings.titleNotIraq.en} </p>
                        <p className='text-muted step'>{language == "en" ? Strings.form7.step.en : Strings.form7.step.ar}</p>
                        <h5 style={{ fontSize: "15px" }}>{language == "en" ? Strings.form7.order.en : Strings.form7.order.ar}</h5>
                    </div>
                        <form className="upload-form" onSubmit={handleSubmit(onSubmit)}>
                            {nationality == 'iraq' ? <>
                                <div className="form-group">
                                    <label className='text-muted font mb-2'>{language == "en" ? Strings.form7.PassportPhoto.en : Strings.form7.PassportPhoto.ar}</label>
                                    <label className="custom-file-upload">
                                        <input type="file" onChange={(e) => handleFileChange(e, 'passportPhoto')}
                                            {...register('passportPhoto')} />

                                        <span>{renderFileText(files.file1)}</span>
                                    </label>
                                </div>

                                <div className="form-group">
                                    <label className='text-muted font mb-2'>{language == "en" ? Strings.form7.FrontUnifiedCard.en : Strings.form7.FrontUnifiedCard.ar} <span style={{ color: 'red' }}>*</span></label>
                                    <label className="custom-file-upload">
                                        <input type="file" onChange={(e) =>
                                            handleFileChange(e, 'frontUnifiedCard')}
                                            {...register('frontUnifiedCard', { required: true })} />
                                        <span>{renderFileText(files.file2)}</span>
                                    </label>
                                    {errors.frontUnifiedCard?.type == "required" && <p className='err'>Note: The field is required.</p>}
                                </div>

                                <div className="form-group">
                                    <label className='text-muted font mb-2'>{language == "en" ? Strings.form7.BackUnifiedCard.en : Strings.form7.BackUnifiedCard.ar}<span style={{ color: 'red' }}>*</span></label>

                                    <label className="custom-file-upload">
                                        <input type="file" onChange={(e) =>
                                            handleFileChange(e, 'backUnifiedCard')}
                                            {...register('backUnifiedCard', { required: true })} />
                                        <span>{renderFileText(files.file3)}</span>
                                    </label>
                                    {errors.backUnifiedCard?.type == "required" && <p className='err'>Note: The field is required.</p>}

                                </div>

                                <div className="form-group">
                                    <label className='text-muted font mb-2'>{language == "en" ? Strings.form7.FrontResidence.en : Strings.form7.FrontResidence.ar} <span style={{ color: 'red' }}>*</span></label>
                                    <label className="custom-file-upload">
                                        <input type="file" onChange={(e) =>
                                            handleFileChange(e, 'frontResidenceCard')}
                                            {...register('frontResidenceCard', { required: true })} />
                                        <span>{renderFileText(files.file4)}</span>

                                    </label>
                                    {errors.frontResidenceCard?.type == "required" && <p className='err'>Note: The field is required.</p>}

                                </div>

                                <div className="form-group">
                                    <label className='text-muted font mb-2'>{language == "en" ? Strings.form7.BackResidence.en : Strings.form7.BackResidence.ar}<span style={{ color: 'red' }}>*</span></label>

                                    <label className="custom-file-upload">
                                        <input type="file" onChange={(e) =>
                                            handleFileChange(e, 'backResidenceCard')}
                                            {...register('backResidenceCard', { required: true })} />
                                        <span>{renderFileText(files.file5)}</span>

                                    </label>
                                    {errors.backResidenceCard?.type == "required" && <p className='err'>Note: The field is required.</p>}
                                </div>
                            </>
                                :
                                // swapping tow forms 


                                <>    <div className="form-group">
                                    <label className='text-muted font mb-2'>{language == "en" ? Strings.form7.nonPassportPhoto.en : Strings.form7.nonPassportPhoto.ar} <span style={{ color: 'red' }}>*</span></label>

                                    <label className="custom-file-upload">
                                        <input type="file" onChange={(e) =>
                                            handleFileChange(e, 'nonIraqPassportPhoto')}
                                            {...register('nonIraqPassportPhoto', { required: true })} />
                                        <span>{renderFileText(files.file6)}</span>
                                    </label>
                                    {errors.nonIraqPassportPhoto?.type == "required" && <p className='err'>Note: The field is required.</p>}
                                </div>

                                    <div className="form-group">
                                        <label className='text-muted font mb-2'>{language == "en" ? Strings.form7.EntryResidenceVisa.en : Strings.form7.EntryResidenceVisa.ar}<span style={{ color: 'red' }}>*</span></label>
                                        <label className="custom-file-upload">
                                            <input type="file" onChange={(e) =>
                                                handleFileChange(e, 'ResidenceVisaPhoto')}
                                                {...register('ResidenceVisaPhoto', { required: true })} />
                                            <span>{renderFileText(files.file7)}</span>
                                        </label>
                                        {errors.ResidenceVisaPhoto?.type == "required" && <p className='err'>Note: The field is required.</p>}

                                    </div></>}


                            <div className='d-flex justify-content-end'>
                                <button onClick={handleBackClick} className="backbutton me-2">{language == "en" ? Strings.backbutton.en : Strings.backbutton.ar}</button>
                                <button type="submit" className="next-button">{language == "en" ? Strings.nextbutton.en : Strings.nextbutton.ar}</button>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Dots index="7" />
        </>
    );
}

export default Form7;
