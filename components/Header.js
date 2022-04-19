import Image from 'next/image';
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, ChatIcon, MenuIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import React from 'react';
import { useSession } from 'next-auth/react'

function Header () {
	const {data: session} = useSession();

	return (
		<div className="shadow- border-b bg-white sticky top-0 z-50 ">
			<div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
				{/* Left section */}
				<div className="relative lg:inline-grid w-24 cursor-pointer">
					<Image
						src="https://links.papareact.com/ocw"
						layout="fill"
						objectFit="contain"
					/>
				</div>

				{/* Middle section - Search Input*/}
				<div className="max-w-xs">
					<div className="relative mt-1 p-3 rounded-md">
						<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
							<SearchIcon className="h-5 w-5 text-gray-500" />
						</div>
						<input
							className="bg-gray-100 block w-full h-15 pl-10 sm:text-sm border-gray focus:outline-none rounded-md"
							type="text"
							placeholder="Search"
						/>
					</div>
				</div>

				{/* Right section */}
				<div className="flex items-center justify-end space-x-6">
					<HomeIcon className="navBtn" />
					<MenuIcon className="h-6 md:hidden cursor-pointer" />

					<div className="relative navBtn">
						<ChatIcon className="navBtn" />
						<div className="absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white">
							3
						</div>
					</div>
					<PlusCircleIcon className="navBtn" />
					<UserGroupIcon className="navBtn" />
					<HeartIcon className="navBtn" />

					<img
						src={session.user?.image}
						alt="profile pic"
						className="h-10 rounded-full"
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
