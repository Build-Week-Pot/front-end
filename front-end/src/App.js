import Register from './components/Register'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

function App() {
  return (
    <div>
      <Register />
      {/* <Login /> */}
  
    </div>
  );
}

export default App;
