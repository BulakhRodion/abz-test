


function Radio({props, isChecked}) {

    return (
        <div className="abz__form-group abz__form-group--radio">
            <label className="abz__radio-container">
                <input type="radio" name="position" value={props.name} defaultChecked={isChecked} className="abz__radio"/>
                <span className="abz__radio-custom"></span>
                <span className="abz__radio-name">{props.name}</span>
            </label>
        </div>
    );
}

export default Radio;