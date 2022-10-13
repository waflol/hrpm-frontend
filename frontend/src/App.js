import NavBar from './shared/components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
