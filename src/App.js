import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
// import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
// import Nav from './Components/Nav/Nav';
import Packages from './pages/Packages/Packages';
import HomeRedo from './pages/HomeRedo/HomeRedo';
import HeaderRedo from './Components/HeaderRedo/HeaderRedo';
import About from './pages/About/About';
import Footer from './Components/Footer/Footer';

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
				{/* <Header />
				<Nav /> */}
				<HeaderRedo />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/packages" element={<Packages />} />
					<Route path="/redo" element={<HomeRedo />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</ScrollToTop>
		</div>
	);
}

export default App;
