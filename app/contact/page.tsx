import ProfessionalLinks from "@/components/ProfessionalLinks";

const contactDetails = {
	"Social and Professional Links": [
		{
			id: 1,
			platform: "GitHub",
			link: "https://github.com/HarshalMargaj",
			placeholder: "GitHub",
		},
		{
			id: 2,
			platform: "LinkedIn",
			link: "https://www.linkedin.com/in/harshal-margaj/",
			placeholder: "LinkedIn",
		},
		{
			id: 3,
			platform: "Resume/CV",
			link: "https://drive.google.com/file/d/1zy0QvOaZbxY_4vm2gLQikhYKg1hsJ7hq/view?usp=drive_link",
			placeholder: "Resume/CV",
		},
	],
	"Coding Profiles": [
		{
			id: 1,
			platform: "Leetcode",
			link: "https://leetcode.com/u/Harshal_Margaj/",
			placeholder: "Leetcode",
		},
		{
			id: 2,
			platform: "GeeksForGeeks",
			link: "https://www.geeksforgeeks.org/profile/harshalmargaj12?tab=activity",
			placeholder: "GeeksForGeeks",
		},
	],
};

const contactMeta = [
	{
		id: 1,
		title: "Preferred Contact",
		description:
			"Email or LinkedIn works best. I usually reply within 24 hours.",
	},
	{
		id: 2,
		title: "Availability",
		description: "Actively seeking full-time or contract roles",
	},
	{
		id: 3,
		title: "📍 Location",
		description: "India (Open to remote roles)",
	},
];

const page = () => {
	return (
		<div className="flex flex-col gap-4">
			<div className=" space-y-4">
				<div className="space-y-2">
					<div className="text-4xl">Contact Details</div>
					<div className="text-lg opacity-70">
						I’m a Full-Stack Developer specializing in Next.js,
						React, and TypeScript. Open to full-time and contract
						opportunities.
					</div>
				</div>
				<div className="space-y-4">
					<div className="flex items-center gap-2 text-xl">
						<div>Email:</div>
						<div className="text-amber-500">
							harshal.margaj12@gmail.com
						</div>
					</div>

					<ProfessionalLinks
						data={contactDetails["Social and Professional Links"]}
						label="Social and Professional Links"
					/>
					<ProfessionalLinks
						data={contactDetails["Coding Profiles"]}
						label="Coding Profiles"
					/>
				</div>
			</div>
			<div className=" space-y-4">
				{contactMeta.map(item => (
					<div
						key={item.id}
						className="rounded-lg border border-amber-100/10 bg-neutral-900/60 p-4 space-y-2"
					>
						<div className="text-xl">{item.title}</div>
						<div className="text-lg opacity-70">
							{item.description}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
