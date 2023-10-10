import React from 'react';
import './About.css';
import Navigation from './navigation';
import Footer from './footer';

function About () {
    return (
      <div className='about-section'>
		<Navigation />
				<div className='label-container'>
					<label>Welcome to Jaxx Music, where music comes alive. We are a passionate team of music enthusiasts, led by Yash Chawla, who have created this platform using the MERN (MongoDB, Express.js, React, Node.js) stack. Our mission is to provide you with the ultimate listening experience and connect music lovers from all walks of life.

At Jaxx Music, we believe in the power of music to inspire, uplift, and transform lives. That's why we have meticulously curated an extensive library of songs from every genre imaginable. From the latest chart-toppers to hidden gems, we've got you covered.

But we're more than just a music streaming platform. We're a community. Join us and discover new artists, follow your favorite bands, and connect with fellow music lovers worldwide. Share your playlists, recommend tracks, and engage in lively discussions about the artists and songs that move you.

Our user-friendly platform is accessible on any device, allowing you to enjoy your favorite music anytime, anywhere. Whether you're at home, in the office, or on the go, you can immerse yourself in a world of melodies and rhythms.

Join us on this musical journey and experience the seamless blend of technology and music at Jaxx Music..</label>
				</div>
				<Footer />
			</div>
    )
}
export default About;