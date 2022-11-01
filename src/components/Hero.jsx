import React from 'react'

import heroImage from '../assets/hero-image.png'
import './Hero.css'

const Hero = () => {

	const handleClick = () =>{
		console.log('Hero button clicked!')
	}

	return (
		<div className='hero-container'>
			<img className='hero-image' alt={ heroImage } src={ heroImage } />
			<div className='hero-content'>
				<h1>Rise & Shine</h1>
				<p>
					Coffee cortado, qui beans galão froth to go. Blue mountain et single
					origin aged flavour variety affogato. 
				</p>
				<button onClick={ () => handleClick() }>LEARN MORE</button>
			</div>
		</div>
	)
}

export default Hero