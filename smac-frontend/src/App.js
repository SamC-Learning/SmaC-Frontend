import "./App.css";

import { Route, Switch } from "react-router-dom";

import Header from "./header/Header";
import Home from "./home/Home";
import Sidebar from "./sidebar/Sidebar";
import Docs from "./docs/Docs";
import Assignments from "./assignments/Assignments";
import ClassRooms from "./classrooms/ClassRooms";

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Switch >
          <Route path="/dashboard">
            <Home />
          </Route>

          <Route path="/classroom">
            <ClassRooms />
          </Route>

          <Route path="/docs">
            <Docs />
          </Route>

          <Route path="/assignments" >
            <Assignments />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
