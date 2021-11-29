import React from "react";
import '../styles/QizeFirst.css'
import {connect} from 'react-redux'
import QizeBody from "./QizeBody";


const mapStateToProps = state => {
    return {
        indicate: state.modalQize
    }
}

const subQize = (data) => {
    console.log(data);
}

const QizeFirst = ({indicate}) => {
    return(
        <div className={indicate ? 'qize-container' : 'unactive qize-container'}>
            <h1>Your favorite pizza</h1>
                <QizeBody onSubmit={subQize}/>
        </div>
    )
}

export default connect(mapStateToProps)(QizeFirst);