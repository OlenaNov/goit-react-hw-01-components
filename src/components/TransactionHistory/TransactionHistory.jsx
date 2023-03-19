import PropTypes from 'prop-types';
import React from 'react';

export default function TransactionHistory({ type, amount, currency }) {
    return (
    <React.Fragment>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </React.Fragment>
    );
};

TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};