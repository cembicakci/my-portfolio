/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import Modal from "../index"

import { motion, AnimatePresence } from 'framer-motion'

import { projects } from "../../../assets/data/projects";
import ProjectCard from "../../ProjectCard";
import { ArrowLeftSvg } from "../../../assets/svg";
import ProjectDetail from "../../ProjectDetail";

const Projects = ({ closeModal }) => {

	const [detail, setDetail] = useState(false)
	const [selectedItem, setSelectedItem] = useState({})

	return (
		<Modal
			closeModal={closeModal}
			title={"Projects"}
			size="full"
		>
			<div className="text-slate-300 mt-8 h-[600px] overflow-y-auto">
				<AnimatePresence>
					<motion.div
						key="projectList"
						initial={{ x: 0 }}
						animate={{ x: detail ? '-100%' : 0 }}
						exit={{ x: 0 }}
						transition={{ duration: 0.5, ease: "easeIn" }}
					>
						{!detail ? (
							<>
								<h1 className="text-xl text-left text-white border-b-2 border-b-gray-500 pb-2">My Personal Projects</h1>
								<div className="flex flex-col gap-4 mt-4">
									{projects.map((item, index) => (
										<ProjectCard item={item} key={index} handleClick={() => { setDetail(true), setSelectedItem(item) }} />
									))}
								</div>
							</>
						) : (
							<motion.div
								initial={{ x: '100%' }}
								animate={{ x: '100%' }}
								exit={{ x: '-100%' }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
							>
								<div className="h-52">

									<a onClick={() => { setDetail(false) }} className="cursor-pointer">
										<ArrowLeftSvg />
									</a>

									<div className="mt-4 text-left">
										<ProjectDetail item={selectedItem} />
									</div>
								</div>
							</motion.div>
						)}
					</motion.div>
				</AnimatePresence>
			</div>

		</Modal>
	)
};

export default Projects;
