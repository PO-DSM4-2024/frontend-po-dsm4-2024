import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Query from './pages/Query/Query';
import TeacherLogin from './pages/TeacherLogin/TeacherLogin';
import Absence from './pages/Query/Absence/Absence';
import RollCall from './pages/RollCall/RollCall';
import Students from './pages/Students/Students'; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/query" element={<Query />} />
        <Route path="/teacherLogin" element={<TeacherLogin />} />
        <Route path="/query/absence" element={<Absence />} />
        <Route path="/rollcall" element={<RollCall />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
