import ativosMock from "./data/ativosMock" 
import ListaAtivos from "./componentes/ListaAtivos"

function App() {

  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#f4f6f8",
    fontFamily: "Arial, sans-serif"
  }

  const headerStyle = {
    backgroundColor: "#1e293b",
    color: "white",
    padding: "20px",
    fontSize: "20px",
    fontWeight: "bold"
  }

  const contentStyle = {
    padding: "20px"
  }
  console.log(ativosMock)

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        Sistema de Controle de Ativos
      </header>

      <main style={contentStyle}>
        <h2>Lista de Ativos</h2>
        <p>Aqui aparecerão os ativos cadastrados.</p>
        <ListaAtivos />
      </main>
    </div>
  )
}

export default App