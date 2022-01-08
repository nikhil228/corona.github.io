import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import "./components/statewise.css";
import download from './images/download.jfif';
import {Card} from './components';
import Statewise from './components/statewise.js';

function App() {
  const [totalGlobalCase,setTotalGlobalCase]=useState([]);
  const [setData,setLoading]=useState();

  useEffect(()=>{
    loadData();
  }, []);

  const loadData=async ()=>{
setLoading(true);
const resp=await axios.get("https://data.covid19india.org/data.json");
setTotalGlobalCase(resp.data.statewise.slice(0,1));
  }

  return (
    <div className="App">
      <span>
        <img src={download} style={{height:"70px"}} alt='covid-19'/>
        <h1>Live Covid Tracker</h1>
      </span>
      <Card totalGlobalCase={totalGlobalCase} />
      <Statewise/>
    </div>
  );
}

export default App;
