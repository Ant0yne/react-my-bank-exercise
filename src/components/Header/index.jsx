// COMPONENTS
import Logo from "../Logo";
import User from "../User";

// CSS
import "./header.css";

const Header = ({ logo, user, profilePic }) => {
	return (
		<>
			<header>
				<div className="container">
					<Logo logo={logo} />
					<User user={user} profilePic={profilePic} />
				</div>
			</header>
		</>
	);
};

export default Header;
