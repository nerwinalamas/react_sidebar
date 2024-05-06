import { BarChart3, Home, Menu, Store, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarItems = [
	{
		name: "Home",
		icon: <Home />,
		path: "/",
	},
	{
		name: "Products",
		icon: <Store />,
		path: "/products",
	},
	{
		name: "Sales",
		icon: <BarChart3 />,
		path: "/sales",
	},
];

const Sidebar = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	const handleShow = () => {
		setShowSidebar((prev) => !prev);
	};

	return (
		<div className="relative">
			<nav className="p-4 bg-customBlack text-white">
				<Menu onClick={handleShow} className="hover:cursor-pointer" />
			</nav>
			<div
				className={`w-64 h-screen absolute top-0 flex flex-col gap-5 p-5 bg-customBlack text-white ${
					showSidebar
						? "-left-full duration-700"
						: "left-0 duration-300"
				}`}
			>
				<X className="self-end hover:cursor-pointer" onClick={handleShow} />
				<ul className="flex flex-col gap-2">
					{SidebarItems.map((item) => (
						<li className={`hover:bg-white hover:text-customBlack hover:rounded-md hover:cursor-pointer`}>
							<Link to={item.path} className="p-3 flex items-center gap-4">
								{item.icon}
								<p>{item.name}</p>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
