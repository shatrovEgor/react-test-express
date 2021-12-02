import React from "react";
import '../styles/QizeFirst.css'
import {connect} from 'react-redux'
import QizeBody from "./QizeBody";
import axios from "axios";
import store from "../store";
import {saveQizeAnswer, modalActiveQzEnd} from '../actions'
import { reset } from "redux-form";


const mapStateToProps = state => {
    return {
        indicate: state.modalQize
    }
}

const subQize = (data) => {
    console.log(data);
    axios.post('http://localhost:3001/qize', data)
    .then(function (res) {
        store.dispatch(modalActiveQzEnd())
        console.log(res.data);
        store.dispatch(saveQizeAnswer(res.data))
        store.dispatch(reset('qize'))
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