import Link from "next/link";

type Props = {
	text?: string;
	name?: string;
};
const GoSimulate = (props: Props) => {
	const path = `/simulations/${props.name || ""}`;
	return (
		<Link href={path}>
			<span className="go-simulator">
				{props.text ? props.text : "go simulator"}
			</span>
		</Link>
	);
};

export default GoSimulate;
