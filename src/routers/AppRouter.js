import React, { useCallback, useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
  Route,
    Switch
  } from "react-router-dom";
import { HomeScreen } from '../components/home/HomeScreen';
import { Menu } from '../components/ui/Menu';
import { Navbar } from '../components/ui/Navbar';

import { getMails } from '../selectors/getMails';


export const AppRouter = () => {

  const [selectedTag, setSelectedTag] = useState('all');
  const [mails, setMails] = useState([]);
  const changeTag = useCallback(
    ( newTag ) => {
      setSelectedTag(newTag);
    }, []
  )

  useEffect(() => {
    const mailsList = getMails(selectedTag);
    setMails( mailsList );
  }, [selectedTag])

    return (
        <Router>
          <Navbar />
          <div className="d-flex flex-wrap mt-5">
            <div  className="col-12 col-md-2">
              <Menu tag={selectedTag} changeTag={changeTag} />
            </div>
            
            <div className="col-12 col-md-10">
              <Switch>
                <Route path="/">
                  <HomeScreen tag={selectedTag} mails={mails} />
                </Route>
              </Switch>
            </div>
          </div>
          
        </Router>
    )
}
