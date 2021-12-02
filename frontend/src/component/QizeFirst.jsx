import React from "react";
import '../styles/QizeFirst.css'
import {connect} from 'react-redux'
import QizeBody from "./QizeBody";
import axios from "axios";
import store from "../store";
import {saveQizeAnswer} from '../actions'


const mapStateToProps = state => {
    return {
        indicate: state.modalQize
    }
}

const subQize = (data) => {
    console.log(data);
    axios.post('http://localhost:3001/qize', data)
    .then(function (res) {
        console.log(res.data);
        store.dispatch(saveQizeAnswer(res.data))
    })
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