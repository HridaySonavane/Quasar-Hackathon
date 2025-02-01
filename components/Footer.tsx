import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
const Footer = () => {
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
					<p>Link 1</p>
					<p>Link 2</p>
					<p>Link 3</p>
					<p>Link 4</p>
					<p>Link 5</p>
					<p>Link 6</p>
					<p>Link 7</p>
					<p>Link 8</p>
					<p>Link 9</p>
					<p>Link 10</p>
					{/* <ul className="">
					</ul> */}
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
