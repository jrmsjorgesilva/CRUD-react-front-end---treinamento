// HOOK USESTATE IMPORT
import { useState } from 'react'
// import logo from './logo.svg';
import Header from './components/Header'
import Tasks from './components/Tasks'
import Infos from './components/Infos'
import Vetores from './components/Vetores'
import Sites from './components/Sites'
import Lists from './components/Lists'
import './App.css';


const App = () => {

  // declaração do hook state com array tasks
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Dar vassouradas numa velha',
            day: '12 de fevereiro',
            reminder: true
        },
        {
            id: 2,
            text: 'Limpar a casa',
            day: '12 de março',
            reminder: true
        },
        {
            id: 3,
            text: 'Descartar o lixo',
            day: '12 de janeiro',
            reminder: false
        },
        {
          id: 4,
          text: 'Incendiar o palácio do governo',
          day: '12 de junho',
          reminder: true
        },
    ]
  )

  // declaração do hook state com array infos
const [infos, setInfos] = useState([
  {
      id: 1,
      nome: "Jorge",
      idade: 23
  },
  {
      id: 2,
      nome: "Manoela",
      idade: 53
  },
  {
      id: 3,
      nome: "Patricia",
      idade: 43
  },
])
    
  return (
    <div className="container">
      <Header autor="Jorge Machado"/>
      <Tasks tasks={tasks} />
      <Infos infos={infos} />
      <Vetores />
      <Sites />
      <Lists />
    </div>
  );
}

export default App;
