import { MapPin } from "lucide-react";

const educationDetails = [
	{
		id: 1,
		duration: "August 2020 - July 2023",
		education: "B.Tech in Electronics and Telecommunication",
		college: "Vishwakarma Institute of Information Technology",
		marks: "8.47",
		markType: "CGPA",
		location: "Pune, Maharashtra",
	},
	{
		id: 2,
		duration: "August 2017 - May 2020",
		education: "Diploma in Electronics and Telecommunication",
		college: "Guru Gobind Sign Polytechnic",
		marks: "91.47",
		markType: "Percentage",
		location: "Nashik, Maharashtra",
	},
];

const page = () => {
	return (
		<div className="space-y-4">
			<div className="text-4xl font-normal">Education</div>
			<div className="space-y-8">
				{educationDetails.map(detail => (
					<div
						key={detail.id}
						className="bg-neutral-800/60 backdrop-blur border border-amber-100/10 rounded-md p-5 relative flex items-center justify-between"
					>
						<div>
							<div className="text-xl">{detail.education}</div>
							<div className="text-base text-amber-100/50">
								{detail.college}
							</div>
							<div className="absolute -top-4 right-2 flex items-center gap-2">
								<div className=" bg-neutral-800/90 backdrop-blur border border-amber-100/10 rounded-md p-2 py-1 text-base flex items-center gap-1">
									<MapPin
										size={15}
										className="text-amber-500"
									/>{" "}
									{detail.location}
								</div>
								<div className=" bg-neutral-800/90 backdrop-blur border border-amber-100/10 rounded-md p-2 py-1 text-base">
									{detail.duration}
								</div>
							</div>
						</div>
						<div className="text-center flex items-end">
							<div className="text-4xl text-amber-500">
								{detail.marks}
							</div>
							<div className="text-sm mb-0.75">
								{detail.markType}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
