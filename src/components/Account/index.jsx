import Button from "../Button";

import "./account.css";

const Account = ({ account }) => {
	const { name, balance, color, operations } = account;

	return (
		<>
			<div>
				<div className={`account ${color === "#1976D2" ? "blue" : "pink"}`}>
					<h2>{name}</h2>
					<h3>{balance}</h3>
				</div>
				<div className="operation">
					{operations.map((elem, i) => {
						return (
							<>
								<span key={i}>{elem.date}</span>
								<p>{elem.description}</p>
								<p>{elem.amount}</p>
							</>
						);
					})}
				</div>
				<nav>
					<Button />
				</nav>
			</div>
		</>
	);
};

export default Account;
