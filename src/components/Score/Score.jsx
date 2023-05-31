import { Link } from 'react-router-dom';
import './score.css';

export const Score = () => {
	return (
		<section className="score">
			<div className="container">
				<h2 className="score-title">Bilim darajangizni qanday?</h2>
				<p className="score-desc">
					Grant sovrindori bo’lish uchun siz 3 yonalishda test
					topshirib bilim darajangizni ko’rsatishingiz kerak bo’ladi.
					Matematika fanidan 20 ta savol, Ingliz tili fanidan 10ta va
					3ta IQ test uchun tog’ri javoblarni belgilashingiz kerak.
					Vaqt chegaralangan va testni qatyta topshirish imkoniyati
					yo’q.
				</p>
				<Link className="score-link" to="/test">
					Test topshirish
				</Link>

				<ul className="score-list row p-0 m-0 list-unstyled">
					<li className="score-item col-xl-4">
						<h3 className="score-subtitle">Sifatli ta’lim</h3>
						<p className="score-subdesc">
							Zamonaviy kasblarni grant asosida o’rganish
							imkoniyati
						</p>
					</li>

					<li className="score-item col-xl-4">
						<h3 className="score-subtitle">Sifatli ta’lim</h3>
						<p className="score-subdesc">
							Zamonaviy kasblarni grant asosida o’rganish
							imkoniyati
						</p>
					</li>

					<li className="score-item col-xl-4">
						<h3 className="score-subtitle">Sifatli ta’lim</h3>
						<p className="score-subdesc">
							Zamonaviy kasblarni grant asosida o’rganish
							imkoniyati
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
};
