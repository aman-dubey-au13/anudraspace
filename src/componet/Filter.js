import React, { useState,useRef, useEffect  } from 'react';
import { useSelector,useDispatch } from "react-redux";
import axios from 'axios';
import {getDatas} from "../redux/actions/productsActions";

const Filter = (setSearch) => {
  const dispatch =  useDispatch();
    const inputRef = useRef(null);
    const data = useSelector((state) => state.allData.data);
    console.log(data)

    const [roket,setRoket] = useState('');
    const [error,setError] = useState(true);
    const fetchDataDetail = async () => {
      const response = await axios
        .get("https://api.spacexdata.com/v3/launches")
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(getDatas(response.data));
    };
    useEffect(() => {
      fetchDataDetail();
    },[]);
    
  const handleSubmitButton = () => {
    setRoket(inputRef.current.value);
    setError(false)
  };
  console.log(roket)
  console.log(data)
  const  value =data.filter(obj=> obj.rocket.rocket_name == roket);
  console.log("value",value)
  // useEffect(() =>{
  //   setSearch(true);
  // },[setRoket])

  return (
      <>
        <div className="form-control">
        <input type="text" placeholder='type_roket_name' ref={inputRef} />
        <input type="submit" value="submit" onClick={handleSubmitButton} />
      </div>
      <div className="py-5">
    <div className="container">
      <div className="row hidden-md-up">
      {value.map((data,i)=>(
          <div key={i} className="col-md-4">
          <div className="card">
            <div className="card-block">
            <img className="card-img-top" src={data.links.mission_patch}  alt="..loading"/>
              <h4 className="card-title">{data.mission_name}</h4>
              <div>
              rocket_name
              <h6 className="card-subtitle text-muted">{data.rocket.rocket_name}</h6>
              </div>
              <p className="card-text p-y-1">{data.details}</p>
              <div>
              launch_year
              <h6>{data.launch_year}</h6>
              </div>
              <h6>{data.launch_date_utc}</h6>
              <div>
              launch_success
              <h6>{JSON.stringify(data.launch_success)}</h6>
              </div>
              <a href="#" className="card-link">link</a>
              <a href="#" className="card-link">Second link</a>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  </div>;
    </>
  )
}

export default Filter;





import React, { useEffect, useState } from "react";
import axios from "axios";

const Athlete = () => {
  const [repo, setRepo] = useState([]);
  // const getRepo = async () => {
  //   await axios.get("https://www.ag-grid.com/example-assets/olympic-winners.json")
  //     .then((response) => {
  //       console.log("response", response);
  //       const myRepo = response.data;
  //       console.log("data", myRepo);
  //       setRepo(myRepo);
  //     });
  // };

  useEffect(() => {
    const getRepo = async () => {
      try {
        const response = await axios.get(
          "https://www.ag-grid.com/example-assets/olympic-winners.json"
        );
        console.log(response);
        const myRepo = response.data;
        console.log("data", myRepo);
        setRepo(myRepo);
      } catch (error) {
        console.log(error);
      }
    };
    getRepo();
  }, []);

  return (
    <div>
      {/* //{repo.map((i) => (
        <div> */}
      <table>
        <tr>
          <th>athlete</th>
          <th>age</th>
          <th>country</th>
          <th>year</th>
          <th>date</th>
          <th>sport</th>
          <th>gold</th>
          <th>silver</th>
          <th>bronze</th>
          <th>total</th>
        </tr>
        {repo.map((i) => (
          //<div>
          <tr>
            <td>{i.athlete}</td>
            <td>{i.age}</td>
            <td>{i.country}</td>
            <td>{i.year}</td>
            <td>{i.date}</td>
            <td>{i.sport}</td>
            <td>{i.gold}</td>
            <td>{i.silver}</td>
            <td>{i.bronze}</td>
            <td>{i.total}</td>
          </tr>
          //</div>
        ))}
      </table>
      {/* //</div> */}
    </div>
  );
};

export default Athlete;







{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "pwa-node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "env": {
                "NODE_ENV": "dev"
            },
            "runtimeExecutable": "${workspaceRoot}/node_modules/nodemon/bin/nodemon.js",
            "restart": true,
            "program": "${workspaceFolder}/index.js",
            "envFile": "${workspaceFolder}/env/.env.dev"
        },
    ]
}
