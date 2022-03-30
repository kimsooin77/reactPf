import './css/style.css';
import {Route} from 'react-router-dom';

import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';
import HeaderSub from './components/common/HeaderSub.js';

import Visual from './components/main/Visual.js';
import Info from './components/main/Info.js';
import Commend from './components/main/Commend.js';
import Commu from './components/main/Commu.js';
import Intro from './components/main/Intro.js';
import Bigan from './components/main/Bigan.js';
import Service from './components/main/Service.js';
import Book from './components/main/Book.js';

import Gallery from './components/sub/Gallery.js';
import Community from './components/sub/Community.js';
import Youtube from './components/sub/Youtube.js';
import Join from './components/sub/Join.js';
import Department from './components/sub/Department.js';
import Location from './components/sub/Location.js';


function App() {
 
  return (
    <div className="App">
          <Route exact path="/department" component={Department}>
            <HeaderSub />
          </Route>
          <Route exact path="/community" component={Community}>
            <HeaderSub />
          </Route>
          <Route exact path="/youtube" component={Youtube}>
            <HeaderSub />
          </Route>
          <Route exact path="/join" component={Join}>
            <HeaderSub />
          </Route>
          <Route exact path="/gallery" component={Gallery}>
            <HeaderSub />
          </Route>
          <Route exact path="/location" component={Location}>
            <HeaderSub />
          </Route>
          

          <Route exact path="/">
            <Header  />
            <Visual />
            <Info />
            <Commend />
            <Commu />
            <Intro />
            <Bigan />
            <Service />
            <Book />
          </Route>

        
          <Route exact path="/gallery" component={Gallery}></Route>
          <Route exact path="/community" component={Community}></Route>
          <Route exact path="/youtube" component={Youtube}></Route>
          <Route exact path="/join" component={Join}></Route>
          <Route exact path="/department" component={Department}></Route>
          <Route exact path="/location" component={Location}></Route>
          
          <Footer />
    </div>
  );
}

export default App;
