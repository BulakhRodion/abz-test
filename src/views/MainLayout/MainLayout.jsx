import Navbar from "../../components/Navbar/Navbar";
import FirstScreen from "../../components/FirstScreen/FirstScreen";
import CardsHolder from "../../components/CardsHolder/CardsHolder";


function MainLayout() {
    return (
        <div className="wrapper container">
            <header className="abz__header ">
                <Navbar />
                <FirstScreen />
                <CardsHolder />
            </header>
        </div>
    );
}

export default MainLayout;