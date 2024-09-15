import { useState } from "react";
import Forms  from "../../components/Forms";
import { useAuth } from "../../contexts/auth";
import HttpRequest from "../../services/api";
import './styles.css';
import { useNavigate } from "react-router-dom";

export function NewTask() {
    const navigate = useNavigate();
    const auth = useAuth();
    const [token] = useState(auth.token);
    const [memberId] = useState(auth.member.id);
    const handleSubmit = async ({name, description, priority}: any) => {
        const api = new HttpRequest();
        api.setHeaders(token as string);
        try {
            await api.postRequest('/task/new', {memberId, name, description, priority});
            navigate('/');
        }catch(err){
            console.log("Aconteceu um erro");
        }
    }

    const fields = [{
        id: "name",
        label: "Nome",
        type: "text",
        className: "inputField",
        placeholder: "Jogar bola"
    },
    {
        id: "description",
        label: "Descrição",
        type: "text",
        className: "inputField",
        placeholder: "Irei jogar bola com meus amigos..."
    },
    {
        id: "priority",
        label: "Prioridade",
        type: "number",
        className: "inputField"
    }
    ]
    return (
        <div className="newTaskContainer">
            <div className="newTaskWrapper">
                <div>
                    <h2 className="titleNewTask">Nova Task</h2>
                </div>
                <Forms fields={fields} sendInformation={handleSubmit} submitBtn="Adicionar nova task"/>
            </div>
        </div>
    )
}