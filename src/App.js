import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home"
import About from './pages/About/About'
import Categories from './pages/Categories/Categories'
import SingleCate from './pages/SingleCate/SingleCate'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='/categories' element={<Categories /> } />
          <Route path='/categories/:id' element={<SingleCate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
