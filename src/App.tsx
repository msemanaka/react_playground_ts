import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

  return (
    <>
      <Home
        titulo="Componente Home"
        texto="Este é um Componente que recebe props."
      />
      <br />
      <br />

      <Contador />
      <br />
      <br />
      
      <Tarefa />
    </>
  )
}

export default App
