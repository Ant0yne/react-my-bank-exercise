// COMPONENTS
import Logo from "../Logo";
import User from "../User";

// CSS
import "./header.css";

const Header = (props) => {
	return (
		<>
			<header>
				<Logo />
				<User />
			</header>
		</>
	);
};

export default Header;
