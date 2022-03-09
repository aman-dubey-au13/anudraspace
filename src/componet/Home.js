import React, { useEffect, useState,useRef } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getDatas,getDatasByName} from "../redux/actions/productsActions";
import Filter from "./Filter";

const Home = () => {
  const data = useSelector((state) => state.allData.data);
  const dispatch = useDispatch();
  // const inputRef = useRef(null);
  // const [search,setSearch] = useState(false);
  // const [roket,setRoket] = useState('');
  // const [error,setError] = useState(false);
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
  
// const handleSubmitButton = () => {
//   setRoket(inputRef.current.value);
//   dispatch(getDatasByName(data.filter(obj=> obj.rocket.rocket_name == roket)));
//   setError(true)
// };
// console.log(roket)
// console.log(data)
// const  value =data.filter(obj=> obj.rocket.rocket_name == roket);
// dispatch(getDatasByName(value));
// useEffect(() =>{
//   setError(true);
// },[value])
//  console.log(flight_number)
//  console.log(data)
//   const  value =data.filter(obj=> obj.rocket.rocket_name == "Falcon 1");
//   console.log(value)
//  console.log(result);

let ListTemplate;
    ListTemplate = 
    <>
    <Link className="btn btn-dark" to="/dashboard">
        search_by_roketName
      </Link>
    <div className="py-5">
    <div className="container">
      <div className="row hidden-md-up">
      {data.map((data,i)=>(
          <div key={i} className="col-md-4">
          <div className="card">
            <div className="card-block">
            <img className="card-img-top" src={data.links.mission_patch}  alt="..loading"/>
              <h4 className="card-title">{data.mission_name}</h4>
              <h6 className="card-subtitle text-muted">{data.rocket.rocket_name}</h6>
              <p className="card-text p-y-1">{data.details}</p>
              <h6>{data.launch_year}</h6>
              <h6>{data.launch_date_utc}</h6>
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

return (
  <>
  {ListTemplate}
  </>
)
}

export default Home;

