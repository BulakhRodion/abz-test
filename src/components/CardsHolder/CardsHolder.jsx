import Card from "../Card/Card";
import ButtonPrimary from "../common/Button/ButtonPrimary";
import {getUsers} from "../../helpers/requests";
import {useEffect, useState} from "react";
import {usersFiler} from "../../helpers/usersFilter";
import Preloader from "../../assets/images/Preloader.svg";



function CardsHolder({displayUser}) {

    const [users, setUsers] = useState([]);
    const [isLastPage, setIsLastPage] = useState(false);
    const [pageCounter, setPageCounter] = useState(-1);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(displayUser) {
            setUsers([]);
            setPage(1);
        } else {
            return undefined;
        }
    }, [displayUser]);

    // eslint-disable-next-line no-unused-expressions
    useEffect(() => {
        getUsers(page)
            .then(res => {
                if(res.data?.total_pages > 1) {
                    setPageCounter(res.data?.total_pages);
                }

                if (pageCounter === page) {
                    setIsLastPage(true);
                }

                usersFiler(users, setUsers, res.data?.users);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, [page]);

    function handleClick() {
        setIsLoading(true);
        setPage(page + 1);
    }

    return (
        <div className="abz__cards-wrapper container">
            <h2 className="abz__block-title">Working with GET request</h2>
            <div className="abz__cards-container">
                {
                    users && users.map(user => {
                        return <Card key={user?.id} user={user}/>
                    })
                }
                {
                    isLoading && <img className="abz__loader" src={Preloader} alt="preloader"/>
                }
            </div>
            {
                isLastPage ? <div className="abz__cards-end"></div> : <ButtonPrimary type="button" onClick={handleClick}>Show more</ButtonPrimary>
            }
        </div>
    );
}

export default CardsHolder;