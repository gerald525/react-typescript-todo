import "./styles.css";

export default function Forms({fields, submitBtn}: any) {
    return (
    <form className="formContainer">
        <ul className="formFieldsList">
            {fields.map((field: any) => { return (
                <li className="field">
                    <label htmlFor={field.id}>{field.label}</label>
                    <input placeholder={field.placeholder} type={field.type} className={field.className}/>
                </li> )
            })}
        </ul>
        <button className="submitBtn" type="submit">{submitBtn}</button>
    </form>)
}