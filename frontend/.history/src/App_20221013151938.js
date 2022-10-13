import MainNavBar from './shared/components/Navigations/MainNavBar';
import MainTopBar from './shared/components/TopBar/MainTopBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './shared/components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <div>
                <div>
                  <MainTopBar/>
                  <MainNavBar/>
                  Navbar
                </div>
                <section>
                  <br/>
                  <div>
                    Content
                  </div>
                </section>
                <div>
                <Footer/>
                </div>
                
              </div>
            }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
