import './App.css';
import Encabezado from "./components/Encabezado";
import { useState } from 'react';
import Formulario from './components/Formulario';
import Subtitulos from './components/Subtitulos';
import Cita from './components/Cita';


function App() {
  const [citas, setCitas] = useState([]);

 const agregarCita = cita => {

    setCitas( [  ...citas, cita]);
  } 

 
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  }


  return (
    <>
    <Encabezado/>
    <div className="container">
        <div className="row">
        <div className="one-half column">
    <Subtitulos categoria1="CREAR MI CITA" />
    <Formulario agregarCita= {agregarCita}/>
    </div>
        <div className="one-half column">
    <Subtitulos categoria1="ADMINISTRA TUS CITAS"/>
    <Cita lista={citas}  eliminar= {eliminarCita} />
    
        </div>
    </div>
  </div>
 

    </>
  );
}
export default App;
