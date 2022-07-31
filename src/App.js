import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
// import Packages from './pages/Packages/Packages';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/packages" element={<Packages />} /> */}
			</Routes>
		</div>
	);
}

export default App;
