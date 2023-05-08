import { useState } from "react";
import { v4 as uuid } from 'uuid'

import Button from "../Button";
import ListaOpcciones from "../Lista-Opcciones";
import InputContainer from "../inputs";

import "./formulario.css"

const Formulario = (props) => {
    const {registrarColaborador, crearEquipo} = props;

    const [nombre, setnombre] = useState("");
    const [puesto, setpuesto] = useState("");
    const [foto, setfoto] = useState("");
    const [equipo, setequipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setcolor] = useState("");


    const crearColaborador = (event) => {
        event.preventDefault();

        let datosinput = {
            id: uuid(),
            fav: false,
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosinput);
    }

    const nuevoEquipo = (event) => {
        event.preventDefault();

        let datosinput = {
            id: uuid(),
            titulo,
            colorPrincipal: color
        }

        crearEquipo(datosinput)
    }

    return <section className="formulario" >
        <form onSubmit = {crearColaborador} >
            <h2 className="title">Rellena el formulario para crear el colaborador.</h2>
            <InputContainer 
                titulo="nombre" 
                placeholder="Ingresar nombre" 
                required
                value={nombre}
                setValue={setnombre}
            />
            <InputContainer 
                titulo="puesto" 
                placeholder="Ingresar puesto" 
                required
                value={puesto}
                setValue={setpuesto}
            />
            <InputContainer 
                titulo="foto" 
                placeholder="Ingresar enlace de foto" 
                required
                value={foto}
                setValue={setfoto}
            />
            <ListaOpcciones 
                value={equipo} 
                setValue={setequipo}
                equipos={props.equipos}/>

            <Button>Crear</Button>
        </form>

        <form onSubmit = {nuevoEquipo} >
            <h2 className="title">Rellena el formulario para crear un nuevo equipo.</h2>
            <InputContainer 
                titulo="nombre" 
                placeholder="Ingresa el titulo de tu equipo" 
                required
                value={titulo}
                setValue={setTitulo}
            />
            <InputContainer 
                titulo="puesto" 
                placeholder="Ingresar color" 
                required
                value={color}
                setValue={setcolor}
                type ="color"
            />

            <Button>Añadir equipo</Button>
        </form>
    </section>
}

export default Formulario;