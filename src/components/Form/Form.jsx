import ButtonPrimary from "../common/Button/ButtonPrimary";
import {useEffect, useRef, useState} from "react";
import {getPositions, sendUserData} from "../../helpers/requests";
import Radio from "../common/Radio/Radio";
import {hideFocused, showFocused} from "../../helpers/styleAdditionals";
import FormError from "../common/FormError/FormError";
import {isEmailValid, isFormValid, isNameValid, isPhoneValid, isPhotoValid} from "../../validations/UserVavidation";
import {ERRORS_OBJ, VALUES_OBJ} from "../../constants";
import FormSuccess from "../FormSuccess/FormSuccess";

function Form({parentCallback}) {

    const fileInput = useRef(null);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [errors, setErrors] = useState(ERRORS_OBJ);
    const [values, setValues] = useState(VALUES_OBJ);
    const [positions, setPositions] = useState([]);
    const [isSend, setIsSend] = useState(false);

    useEffect(() => {
        getPositions()
            .then(res => {
                setPositions(res.data.positions);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleChange = (e) => {
        if(e.target.name === 'name') {
            setValues({...values, [e.target.name]: e.target.value});
            isNameValid(e.target.value, e.target.name, errors, setErrors);
        } else if (e.target.name === 'email') {
            setValues({...values, [e.target.name]: e.target.value});
            isEmailValid(e.target.value, e.target.name, errors, setErrors);
        } else if (e.target.name === 'phone') {
            setValues({...values, [e.target.name]: e.target.value});
            isPhoneValid(e.target.value, e.target.name, errors, setErrors);
        } else if (e.target.name === 'position_id') {
            const toInt = parseInt(e.target.value);
            setValues({...values, [e.target.name]: toInt});
        } else {
            if(e.target.files[0]) {
                setValues({...values, [e.target.name]: e.target.files[0]});
                isPhotoValid(e.target.files[0], e.target.name, errors, setErrors);
            }
        }
    };

    function openFileDialog() {
        fileInput.current.click();
    }

    function handleSubmit(e) {
        console.log(values);
        e.preventDefault();
        sendUserData(values)
            .then(res => {
                if(res.data?.success) {
                    document.body.classList.add('show-success');
                    setIsSend(true);
                    parentCallback(true);
                    setTimeout(() => {
                        setIsSend(false);
                        document.body.classList.remove('show-success');
                    }, 5000);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        if(Object.values(values).every(value => value !== '')) {
            setBtnDisabled(isFormValid(errors));
        } else {
            setBtnDisabled(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);

    return (
        <div className="abz__post-block">

            <h2 className="abz__block-title">Working with POST request</h2>
            <form className={!isSend ? "abz__form" : "abz__form _hide"} onSubmit={handleSubmit}>
                <div className="abz__form-group">
                    <input className="abz__input" type='text' required={true} name='name' onChange={handleChange} value={values['name']} onFocus={showFocused} onBlur={hideFocused}/>
                    <label className="abz__label">Your name</label>
                    {
                        errors.name && <FormError message={errors.name}/>
                    }
                </div>
                <div className="abz__form-group">
                    <input className="abz__input" type='email' required={true} name='email' onChange={handleChange} onFocus={showFocused} value={values['email']} onBlur={hideFocused}/>
                    <label className="abz__label">Email</label>
                    {
                        errors.email && <FormError message={errors.email}/>
                    }
                </div>
                <div className="abz__form-group">
                    <input className="abz__input" type='tel' required={true} name='phone' onChange={handleChange} onFocus={showFocused} value={values['phone']} onBlur={hideFocused}/>
                    <label className="abz__label">Phone</label>
                    {
                        errors.phone ? <FormError message={errors.phone}/> : <small className="abz__input-helper">+38 (XXX) XXX - XX - XX</small>
                    }

                </div>
                <span className="abz__position">Select your position</span>
                {
                    positions && positions.map(position => {
                        return <Radio key={position?.id} props={position} onChange={handleChange} isChecked={position?.id === 1}/>
                    })
                }
                <div className="abz__form-group">
                    <div className="abz__upload-wrapper">
                        <button type="button" className="abz__upload-btn" onClick={openFileDialog}>
                            Upload
                        </button>
                        <input className="abz__input abz__input--holder" type='text'/>
                        <label className="abz__label abz__label--holder">{values.photo.name || 'Upload your photo'}</label>
                    </div>
                    <input className="abz__input abz__input--file" type='file' ref={fileInput} required={true} name='photo' onChange={handleChange} onFocus={showFocused} onBlur={hideFocused}/>
                    {
                        errors.photo && <FormError message={errors.photo}/>
                    }
                </div>
                <div className="abz__form_btn-wrapper">
                    <ButtonPrimary type="submit" disabled={btnDisabled}>
                        Sign Up
                    </ButtonPrimary>
                </div>
            </form>
            {
                isSend && <FormSuccess title={"User successfully registered"}/>
            }
        </div>
    );
}

export default Form;