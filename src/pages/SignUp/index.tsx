import { Link, useNavigate } from "react-router-dom";
import Forms from "../../components/Forms";
import './styles.css';
import { useState } from "react";
import HttpRequest from "../../services/api";

export default function SignUp() {
    const navigate = useNavigate()
    const [successfullMessage, setSuccessfullMessage] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const httpRequest = new HttpRequest();

    const handleSubmit = async ({name, email, password, confirmPassword}: any) => {
        if(name.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0 || confirmPassword.trim().length === 0){
            setError(true);
            setErrorMessage("Preencha todos os campos");
        }else if(password !== confirmPassword){
            setError(true);
            setErrorMessage("As senhas devem ser iguais");
        }else{
            setError(false);
            try{
                await httpRequest.postRequest('/member/new', {name, email, password});
                setSuccessfullMessage("Usuário criado com sucesso!");
                setTimeout(() => {
                    navigate('/signin');
                }, 2000)
            }catch(err: any){
                const statusCode = err.status;
                if(statusCode === 409){
                    setError(true);
                    setErrorMessage("Email já está sendo utilizado");
                }
            }
        }
    }
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
            <p className="successfullMessage">{successfullMessage}</p>
            <h2 className="title">Cadastrar no To-Do List App</h2>
            <Forms fields={fields} sendInformation={handleSubmit} submitBtn="Cadastrar"></Forms>
            {error && <p className="errorMessage">{errorMessage}</p>}
            <div className="signupContainer">
                <p>Ou, caso possua conta <Link to="/signin">logar-se</Link></p>
            </div>
        </div>
    </div>);
}