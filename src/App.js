import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Nav from './Components/Nav/Nav';
import Packages from './pages/Packages/Packages';

const ScrollToTop = ({ children }) => {
	let location = useLocation();
	
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return children;
};

function App() {
	return (
		<div className="App">
			<ScrollToTop>
				<Header />
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/packages" element={<Packages />} />
				</Routes>
			</ScrollToTop>
		</div>
	);
}

export default App;
