import React from "react";
import "./Navigation.css";
import {  Link } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti'

const Navigation = () => {
	return(
		<div className="nav-bar">
			<div className="navigation-title">
				<label className="label-text">Jaxx Music</label>
			</div>
			<ul className="navigation-bar">
				<li className="nav-item">
					<Link className="navigation-link" to="/">Home</Link>
				</li>
				<li className="nav-item">
					<Link className="navigation-link" to="/about">About Us</Link>
				</li>	
				<li className="nav-item">
					<Link className="navigation-link" to="/contact">Contact </Link>
				</li>
				
			</ul>
			
		<div className="login-bar">
			<li className="nav-item">
					<Link className="navigation-link" to="/login">Login </Link>
				</li>
				</div>
			<TiThMenu className="mobile-menu" fontSize={28}/>
		</div>
	)
}

export default Navigation;