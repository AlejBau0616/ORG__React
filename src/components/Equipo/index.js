import Card from "../Card";
import "./equipo.css";
import hexToRgba from "hex-color-opacity";

const Equipo = (props) => {
    const {titulo, colorPrincipal, colorSecundario, id} = props.datos;
    const {nuevoRegistro, eliminarColaborador, cambiarColor, like} = props;
    const colorOpacity = hexToRgba(colorPrincipal, 0.5)

    return nuevoRegistro.length > 0 && <>
            {<section className="container__equipo" style={{background: (colorOpacity)}}>
                <input
                    type="color"
                    className="input__color"
                    value={colorPrincipal}
                    onChange={(e) => {
                        let color = e.target.value;
                        cambiarColor(color, id);
                    }}/>
                <h3 className="title" style={{borderColor: (colorPrincipal)}}>{titulo}</h3>
                <div className="container__colaboradores">
                    {nuevoRegistro.map((nuevoRegistro, index) => <Card 
                        datos={nuevoRegistro} 
                        key={index} 
                        colorPrincipal={colorPrincipal}
                        eliminarColaborador={eliminarColaborador}
                        like={like}/>)}
                </div>
            </section>}
        </> 
}

export default Equipo;