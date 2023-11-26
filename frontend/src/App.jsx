import { useEffect, useState } from "react";
import { Users } from "./components";
import UserDetailsScreen from "./screens/UserDetailsScreen";
import Axios from "axios";
import { Button } from "./components/ui/button";

const BASE_URL = `http://localhost:5000/api/users`;

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const onSetSelectedUserHandler = (user) => setSelectedUser(user);
  const onAddUserHandler = async () => {
    try {
      const user = {
        userName: "Benmrad Bilel",
        email: `bilel${Date.now()}@gmail.com`,
        password: "1234560",
      };

      await Axios.post(`${BASE_URL}/new`, user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const {
        data: { data },
      } = await Axios.get(BASE_URL);
      console.log(`Data : ${data}`);
      setUsers(data);
    };

    fetchUsers();
  }, [users]);
  return (
    <>
      <Button className="m-4" onClick={onAddUserHandler}>
        Add New User
      </Button>
      <main className="w-full flex justify-center gap-3 p-4">
        <Users users={users} onClickUser={onSetSelectedUserHandler} />
        {selectedUser && <UserDetailsScreen user={selectedUser} />}
      </main>
    </>
  );
};

export default App;
