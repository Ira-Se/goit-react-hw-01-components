// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template лдгргшол
//     </div>
//   );
// };






import { Profile } from "./profile/profile";
import user from './profile/user.json';
import { Statistics } from "./statistics/statistics";
import data from './statistics/data.json';
import { FriendList } from "./friends/friends";
import friends from './friends/friends.json';
import { TransactionHistory } from "./transactions/transactions";
import transactions from "./transactions/transactions.json"
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

