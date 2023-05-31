import { Aside } from '../../components/Article/Aside';
import { Hero } from '../../components/Hero/Hero';
import { Score } from '../../components/Score/Score';

export const Home = () => {
	return (
		<>
			<main className="site-main">
				<Hero />
				<Aside />
				<Score />
			</main>
		</>
	);
};
