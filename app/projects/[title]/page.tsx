import React from "react";

interface PageProps {
	params: {
		title: string;
	};
}

const page = async ({ params }: PageProps) => {
	const resolvedParams = await params;
	return <div>{resolvedParams.title}</div>;
};

export default page;
