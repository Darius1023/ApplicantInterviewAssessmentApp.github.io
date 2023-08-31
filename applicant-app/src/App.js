import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Authenticate from './components/Authenticate';
import Layout from './components/Layout';
import Login from './components/Login';
import Question from './components/Question';
import Result from './components/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}  />
        <Route element={<Authenticate />}> 
          <Route path="/" element={<Layout />}>
            <Route path="/question" element={<Question/>}  /> 
            <Route path="/result" element={<Result/>}  />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}//authenticate prevents to by pass the log in page.

export default App;
