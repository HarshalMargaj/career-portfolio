import Link from "next/link";
import React from "react";

interface ProfessionalLinksProps {
	label: string;
	data:
		| {
				id: number;
				platform: string;
				link: string;
				placeholder: string;
				icon: React.ReactNode;
		  }[]
		| undefined;
}

const ProfessionalLinks = ({ data, label }: ProfessionalLinksProps) => {
	return (
		<div className="rounded-xl border border-amber-100/10 bg-neutral-900/40 p-5 space-y-4">
			<div className="text-2xl">{label}</div>
			<div className="flex items-center gap-4">
				{data?.map(d => (
					<Link
						key={d.id}
						href={d.link}
						className="text-amber-500 bg-neutral-800/90 border border-amber-100/10
                        rounded-md px-4 py-2 text-base transition hover:bg-neutral-800 hover:border-amber-100/30 hover:shadow-[0_0_0_1px_rgba(255,191,0,0.15)] flex items-center gap-2"
					>
						{/* {d.icon} */}
						{d.placeholder}
					</Link>
				))}
			</div>
		</div>
	);
};

export default ProfessionalLinks;
