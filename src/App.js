import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<div className='page-container'>
					<Routes>
						<Route exact path='/hatch-landing-page' element={ <Home /> } />
						{/* 
							.
							.
							Routes to more pages go here
							.
							.
						*/}
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
