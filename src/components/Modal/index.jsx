/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react"
import { motion } from 'framer-motion';
import { CloseSvg } from "../../assets/svg"

const Modal = ({ closeModal, title, children }) => {

	const [closeHover, setCloseHover] = useState(false)

	return (
		<div
			className="fixed z-10 inset-0 overflow-y-auto"
		>
			<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

				<div className="fixed inset-0 transition-opacity" aria-hidden="true">
					<div className="absolute inset-0 bg-gray-900 opacity-30"></div>
				</div>

				<div className="inline-block align-bottom rounded-lg overflow-hidden transform transition-all sm:my-20 sm:align-middle sm:max-w-lg sm:w-full">

					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.3 }}
						className="bg-gray-900 bg-opacity-50 p-3 border border-gray-600 rounded-lg shadow-2xl"
					>
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div
									className="w-[14px] h-[14px] rounded-full flex items-center justify-center bg-red-500 p-0 cursor-pointer"
									onMouseEnter={() => { setCloseHover(true) }}
									onMouseLeave={() => { setCloseHover(false) }}
									onClick={() => { closeModal(false) }}
								>
									<CloseSvg fill={closeHover ? "#7f1d1d" : null} />
								</div>
								<div className="w-[14px] h-[14px] rounded-full bg-gray-400" />
								<div className="w-[14px] h-[14px] rounded-full bg-gray-400" />
							</div>
							<div>
								<h4 className="text-gray-400 font-bold text-sm">{title}</h4>
							</div>
							<div className="w-14" />
						</div>
						<div>
							{children}
						</div>
					</motion.div>

				</div>
			</div>
		</div >
	)
}

export default Modal