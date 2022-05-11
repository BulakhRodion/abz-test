import Card from "../Card/Card";
import ButtonPrimary from "../common/Button/ButtonPrimary";
import {getUsers} from "../../helpers/requests";
import {useEffect, useState} from "react";



function CardsHolder() {

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    // eslint-disable-next-line no-unused-expressions
    useEffect(() => {
        getUsers(page)
            .then(res => {
                console.log(res)
                setUsers(res.data?.users);
            })
            .catch(err => {
                console.log(err);
            });
    }, [page]);

    function handleClick() {
        setPage(page + 1);
        console.log('clicked')
    }

    return (
        <div className="abz__cards-wrapper container">
            <h2 className="abz__cards-title">Working with GET request</h2>
            {
                users.map(user => {
                    return <Card key={user?.id} user={user}/>
                })
            }
            <ButtonPrimary type="button" onClick={handleClick}>Show more</ButtonPrimary>
        </div>
    );
}

export default CardsHolder;