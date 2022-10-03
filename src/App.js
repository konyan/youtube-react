import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		const api_key = "8620c759d63d2479f117609d461a69fd";
		const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log("HELLO", data);
				setGenres(data.genres);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<nav className="navbar">
				<div className="toggle-btn">
					<span />
					<span />
					<span />
				</div>
				<img src="img/logo.PNG" className="logo" alt="" />
				<div className="search-box">
					<input type="text" className="search-bar" placeholder="search" />
					<button className="search-btn">
						<img src="img/search.PNG" alt="" />
					</button>
				</div>
				<div className="user-options">
					<img src="img/video.PNG" className="icon" alt="" />
					<img src="img/grid.PNG" className="icon" alt="" />
					<img src="img/bell.PNG" className="icon" alt="" />
					<div className="user-dp">
						<img src="img/profile-pic.png" alt="" />
					</div>
				</div>
			</nav>
			{/* sidebar */}
			<div className="side-bar">
				<a href="#" className="links active">
					<img src="img/home.PNG" alt="" />
					home
				</a>
				<a href="#" className="links">
					<img src="img/explore.PNG" alt="" />
					explore
				</a>
				<a href="#" className="links">
					<img src="img/subscription.PNG" alt="" />
					subscription
				</a>
				<hr className="seperator" />
				<a href="#" className="links">
					<img src="img/library.PNG" alt="" />
					library
				</a>
				<a href="#" className="links">
					<img src="img/history.PNG" alt="" />
					history
				</a>
				<a href="#" className="links">
					<img src="img/your-video.PNG" alt="" />
					your video
				</a>
				<a href="#" className="links">
					<img src="img/watch-later.PNG" alt="" />
					watch leater
				</a>
				<a href="#" className="links">
					<img src="img/liked video.PNG" alt="" />
					like video
				</a>
				<a href="#" className="links">
					<img src="img/show more.PNG" alt="" />
					show more
				</a>
			</div>
			{/* filters */}
			<div className="filters">
				{genres.length > 0 ? (
					genres.map((genre, index) => (
						<button
							className={`filter-options ${index === 0 && "active"}`}
							key={genre.id}
						>
							{genre.name}
						</button>
					))
				) : (
					<h1>Loading...</h1>
				)}
			</div>
			{/* videos */}
			<div className="video-container"></div>
		</>
	);
}

export default App;
