import { MapPin } from "lucide-react";
import React from "react";

const experienceDetails = [
	{
		id: 1,
		role: "Frontend Developer",
		company: "Oculon AI",
		duration: "April 2024 - March 2025",
		experience: [
			{
				id: 1,
				line: "Led the end-to-end development of the product’s frontend UI/UX, owning the complete design and implementation.",
			},
			{
				id: 2,
				line: "Built the entire Dashboard and Settings Panel from scratch, ensuring responsiveness, usability, and scalability.",
			},
			{
				id: 3,
				line: "Developed custom, reusable components with ReactJS, Tailwind CSS, and Redux, following DRY principles to improve maintainability and performance. ",
			},
			{
				id: 4,
				line: "Integrated RESTful APIs and implemented CRUD operations, ensuring smooth data flow and real-time functionality.",
			},
			{
				id: 5,
				line: "Collaborated closely with designers and backend engineers to align on design systems, API specs, and user experience goals.",
			},
			{
				id: 6,
				line: "Optimized performance, reducing product load time and improving responsiveness across devices and browsers.",
			},
		],
	},
	{
		id: 2,
		role: "Full Stack Developer Intern",
		company: "Fynd (Shopsense Retail Technologies Limited)",
		duration: "July 2023 - September 2023",
		experience: [
			{
				id: 1,
				line: "Collaborated with interns to deliver practical development tasks and mini-projects simulating real scenarios.",
			},
			{
				id: 2,
				line: "Gained hands-on experience in frontend and backend workflows, including API integration and component design.",
			},
		],
	},
];

const page = () => {
	return (
		<div className="space-y-4">
			<div className="text-4xl">Experience</div>
			<div className="space-y-8">
				{experienceDetails.map(detail => (
					<div
						key={detail.id}
						className="bg-neutral-800/60 backdrop-blur border border-amber-100/10 rounded-md p-5 relative space-y-4"
					>
						<div>
							<div className="text-xl">{detail.role}</div>
							<div className="text-base text-amber-100/50">
								{detail.company}
							</div>
						</div>
						<div>
							<ul className="list-disc pl-5">
								{detail.experience.map(e => (
									<li key={e.id} className="text-lg">
										{e.line}
									</li>
								))}
							</ul>
						</div>
						<div className="absolute -top-4 right-2 flex items-center gap-2">
							<div className="bg-neutral-800/90 backdrop-blur border border-amber-100/10 rounded-md p-2 py-1 text-base flex items-center gap-1">
								<MapPin size={15} className="text-amber-500" />{" "}
								Mumbai, Maharashtra
							</div>
							<div className=" bg-neutral-800/90 backdrop-blur border border-amber-100/10 rounded-md p-2 py-1 text-base">
								April 2024 - March 2025
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
