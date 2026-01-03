"use client";

import { useRouter } from "next/navigation";

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

	return (
		<div className="w-75 p-5 pr-0">
			{sidebarItems.map(item => (
				<div
					key={item.name}
					onClick={() => router.push(item.route)}
					className="cursor-pointer p-2 hover:bg-amber-600 font-semibold rounded-md transition-all"
				>
					{item.name}
				</div>
			))}
		</div>
	);
};

export default Sidebar;
