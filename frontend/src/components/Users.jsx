import User from './User';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from './ui/table';

const Users = ({ users, onClickUser }) => {
	return (
		<Table>
			<TableCaption>A list of all the users</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className='w-[200px]'>User Name</TableHead>
					<TableHead>Email Address</TableHead>
					<TableHead>Is Enabled</TableHead>
					<TableHead className='text-right'>
						See more details
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{users.map((user, key) => (
					<User user={user} key={key} onClickUser={onClickUser} />
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Users</TableCell>
					<TableCell className='text-right'>{users.length}</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
};

export default Users;
