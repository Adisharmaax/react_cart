
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer.js';
import React,{useState} from 'react';
import AddItem from './components/AddItem.js';
function App() {
   const product = [
    {
      price: 9999,
      name: "Iphone 10S Max",
      quantity:0,
    },
    {
      price: 945999,
      name: "samsung 10S galaxy",
      quantity:0,
    }
  ]

let [productList , setProductList] = useState(product)
let [totalAmount , setTotalAmount] = useState(0)


 const incrementQuantity = (index)=>{
      let newProductList = [...productList]
      let newTotalAmount = totalAmount;
      newProductList[index].quantity++
      newTotalAmount += newProductList[index].price
      setProductList(newProductList);
      setTotalAmount(newTotalAmount);
} 
const decrementQuantity = (index)=>{
  let newProductList = [...productList]
  let newTotalAmount = totalAmount;
  if(newProductList[index].quantity > 0){
    newProductList[index].quantity--;
    newTotalAmount -= newProductList[index].price;
  }  
  setTotalAmount(newTotalAmount);
  setProductList(newProductList);
}

const resetQuantity = () =>{
  let newProductList = [...productList]
  newProductList.map((product)=>{
product.quantity = 0
  })
  setProductList(newProductList);
  setTotalAmount(0);
}

const removeItem = (index) => {
  let newProductList = [...productList]
  let newTotalAmount = totalAmount;
  newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
  newProductList.splice(index, 1);
  setProductList(newProductList);
  setTotalAmount(newTotalAmount); 
}
const addItem = (name,price) => {
  let newProductList = [...productList]
  newProductList.push({
    price:price,
    name:name,
    quantity:0
  });
  setProductList(newProductList);
}

  return (
    <>
    <Navbar productList={productList}/>
    <main className="container mt-5" >
    <AddItem addItem={addItem}/>
    <ProductList productList={productList} 
    incrementQuantity={incrementQuantity}
    decrementQuantity={decrementQuantity}
    removeItem={removeItem}/>
    </main>
    <Footer totalAmount={totalAmount}
    resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
