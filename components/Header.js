import Image from 'next/image';
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
} from '@heroicons/react/outline';
import React from 'react';

function Header () {
	return (
		<div className="flex justify-between max-w-6xl">
			{/* Left section */}
			<div className="relative hidden lg:inline-grid w-24 cursor-pointer">
				<Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain" />
			</div>

			<div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
				<Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain" />
			</div>

			{/* Middle section - Search Input*/}
			<div className="relative mt-1 p-3 rounded-md">
				<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
					<SearchIcon className="h-5 w-5 text-gray-500" />
				</div>
				<input
					className="bg-gray-100 block w-full h-15 pl-10 sm:text-sm border-gray focus:outline-none"
					type="text"
					placeholder="Search"
				/>
			</div>
			{/* Right section */}
			<div />
		</div>
	);
}

export default Header;
