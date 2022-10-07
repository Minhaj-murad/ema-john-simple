
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Shop from './fakeData/Shop/Shop';
import About from './About/About';
import Inventory from './Inventory/Inventory';
import Order from './Orders/Order';

function App() {
  const router = createBrowserRouter([
   {
    path: '/' ,
    element: <Main></Main>, 
    children: [
      {
        path:'/',
        element:<Shop></Shop>       
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'/orders',
        loader: ()=>fetch('products.json'),
        element:<Order></Order>
      }

    ]
   }

  ])
  
  return (
    <div >
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
