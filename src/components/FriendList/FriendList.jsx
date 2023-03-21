import PropTypes from 'prop-types';

import Friends from "./Friend";
import css from 'components/FriendList/Friend.module.css';


export default function FriendList({ friends }) {
    return (
        <ul className={css["friend-list"]}>
            {friends.map(friend => (
                <li className={css.item} key={friend.id}>
                    <Friends 
                        isOnline={friend.isOnline}
                        avatar={friend.avatar}
                        name={friend.name}
                    />
                </li>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,).isRequired,
};