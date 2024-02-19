import React from 'react'
import NavBarMobile from './components/NavBarMobile'
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<NavBarMobile />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
