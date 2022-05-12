import Input from "../common/Input/Input";
import ButtonPrimary from "../common/Button/ButtonPrimary";
import {useEffect, useState} from "react";
import {getPositions} from "../../helpers/requests";
import Radio from "../common/Radio/Radio";

function Form() {

    const [positions, setPositions] = useState([]);

    useEffect(() => {
        getPositions()
            .then(res => {
                console.log(res)
                setPositions(res.data.positions);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <form className="abz__form">
            <Input label={"Your name"} />
            <Input label={"Email"}/>
            <Input label={"Phone"} helper={true} helperContent={"+38 (XXX) XXX - XX - XX"}/>
            <span className="abz__position">Select your position</span>
            {
                positions && positions.map(position => {
                    return <Radio key={position?.id} props={position} isChecked={position?.id === 1}/>
                })
            }
            <div className="abz__form_btn-wrapper">
                <ButtonPrimary type="submit" disabled={true}>
                    Sign Up
                </ButtonPrimary>
            </div>
        </form>
    );
}

export default Form;