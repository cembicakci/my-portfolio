/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import Modal from "../index"

import { projects } from "../../../assets/data/projects";
console.log(projects)

const Projects = ({ closeModal }) => {
	return (
		<Modal
			closeModal={closeModal}
			title={"Projects"}
			size="full"
		>
			<div className="text-slate-300 mt-8">
				<h1 className="text-xl text-left text-white border-b-2 border-b-gray-500 pb-2">My Personal Projects</h1>
				<div>
					{
						projects.map((item, index) => {
							return (
								<div key={index}>
									<img src={item.logo} />
									{
										item.images.map((image, index) => {
											return (
												<img src={image} key={index} />
											)
										})
									}
								</div>
							)
						})
					}
				</div>
			</div>
		</Modal>
	)
};

export default Projects;
