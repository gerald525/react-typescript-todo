import { Link } from "react-router-dom";
import Forms from "../../components/Forms";
import "./styles.css";
import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const auth = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async ({ email, password }: any) => {
		try {
			await auth.Login(email, password);
			navigate("/");
		} catch (err) {
			setError(true);
			setErrorMessage("Email/Senhas estão inválidos");
		}
	};

	const fields = [
		{
			id: "email",
			label: "Email",
			type: "email",
			className: "inputField",
			placeholder: "Ex: example@gmail.com",
		},
		{
			id: "password",
			label: "Senha",
			type: "password",
			className: "inputField",
		},
	];

	return (
		<div className="container">
			<div className="wrapper">
				<h2 className="title">Logar no To-Do List App</h2>
				<Forms
					fields={fields}
					sendInformation={handleSubmit}
					submitBtn="Logar"
				></Forms>
				{error && <p className="errorMessage">{errorMessage}</p>}
				<div className="signupContainer">
					<p>
						Ou, caso não possua conta{" "}
						<Link to="/signup">cadastre-se</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
