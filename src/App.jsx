import { Navbar } from './Components/Navbar';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { GlobalProvider } from './Components/ContextReducer';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
        </Route>
      </Routes>
     </BrowserRouter>
     </GlobalProvider>
    </div>
  );
}

export default App;
