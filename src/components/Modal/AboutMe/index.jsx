/* eslint-disable react/prop-types */
import Button from "../../Button"
import ItemRow from "../../ItemRow"
import Modal from "../index"

const AboutMe = ({ closeModal, handleContact }) => {
	return (
		<Modal
			closeModal={closeModal}
			title={"About Me"}
		>
			<div className="text-slate-300">

				<div className="my-10">
					<h3 className="text-2xl font-bold">Cem Bıçakcı</h3>
					<p className="text-base mt-1">Front-end Developer</p>
				</div>

				<div className="px-12">
					<div className="mt-1">
						<ItemRow
							title={"Experience:"}
							value={"+1 Years"}
						/>
					</div>
					<div className="mt-4">
						<ItemRow
							title={"Main Skills:"}
							value={"Next JS, React, React Native"}
						/>
						<ItemRow
							value={"Javascript, Typescript"}
						/>
					</div>
					<div className="mt-4">
						<ItemRow
							title={"Comp. Skill:"}
							value={"Swift UI"}
						/>
					</div>
				</div>

				<div className="mt-8 flex items-center justify-center gap-2 mb-6">
					<Button
						text={"My Projects"}
						click={() => { }}
					/>
					<Button
						text={"Contact"}
						click={() => { handleContact() }}
					/>
				</div>
			</div>
		</Modal>
	)
}

export default AboutMe