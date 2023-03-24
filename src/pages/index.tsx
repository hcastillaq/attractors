import ArticlesList from "../components/articles-list/articles-list";
import GoSimulate from "../components/buttons/goSimulate";
import HeadSeo, { defaultMeta } from "../components/seo/Head";
import { StructuredData } from "../components/structured-data/StructuredData";
import { Article } from "../interfaces/article.interface";

interface Props {
	articles: Article[];
}
export default function ({ articles }: Props) {
	const data = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		url: "https://gartsimulation.com/",
		author: {
			"@type": "Person",
			name: "Hernan Castilla",
			email: "hcastillaq@gmail.com",
			url: "https://hernancastilla.com/",
		},
	};

	return (
		<div className="container">
			<HeadSeo meta={{ ...defaultMeta }} />
			<StructuredData data={data} />

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

export async function getStaticProps() {
	let articles: Article[] = [];

	try {
		const path = `${process.env.api}/articles`;
		const res = await fetch(path);
		articles = await res.json();
	} catch (error) {
		console.log(error);
	}
	return {
		props: {
			articles,
		},
		revalidate: 10,
	};
}
