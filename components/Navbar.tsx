"use client";

import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	return <div className="p-5 border-b border-amber-100/10">{pathname}</div>;
};

export default Navbar;
