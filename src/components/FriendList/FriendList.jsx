// import PropTypes from 'prop-types';

import Friends from "./Friend";

export default function FriendList({ friends }) {
    return (
        <ul class="friend-list">
            {friends.map(friend => (
                <li class="item" key={friend.id}>
                    <Friends 
                        isOnline={friend.isOnline}
                        avatar={friend.avatar}
                        name={friend.name}
                    />
                </li>
            ))}
        </ul>
    )
}