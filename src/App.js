// HOOK USESTATE IMPORT
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import logo from './logo.svg';
import MenuApps from './components/MenuApps'
import Header from './components/Header'
import TasksAdd from './components/TasksAdd'
import Tasks from './components/Tasks'
import Infos from './components/Infos'
import Vetores from './components/Vetores'
import Sites from './components/Sites'
import Lists from './components/Lists'
import PokemonLists from './components/PokemonLists'
import Noticias from './components/Noticias'
import Footer from './components/Footer'
import About from './components/About'
import './App.css';


const App = () => {

  // useState para mostrar esconder form add task
  const [showAddTask, setShowAddTask] = useState(false);

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

  // FUNCTION ADD TASK
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  }

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
    // ROUTER ELEMENT
    <Router>
      {/* NAVEGAÇÃO ENTRE APPS DA PLATAFORMA */}
      <MenuApps />
      {/* container */}
      <div className="container">
        {/* elemento routes que encapsula todas as rotas a renderizar */}
        <Routes>
          <Route
            path='/'
            element={
              <>
                {/* // componente header */}
                <Header
                  autor="Jorge Machado"
                  addTask={() => setShowAddTask(!showAddTask)}
                  showAddTask={showAddTask}
                />
                {
                  showAddTask
                  &&
                  <TasksAdd addTask={addTask} />
                }
                {tasks.length > 0 ? (
                  <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} />
                ) : (
                  'Nenhuma tarefa'
                )}
              </>
            }
          />
          {/* componente infos */}
          <Route
            path='/infos'
            element={<Infos />}
          />
          {/* componente vetores */}
          <Route
            path='/vetores'
            element={<Vetores />}
          />
          {/* componente sites */}
          <Route
            path='/sites'
            element={<Sites />}
          />
          {/* componente lists */}
          <Route
            path='/lists'
            element={<Lists />}
          />
          {/* componente PokemonLists */}
          <Route
            path='/pokemon'
            element={<PokemonLists />}
          />
          {/* componente Noticias */}
          <Route
            path='/noticias'
            element={<Noticias />}
          />
          {/* componente About */}
          <Route
            path='/about'
            element={<About />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
