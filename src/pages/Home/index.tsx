import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import './styles.css';
import HttpRequest from '../../services/api';
import { useCallback, useEffect, useState } from 'react';
import Card from '../../components/Card';

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const auth = useAuth();
    const [token] = useState(auth.token);
    const navigate = useNavigate();
    const [memberId] = useState(auth.member.id);

    const getAllTasks = useCallback(async () => {
        const api = new HttpRequest();
        api.setHeaders(token as string);
        try{
            const response = await api.getRequest('/task/all');
            setTasks(response.data);
        }catch(err){
            auth.Logout();
            navigate('/');
        }
    }, [auth, navigate, token]);
    
    useEffect(() => {
        getAllTasks();
    }, [getAllTasks])

    const handleLogout = () => {
        auth.Logout();
        navigate('/');
    }

    const handleDelete = async () => {
        const api = new HttpRequest();
        api.setHeaders(token as string);
        try {
            await api.deleteRequest(`/member/${memberId}`, {memberId});
            auth.Logout();
        }catch(err){
            console.log("Error: It's not possible to delete member");
        }
    }


    const handleDeleteTask = async (data: any) => {
        setTasks(tasks.filter((task: any) => task.id !== data))
        try {
            const api = new HttpRequest();
            api.setHeaders(token as string);
            await api.deleteRequest(`/task/${data}`, {memberId});
        }catch(err){
            console.log(err);
        }
    }
    const handleNewTask = () => {
        navigate('/new-task');
    }

    return (
    <div>
        <div className="headContainer">
            <h2 className="titleHome">Olá {auth.member.name}</h2>
            <div className="buttonsContainer">
                <button onClick={handleNewTask} className="newTaskBtn">Nova Tarefa</button>
                <button onClick={handleLogout} className="logoutBtn">Sair</button>
                <button onClick={handleDelete} className="deleteAccountBtn">Deletar Conta</button>
            </div>
        </div>
        <div>
            <ul className="listTask">
                {tasks.map((task: any, idx) => {
                    return <li className="cardWrapper" key={idx}><Card finishedAt={task.finishedAt} finished={task.finished} deleteTask={handleDeleteTask} memberId={task.memberId} id={task.id} name={task.name} description={task.description} priority={task.priority}></Card></li>
                })}
            </ul>
        </div>
    </div>
    );
}