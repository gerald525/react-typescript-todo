import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import {useAuth} from './contexts/auth';
import { NewTask } from './pages/NewTask';
import { EditTask } from './pages/EditTask';

function App() {
  const auth = useAuth();
  return (
    <Routes>
      <Route path='/' element={auth.signed ? <Home/> : <Navigate to='/signin' replace={true} />}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={!auth.signed ? <SignIn/> : <Navigate to='/'/>}/>
      <Route path='/new-task' element={auth.signed ? <NewTask/> : <Navigate to='/'/>}/>
      <Route path='/task/edit/:id' element={<EditTask/>}></Route>
    </Routes>
  );
}

export default App;
