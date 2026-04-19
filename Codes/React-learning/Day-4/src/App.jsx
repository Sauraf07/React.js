import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import TodoApp from './components/Todo1';

function App() {
  const name = "saurav"
  return (
    <Router>
      <h1>{name}</h1>
      <TodoApp/>
    </Router>
  );
}

export default App;