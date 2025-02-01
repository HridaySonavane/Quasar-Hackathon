import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
const Footer = () => {
	const links: { id: number; title: string; href: string }[] = [
		{
			id: 1,
			title: `Link 1`,
			href: "/",
		},
		{
			id: 2,
			title: `Link 2`,
			href: "/",
		},
		{
			id: 3,
			title: `Link 3`,
			href: "/",
		},
		{
			id: 4,
			title: `Link 4`,
			href: "/",
		},
		{
			id: 5,
			title: `Link 5`,
			href: "/",
		},
		{
			id: 6,
			title: `Link 6`,
			href: "/",
		},
		{
			id: 7,
			title: `Link 7`,
			href: "/",
		},
		{
			id: 8,
			title: `Link 8`,
			href: "/",
		},
		{
			id: 9,
			title: `Link 9`,
			href: "/",
		},
		{
			id: 10,
			title: `Link 10`,
			href: "/",
		},
	];

	return (
		<section className="w-full h-[420px] absolute bottom-0 px-20 flex flex-col gap-7">
			{/* section above seperator */}

			<div className="flex justify-between items-start mb-10">
				<div className="w-3/4 flex flex-col justify-around gap-7">
					<Image
						src={"https://placehold.co/48x48"}
						alt="logo"
						width={48}
						height={48}
						className="rounded-full"
					/>

					<div>
						<h2 className="font-bold">Address:</h2>
						<p>(my address)</p>
					</div>
					<div>
						<h2 className="font-bold">Contact:</h2>
						<p>(my contact)</p>
					</div>

					<div className="flex justify-between items-center w-1/5">
						<Facebook />
						<Instagram />
						<Twitter />
						<Linkedin />
						<Youtube />
					</div>
				</div>

				<div className="w-1/4 grid grid-flow-col grid-cols-2 grid-rows-5 gap-3">
					{links.map((link) => (
						<p key={link.id}>{link.title}</p>
					))}
				</div>
			</div>

			<Separator />
			{/* section below seperator */}
			<div className="flex justify-between items-center">
				<p>2025 UpSkill. All rights reserved</p>
				<div className="flex justify-between items-center gap-5">
					<p>Privacy policy</p>
					<p>Terms of service</p>
					<p>Cookies settings</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
