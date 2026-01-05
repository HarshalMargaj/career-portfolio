"use client";

import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<div className="p-5 border-b border-amber-100/10">
			<span className="border border-amber-100/10 p-2 px-4 rounded-md text-lg space-x-2 bg-neutral-800/60 backdrop-blur">
				<span>harshal-margaj{pathname.split("/").join(" / ")}</span>
			</span>
		</div>
	);
};

export default Navbar;
