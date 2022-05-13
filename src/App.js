import Navigation from "./components/navigation/navigation.component";
import Categorias from "./components/categories/itemList-container.jsx";

import { Route, Routes } from "react-router-dom";
import ItemDetailGorras from "./components/itemDetailContainer/itemDetailContainer.Gorras";
import ItemDetailAbrigos from "./components/itemDetailContainer/itemDetailContainer.Abrigos";
import ItemDetailTenis from "./components/itemDetailContainer/itemDetailContainer.tenis";
import ItemDetailMujeres from "./components/itemDetailContainer/itemDetailContainer.Mujeres";
import ItemDetailHombres from "./components/itemDetailContainer/itemDetailContainer.Hombres";
import Carrito from "./components/carrito/carrito";

const App = () => {
  return (
    
    <Routes>
      <Route path ='/' element={ <Navigation /> }>
        <Route index element={<Categorias />} />
        <Route path ='gorras' element={<ItemDetailGorras />} />
        <Route path='abrigos' element={<ItemDetailAbrigos />} />
        <Route path ='tenis' element={<ItemDetailTenis />} />
        <Route path ='mujeres' element={<ItemDetailMujeres />} />
        <Route path ='hombres' element={<ItemDetailHombres />} />
        <Route path ='carrito' element={<Carrito />} />
      </Route>
    </Routes>
    
  )
}

export default App;
