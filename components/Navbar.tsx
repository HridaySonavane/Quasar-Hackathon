import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
	return (
		<div className="px-10 py-2 bg-white shadow-sm">
			<nav className="flex justify-between items-center">
				<Link href="/">
					<Image
						src="/instagram.svg"
						alt="Logo"
						width={64}
						height={30}
					/>
				</Link>

				<div className="flex items-center gap-5 text-black text-lg">
					<ul className="flex justify-between items-center gap-7 font-semibold">
						<li>Home</li>
						<li>About Us</li>
						<li>Contact Us</li>
						<DropdownMenu>
							<DropdownMenuTrigger>More...</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem>Profile</DropdownMenuItem>
								<DropdownMenuItem>Billing</DropdownMenuItem>
								<DropdownMenuItem>Team</DropdownMenuItem>
								<DropdownMenuItem>
									Subscription
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</ul>
				</div>

				<Button className="w-16 bg-neutral-900">Join</Button>
			</nav>
		</div>
	);
};

export default Navbar;
