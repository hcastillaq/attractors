import { FETCH } from "../helpers/fetch.helper";

const path = `${process.env.api}/articles`;
export const ArticlesService = {
	getArticles: async () => {
		return await FETCH(path, { method: "GET" });
	},
	getArticleBySlug: async (slug: string) => {
		return await FETCH(`${path}/${slug}`, { method: "GET" });
	},
};
