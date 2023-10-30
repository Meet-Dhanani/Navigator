import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {

  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setdata(res.data)
    })
  }, [])

  return (
    <div>
      <div className='row text-center'>
        {
          data.map((val, index) => {
            return (
              <div key={index} className="col-3 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{val.id}</h5>
                    <p className="card-text" >{val.title}</p>
                    <Link to={`/${val.id}`} className="btn btn-success">View Data</Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
