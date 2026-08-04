import { index } from "../services/userService";
import { useEffect, useState } from "react";

const Dashboard = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await index();
        console.log(fetchedUsers);
        setUsers(fetchedUsers);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [props.user]);
  return (
    <div>
      <h1>Welcome, {props.user.username}!</h1>
      {users.map((user) => (
        <p>{user.username}</p>
      ))}
    </div>
  );
};

export default Dashboard;
