import { useState } from "react"
import App from "../../App";
import "./org.css";

const Mi_org = (props) => {
    return <section className="container__org">
        <h2 className="title">Mi organización</h2>
        <img src="/img/organizacion.png" alt="add" onClick={props.funcion} />
    </section>
}

export default Mi_org;