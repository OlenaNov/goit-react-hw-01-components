import PropTypes from 'prop-types';

import css from 'components/FriendList/Friend.module.css';

export default function Friends({ avatar, name, isOnline }) {
    return (
        <>
            <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </>
    );
};

Friends.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};