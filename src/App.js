import Navigation from "./components/navigation/navigation.component";
import Categorias from "./components/categories/itemList-container.jsx";

import { Route, Routes } from "react-router-dom";
import ItemDetailGorras from "./components/itemDetailContainer/itemDetailContainer.Gorras";
import ItemDetailAbrigos from "./components/itemDetailContainer/itemDetailContainer.Abrigos";
import ItemDetailCategory from "./components/itemDetailContainer/itemDetailContainer.Category";
import ItemDetailTenis from "./components/itemDetailContainer/itemDetailContainer.tenis";
import ItemDetailMujeres from "./components/itemDetailContainer/itemDetailContainer.Mujeres";
import ItemDetailHombres from "./components/itemDetailContainer/itemDetailContainer.Hombres";
import Carrito from "./components/carrito/carrito";


const App = () => {
  return (
    
    <Routes>
      <Route path ='/' element={ <Navigation /> }>
        <Route index element={<Categorias />} />
        <Route path ='/tienda/:titulo' element={<ItemDetailCategory />} />
        <Route path ='title' element={<Carrito />} />

      </Route>
    </Routes>
    
  )
}

export default App;
