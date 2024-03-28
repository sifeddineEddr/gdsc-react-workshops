import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import NotFound from './components/NotFound/NotFound';
import Home from './pages/Home';

function App() {
  const router =createBrowserRouter([
    {
      element:<AppLayout/>,
      errorElement:<NotFound/>,
      children:[
        {
          path:'/',
          element:<Home/>
  
        },
        // {
        //   path:'/products',
        //   element:<Products/>,
  
        // },
        // {
        //   path:'/contact',
        //   element:<Contact/>,
        // }
      ]
    }
   ]);
   return <RouterProvider router={router}/>

     
  
}

export default App
