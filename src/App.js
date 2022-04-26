import Navigation from "./components/navigation/navigation.component";
import Categorias from "./components/categories/categories.container";
import ItemCounter from "./components/itemCount/item-count.component";

const App = () => {
  return (
    <div>
      <Navigation />
      <Categorias />
      <ItemCounter stock = {5} initial = {1} />
    </div>
    
  )
}

export default App;
