import React, {
  useEffect,
  useState
} from 'react';
import './App.css';
import Getlist from './components/getUser';
import Getdesc from './components/description';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  

  const [userList, setUserList] = useState();
  const [userDesc, setUserDesc] = useState()

  useEffect(() => {
    async function fetchUserList() {
      try {
        const requestUrl = 'http://localhost:4000/allusers';
        const response = await fetch(requestUrl)
        const responseJSON = await response.json()
        
         setUserList(responseJSON)
         setUserDesc(responseJSON)
        
      } catch (e) {
      }
    }
    fetchUserList()
  }, [])

  
  return ( 
  
  
  <div className = "App" >
    <Router>
    <Routes>
          <Route exact path="/"   element = {<Getlist userList = {userList}/> }>
          
          </Route>
          <Route path="/description/:id" element ={<Getdesc userDesc = {userDesc}/>}>
          
          </Route>
          
        </Routes>
    </Router>
    
    
    </div>
  )
}

export default App;