import React from "react";
import '../styles/TestPage.css'
import Navbar from "../component/Navbar";
import HelloStart from "../component/HelloStart";


const TestPage = () => {

    return(
        <div className='container-test-main'>
            <Navbar/>
            <HelloStart/>
        </div>
    )
}

export default TestPage;