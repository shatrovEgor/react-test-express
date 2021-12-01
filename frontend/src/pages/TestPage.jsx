import React from "react";
import '../styles/TestPage.css'
import Navbar from "../component/Navbar";
import HelloStart from "../component/HelloStart";
import QizeFirst from "../component/QizeFirst";
import ModalEndQize from "../component/ModalEndQize";


const TestPage = () => {

    return(
        <div className='container-test-main'>
            <Navbar/>
            <div className='container-test'>
                <HelloStart/>
                <QizeFirst/>
                <ModalEndQize/>
            </div>
        </div>
    )
}

export default TestPage;