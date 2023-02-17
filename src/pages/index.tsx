import { NextPage } from "next";
import ArticlesList from "../components/articles-list/articles-list";
import GoSimulate from "../components/buttons/goSimulate";
import HeadSeo, { defaultMeta } from "../components/seo/Head";
import { Article } from "../interfaces/article.interface";
import { ArticlesService } from "../services/articles.service";

interface Props {
	articles: Article[];
}
const index: NextPage<Props> = ({ articles }) => {
	const seo = {
		title: "Generative Art With Particles",
		description: `Here find you multiples simulations where you watch the movement of many
    particles, expressed for mathematical equations or physics phenomenons.`,
	};
	return (
		<div className="container">
			<HeadSeo meta={{ ...defaultMeta }} />
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
};

export default index;

export const getStaticProps = async () => {
	let articles = [];
	try {
		articles = await ArticlesService.getArticles();
	} catch (error) {
		console.log(error);
	}
	return {
		props: {
			articles,
		},
		revalidate: 300,
	};
};
