import MainNavBar from './shared/components/Navigations/MainNavBar';
import MainTopBar from './shared/components/TopBar/MainTopBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <div>
                <MainTopBar />
                <MainNavBar />
              </div>
            }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
