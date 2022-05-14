import Navbar from "../../components/Navbar/Navbar";
import FirstScreen from "../../components/FirstScreen/FirstScreen";
import CardsHolder from "../../components/CardsHolder/CardsHolder";
import Form from "../../components/Form/Form";
import {useState} from "react";


function MainLayout() {

    const [displayNewUser, setDisplayNewUser] = useState(false);

    const handleCallback = (data) => {
        setDisplayNewUser(data)
        setTimeout(() => {
            setDisplayNewUser(false)
        }, 5000)
    }

    return (
        <div className="wrapper container">
            <header className="abz__header ">
                <Navbar />
                <FirstScreen />
                <CardsHolder displayUser={displayNewUser}/>
                <Form parentCallback={handleCallback}/>
            </header>
        </div>
    );
}

export default MainLayout;