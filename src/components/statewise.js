import React, { useState,useEffect } from "react";


const Statewise = () => {

    const [data,setData]=useState([]);

const getCovidData = async() => {
  const res = await fetch('https://data.covid19india.org/data.json');
  const actualData=await res.json();
  console.log(actualData.statewise);
  setData(actualData.statewise);
}

    useEffect(() => {
        getCovidData();
    },[]);

    return (
        <div>
        <div className="container-fluid mt-5">
            <div className="main-heading">
            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>stated</th>
                            <th>Confirmed</th>
                            <th>recovered</th>
                            <th>deaths</th>
                            <th>active</th>
                        </tr>
                    </thead>  
                    <tbody>
                    {
                        data.map((curelem,ind)=>{
                            return(
                                <tr key={ind}>
                                <th>{curelem.state}</th>
                                <td>{curelem.confirmed}</td>
                                <td>{curelem.recovered}</td>
                                <td>{curelem.deaths}</td>
                                <td>{curelem.active}</td>
                        </tr>
                            )
                        })
                    }
                      </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default Statewise;