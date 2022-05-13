const FILE_SIZE = 5 * 1024 * 1024;
const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg"];
const PHONE_REGEX = /^[+]?380(\d{9})$/;
const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

export const isNameValid = (value, name, errors, setErrors) => {
    let error = '';
    if (value.length < 2 || value.length > 20) {
        error = "Username should contain 2-60 characters";
        return setErrors({...errors, [name]: error});
    }
    return setErrors({...errors, [name]: error});
};

export const isEmailValid = (value, name, errors, setErrors) => {
    let error = '';
    if (value.length < 2 || value.length > 100) {
        error = "Email should contain 2-100 characters";
        return setErrors({...errors, [name]: error});
    }
    if (!EMAIL_REGEX.test(value)) {
        error = "Email is not valid";
        return setErrors({...errors, [name]: error});
    }
    return setErrors({...errors, [name]: error});
};

export const isPhoneValid = (value, name, errors, setErrors) => {
    let error = '';
    if (!PHONE_REGEX.test(value)) {
        error = "Number should start with code of Ukraine +380";
        return setErrors({...errors, [name]: error});
    }
    return setErrors({...errors, [name]: error});
};

export const isPhotoValid = (value, name, errors, setErrors) => {
    let error = '';
    if (value.size > FILE_SIZE) {
        error = "File size should be less than 5MB";
        return setErrors({...errors, [name]: error});
    }
    if (!SUPPORTED_FORMATS.includes(value.type)) {
        error = "File format should be jpeg or jpg";
        return setErrors({...errors, [name]: error});
    }
    return setErrors({...errors, [name]: error});
};

export const isFormValid = (errors) => {
    console.log(errors);
    return !Object.values(errors).every(error => error === '');
};
