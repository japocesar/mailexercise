import React from 'react'
import {
    BrowserRouter as Router,
  Route,
    Switch
  } from "react-router-dom";
import { HomeScreen } from '../components/home/HomeScreen';
import { Menu } from '../components/ui/Menu';
import { Navbar } from '../components/ui/Navbar';


export const AppRouter = ( { selectedTag, changeTag, handleQuery, query, setQuery } ) => {
    return (
        <Router>
          <Navbar query={query} handleQuery={handleQuery} setQuery={setQuery}/>
          <div className="d-flex flex-wrap mt-5">
            <div  className="col-12 col-md-2">
              <Menu tag={selectedTag} changeTag={changeTag} />
            </div>
            
            <div className="col-12 col-md-10">
              <Switch>
                <Route path="/">
                  <HomeScreen selectedTag={selectedTag} query={query} />
                </Route>
              </Switch>
            </div>
          </div>
          
        </Router>
    )
}
