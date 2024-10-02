import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import TeacherLogin from './pages/TeacherHome/TeacherLogin';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/teacherLogin' element={<TeacherLogin/>}/>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App