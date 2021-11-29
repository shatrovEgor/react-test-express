import React,{useState, useEffect} from "react";
import '../styles/MainPage.css'
import { useNavigate } from 'react-router';
import Login from '../component/Login'
import store from "../store";
import { logIn } from "../actions";


const MainPage = () => {
    const [data, setData] = useState(null)
    let navigate = useNavigate();
    const axios = require('axios').default

    useEffect(() => {
        axios.get('http://localhost:3001/api')
        .then(function (responce) {
          setData(responce.data.message)
        })
    }, [])

    const subAuth = (dataAuth) => {
      console.log(dataAuth);
      axios.post('http://localhost:3001/auth/login', dataAuth)
      .then(function (responce) {
        console.log(responce.data);
          if(responce.data.success){
            store.dispatch(logIn())
            navigate('/test')
          }
      })
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