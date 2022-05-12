import UserAvatar from "../../assets/images/photo-cover.svg"
import Tooltip from "../common/Tooltip/Tooltip";

function Card({user}) {

    function showTooltip(e) {
        e.target.classList.add("tooltip-active");
    }

    function hideTooltip(e) {
        e.target.classList.remove("tooltip-active");
    }

    return (
        <div className="abz__card">
            <img className="abz__card_image" src={user.photo ? user.photo : UserAvatar} alt="user avatar"/>
            <div className="abz__card_info">
                <p className="abz__card_name" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>{user.name || "Missing data"}</p>
                <Tooltip content={user.name}/>
            </div>
            <div className="abz__card_info">
                <p className="abz__card_position" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>{user.position || "Missing data"}</p>
                <Tooltip content={user.position}/>
            </div>
            <div className="abz__card_info">
                <p className="abz__card_email" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>{user.email || "Missing data"}</p>
                <Tooltip content={user.email}/>
            </div>
            <div className="abz__card_info">
                <p className="abz__card_phone" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>{user.phone || "Missing data"}</p>
                <Tooltip content={user.phone}/>
            </div>
        </div>
    );
}

export default Card;