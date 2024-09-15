import { useState } from 'react';
import { useAuth } from '../../contexts/auth';
import './styles.css';

export default function Card({id, memberId, name, description, priority, finished, deleteTask}: any) {
    const handleDelete = () => {
        deleteTask(id);
    }
    const auth = useAuth();
    const [userId] = useState(auth.member.id);
    return (
    <div className="cardContainer">
        <div>
            <h2 className="titleCard">{id}</h2>
            <p className="textCard">{name}</p>
            <div className="body">
                <p className="textDescription">{description}</p>
                <p className={`textPriority ${(priority === 0 ? "low" : (priority === 1 ? "medium" : "high"))}`}>Prioridade: {priority === 0 ? "Baixa" : (priority === 1 ? "Média" : "Alta")}</p>
            </div>
        </div>
        {userId === memberId && <div>
            <button className="deleteBtn" onClick={handleDelete}>Excluir</button>
            <button className="editBtn">Editar</button>
        </div>}
    </div>)
}