import PropTypes from 'prop-types';

import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

export default function TransactionHistoryTable({ items }) {
    return (
        <table className={css["transaction-history"]}>
  <thead className={css.thead}>
    <tr>
      <th className={css["th-title"]}>{'Type'.toUpperCase()}</th>
      <th className={css["th-title"]}>{'Amount'.toUpperCase()}</th>
      <th className={css["th-title"]}>{'Currency'.toUpperCase()}</th>
    </tr>
  </thead>
  <tbody>
    {items.map(item => (
        <tr key={item.id} className={css.tr}>
            <TransactionHistory
                type={item.type}
                amount={item.amount}
                currency={item.currency}
            />      
        </tr>
    ))}
    
  </tbody>
</table>
    );
};

TransactionHistoryTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,).isRequired,
};