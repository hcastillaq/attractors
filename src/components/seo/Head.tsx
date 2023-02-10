import Head from "next/head";
import React from "react";

export interface Meta {
	title?: string;
	description?: string;
	keywords?: string;
	image?: string;
	url?: string;
	type?: "website" | "article";
}
export const defaultMeta: Meta = {
	description: `Here find you multiples simulations where you watch the movement of many
	particles, expressed for mathematical equations or physics phenomenons`,
	keywords:
		"generative art, attractors, particles, art, generative, simulation",
	title: "Generative Art With Particles",
	image: "https://gartsimulation.com/images/particles.png",
	url: "https://gartsimulation.com",
	type: "website",
};

interface Props {
	meta?: Meta;
}

const HeadSeo: React.FC<Props> = (props: Props) => {
	const meta = props.meta ? { ...defaultMeta, ...props.meta } : defaultMeta;

	return (
		<Head>
			<title>{meta.title}</title>
			<meta name="description" content={meta.description} />
			<meta name="keywords" content={meta.keywords} />
			<meta name="author" content="hernan castilla" />

			<meta property="og:title" content={meta.title} />
			<meta property="og:description" content={meta.description} />
			<meta property="og:type" content={meta.type} />
			<meta property="og:url" content={meta.url} />
			<meta property="og:site_name" content="gartsimulation" />
			<meta property="og:image" content={meta.image} />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={meta.url} />
			<meta property="twitter:title" content={meta.title} />
			<meta property="twitter:description" content={meta.description} />
			<meta property="twitter:image" content={meta.image} />
		</Head>
	);
};

export default HeadSeo;
