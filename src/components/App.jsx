import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";
import { FriendList } from "./friends/friends";
import { TransactionHistory } from "./transactions/transactions";

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json'
import css from './App.module.css'

export function App() {
  return <div className={css.container}> <Profile  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
    stats={user.stats} />
   
    <Statistics title='Upload stats' stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions}/>
  </div>
}

