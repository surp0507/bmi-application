import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './components/Home';
import './index.css';
import App from './components/App/App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path="/dashboard" element={<App />} />
						<Route path="/" element={<Home />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</>
	</React.StrictMode>,
	document.getElementById('root')
);
