import { FC } from "react";

interface Props {
	data: any;
}
export const StructuredData: FC<Props> = ({ data }) => {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
};
