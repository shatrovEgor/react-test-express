import React from "react";
import '../styles/TestPage.css'
import Navbar from "../component/Navbar";
import HelloStart from "../component/HelloStart";
import QizeFirst from "../component/QizeFirst";


const TestPage = () => {

    return(
        <div className='container-test-main'>
            <Navbar/>
            <div className='container-test'>
                <HelloStart/>
                <QizeFirst/>
            </div>
        </div>
    )
}

export default TestPage;