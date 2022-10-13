
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutHome from './home/components/Layouts/Layout';
import Layout from './shared/components/Layouts';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <LayoutHome/>
              </Layout>
              
            }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
