import React, { useState,useRef, useEffect  } from 'react'
import { useSelector,useDispatch } from "react-redux";
import axios from 'axios'
import {getDatas} from "../redux/actions/productsActions";

const Year = () => {
  const dispatch =  useDispatch();
    const inputRef = useRef(null);
    const data = useSelector((state) => state.allData.data);
    console.log(data)

    const [year,setYear] = useState('');
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
    
  const handleSubmitYear = () => {
    setYear(inputRef.current.value);
    setError(false)
  };
  console.log(year)
  console.log(data)
  const  value =data.filter(obj=> obj.launch_year == year);
  console.log("value",value)
  // useEffect(() =>{
  //   setSearch(true);
  // },[setRoket])

  return (
      <>
        <div className="form-control">
        <input type="text" placeholder='type_roket_name' ref={inputRef} />
        <input type="submit" value="submit" onClick={handleSubmitYear} />
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

export default Year;