import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import pic1 from "../src/assets/Card/profile-pic.jpg";

function App() {
  return (
    <div className="App">
      <h1>Cards Task-1.2</h1>

      <div className="card-items">
        <div className="card-item">
          <Card
            date="3.3.0 (14/05/2018)"
            btn="New"
            img={pic1}
            name="Kevin Joe"
            description="File System changed from Dokan to CBFS Host Cloud Drive 
          is now a network drive Various bug fixes and stability improvements 
          Share premissions re-design and optimization "
            outlineBtn="Download"
          />
        </div>

        <div className="card-item">
          <Card
            date="3.1.0 (20/05/2015)"
            btn="Fix"
            img={pic1}
            name="Kevin Joe"
            description="Introducing Host Cloud Drive - virtual drive functionality
          New Share options and menagement New, more user friendly design Sync optimization 
          Various performance improvements and bug fixes"
            outlineBtn="Download"
          />
        </div>

        <div className="card-item">
          <Card
            date="3.1.0 (20/05/2015)"
            btn="Improvement"
            img={pic1}
            name="Kevin Joe"
            description="Added Settings for Auto Start Added Update Notification Speed 
          optimization Bug Fixes"
            outlineBtn="Download"
          />
        </div>
        <div className="card-item">
          <Card
            date="3.3.0 (14/05/2018)"
            btn="New"
            img={pic1}
            name="Kevin Joe"
            description="File System changed from Dokan to CBFS Host Cloud Drive 
          is now a network drive Various bug fixes and stability improvements 
          Share premissions re-design and optimization "
            outlineBtn="Download"
          />
        </div>

        <div className="card-item">
          <Card
            date="3.1.0 (20/05/2015)"
            btn="Fix"
            img={pic1}
            name="Kevin Joe"
            description="Introducing Host Cloud Drive - virtual drive functionality
          New Share options and menagement New, more user friendly design Sync optimization 
          Various performance improvements and bug fixes"
            outlineBtn="Download"
          />
        </div>

        <div className="card-item">
          <Card
            date="3.1.0 (20/05/2015)"
            btn="Improvement"
            img={pic1}
            name="Kevin Joe"
            description="Added Settings for Auto Start Added Update Notification Speed 
          optimization Bug Fixes"
            outlineBtn="Download"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
