import ButtonPrimary from "../common/Button/ButtonPrimary";


function FirstScreen() {
    return (
        <div className="abz__fs abz__fs-wrapper ">
            <div className="container abz__fs-container">
                <h1 className="abz__fs-title">Test assignment for front-end developer</h1>
                <p className="abz__fs-text">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                <ButtonPrimary>Sign up</ButtonPrimary>
            </div>
        </div>
    );
}

export default FirstScreen;