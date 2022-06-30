import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Header></Header>}></Route>
       </Routes>
    </div>
  );
}

export default App;
