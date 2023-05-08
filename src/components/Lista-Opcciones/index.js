import { useState } from "react";

import "./lista_opcciones.css";

const ListaOpcciones = (props) => {
    const equipos = props.equipos;

    const actualizarValor = (event) => {
        props.setValue(event.target.value)
    }

    return <div className="input__container">
        <label className="text">Equipo</label>
        <select value={props.value} onChange={actualizarValor}>
            <option value="" disabled defaultValue="" hidden>Seleccione un equipo</option>
            { equipos.map((equipos, index) => <option key={index} value={equipos}>{equipos}</option>) }
        </select>
    </div>
}


export default ListaOpcciones;