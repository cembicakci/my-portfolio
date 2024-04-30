/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react"
import { MailSvg } from "../../../assets/svg"
import Button from "../../Button"
import ItemRow from "../../ItemRow"
import Modal from "../index"

const Contact = ({ closeModal, handleAboutMe }) => {

	const [mailHovered, setMailHovered] = useState(false)
	return (
		<Modal
			closeModal={closeModal}
			title={"Contact"}
		>
			<div className="text-slate-300">

				<div className="my-10">
					<h3 className="text-2xl font-bold">Cem Bıçakcı</h3>
					<p className="text-base mt-1">Software Developer</p>
				</div>

				<div className="relative px-4 md:px-12 mt-2 border-t border-t-gray-600 border-b border-b-gray-600 py-3 flex items-center justify-between">
					<ItemRow
						title={"email:"}
						value={"cmbicakci@gmail.com"}
					/>

					<div
						onMouseEnter={() => setMailHovered(true)}
						onMouseLeave={() => setMailHovered(false)}
						className="cursor-pointer ml-4 md:ml-0"
					>

						<a
							target="_blank"
							href="mailto:cmbicakci@gmail.com"
						>
							<MailSvg />
						</a>

						<div className={`absolute right-0 border border-gray-400 bg-gray-900 bg-opacity-30 text-slate-300 rounded-md px-3 py-1 top-14 w-auto ${mailHovered ? 'block' : 'hidden'}`}>
							<p className="text-sm ">Send me an email</p>
						</div>
					</div>
				</div>

				<div className="mt-8 mb-4 ">
					<Button
						text={"About Me"}
						click={() => { handleAboutMe() }}
					/>
				</div>
			</div>
		</Modal>
	)
}

export default Contact