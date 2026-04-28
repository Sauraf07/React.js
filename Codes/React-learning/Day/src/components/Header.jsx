import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/1" element={<h1>Home</h1>} />
        <Route path="/2" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;