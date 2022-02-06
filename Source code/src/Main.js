import React        from 'react';
import Header       from './components/Header';
import Footer       from './components/Footer';
import Home         from './components/Home';
import Store        from './components/Store';
import About        from './components/About';
import Contact      from './components/Contact';
import PageNotFound from './components/404';
import Cart         from './components/Cart';
import Wishlist     from './components/Wishlist';
import { HashRouter, 
         Route, 
         Switch      } from 'react-router-dom'; 
import './css/Home.css';
import Favicon from 'react-favicon'
import favicon_coffee from './media/faviconcoffee.png';



class Main extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      followX: 0,
      x: 0,
      friction: 1 / 30
    }
  }



  render() {
    return (
       <HashRouter>
          <div>
            <Favicon url={favicon_coffee} />
            <div className='container'>            

              {/* Content */}
              <div className='row'>
                <div className='c_wrap'>

                  {/* NAV */}
                  <div className='row'>
                    <div className='col-12'>
                      <Header/>
                    </div>
                  </div>

                  <Switch>    
                    <Route  exact path='/'         component={Home}         />
                    <Route  exact path='/store'    component={Store}        />
                    <Route  exact path='/about'    component={About}        />
                    <Route  exact path='/contact'  component={Contact}      />
                    <Route  exact path='/cart'     component={Cart}         />
                    <Route  exact path='/wishlist' component={Wishlist}     />
                    <Route  path=''                component={PageNotFound} />
                  </Switch>
                  
                 <Footer/>
                </div>

              </div>
              <span className='mainc_foocpy'>@2021 - Coffeeshop</span>
            </div>
          </div>
        </HashRouter>
      )
  }
}



export default Main;
