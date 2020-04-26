import React from 'react';
import { Route,Switch } from "react-router-dom";
import Home from '../Pages/Home';
import News from '../Pages/News';

export default function Routes() {
  return (
    <div>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/news'>
                <News/>
            </Route>
        </Switch>
    </div>
  );
}
