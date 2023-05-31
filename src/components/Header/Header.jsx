import { Link } from 'react-router-dom';
import './header.css';
import SiteLogo from '../../assets/images/icons/siteLogo.svg';

export const Header = () => {
	return (
		<header className="site-header">
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container">
					<Link className="navbar-brand" to="/">
						<img
							src={SiteLogo}
							width="107"
							height="52"
							alt="Site logo"
						/>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavDropdown"
					>
						<ul className="navbar-nav">
							<li className="site-header__item">
								<a
									className="site-header__link"
									href="tel:+998777773030"
								>
									+998(77)777-30-30
								</a>
							</li>
							<li className="site-header__item">
								<a
									className="site-header__link"
									href="mailto:faarobiy@gmail.uz"
								>
									faarobiy@gmail.uz
								</a>
							</li>
							<li className="site-header__item">
								<form autoComplete="off">
									<select name="user_language">
										<option value="uz">Uz</option>
										<option value="ru">Ru</option>
									</select>
								</form>
							</li>
							<li className="site-header__item">
								<Link to="/help">Yordam</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};
