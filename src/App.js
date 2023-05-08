import { useState } from 'react';
import {  v4 as uuid } from 'uuid'

import './App.css';

import Header from './components/header/header';
import Formulario from './components/Formulario/formulario';
import Mi_org from './components/Mi_ORG';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [formulario, formularioSwitch] = useState(true);
  const actualizarFormulario = () => {formularioSwitch(!formulario)}

  const [equipos, setequipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrincipal: "#57c278",
      colorSecundario: "#d9f7e9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrincipal: "#82cffa",
      colorSecundario: "#e8f8ff"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrincipal: "#a6d157",
      colorSecundario: "#f0f8e2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrincipal: "#e06b69",
      colorSecundario: "#fde7e8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrincipal: "#db6ebf",
      colorSecundario: "#fae9f5"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrincipal: "#ffba05",
      colorSecundario: "#fff5d9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrincipal: "#ff8a29",
      colorSecundario: "#ffeedf"
    },
  ]);

  const crearEquipo = (objet) => {setequipos([...equipos, {...objet, objet}])}

  const cambiarColor = (color, id) => {
    const actualizarColor = equipos.map((equipos) => {
      if(equipos.id === id){
        equipos.colorPrincipal = color;
      }
      return equipos; 
    })
    
    setequipos(actualizarColor)
  }
  
  const [colaborador, setcolaborador] = useState([]);
  const registrarColaborador = (datosForm) => setcolaborador([...colaborador, datosForm]);

  const eliminarColaborador = (id) => {
    const newColaboradores = colaborador.filter((colaborador) => colaborador.id !== id);
    setcolaborador(newColaboradores);
  }

  const like = (id) => {
    const newFav = colaborador.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    setcolaborador(newFav);
  }
  
  return (
    <div>
      <Header/>
      {formulario === true? 
      <Formulario 
        equipos={equipos.map((equipos) => equipos.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}/> 
        : <></> 
      }

      <Mi_org funcion ={actualizarFormulario}/>
      
      {equipos.map((equipos)=>{
        return <Equipo 
        datos={equipos} key={equipos.titulo} 
        nuevoRegistro={colaborador.filter((colaborador) => colaborador.equipo == equipos.titulo)}
        eliminarColaborador={eliminarColaborador}
        cambiarColor={cambiarColor}
        like={like}/>
      })}

      <Footer/>
    </div>
  );
}

export default App;
