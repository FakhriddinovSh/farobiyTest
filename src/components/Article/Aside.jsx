import './article.css';
import ArticleImage from '../../assets/images/articleImage.png';

export const Aside = () => {
	return (
		<article className="article">
			<div className="container">
				<div className="article-wrapper">
					<div className="article-title-wrapper">
						<h2 className="article-title">
							Ushbu Grant O’zbekiston Respublikasi Raqamli
							Texnologiyalari Vazirligi va IT Park bilan
							hamkorlikda tashkillashtirildi
						</h2>
					</div>
					<img
						src={ArticleImage}
						width="570"
						height="78"
						alt="Article image"
					/>
				</div>
			</div>
		</article>
	);
};
