import Loader from "./components/loader/loader";
import SwiperPages from "./components/swiper/swiperPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Routes>
          <Route path="/" element={<Loader/>}/>
          <Route path="/gamejam" element={<SwiperPages/>}/>
        </Routes>  
      </div>
    </BrowserRouter>
    
  );
}

export default App;
