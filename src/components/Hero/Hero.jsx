import 'swiper/css';
import 'swiper/css/pagination';
import './hero.css';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
export const Hero = () => {
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
							<Link className="hero__link" to="/test">
								Testni boshlash
							</Link>
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
							<Link className="hero__link" to="/test">
								Testni boshlash
							</Link>
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
							<Link className="hero__link" to="/test">
								Testni boshlash
							</Link>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};
