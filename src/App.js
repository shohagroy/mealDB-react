import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Card from './components/MealCard/Card/Card';

function App() {

  const routers = createBrowserRouter([
    {path: '/', element: <Main/>, children: [
      {path: '/', loader: async () =>{
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
      }, element: <Home/>},
      {path: '/service', element: <div>sercive page</div>},
      {path: '/product', element: 'product page'},
      {path: '/contact', element: 'contact page'},
      {path: '/about', element: 'about page'},
      {path: '/meal/:idMeal', loader: async ({params}) =>{
        return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
      },
       element: <Card/>}
    ]},
    {path: '*', element: <div>Page not Found! 404 Error</div>}
  ]);
  return (
    <div className="App">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
