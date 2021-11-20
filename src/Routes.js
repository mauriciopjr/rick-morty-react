import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Home from './Pages/Home';
import Personagens from './Pages/Personagens';
import Personagem from './Pages/Personagem';

function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/personagens" exact>
                    <Personagens /> 
                </Route>
                <Route path="/personagem/:id" exact>
                    <Personagem />
                </Route>
            </Routes>
        </Router>
    );
}

export default MyRoutes;