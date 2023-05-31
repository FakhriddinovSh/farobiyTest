import { useState } from 'react';
import './app.css';
import { Home } from './pages/Home/Home';
import { AuthTel } from './pages/AuthTest/AuthTel';
import { Route, Routes } from 'react-router-dom';
import { Help } from './pages/Help/Help';
import { Header } from './components/Header/Header';
import { AuthCode } from './pages/AuthCode/AuthCode';
import { AuthVerification } from './pages/AuthVerification/AuthVerification';

export const App = () => {
	const [language, setLanguage] = useState(
		localStorage.getItem('lang') || 'uz',
	);

	return (
		<>
			<Header lang={language} setLang={setLanguage} />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/test" element={<AuthTel />}></Route>
				<Route path="/code" element={<AuthCode />}></Route>
				<Route
					path="/test/code/"
					element={<AuthVerification />}
				></Route>
				{/* <Route path="/exam" element={<Exam />}></Route> */}
				<Route path="/help" element={<Help />}></Route>
			</Routes>
		</>
	);
};
