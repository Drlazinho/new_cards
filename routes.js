// import Sidebar from "../components/Sidebar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';
  // import Redirect from "react-router";
  import VisaoGeral from '../pages/VisaoGeral';
  import {
    Relatorios,
    RelatoriosUm,
    RelatoriosDois,
    RelatoriosTres,
  } from '../pages/Relatorios';
  import Produtos from '../pages/Produtos';
  import Margens from '../pages/Margens';
  import Pedidos from '../pages/Pedidos';
  import Grafico from '../components/Graficos';
  import Estoque from '../pages/Estoque';
  import Cliente from '../pages/Clientes';
  import ClienteJoin from '../pages/ClientesJoin';
  import Qrcode from '../pages/Qrcode';
  import Login from '../pages/Login';
  import NaoLogado from '../pages/NaoLogado';
  import Apontamento from '../pages/Apontamentos';
  import Entrega from '../pages/Entregas';
  import Producao from '../pages/Producoes';
  import Promotoras from '../pages/Promotoras';
  import { isAuthenticated } from '../services/auth';
  import Dashboard from '../pages/Dashboard/index';
  import ExpedicaoLog from '../pages/ExpedicaoLog/index';
  import Admin from '../pages/Admin';
  import PromotorasCrud from '../pages/PromotorasCrud';
  import NotaFiscal from '../pages/NotaFiscal';
  import DashProducao from '../pages/DashProducao';
  import DashComercial from '../pages/DashComercial';
  import Importacao from '../pages/Importacao';
  import EnviosBrasil from '../pages/EnviosBrasil';
  import Inspecao from '../pages/Inspecao';
  
  export default function Rotas() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route
            path="/visaogeral"
            exact
            element={
              <RequireAuth>
                <VisaoGeral />
              </RequireAuth>
            }
          />
          <Route path="/relatorios" exact element={<Relatorios />} />
          <Route
            path="/relatorios/relatorios1"
            exact
            element={
              <RequireAuth>
                <RelatoriosUm />
              </RequireAuth>
            }
          />
          <Route
            path="/relatorios/relatorios2"
            exact
            element={
              <RequireAuth>
                <RelatoriosDois />
              </RequireAuth>
            }
          />
          <Route
            path="/relatorios/relatorios3"
            exact
            element={
              <RequireAuth>
                <RelatoriosTres />
              </RequireAuth>
            }
          />
          <Route
            path="/produtos"
            exact
            element={
              <RequireAuth>
                <Produtos />
              </RequireAuth>
            }
          />
          <Route
            path="/graficos"
            exact
            element={
              <RequireAuth>
                <Grafico />
              </RequireAuth>
            }
          />
          <Route
            path="/clientes"
            exact
            element={
              <RequireAuth>
                <Cliente />
              </RequireAuth>
            }
          />
          <Route
            path="/clientesjoin"
            exact
            element={
              <RequireAuth>
                <ClienteJoin />
              </RequireAuth>
            }
          />
          <Route
            path="/qrcode"
            exact
            element={
              <RequireAuth>
                <Qrcode />
              </RequireAuth>
            }
          />
          <Route
            path="/apontamentos"
            exact
            element={
              <RequireAuth>
                <Apontamento />
              </RequireAuth>
            }
          />
          <Route
            path="/margens"
            exact
            element={
              <RequireAuth>
                <Margens />
              </RequireAuth>
            }
          />
          <Route
            path="/entregas"
            exact
            element={
              <RequireAuth>
                <Entrega />
              </RequireAuth>
            }
          />
          <Route
            path="/produtos/estoque"
            exact
            element={
              <RequireAuth>
                <Estoque />
              </RequireAuth>
            }
          />
          <Route />
          <Route
            path="/pedidos"
            exact
            element={
              <RequireAuth>
                <Pedidos />
              </RequireAuth>
            }
          />
          <Route
            path="/producoes"
            exact
            element={
              <RequireAuth>
                <Producao />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            exact
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/promotoras"
            exact
            element={
              <RequireAuth>
                <Promotoras />
              </RequireAuth>
            }
          />
          <Route
            path="/promotorascrud"
            exact
            element={
              <RequireAuth>
                <PromotorasCrud />
              </RequireAuth>
            }
          />
          <Route
            path="/expedicaolog"
            exact
            element={
              <RequireAuth>
                <ExpedicaoLog />
              </RequireAuth>
            }
          />
          <Route
            path="/admin"
            exact
            element={
              <RequireAuth>
                <Admin />
              </RequireAuth>
            }
          />
          <Route
            path="/notafiscal/:documento"
            exact
            element={
              <RequireAuth>
                <NotaFiscal />
              </RequireAuth>
            }
          />
          <Route
            path="/dashproducao"
            exact
            element={
              <RequireAuth>
                <DashProducao />
              </RequireAuth>
            }
          />
          <Route
            path="/dashcomercial"
            exact
            element={
              <RequireAuth>
                <DashComercial />
              </RequireAuth>
            }
          />
          <Route
            path="/importacao"
            exact
            element={
              <RequireAuth>
                <Importacao />
              </RequireAuth>
            }
          />
          <Route
            path="/enviosbrasil"
            exact
            element={
              <RequireAuth>
                <EnviosBrasil />
              </RequireAuth>
            }
          />
          <Route
            path="/inspecao"
            exact
            element={
              <RequireAuth>
                <Inspecao />
              </RequireAuth>
            }
          />
          <Route path="/401" exact element={<NaoLogado />} />
        </Routes>
      </Router>
    );
  }
  
  function RequireAuth({ children }) {
    if (!isAuthenticated()) {
      return <Navigate to="/401" />;
    }
  
    return children;
  }
  