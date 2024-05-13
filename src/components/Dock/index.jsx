/* eslint-disable react/prop-types */
const Dock = ({ phoneTooltip, setPhoneTooltip, maiTooltip, setMailTooltip, projectsTooltip, setProjectTooltop, setProjectsModal, setContactModal, contactTooltip, setContactTooltip }) => {
	return (
		<div
			className='flex justify-between gap-2 relative'
		>

			{/* Phone */}
			<div
				onMouseEnter={() => { setPhoneTooltip(true) }}
				onMouseLeave={() => { setPhoneTooltip(false) }}
			>
				<a
					href="tel:+905372627575"
				>
					<img src='images/phone.png' className="w-12 h-12 cursor-pointer hover:scale-125 hover:mx-2 transform transition-all ease-out" />
				</a>

				<div className={`absolute whitespace-nowrap -top-14 -left-2 border border-gray-600 bg-gray-900 bg-opacity-30 text-slate-300 rounded-md px-4 py-2 ${phoneTooltip ? 'block' : 'hidden'}`}>
					<p className="text-sm ">Call me</p>
				</div>
			</div>

			{/* Email */}
			<div
				onMouseEnter={() => { setMailTooltip(true) }}
				onMouseLeave={() => { setMailTooltip(false) }}
			>
				<a
					target="_blank"
					href="mailto:cmbicakci@gmail.com"
				>
					<img src='images/email.png' className="w-12 h-12 cursor-pointer hover:scale-125 hover:mx-2 transform transition-all ease-out" />
				</a>

				<div className={`absolute whitespace-nowrap -top-14 left-4 border border-gray-600 bg-gray-900 bg-opacity-30 text-slate-300 rounded-md px-4 py-2 ${maiTooltip ? 'block' : 'hidden'}`}>
					<p className="text-sm ">Send me an email</p>
				</div>
			</div>

			{/* Project */}
			<div
				onMouseEnter={() => { setProjectTooltop(true) }}
				onMouseLeave={() => { setProjectTooltop(false) }
				}>
				<a className='w-[44px] h-[44px] mt-[2px] bg-slate-100 rounded-xl p-1 flex items-center justify-center cursor-pointer hover:scale-125 hover:mx-2 transform transition-all ease-out' onClick={() => { setProjectsModal(true) }}>
					<img src='images/react.png' className='object-contain' />
				</a>

				<div className={`absolute whitespace-nowrap -top-14 right-24 border border-gray-600 bg-gray-900 bg-opacity-30 text-slate-300 rounded-md px-4 py-2 ${projectsTooltip ? 'block' : 'hidden'}`}>
					<p className="text-sm ">See my projects</p>
				</div>
			</div>

			{/* Contact me */}
			<div
				onClick={() => { setContactModal(true) }}
				onMouseEnter={() => { setContactTooltip(true) }}
				onMouseLeave={() => { setContactTooltip(false) }}
			>
				<img src='images/contact.png' className="w-12 h-12 cursor-pointer hover:scale-125 hover:mx-2 transform transition-all ease-out" />
				<div className={`absolute whitespace-nowrap -top-14 right-14  border border-gray-600 bg-gray-900 bg-opacity-30 text-slate-300 rounded-md px-4 py-2 ${contactTooltip ? 'block' : 'hidden'}`}>
					<p className="text-sm ">Contact Me</p>
				</div>
			</div>

			<div className='w-[1px] bg-gray-500 ml-4 mr-2' />

			{/* Trash  */}
			<div>
				<img src='images/trash.png' className="w-12 h-12 cursor-pointer hover:scale-125 hover:mx-2 transform transition-all ease-out" />
			</div>

		</div>
	)
}

export default Dock;
