import MainNavBar from './shared/components/Navigations/MainNavBar';
import MainTopBar from './shared/components/TopBar/MainTopBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainFooter from './shared/components/Footer/MainFooter';
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
                <div> Content</div>
                <MainFooter/>
              </div>
            }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
