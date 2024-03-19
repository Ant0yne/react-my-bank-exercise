// COMPONENTS
import Header from "./components/Header";
import Accounts from "./components/Accounts";

// JSON
import accounts from "./assets/json/accounts.json";

// IMG
import fakeLogoBank from "./assets/img/fakeLogoBank.png";
import profilePic from "./assets/img/profilePic.jpg";

// CSS
import "./App.css";

function App() {
	return (
		<>
			<Header logo={fakeLogoBank} user="Antoine" profilePic={profilePic} />
			<Accounts accounts={accounts} />
		</>
	);
}

export default App;
