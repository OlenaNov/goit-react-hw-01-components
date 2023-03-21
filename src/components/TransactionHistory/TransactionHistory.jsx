import PropTypes from 'prop-types';

import css from 'components/TransactionHistory/TransactionHistory.module.css';
import toUpperCaseFirstLetter from 'components/TransactionHistory/toUpperCaseFirstLetter.js';


export default function TransactionHistory({ type, amount, currency }) {
    return (
    <>
      <td className={css["td-text"]}>{toUpperCaseFirstLetter(type)}</td>
      <td className={css["td-text"]}>{amount}</td>
      <td className={css["td-text"]}>{currency}</td>
    </>
    );
};

TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};