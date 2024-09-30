import { FormEvent } from "react";
import "./styles.css";

export default function Forms({ fields, submitBtn, sendInformation }: any) {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const email = form.get("email");
		const password = form.get("password");
		const confirmPassword = form.get("repeatPassword");
		const description = form.get("description");
		const priority = form.get("priority");
		sendInformation({
			name,
			email,
			password,
			confirmPassword,
			description,
			priority,
		});
	};
	return (
		<form onSubmit={handleSubmit} className="formContainer">
			<ul className="formFieldsList">
				{fields.map((field: any, idx: number) => {
					return (
						<li key={idx} className="field">
							<label htmlFor={field.id}>{field.label}</label>
							<input
								id={field.id}
								name={field.id}
								placeholder={field.placeholder}
								type={field.type}
								className={field.className}
							/>
						</li>
					);
				})}
			</ul>
			<button className="submitBtn" type="submit">
				{submitBtn}
			</button>
		</form>
	);
}
