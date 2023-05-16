import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';


function App() {
  
  const eliminarColaborador = (id) =>{
    console.log("eliminarColaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
  const [mostrarFormulario, actualizarFormulario] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front-End",
    foto: "https://github.com/Klishe21.png",
    nombre: "Pablo Querales",
    puesto: "Estudiante",
    fav: true
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/Klishe21.png",
    nombre: "Pablo Querales",
    puesto: "Estudiante",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/Klishe21.png",
    nombre: "Pablo Querales",
    puesto: "Estudiante",
    fav: false
  }
])
  const [equipo, actualizarEquipo] = useState( [
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278 ",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ])
  const actualizarColor = (color, id) =>{
      const equipoActualizado = equipo.map((equipo) =>{
        if (equipo.id === id){
          equipo.colorPrimario = color
        }
        return equipo
      })

      actualizarEquipo(equipoActualizado)
  }
  const cambiarMostrar = () => {
    actualizarFormulario(!mostrarFormulario)
}
const registrarColaborador = (colaborador) =>{
  console.log("nuevo colaborador", colaborador)
  actualizarColaboradores([...colaboradores, colaborador])
}
const like = (id) =>{
  const cambioLike = colaboradores.map((colaborador) =>{
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(cambioLike)
}
  return (
    <div className="App">
      <Header/>
      {mostrarFormulario ? <Formulario registrarColaborador={registrarColaborador} equipo= {equipo.map((equipo)=> equipo.titulo)}/> : <></>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {equipo.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador= {eliminarColaborador} actualizarColor={actualizarColor} like={like} />)}
      <Footer/>
    </div>
  );
}


export default App;
