// Component
import Account from "../Account";

// CSS
import "./accounts.css";

const Accounts = (props) => {
	return (
		<>
			<main>
				<div className="container">
					{props.accounts.map((elem, i) => {
						return <Account account={elem} key={i} />;
					})}
				</div>
			</main>
		</>
	);
};

export default Accounts;
