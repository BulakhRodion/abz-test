


function Radio({props, isChecked, onChange}) {

    return (
        <div className="abz__form-group abz__form-group--radio">
            <label className="abz__radio-container" htmlFor={`formRadio${props.id}`}>
                <input type="radio" name="position_id" value={props.id} id={`formRadio${props.id}`} onChange={onChange} defaultChecked={isChecked} className="abz__radio"/>
                <span className="abz__radio-custom"></span>
                <span className="abz__radio-name">{props.name}</span>
            </label>
        </div>
    );
}

export default Radio;