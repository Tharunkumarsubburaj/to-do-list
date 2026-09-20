import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login/page';
import SignUp from './pages/auth/sigup/page';
import Task from './pages/task/page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Task />} />
      </Routes>
    </BrowserRouter>
  )
}
