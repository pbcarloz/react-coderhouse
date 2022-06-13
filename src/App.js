import Navigation from "./components/navigation/navigation.component";
import Categorias from "./components/categories/itemList-container.jsx";
import CheckOut from "./routes/checkout/checkout.component";

import { Route, Routes } from "react-router-dom";
import ItemDetailCategory from "./components/itemDetailContainer/itemDetailContainer.Category";
import ItemDetailed from "./components/item-detailed/item-detailed.component";



const App = () => {
  return (
    
    <Routes>
      <Route path ='/' element={ <Navigation /> }>
        <Route index element={<Categorias />} />
        {/* rutas y params para */}
        <Route path ='/tienda/:titulo' element={<ItemDetailCategory />} />
        <Route path ='/tienda/:titulo/:id' element={<ItemDetailed />} />
        <Route path ='carrito' element={<CheckOut />} />
      </Route>
    </Routes>
    
  )
}

export default App;
