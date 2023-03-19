
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

export default function TransactionHistoryTable({ items }) {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    {items.map(item => (
        <tr key={item.id}>
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