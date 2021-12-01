import React,{useState, useEffect} from "react";
import '../styles/MainPage.css'
import { useNavigate } from 'react-router';
import Login from '../component/Login'
import store from "../store";
import { logIn } from "../actions";
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";


const axios = require('axios').default

const override = css`
  position: absolute;
  top: 450px;
  left: 0;
  right: 0;
  margin:auto;
`;

const MainPage = () => {
    const [data, setData] = useState(null)
    const [loader, setLoader] = useState(false)
    let navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/api')
        .then(function (responce) {
          setData(responce.data.message)
        })
    }, [])


    const subAuth = (dataAuth) => {
      setLoader(true)
      console.log(dataAuth);
      setTimeout(() => {
        axios.post('http://localhost:3001/auth/login', dataAuth)
      .then(function (responce) {
        console.log(responce.data);
          if(responce.data.success){
            store.dispatch(logIn())
            navigate('/test')
          } else {
            alert('Ошибка авторизации')
          }
      })
      .then(setLoader(false))
      }, 2000)
      // axios.post('http://localhost:3001/auth/login', dataAuth)
      // .then(function (responce) {
      //   console.log(responce.data);
      //     if(responce.data.success){
      //       store.dispatch(logIn())
      //       navigate('/test')
      //     } else {
      //       alert('Ошибка авторизации')
      //     }
      // })
    }

    return(
    <div className="start">
        <p>
          {
            !data ? 'Server upal vse propalo(((' : data
          }
        </p>
        {
          loader ?
          <div className="loader">
            <Login onSubmit={subAuth}/>
            <PuffLoader 
              color={'#354461'} 
              loading={loader} 
              size={100} 
              css={override}
            />
          </div>
          :
          <Login onSubmit={subAuth}/>
        }
    </div>
    )
}

export default MainPage;