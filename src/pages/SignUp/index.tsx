import { Link } from "react-router-dom";
import Forms from "../../components/Forms";
import './styles.css';

export default function SignUp() {
    const fields = [{
        id: "name",
        label: "Nome",
        type: "text",
        className: "inputField",
        placeholder: "Ex: Luis Fernando Pessoa"
    },
    {
        id: "email",
        label: "Email",
        type: "email",
        className: "inputField",
        placeholder: "Ex: example@gmail.com"
    },
    {
        id: "password",
        label: "Senha",
        type: "password",
        className: "inputField"
    },
    {
        id: "repeatPassword",
        label: "Repetir Senha",
        type: "password",
        className: "inputField"
    }
    ]
    return (
    <div className="container">
        <div className="wrapper">
            <h2 className="title">Cadastrar no To-Do List App</h2>
            <Forms fields={fields} submitBtn="Cadastrar"></Forms>
            <div className="signupContainer">
                <p>Ou, caso possua conta <Link to="/signin">logar-se</Link></p>
            </div>
        </div>
    </div>);
}