import Head from "next/head";
import React from "react";

type Props = {
	title: string;
	description: string;
};
const HeadSeo: React.FC<Props> = (props: Props) => {
	return (
		<Head>
			<title>{props.title}</title>
			<meta name="description" content={props.description} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		</Head>
	);
};

export default HeadSeo;
