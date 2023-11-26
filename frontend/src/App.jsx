import { useEffect, useState } from 'react';
import { Users } from './components';
import UserDetailsScreen from './screens/UserDetailsScreen';
import Axios from 'axios';

const BASE_URL = `http://backend:5000/api/users`;

const App = () => {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);

	const onSetSelectedUserHandler = (user) => setSelectedUser(user);

	useEffect(() => {
		const fetchUsers = async () => {
			const {
				data: { data },
			} = await Axios.get(BASE_URL);
			setUsers(data);
		};

		fetchUsers();
	}, [users]);
	return (
		<main className='w-full flex justify-center gap-3 p-4'>
			<Users users={users} onClickUser={onSetSelectedUserHandler} />
			{selectedUser && <UserDetailsScreen user={selectedUser} />}
		</main>
	);
};

export default App;
