import "./user.css";

const User = ({ user, profilePic }) => {
	return (
		<>
			<div id="user">
				<p>{user}</p>
				<img src={profilePic} alt="Profile picture" />
			</div>
		</>
	);
};

export default User;
