import './App.css';

/*Import Routers*/
import {Route,
   RouterProvider,
   createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'

/*Import Pages*/
import About from './Components/Pages/Aboutpage/About';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Properties from './Components/Pages/properties';
import RootLayout from './Layout/RootLayout';
import Property from './Components/Pages/Property';
import propertiesLoader from './Components/Config/Loaders/propertiesLoader';
import NotFound from './Components/Pages/NotFound';
import { propertyLoader } from './Components/Config/Loaders/propertyLoader';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element = { <About /> } />
        <Route path='contact' element = { <Contact /> } />
        <Route path='properties' element={<Properties />} loader={propertiesLoader} />
        <Route path='properties/property/:propertyId' element={<Property />} loader={propertyLoader} />

        <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    (<RouterProvider router={router} />)
  );
}

export default App;
