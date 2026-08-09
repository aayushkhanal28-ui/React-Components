import Product1 from "./component/product1"
import Product2 from "./component/product2"
import Product3 from "./component/product3"
import './App.css'
import Header from "./component/header"


const App = () => {
  return (
    <div>
    <Header/>
    <div className="product-container">
      
      <Product1/>
      <Product2/>
      <Product3/>
      <a href="/about">About</a>
    </div>
  </div>
  )
}
export default App;