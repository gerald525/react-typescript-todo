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
        className: "inputField",
        //placeholder: "******************"
    },
    {
        id: "repeatPassword",
        label: "Repetir Senha",
        type: "password",
        className: "inputField",
        ///placeholder: "******************"
    }
    ]
    return (
    <div className="container">
        <div className="wrapper">
            <h2 className="title">Cadastre-se no To-do list app</h2>
            <Forms fields={fields} submitBtn="Cadastrar"></Forms>
        </div>
    </div>);
}