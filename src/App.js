import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GifGrid from "./components/GifGrid";
import AddCategory from "./components/AddCategory";

function App() {
  const [categories, setCategories] = useState(["Search"]);

  return (
    <div className='app-container'>
      <Header>
        <AddCategory setCategories={setCategories} />
      </Header>

      <div className='grid-container my-40'>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default App;
