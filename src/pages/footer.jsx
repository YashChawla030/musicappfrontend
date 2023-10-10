import React from "react";
import './Footer.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return(
		<div className="footer">
			<div className='border-line'>
				<label htmlFor="Intro"></label>
				<div className="thanks-label">
					<label>Thank you for visit</label>
				</div>
				<div className="url-div">
					
					
					<a href="https://www.linkedin.com/in/yash-chawla-02130422b/" className="icon-link">
						<BsLinkedin fontSize={26} color="white"/>
					</a>
					<a href="https://github.com/yashchawla030" className="icon-link">
						<BsGithub fontSize={26} color="white"/>
					</a>
				</div>
				<div className="thanks1-label">
					<label>Copyright 2023</label>
				</div>
			</div>
		</div>
	)
}

export default Footer;