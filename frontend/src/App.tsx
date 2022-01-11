import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          {/* note que não há "element" identificando um componente a ser renderizado. só o será ao acessar a rota completa abaixo */}
          <Route path=":movieId" element={<Form />} /> 
          {/* Aqui se trata de uma sub-rota, a qual acessa a página de cada filme através de seu id. em sua versão completa, será como: "/form/:movieId" */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;