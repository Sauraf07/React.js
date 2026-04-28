import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Hader from "./components/Hader";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import TaskForm from "./pages/TaskForm";
import Settings from "./pages/Setting";

function App() {
  // useState: Main task state & loading
  const [tasks, setTasks] = useState([
    { id: uuidv4(), title: "Learn React Hooks", completed: false },
    { id: uuidv4(), title: "Build a Router Project", completed: true },
  ]);
  const [loading, setLoading] = useState(false);

  const addTask = (title) => {
    setLoading(true);
    setTimeout(() => {
      setTasks((prev) => [...prev, { id: uuidv4(), title, completed: false }]);
      setLoading(false);
    }, 600);
  };

  const updateTask = (id, updatedTitle) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, title: updatedTitle } : t)),
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="container mt-4">
        <Hader
          totalTasks={tasks.length}
          completedTasks={completedTasks}
          pendingTasks={pendingTasks}
        />
      </div>
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                tasks={tasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
              />
            }
          />
          <Route
            path="/add"
            element={<TaskForm onSubmit={addTask} loading={loading} />}
          />
          <Route
            path="/edit/:id"
            element={
              <TaskForm tasks={tasks} onUpdate={updateTask} loading={loading} />
            }
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
