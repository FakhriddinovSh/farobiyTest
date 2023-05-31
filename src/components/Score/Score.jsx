import { Link } from 'react-router-dom';
import './score.css';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';

export const Score = () => {
	const [orderModal, setOrderModal] = useState(false);

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
				<a
					onClick={() => setOrderModal(true)}
					className="score-link"
					href="#"
				>
					Test topshirish
				</a>

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

				<Modal modal={orderModal} setModal={setOrderModal}>
					<div className="modal-inner">
						<button
							className="modal-close"
							onClick={() => setOrderModal(false)}
						></button>

						<div className="modal-content">
							<Link className="btn btn-success my-4" to="/code">
								ID orqali kirish
							</Link>
							<Link className="btn btn-success" to="/test">
								Telefon raqam orqali kirish
							</Link>
						</div>
					</div>
				</Modal>
			</div>
		</section>
	);
};
