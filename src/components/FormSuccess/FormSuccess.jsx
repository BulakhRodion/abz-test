import Success from '../../assets/images/success-image.svg';

function FormSuccess(props) {
    return (
        <div className="abz__form-success">
            <h2>{props.title || 'Success'}</h2>
            <img src={Success} alt="Success" />
        </div>
    );
}

export default FormSuccess;