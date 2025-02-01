import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";

const Footer = () => {
	return (
		<section className="w-full h-[420px] absolute bottom-0">
			{/* section above seperator */}
			<div className="flex m-5">
				<div>
					<Image
						src={"https://placehold.co/48x48"}
						alt="logo"
						width={48}
						height={48}
						className="rounded-full"
					/>
				</div>
				<div></div>
			</div>
			<Separator />
			{/* section below seperator */}
			<div></div>
		</section>
	);
};

export default Footer;
