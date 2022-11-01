import React from 'react'

import Hero from '../components/Hero'
import Columns from '../components/Columns'

const Home = () => {
	
	return (
		<div style={{ marginBottom: '50px' }}>
			<Hero />
			<Columns />
			{/* 
				.
				.
				More home page components
				.
				.
			*/}
		</div>
	)
}

export default Home