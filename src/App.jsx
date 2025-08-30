import { Route, Routes } from "react-router-dom";
import Survey from "./Pages/SurveyPage/Survey.tsx";
import Home from "./Pages/HomePage/Home.jsx";


function App() {
  return(
    <div>
      <Routes>
        <Route path="/Survey" element={<Survey/>}/>
        <Route path="/" element={<Home/>}/>

      </Routes>

  </div>
  )
}

export default App;