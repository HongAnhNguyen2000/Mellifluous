
import {Switch,Route} from "react-router-dom";

import Login from './pages/Login';

import ContainerInfo from './pages/Dashboard/ContainerInfo';
import ContainerScore from './pages/Dashboard/ContainerScore';
import ContainerSubject from './pages/Dashboard/ContainerSubject';

import ContainerExtra from './pages/Dashboard/ContainerExtra';
import ContainerManageSubject from "./pages/Dashboard/ContainerManageSubject";


function App() {
  return (
    
    <div className="App">
     <Switch>
       <Route exact path="/" component={Login}/>
  
       <Route exact path = "/dashboard" component={ContainerInfo}/>
       <Route exact path="/score" component={ContainerScore}/>
       <Route exact path="/subject" component={ContainerSubject}/>
       <Route exact path="/extra" component={ContainerExtra}/>
       <Route exact path="/manageSubject" component={ContainerManageSubject} />
   

     </Switch>
    </div>
    
  );
}

export default App;
