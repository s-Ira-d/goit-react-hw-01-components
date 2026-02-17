import "./App.css";
import React from "react";

import user from "./data/user.json";
import Profile from "./components/Profile/Profile";

import data from "./data/data.json";
import Statistics from "./components/Statistics/Statistics";

import friends from "./data/friends.json";
import FriendList from "./components/FriendList/FriendList";

import transactions from "./data/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <div>
      <h1>Task-1</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <h1>Task-2</h1>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <h1>Task-3</h1>
      <FriendList friends={friends} />

      <h1>Task-4</h1>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
