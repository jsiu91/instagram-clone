import React from 'react';
import Post from './Post.js';

function Posts () {
	const posts = [
		{
			id: 123,
			username: 'joonnn',
			userImg: 'https://links.papareact.com/3ke',
			img:
				'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			caption: 'This is DOPE!',
		},
		{
			id: 123,
			username: 'joonnn',
			userImg: 'https://links.papareact.com/3ke',
			img:
				'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			caption: 'This is DOPE!',
		},
		{
			id: 123,
			username: 'joonnn',
			userImg: 'https://links.papareact.com/3ke',
			img:
				'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			caption: 'This is DOPE!',
		},
	];
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.username}
					userImg={post.userImg}
					img={post.img}
					caption={post.caption}
				/>
			))}
		</div>
	);
}

export default Posts;
