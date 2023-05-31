import { useState } from 'react';
import './app.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';

export const App = () => {
	const [language, setLanguage] = useState(
		localStorage.getItem('lang') || 'uz',
	);
	// console.log(language);

	return (
		<>
			<Header lang={language} setLang={setLanguage} />
			<main className="site-main">
				<Hero />
			</main>
		</>
	);
};
