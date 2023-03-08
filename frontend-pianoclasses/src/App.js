import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowUsers from './components/ShowUsers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowUsers/> } />


        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
