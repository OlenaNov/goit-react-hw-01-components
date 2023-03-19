import PropTypes from 'prop-types';
import React from 'react';

export default function Friends({ avatar, name, isOnline }) {
    return (
        <React.Fragment>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </React.Fragment>
    );
};

Friends.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};