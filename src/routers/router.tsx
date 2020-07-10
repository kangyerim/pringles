import React from "react";
import {Redirect} from 'react-router-dom'
import {HomePage} from '../pages'
import {ChatBot, Counter, Kitty} from '../components'

const routerConfig = [
    { path: '/', exact: true, component: () => <Redirect to="/home"/> },
    { path: '/home', component: HomePage },
    { path: '/chat', component: ChatBot },
    { path: '/kitty', component: Kitty },
    { path: '/counter', component: Counter }
]

export default routerConfig