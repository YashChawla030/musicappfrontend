import React from 'react';
import './Home.css';
import Navigation from './navigation';



function Home (){
	return(
		<div className='hmiddle'>
			<Navigation />
			<div className='upper-intro'>
				
				<div className='intro-div'>
					<div className='intro-title'>
						<h1 style={{'fontSize':32}} className='header-title'>Heyy There...</h1>
					</div>
					<div className='intro-title'>
						<h1 style={{'fontSize':42, 'fontWeight': 'bold'}} className='header-title'>Let The Music Take You Away...</h1>
					</div>
					<div className='intro-title'>
						<h1 style={{'fontSize':28, 'color' : '#0000' }} className='header-title'> ...</h1>
					</div>
					<div className='intro-title'>
						<h1 style={{'fontSize':28, 'color' : '#ddd' }} className='header-title'>The beat drops here! Discover and stream songs on Jaxx Music. </h1>
					</div>
					<div className='intro-title'>
						<p style={{'fontSize':23, 'color' : '#ddd' }} className='header-title'>Whether you're into pop, rock, hip hop, or jazz, we've got all the genres you love – and more!</p>
					</div>
					<div className='intro-title'>
						<h1 style={{'fontSize':22, 'color' : '#0000' }} className='header-title'>. </h1>
					</div>
					<div className='intro-title'>
						<label style={{'fontSize':22}} className='header-title'>Sign up now for free and start exploring the endless possibilities of music.</label>
					</div>
					
				
				</div>
			
			</div>
		
			
			
		</div>
	)
}
  
export default Home;