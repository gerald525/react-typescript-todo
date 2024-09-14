import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import {AuthProvider} from './contexts/auth';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
