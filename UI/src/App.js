import './App.css';
import Home from './components/pages/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductCat from './components/pages/Products/ProductCat/ProductCat';
import {Link,Route,Switch, BrowserRouter as Router} from 'react-router-dom'
import About from './components/pages/About/About';
import ProductMenu from './components/pages/Products/ProductMenu/ProductMenu';
import ScrollToTop from './ScrollToTop';
import Services from './components/pages/Services/Services';
import Select from './components/pages/Products/Select/Select';
import Login from './components/pages/Login/Login';
import SignUp from './components/pages/SignUp/SignUp';
import Cart from './components/pages/Cart/Cart';
import Forgot from './components/pages/Login/Forgot';
import Error404 from './components/pages/404/Error404';
import CheckOut from './components/pages/CheckOut/CheckOut';
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header/>
         <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/products' exact>
              <ProductMenu/>
            </Route>
            <Route path='/products/:category' exact>
              <ProductCat/>
            </Route>
            <Route path='/products/select/:id'>
              <Select/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
            <Route path='/services' exact>
              <Services/>
            </Route>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/signup'>
              <SignUp/>
            </Route>
            <Route path='/cart'>
              <Cart/>
            </Route>
            <Route path='/forgot'>
              <Forgot/>
            </Route>
            <Route path='/payment' exact>
              <CheckOut/>
            </Route>
            <Route path='*'>
              <Error404/>
            </Route>
         </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
