import { FETCH } from "../helpers/fetch.helper";

const path = `${process.env.api}/gap-articles`;
export const ArticlesService = {
	getArticles: async () => {
		return await FETCH(path, { method: "GET" })
			.then((res) => res.data)
			.then((res) => res.map((item: any) => item.attributes));
	},
	getArticleBySlug: async (slug: string) => {
		return await FETCH(
			`${path}?filters[slug][$eq]=${slug}&pagination[limit]=1`,
			{ method: "GET" },
		)
			.then((res) => res.data)
			.then((res) => (res[0] ? res[0].attributes : undefined));
	},
};
