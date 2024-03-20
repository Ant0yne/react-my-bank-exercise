import Button from "../Button";

import "./account.css";

const Account = ({ account }) => {
	const { name, balance, color, operations } = account;
	const descriptionLimit = 4;
	return (
		<>
			<div className="account">
				<div
					className={`account-title ${color === "#1976D2" ? "blue" : "pink"}`}>
					<h2>{name}</h2>
					<h3>{balance} €</h3>
				</div>
				{operations.map((elem, i) => {
					return (
						<div key={i} className="operation">
							<span>{elem.date}</span>
							<div>
								<p>{elem.description}</p>
								<p>{elem.amount} €</p>
							</div>
						</div>
					);
				})}
				<nav>
					<Button />
				</nav>
			</div>
		</>
	);
};

export default Account;
