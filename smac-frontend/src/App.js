import "./App.css";

import Header from "./header/Header";
// import ClassRooms from "./classrooms/ClassRooms";
import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        {/* <ClassRooms /> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
