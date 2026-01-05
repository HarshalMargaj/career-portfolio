"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import slugify from "slugify";

const projectDetails = [
	{
		id: 1,
		title: "Social Media Platform (Connectly)",
		description:
			"A microblogging platform inspired by Threads/Reddit, built with Next.js, React, and TypeScript. Implemented real-time posting, reactions, and infinite scrolling with TanStack Query. Used Clerk for authentication, Prisma with Supabase for database management, and Zustand for client-side state. Deployed on Vercel with production-ready configuration.",
		duration: "July 2025 - August 2025",
		github: "https://github.com/HarshalMargaj/connectly",
		demo: "https://connectly-ivory.vercel.app/",
	},
	{
		id: 2,
		title: "Full-Stack Project Management Tool (TaskFlow) ",
		description:
			"A Trello-style project management tool built using ReactJS, Next.js, and TypeScript. Implemented boards, tasks, organi-zations, and drag-and-drop functionality. Used Clerk for authentication and role-based access, and Zustand for real-time global state management.",
		duration: "March 2025 – April 2025",
		github: "https://github.com/HarshalMargaj/taskflow",
		demo: "https://taskflow-v3.vercel.app/",
	},
	{
		id: 3,
		title: "Full-Stack E-Commerce Platform (ShopVista) ",
		description:
			"A full-stack eCommerce platform built using ReactJS, Redux, Tailwind CSS, Strapi, and Stripe. Developed key features such as product search, cart, wishlist, authentication, and secure payments. Used Redux Toolkit for structured state management and integrated Strapi as a headless CMS along with Stripe for secure checkout.",
		duration: "January 2025 – February 2025",
		github: "https://github.com/HarshalMargaj/E-Commerce-Application",
		demo: "https://shopvistav4.netlify.app/",
	},
];

const Page = () => {
	const router = useRouter();

	return (
		<div className="space-y-4">
			<div className="text-4xl">Projects</div>
			<div className="space-y-8">
				{projectDetails.map(detail => (
					<div
						onClick={() =>
							router.push(
								`/projects/${slugify(detail.title, {
									lower: true,
								})}`
							)
						}
						key={detail.id}
						className="bg-neutral-800/60 backdrop-blur border border-amber-100/10 rounded-md p-5 relative space-y-4"
					>
						<div className="text-xl">{detail.title}</div>
						<div className="text-lg opacity-70">
							{detail.description}
						</div>

						<div className="absolute -top-5 right-2 bg-neutral-800/90 backdrop-blur border border-amber-100/10 rounded-md p-2 py-1 text-base">
							{detail.duration}
						</div>
						<div
							onClick={e => e.stopPropagation()}
							className="absolute -top-5 left-100 bg-neutral-800/90 backdrop-blur border border-amber-100/10 rounded-md p-2 py-1 text-base space-x-2 shadow shadow-neutral-600"
						>
							<Link
								href={detail.github}
								className="border-amber-100/10 border-r h-full pr-2"
								target="_blank"
							>
								<span>Source Code</span>
							</Link>
							<a
								href={detail.demo}
								className="text-amber-500"
								target="_blank"
							>
								Live Demo
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Page;
