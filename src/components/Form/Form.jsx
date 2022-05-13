import ButtonPrimary from "../common/Button/ButtonPrimary";
import {useEffect, useState} from "react";
import {getPositions} from "../../helpers/requests";
import Radio from "../common/Radio/Radio";
import {hideFocused, showFocused} from "../../helpers/styleAdditionals";
import FormError from "../common/FormError/FormError";
import {isEmailValid, isFormValid, isNameValid, isPhoneValid, isPhotoValid} from "../../validations/UserVavidation";

function Form() {

    const [btnDisabled, setBtnDisabled] = useState(true);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        photo: '',
    });

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        position_id: 1,
        photo: '',
    });

    const [positions, setPositions] = useState([]);

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

        if(values.name && values.email && values.phone && values.position_id && values.photo) {
            setBtnDisabled(isFormValid(errors));
        } else {
            setBtnDisabled(true);
        }
    };

    return (
        <form className="abz__form">
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
                <input className="abz__input" type='file' required={true} name='photo' onChange={handleChange} onFocus={showFocused} onBlur={hideFocused}/>
                <label className="abz__label">Upload your photo</label>
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
    );
}

export default Form;