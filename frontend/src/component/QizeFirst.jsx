import React from "react";
import '../styles/QizeFirst.css'
import {connect} from 'react-redux'
import QizeBody from "./QizeBody";
import axios from "axios";
import store from "../store";
import {saveQizeAnswer, modalActiveQzEnd, loaderActive, loaderUnactive} from '../actions'
import { reset } from "redux-form";

const mapStateToProps = state => {
    return {
        indicate: state.modalQize
    }
}

const QizeFirst = ({indicate}) => {

    const subQize = (data) => {
        console.log(data);
        store.dispatch(loaderActive())
        setTimeout(() => {
            axios.post('http://localhost:3001/qize', data)
                .then(function (res) {
                    store.dispatch(loaderUnactive())
                    store.dispatch(modalActiveQzEnd())
                    console.log(res.data);
                    store.dispatch(saveQizeAnswer(res.data))
                    store.dispatch(reset('qize'))
                })
        },2000)
    }

    return(
        <div className={indicate ? 'qize-container' : 'unactive qize-container'}>
            <h1>Your favorite pizza</h1>
                <QizeBody onSubmit={subQize}/>
        </div>
    )
}

export default connect(mapStateToProps)(QizeFirst);