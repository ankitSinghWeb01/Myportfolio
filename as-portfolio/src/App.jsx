import { BrowserRouter as Router } from "react-router-dom";
import UIProvider from "./Pages/providers/UIProvider";
import ProtectedRoute from "./router/protectedRoute";
import Layout from "./Layout";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <UIProvider>
          <Layout>
            <ProtectedRoute />
          </Layout>
        </UIProvider>
      </Router>
    </>
  );
}

export default App;
