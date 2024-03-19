// Component
import Account from "../Account";

// CSS
import "./accounts.css";

const Accounts = (props) => {
	return (
		<>
			<main>
				{props.accounts.map((elem) => {
					return <Account account={elem} />;
				})}
			</main>
		</>
	);
};

export default Accounts;
