// import PropTypes from 'prop-types';

import Profile from "components/Profile/Profile";
import user from "components/Profile/user.json";
import StatisticsList from 'components/Statistics/StatisticsList';
import data from 'components/Statistics/data.json';
import FriendList from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import TransactionHistoryTable from 'components/TransactionHistory/TransactionHistoryTable';
import transactions from 'components/TransactionHistory/transactions.json'

export default function App() {
  return (
    <div>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

    <StatisticsList stats={data}/>

    <FriendList friends={friends}/>

    <TransactionHistoryTable items={transactions}/>
  </div>
  )
};
