import React from "react";
import '../styles/TestPage.css'
import Navbar from "../component/Navbar";

const TestPage = () => {
    return(
        <div className='container-test-main'>
            <Navbar/>
            <div className='container-test'>
                <p>TEST START</p>
            </div>
        </div>
    )
}

export default TestPage;