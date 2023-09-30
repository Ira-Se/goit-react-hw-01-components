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




import { Test } from "./test";

import { Profile } from "./profile/profile";
import user from './profile/user.json';
import { Statistics } from "./statistics/statistics";
import data from './statistics/data.json';
import { FriendList } from "./friends/friends";
import friends from './friends/friends.json';
import { TransactionHistory } from "./transactions/transactions";
import transactions from "./transactions/transactions.json"


// const Friends = [
//   { friend: 'Nastya', child: true },
//   { friend: 'Masha', child: false },
//   { friend: 'Sasha', child: true },
//   { friend: 'Maruna', child: false },
//   {friend: 'Andrey', child: false},
// ]


// export function App() {
//   return <div><Test />
    
//     <TestSecond />
//     {Friends.map((friend, index) => {
//       return <Test key={index} friend={friend.friend} child = {friend.child} />
//     })

//     }
//   </div>
  
// }



export function App() {
  return <> <Profile  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
    stats={user.stats} />
   
    <Statistics title='Upload stats' stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions}/>
  </>
}

// export function App() {
//   return <> <Test />  <Profile />
//   </>
// }

