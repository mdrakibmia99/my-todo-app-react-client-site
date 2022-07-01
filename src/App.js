import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Calender from './components/Routes/Calender';
import CompleteTask from './components/Routes/CompleteTask';
import MyTask from './components/Routes/MyTask';
import TodoList from './components/Routes/TodoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
        <Header></Header>
       <Routes>
        <Route path="/" element={<TodoList></TodoList>}></Route>
        <Route path="/todoList" element={<TodoList></TodoList>}></Route>
        <Route path="/myTask" element={<MyTask></MyTask>}></Route>
        <Route path="/completeTask" element={<CompleteTask></CompleteTask>}></Route>
        <Route path="/calender" element={<Calender></Calender>}></Route>

       </Routes>
       <Footer></Footer>
       <ToastContainer />
    </div>
  );
}

export default App;
