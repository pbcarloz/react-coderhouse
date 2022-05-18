import Navigation from "./components/navigation/navigation.component";
import Categorias from "./components/categories/itemList-container.jsx";

import { Route, Routes } from "react-router-dom";
import ItemDetailCategory from "./components/itemDetailContainer/itemDetailContainer.Category";

import Carrito from "./components/carrito/carrito";


const App = () => {
  return (
    
    <Routes>
      <Route path ='/' element={ <Navigation /> }>
        <Route index element={<Categorias />} />
        {/* rutas y params para */}
        <Route path ='/tienda/:titulo' element={<ItemDetailCategory />} />
        <Route path ='/carrito' element={<Carrito />} />

      </Route>
    </Routes>
    
  )
}

export default App;
