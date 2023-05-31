import { useRef } from 'react';
import './authTest.css';
import { useNavigate } from 'react-router-dom';

export const AuthTel = () => {
	const navigate = useNavigate();
	const inputValue = useRef();

	const authHandleForm = (evt) => {
		evt.preventDefault();

		navigate('/test/code');
	};

	return (
		<main className="auth-main">
			<section className="auth">
				<div className="container">
					<div className="auth-wrapper">
						<div className="auth-title-wrapper">
							<h2 className="auth-title">
								Telefon raqamingiz bilan tizimga kiring
							</h2>
							<p className="auth-desc">
								Telefon raqamingizga SMS ko’rinishida tasdiqlash
								kodi yuboriladi. Ushbu kodni kiritib test
								topshirish sahifasiga o’tishingiz mumkin
								bo’ladi. Agarda SMS qabul qilmasangiz telefon
								raaqamingizni tog’ri kiritganingizni tekshirib
								qaytadan ko’d uchun so’rov yuboring. Agar shunda
								ham kodni qabul qilolmasangiz boshqa telefon
								raqam bilan urinib ko’ring
							</p>
						</div>
						<div className="auth-form-wrapper">
							<h3 className="auth-form-title">
								Tasdiqlash kodini oling
							</h3>
							<p className="auth-form-desc">
								Hisob ochish uchun telefon raqamingizni kiriting
								va biz sizga tashdiqlash kodini yuboramiz
							</p>
							<form
								onSubmit={authHandleForm}
								className="auth-form"
								autoComplete="off"
							>
								<label
									className="auth-label"
									htmlFor="id-input"
								>
									Telefon raqamingizni kiriting
								</label>
								<input
									ref={inputValue}
									className="auth-input"
									type="tel"
									id="id-input"
									name="user_tel"
									placeholder="+998 91 657 56 57"
									required
								/>
								<span className="auth-addition">
									Telefon raqamingizga kod yuborildi
								</span>
								<button className="auth-button" type="submit">
									Davom etish
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};
