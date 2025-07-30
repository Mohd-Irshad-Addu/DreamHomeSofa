import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-white">
        <h1 className="text-4xl font-bold text-center text-blue-600 mt-10">
          DreamHome Sofa Website
        </h1>
      </div>
    </>
  );
}

export default App;
