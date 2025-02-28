// import Chart from "../../components/chart/Chart"
// import Featured from "../../components/featured/Featured"
import React from "react";
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget/>
          </div>

        </div>
    </div>
  );
}

export default Home