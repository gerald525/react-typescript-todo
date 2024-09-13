import Card from '../../components/Card';
import './styles.css';

export default function Home() {
    return (
    <div>
        <h2 className="title">Welcome, see all tasks</h2>
        <div className="tasksContainer">
            <ul className="taskList">
                <li>
                    <Card id="ajdsa-adja1j0-12ajaja" name="Ola Carlos" title="Card 0" description="Creakjdkfjad aksajdka jadjak jdaksjd jkaj kajdkj akdj akjdkajdkjak aj djaskdk ted asdaud ha hadha dhag djagsaydya gya 0" priority={4} finished={false}/>
                </li>
                <li>
                    <Card id="ajdsa-adja1j0-12ajaja" name="Ola Carlos" title="Card 0" description="Created asdaud ha hadha dhag djagsaydya gya 0" priority={4} finished={false}/>
                </li>
                <li>
                    <Card id="ajdsa-adja1j0-12ajaja" name="Ola Carlos" title="Card 0" description="Created asdaud ha hadha dhag djagsaydya gya 0" priority={4} finished={false}/>
                </li>
                <li>
                    <Card id="ajdsa-adja1j0-12ajaja" name="Ola Carlos" title="Card 0" description="Created asdaud ha hadha dhag djagsaydya gya 0" priority={4} finished={false}/>
                </li>
                <li>
                    <Card id="ajdsa-adja1j0-12ajaja" name="Ola Carlos" title="Card 0" description="Created asdaud ha hadha dhag djagsaydya gya 0" priority={4} finished={false}/>
                </li>
            </ul>
        </div>
    </div>
    );
}