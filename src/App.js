import { Route, Routes } from 'react-router-dom';
import './App.css';

import { HomePage } from './components/pages/Home.page.jsx';
import { LoginPage } from './components/pages/Login.page.jsx';
import { RegistrationPage } from './components/pages/Registration.page.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/registration' element={<RegistrationPage />}/>
    </Routes>
  );
}

export default App;