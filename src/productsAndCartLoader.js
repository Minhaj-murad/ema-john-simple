import { getStoredCart } from "./utilities/fakedb";

export const productsAndCartLoader = async ()=>{
//   get productss
const productsdata = await fetch('products.json');
const products= await productsdata.json();
 console.log(products);
// get cart

const savedcart=getStoredCart();
console.log('savedcart', savedcart);
const previouscart =[];
for (const id in savedcart){
    const addedproduct=products.find(product => product.id ===id);
    if (addedproduct){
        const qunatity =savedcart[id];
        addedproduct.quantity=qunatity;
        previouscart.push(addedproduct);
    }
}
return {products ,previouscart};

}
