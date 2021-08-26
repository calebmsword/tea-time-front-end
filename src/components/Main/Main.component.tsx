import React from "react";
import { Provider } from 'react-redux';
import store from '../../redux/store/store';

import Header from '../Header/Header.component';
import Navigation from '../Navigation/Navigation.component'

const Main: React.FC = () => {
    return (
        <Provider store={store}>
            <Header />
            <Navigation />
        </Provider>
    );
}

export default Main;