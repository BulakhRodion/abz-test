function ButtonPrimary({children, onClick, type, disabled}) {
    return (
        <button type={type} onClick={onClick} disabled={disabled || false} className="button-primary">
            {children}
        </button>
    );
}

export default ButtonPrimary;