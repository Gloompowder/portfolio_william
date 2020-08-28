import React from 'react'
import IconLink from '../components/IconLink'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    render(){
        return(
            <div className="Nav">
                <img src ="" alt ="" />
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/designer">Develop</Link></li>
                    <li> <Link to="/developer">Design</Link></li>
                    <li> <Link to="/contact">Contact</Link></li>
                </ul>
                    <button>Contact</button>
                <IconLink/>
            </div>
        )
    }
} 

export default Nav