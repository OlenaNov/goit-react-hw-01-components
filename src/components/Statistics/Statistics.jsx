import PropTypes from 'prop-types';
import React from 'react';

export default function Statistics({ label, percentage }) {
    return (
        <React.Fragment>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
        </React.Fragment>
    );
};

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};
