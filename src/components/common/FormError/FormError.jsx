function FormError(props) {
    return (
        <div className="abz__error" role="alert">
            {props.message}
        </div>
    );
}

export default FormError;