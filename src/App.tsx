import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import {useAuth} from './contexts/auth';

function App() {
  const auth = useAuth();
  return (
    <Routes>
      <Route path='/' element={auth.signed ? <Home/> : <Navigate to='/signin' replace={true} />}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={!auth.signed ? <SignIn/> : <Navigate to='/'/>}/>
    </Routes>
  );
}

export default App;
