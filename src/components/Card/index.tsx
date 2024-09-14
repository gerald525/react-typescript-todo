import './styles.css';

export default function Card({id, name, description, priority, finished}: any) {
    return (
    <div className="cardContainer" style={{backgroundColor: (priority === 1 ? "#9f51e7" : (priority === 2 ? "#9523ff" : "#8a2be2"))}}>
        <h2 className="title" style={{color: "#FFF"}}><p id="id">{id}</p>{` - ${name}`}</h2>
        <div className="body">
            <p className="text">{description}</p>
        </div>
    </div>)
}