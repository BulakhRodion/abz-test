import Navbar from "../../components/Navbar/Navbar";
import FirstScreen from "../../components/FirstScreen/FirstScreen";
import CardsHolder from "../../components/CardsHolder/CardsHolder";
import PostBlock from "../../components/PostBlock/PostBlock";


function MainLayout() {
    return (
        <div className="wrapper container">
            <header className="abz__header ">
                <Navbar />
                <FirstScreen />
                <CardsHolder />
                <PostBlock />
            </header>
        </div>
    );
}

export default MainLayout;