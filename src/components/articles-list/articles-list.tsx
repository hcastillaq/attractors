import Link from "next/link";
import { FC } from "react";

interface Props {
	articles: any[];
}

const ArticlesList: FC<Props> = ({ articles }) => {
	return (
		<div className="articles-list">
			<ul>
				{articles.map((article, index) => (
					<li key={article.title}>
						<Link href={article.path}>
							<div className="articles-item">
								<strong>{article.title}</strong>
								<p>{article.description}</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ArticlesList;
