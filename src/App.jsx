import { Container } from './contect'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
function App() {
    return (
      <BrowserRouter>
       <Routes>
        <Route path='/' element = {<Container />} />
       </Routes>
      </BrowserRouter>
    )
}

export default App;
