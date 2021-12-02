import React from "react";
import '../styles/TestPage.css'
import Navbar from "../component/Navbar";
import HelloStart from "../component/HelloStart";
import QizeFirst from "../component/QizeFirst";
import ModalEndQize from "../component/ModalEndQize";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import { useSelector } from 'react-redux'

const override = css`
  position: absolute;
  top: 350px;
  left: 0;
  right: 0;
  margin:auto;
`;

const TestPage = () => {
    const indicate = useSelector((state) => state.modalLoader)

    return(
        <div className='container-test-main'>
            <Navbar/>
            <div className='container-test'>
                <HelloStart/>
                <QizeFirst/>
                <ModalEndQize/>
                <HashLoader 
                    color={'#354461'} 
                    loading={indicate} 
                    size={120} 
                    css={override}
                />
            </div>
        </div>
    )
}

export default TestPage;