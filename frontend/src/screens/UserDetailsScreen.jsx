import { BellRing, Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const UserDetailsScreen = ({ user }) => {
	return (
		<Card className={cn('w-[380px]')}>
			<CardHeader>
				<CardTitle>{user.userName}</CardTitle>
				<CardDescription>{user.email}</CardDescription>
			</CardHeader>
			<CardContent className='grid gap-4'>
				<div className=' flex items-center space-x-4 rounded-md border p-4'>
					<BellRing />
					<div className='flex-1 space-y-1'>
						<p className='text-sm font-medium leading-none'>
							Push Notifications
						</p>
						<p className='text-sm text-muted-foreground'>
							Send notifications to device.
						</p>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button className='w-full'>
					<Check className='mr-2 h-4 w-4' /> Mark all as read
				</Button>
			</CardFooter>
		</Card>
	);
};

export default UserDetailsScreen;
