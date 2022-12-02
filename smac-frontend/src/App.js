import "./App.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

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
        {/* <BrowserRouter> */}
        {/* <Switch> */}
        {/* <Route path="/" element={<Home />} /> */}

        {/* <Route path="classRooms" element={<ClassRooms />} /> */}
        {/* <ClassRooms /> */}
        {/* <Docs/> */}
        <Assignments/>
        {/* </Switch> */}
        {/* </BrowserRouter> */}
      </div>
    </div>
  );
}

export default App;
