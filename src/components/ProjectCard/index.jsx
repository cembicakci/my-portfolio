/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import Button from "../Button"

const ProjectCard = ({ item, handleClick }) => {
	return (
		<div className="flex items-center gap-4">
			<img src={item.logo} className="w-40 h-40 rounded-[14px]" />
			<div className="flex-1 text-left">
				<h3 className="text-white text-xl">{item.name}</h3>
				<p className=" text-gray-400 text-sm">{item.category}</p>
			</div>
			<div className="">
				<Button
					text={"See Detail"}
					click={() => { handleClick() }}
					className={"bg-white text-blue-600 rounded-xl"}
				/>
			</div>
		</div>
	);
};

export default ProjectCard;
