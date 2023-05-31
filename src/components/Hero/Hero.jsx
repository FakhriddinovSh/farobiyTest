import 'swiper/css';
import 'swiper/css/pagination';
import './hero.css';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
export const Hero = () => {
	const [orderModal, setOrderModal] = useState(false);

	return (
		<section className="hero">
			<Swiper
				pagination={true}
				modules={[Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="container">
						<div className="hero__wrapper">
							<h1 className="hero__title">
								ZAmonaviy kasb talimi uchun grantlar
							</h1>
							<div className="hero__desc-wrapper">
								<p className="hero__desc">
									Yetti yuz million so’mlik grantnig bir qismi
									sohibiga aylanish uchun test topshiring va
									omadingizni sinab ko’ring
								</p>
							</div>
							<a
								onClick={() => setOrderModal(true)}
								className="hero__link"
								href="#"
							>
								Testni boshlash
							</a>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="container">
						<div className="hero__wrapper">
							<h1 className="hero__title">
								ZAmonaviy kasb talimi uchun grantlar
							</h1>
							<div className="hero__desc-wrapper">
								<p className="hero__desc">
									Yetti yuz million so’mlik grantnig bir qismi
									sohibiga aylanish uchun test topshiring va
									omadingizni sinab ko’ring
								</p>
							</div>
							<a
								onClick={() => setOrderModal(true)}
								className="hero__link"
								href="#"
							>
								Testni boshlash
							</a>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="container">
						<div className="hero__wrapper">
							<h1 className="hero__title">
								ZAmonaviy kasb talimi uchun grantlar
							</h1>
							<div className="hero__desc-wrapper">
								<p className="hero__desc">
									Yetti yuz million so’mlik grantnig bir qismi
									sohibiga aylanish uchun test topshiring va
									omadingizni sinab ko’ring
								</p>
							</div>
							<a
								onClick={() => setOrderModal(true)}
								className="hero__link"
								href="#"
							>
								Testni boshlash
							</a>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>

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
		</section>
	);
};
