import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

// COMPONENTS
import {
  WebPage,
  Home,
  About,
  Marketplace
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WebPage />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>

        <Route path='/marketplace' element={<Marketplace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;