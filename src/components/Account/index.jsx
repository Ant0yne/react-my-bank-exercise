import Button from "../Button";

import "./account.css";

const Account = (props) => {
	const name = props.account.name;
	const balance = props.account.balance;
	const color = props.account.color;
	const operations = props.account.operations;

	return (
		<>
			<div className={color === "#1976D2" ? "blue" : "pink"}>
				<h2>{name}</h2>
				<h3>{balance}</h3>
			</div>
			<div className="operation">
				{operations.map((elem) => {
					return (
						<>
							<span>{elem.date}</span>
							<p>{elem.description}</p>
							<p>{elem.amount}</p>
						</>
					);
				})}
			</div>
			<nav>
				<Button />
			</nav>
		</>
	);
};

export default Account;
