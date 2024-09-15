import { FormEvent, useCallback, useEffect, useState } from 'react';
import './styles.css';
import HttpRequest from '../../services/api';
import { useAuth } from '../../contexts/auth';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function EditTask({props}: any) {
    const navigate = useNavigate();
    const auth = useAuth();
    const [token] = useState(auth.token);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [finished, setFinished] = useState(false);
    const { id } = useParams();

    const getTaskById = useCallback(async () => {
        const api = new HttpRequest();
        api.setHeaders(token as string);
        try{
            const response = await api.getRequest(`/task/${id}`);
            setName(response.data.name);
            setDescription(response.data.description);
            setPriority(response.data.priority);
            setFinished(response.data.finished);
        }catch(err){
            auth.Logout();
            navigate('/');
        }
    }, [auth, navigate, token, id]);

    useEffect(() => {
        getTaskById();
    }, [getTaskById])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const api = new HttpRequest();
        api.setHeaders(token as string);
        try{
            await api.putRequest(`/task/${id}`, {name, description, finished, priority, memberId: auth.member.id});
            navigate('/');
        }catch(err){
            console.log(err);
        }
    }
    return (
    <div className="editTask">
        <div className="editTaskContainer">
            <h2 className="titleEditTask">Editar atividade</h2>
            <form className="formEditTask" onSubmit={handleSubmit}>
                <ul className="editTaskListItems">
                    <li className="listItem">
                        <label htmlFor="name">Nome</label>
                        <input onChange={(e) => {setName(e.target.value as string)}} value={name} id="name" name="name" className="inputEditTask" type="text"/>
                    </li>
                    <li className="listItem">
                        <label htmlFor="description">Descrição</label>
                        <input onChange={(e) => {setDescription(e.target.value as string)}} value={description} className="inputEditTask" id="description" name="description" type="text"/>
                    </li>
                    <li className="listItem">
                        <label htmlFor="priority">Prioridade</label>
                        <input onChange={(e) => {setPriority(e.target.value)}} value={priority} className="inputEditTask" id="priority" name="priority" type="number"/>
                    </li>
                    <li className="listItemLast">
                        <label htmlFor="finished">finished</label>
                        <input id="finished" name="finished" onChange={(e) => {setFinished(!finished)}} className="inputEditTask" type="checkbox" checked={finished}/>
                    </li>
                </ul>
                <button className="editTaskBtn">Editar Task</button>
            </form>
        </div>
    </div>);
}