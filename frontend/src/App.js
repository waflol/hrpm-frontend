import MainNavBar from './shared/components/Navigations/MainNavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainNavBar/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
