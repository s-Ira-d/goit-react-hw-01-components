import "./App.css";
import React from "react";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  const user = {
    username: "Jacques Gluke",
    tag: "jgluke",
    location: "Ocho Rios, Jamaica",
    avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

  const statsData = [
    { id: "id-1", label: ".docx", percentage: 22 },
    { id: "id-2", label: ".mp3", percentage: 17 },
    { id: "id-3", label: ".pdf", percentage: 25 },
    { id: "id-4", label: ".mp4", percentage: 36 },
  ];

  const friends = [
    {
      id: "id-1",
      name: "Mango",
      avatar: "https://www.flaticon.com/svg/static/icons/svg/1077/1077012.svg",
      isOnline: true,
    },
    {
      id: "id-2",
      name: "Kiwi",
      avatar: "https://www.flaticon.com/svg/static/icons/svg/1077/1077012.svg",
      isOnline: false,
    },
    {
      id: "id-3",
      name: "Ajax",
      avatar: "https://www.flaticon.com/svg/static/icons/svg/1077/1077012.svg",
      isOnline: true,
    },
  ];

  const transactions = [
    { id: "1", type: "invoice", amount: "125.00", currency: "USD" },
    { id: "2", type: "payment", amount: "85.00", currency: "USD" },
    { id: "3", type: "invoice", amount: "200.00", currency: "EUR" },
    { id: "4", type: "withdrawal", amount: "50.00", currency: "USD" },
  ];

  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statsData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
