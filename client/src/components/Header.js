import { useState } from 'react';
import NavBar from './NavBar';
import '../styles/Header.css';

const Header = () => {
	const [burgerClicked, setBurgerClicked] = useState(false);

	const handleBurgerHover = (event) => {
		event.preventDefault();
		setBurgerClicked(true);
	};

	const handleBurgerLeave = (event) => {
		event.preventDefault();
		setBurgerClicked(false);
	};

	return (
		<>
			<header>
				<a href="/">
					<img
						className="header-logo"
						src={'../images/BookYeetLogo.png'}
						alt={'logo'}
					></img>
				</a>
				<ul className="header-list">
					<li>
						<a href="/login" className="header-link1">
							Login
						</a>
					</li>
					<li>
						<a href="/about" className="header-link2">
							How it works
						</a>
					</li>
					<li
						className="img-li"
						onMouseEnter={handleBurgerHover}
						onMouseLeave={handleBurgerLeave}
					>
						<img
							src={'../images/burger-menu.svg'}
							alt={'nav bar menu'}
							className="burger-image"
						></img>
						<div>{burgerClicked ? <NavBar /> : null}</div>
					</li>
				</ul>
			</header>
		</>
	);
};

export default Header;
