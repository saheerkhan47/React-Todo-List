import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ToDo from './ToDo/ToDo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<ToDo />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
