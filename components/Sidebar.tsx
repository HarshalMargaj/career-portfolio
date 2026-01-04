"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const sidebarItems = [
	{
		name: "About",
		route: "/about",
	},
	{
		name: "Education",
		route: "/education",
	},
	{
		name: "Skills",
		route: "/skills",
	},
	{
		name: "Experience",
		route: "/experience",
	},
	{
		name: "Projects",
		route: "/projects",
	},
	{
		name: "Contact",
		route: "/contact",
	},
];

const Sidebar = () => {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<div className="w-95 p-5 space-y-4">
			<div className="flex justify-center items-center flex-col gap-2">
				<Image
					src="/profile.jpeg"
					width={100}
					height={100}
					alt="profile_image"
					className="rounded-full"
				/>
				<div className="text-center">
					<div className="text-2xl">Harshal Margaj</div>
					<div className="text-lg text-secondary">
						Frontend Developer
					</div>
				</div>
			</div>
			<div>
				{sidebarItems.map(item => {
					const isActive = pathname === item.route;
					return (
						<div
							key={item.name}
							onClick={() => router.push(item.route)}
							className={`text-xl cursor-pointer p-2 rounded-md font-normal transition-all
							${
								isActive
									? "bg-amber-500/15 text-amber-200"
									: "text-amber-100/80 hover:bg-amber-500/10 hover:text-amber-200"
							}`}
						>
							{item.name}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
