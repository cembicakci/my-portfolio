/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { AppleSvg } from "../../assets/svg";

const ProjectDetail = ({ item }) => {
	return (
		<div className="md:mx-10 mt-6 overflow-y-scroll">
			<div className="flex">
				<img
					src={item.logo}
					className="w-32 h-32 rounded-[14px] mr-4"
				/>
				<div className="flex flex-col justify-between items-start py-2">
					<div>
						<h4 className="text-white text-2xl">{item.name}</h4>
						<p className="text-base text-gray-400">{item.category}</p>
					</div>

					<a className="flex items-center  px-4 py-1 rounded-full bg-blue-500" href={item.link} target="_blank">
						<AppleSvg width="16" height="16" />
						<p className="text-sm ml-2">iOS</p>
					</a>

				</div>
			</div>
			<div className="w-full border-[1px] border-gray-500 mt-4" />
			<div className="mt-4">
				<h2 className="text-white text-xl">About this project</h2>
				<p className="mt-2 text-white text-sm">{item.description}</p>
			</div>
			<div className="w-full border-[1px] border-gray-500 mt-4" />
			<div className="mt-4 overflow-x-auto">
				<h2 className="text-white text-xl">See detail</h2>
				<div className="mt-4 flex gap-4">
					{
						item.images.map((item, index) => {
							return (
								<img key={index} src={item} className="rounded-[14px]"/>
							)
						})
					}
				</div>
			</div>
			<div className="w-full border-[1px] border-gray-500 mt-4" />
			<div className="mt-4">

				<h2 className="text-white text-xl">Information</h2>

				<div className="flex justify-between">
					<div className="flex-1">
						<div className="mt-4">
							<h3 className="text-lg text-gray-400">Language</h3>
							<div className="flex gap-4">
								{
									item.languages.map((item, index) => {
										return (
											<span className="text-sm text-white" key={index}>{item}</span>
										)
									})
								}
							</div>
						</div>

						<div className="mt-4">
							<h3 className="text-lg text-gray-400">Category</h3>
							<p>{item.category}</p>
						</div>

					</div>

					<div className="flex-1">
						<div className="mt-4">
							<h3 className="text-lg text-gray-400">Price</h3>
							<p>{item.price}</p>
						</div>


						<div className="mt-4">
							<h3 className="text-lg text-gray-400">Copyright</h3>
							<p>{item.copyright}</p>
						</div>

					</div>

				</div>
			</div>
			<div className="h-12" />
		</div>
	)
};

export default ProjectDetail;
