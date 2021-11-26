import React,{useState, useEffect} from "react";
import '../styles/MainPage.css'
import { useNavigate } from 'react-router';
import Login from '../component/Login'


const MainPage = () => {
    const [data, setData] = useState(null)
    let navigate = useNavigate();
    const axios = require('axios').default

    useEffect(() => {
        fetch('/api')
        .then(response => response.json())
        .then(response => setData(response.message))
    }, [])

    const subAuth = (dataAuth) => {
      console.log(dataAuth);
      axios.post('http://localhost:3001/auth/login', dataAuth)
      .then(function (responce) {
        console.log(responce.data);
      })
      .then(
        navigate('/test')
      )
    }

    return(
    <div className="start">
        <p>
          {
            !data ? 'Server upal vse propalo(((' : data
          }
        </p>
        <Login onSubmit={subAuth}/>
    </div>
    )
}

export default MainPage;