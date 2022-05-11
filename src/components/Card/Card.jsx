import UserAvatar from "../../assets/images/photo-cover.svg"

function Card({user}) {
    // console.log(props);
    return (
        <div className="abz__card">
            <img className="abz__card_image" src={user.photo ? user.photo : UserAvatar} alt="user avatar"/>
            <p className="abz__card_name">{user.name}</p>
            <p className="abz__card_position">{user.position}</p>
            <p className="abz__card_email">{user.email}</p>
            <p className="abz__card_phone">{user.phone}</p>
        </div>
    );
}

export default Card;