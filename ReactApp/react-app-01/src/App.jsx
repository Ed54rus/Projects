import './App.css';

const App = () => {
	return (
		<div className='app-wrapper'>
			<header className='header'>
				<img
					className='img'
					src='https://avatars.mds.yandex.net/i?id=c3bd8df4b20931c89e97017092eb0eb8-4073140-images-thumbs&n=13&exp=1'
				/>
			</header>
			<nav className='nav'>
				<a href='#!'>Profile</a>
				<a href='#!'>News</a>
				<a href='#!'>Music</a>
				<a href='#!'>Settings</a>
			</nav>
			<main className='main'>
				<div>
					<img src='https://avatars.mds.yandex.net/i?id=1e1f9124c6bc741cd9b2ba9478b3347e-5289357-images-thumbs&n=13' />
				</div>
				<div>ava+desc</div>
				<div>
					My posts
					<div>New post</div>
					<div>
						<div>Post 1</div>
						<div>Post 2</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
