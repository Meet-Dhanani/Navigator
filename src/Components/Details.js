import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Details = () => {

    const { id } = useParams()

    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
            setdata(res.data || [])
        })
    }, [])

    const Fdata = data.filter((item) => item.id === Number(id))


    return (
        <center className='mt-5'>
            <div>
                {Fdata.map((val, index) => (
                    <div key={index} className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{val.id}</h5>
                                <p className="card-text">{val.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </center>
    )
}

export default Details
