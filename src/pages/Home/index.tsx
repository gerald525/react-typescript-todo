import { useAuth } from '../../contexts/auth';
import './styles.css';

export default function Home() {
    const auth = useAuth();
    return (
    <div>
        <h2 className="title">Welcome, see all tasks {auth.token}</h2>
    </div>
    );
}