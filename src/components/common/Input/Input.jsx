function Input(props) {

    function showFocused(e) {
        e.target.classList.add("input-active");
    }

    function hideFocused(e) {
        if(e.target.value.length > 0) {
            return;
        } else {
            e.target.classList.remove("input-active");
        }
    }

    return (
        <div className="abz__form-group">
            <input className="abz__input" onFocus={showFocused} onMouseEnter={showFocused} onMouseLeave={hideFocused}/>
            <label className="abz__label">{props.label}</label>
            {
                props.helper && <small className="abz__input-helper">{props.helperContent}</small>
            }
        </div>
    );
}

export default Input;