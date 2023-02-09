import ArticlesList from "../components/articles-list/articles-list";
import GoSimulate from "../components/buttons/goSimulate";
import HeadSeo from "../components/seo/Head";
import { articles } from "../db/articles";

function index() {
	const seo = {
		title: "Generative Art With Particles",
		description: `Here find you multiples simulations where you watch the movement of many
    particles, expressed for mathematical equations or physics phenomenons.`,
	};
	return (
		<div className="container">
			<HeadSeo title={seo.title} description={seo.description} />
			<header className="flex center column">
				<h1 className="center">Generative Art With Particles</h1>
				<GoSimulate />
			</header>

			<h3>About</h3>
			<span>
				Here find you multiples simulations where you watch the movement of many
				particles, expressed for mathematical equations or physics phenomenons.
			</span>
			<br />
			<h2>Some Simulations</h2>
			<ArticlesList articles={articles} />
		</div>
	);
}

export default index;
