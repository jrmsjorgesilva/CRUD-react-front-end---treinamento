// HOOK USESTATE IMPORT
import { useState } from 'react'
// import logo from './logo.svg';
import Header from './components/Header'
import Tasks from './components/Tasks'
import Infos from './components/Infos'
import Vetores from './components/Vetores'
import Sites from './components/Sites'
import Lists from './components/Lists'
import PokemonLists from './components/PokemonLists'
import Noticias from './components/Noticias'
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

// FUNCTION DELETE
const deleteTask = (id) => {
  // filtra as tarefas que não sejam o id inserido e joga no setTasks
  setTasks(tasks.filter((task) => task.id !== id));
}

// FUNCTION TOGGLE REMINDER
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}
    
  return (
    // container
    <div className="container">
      {/* // componente header */}
      <Header autor="Jorge Machado"/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
      ) : (
        'Nenhuma tarefa'
      )}
      {/* componente infos */}
      <Infos />
      {/* componente vetores */}
      <Vetores />
      {/* componente sites */}
      <Sites />
      {/* componente lists */}
      <Lists />
      {/* componente PokemonLists */}
      <PokemonLists />
      {/* componente Noticias */}
      <Noticias />
    </div>
  );
}

export default App;
