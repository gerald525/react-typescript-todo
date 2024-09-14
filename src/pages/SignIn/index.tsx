import { Link } from "react-router-dom";
import Forms from "../../components/Forms";
import "./styles.css";

export default function SignIn() {
    const fields = [{
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
    }];
    return (<div className="container">
        <div className="wrapper">
            <h2 className="title">Logar no To-Do List App</h2>
            <Forms fields={fields} sendInformation={(params: any) => console.log(params)} submitBtn="Logar"></Forms>
            <div className="signupContainer">
                <p>Ou, caso não possua conta <Link to="/signup">cadastre-se</Link></p>
            </div>
        </div>
    </div>);
}