import React from 'react';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>
					(your are in the "{process.env.REACT_APP_THE_ENVIRONMENT}" environment)
				</p>
			</header>
		</div>
	);
}

export default App;
