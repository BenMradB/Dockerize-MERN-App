import Enabled from '../../public/verified.png';
import NotEnabled from '../../public/not_verified.png';
import { TableCell, TableRow } from './ui/table';
import { Button } from './ui/button';

const User = ({ user, onClickUser }) => {
	return (
		<TableRow>
			<TableCell className='font-medium'>{user.userName}</TableCell>
			<TableCell>{user.email}</TableCell>
			<TableCell>
				<img
					src={user.verified ? Enabled : NotEnabled}
					alt='Enabled icon'
					style={{
						width: '35px',
						height: '35px',
					}}
				/>
			</TableCell>
			<TableCell className='text-right'>
				<Button variant='outline' onClick={() => onClickUser(user)}>
					See More Details
				</Button>
			</TableCell>
		</TableRow>
	);
};

export default User;
