/* eslint-disable no-unused-vars */
import './App.css'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { AppleSvg } from './assets/svg';
import AboutMeModal from './components/Modal/AboutMe';

const App = () => {

	const [welcome, setWelcome] = useState(true)
	const [info, setInfo] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setWelcome(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	const [tab, setTab] = useState(1)
	const [aboutMeModal, setAboutMeModal] = useState(false)

	return (
		<div className="h-screen w-screen bg-black">
			{
				welcome ? (
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}

						>
							<motion.div
								initial={{ opacity: 1 }}
								animate={{ opacity: 0 }}
								transition={{ duration: 2 }}
								className='flex items-center justify-center h-screen w-screen'
							>
								<AppleSvg />
							</motion.div>
						</motion.div>
					</AnimatePresence>
				) : (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="bg-cover bg-center bg-no-repeat h-screen flex items-center flex-col"
						>
							{
								info && (
									<motion.div
										initial={{ opacity: 0, y: -100 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, ease: 'backOut' }}
										exit={{ opacity: 0, y: -100 }}
										className='absolute bg-gray-900 bg-opacity-30 text-slate-300 left-1/2 right-1/2 w-[350px] -ml-[175px] flex items-center justify-center py-4 rounded-[14px] border border-gray-600'

									>
										<div
											className='flex justify-between w-full px-4'
										>
											<div className='flex gap-4'>
												<p className='text-base'>👋🏻</p>
												<p className='text-base font-bold'>Hoşgeldin!</p>
											</div>
											<button
												onClick={() => { setInfo(false) }}
												className='bg-gray-600 px-3 py-[2px] text-sm rounded-md'
											>
												Kapat
											</button>
										</div>
									</motion.div>
								)
							}

							<div className='w-full bg-gray-900 bg-opacity-30 px-4 py-1 flex items-center gap-4'>
								<div className='cursor-pointer mb-[2px]'>
									<AppleSvg width='14px' height='14px' />
								</div>

								{
									tab !== 2 && (
										<div className='cursor-pointer'>
											<p className={`text-sm text-white ${tab === 1 && 'font-bold'}`}>Finder</p>
										</div>
									)
								}

								<div className='cursor-pointer' onClick={() => { setAboutMeModal(true), setTab(2) }}>
									<p className={`text-sm text-white ${tab === 2 && 'font-bold'}`}>About Me</p>
								</div>

								<div className='cursor-pointer'>
									<p className='text-sm text-white'>Contact</p>
								</div>

								<div className='cursor-pointer'>
									<p className='text-sm text-white'>Projects</p>
								</div>
							</div>

							<div className='flex-1 w-full'>
								<h1>First Screen</h1>
							</div>

							<div
								className='bg-gray-900 bg-opacity-30 text-slate-300 bottom-5 flex items-center justify-center px-2 py-2 rounded-[14px] border border-gray-600 mb-4'
							>
								<div
									className='flex justify-between'
								>
									<div>
										<img src='public/images/email.png' className="w-12 h-12 cursor-pointer hover:scale-125 hover:mx-2   transform transition-all ease-out" />
									</div>
									<div onClick={() => { setAboutMeModal(true), setTab(2) }}>
										<img src='public/images/contact.png' className="w-12 h-12 cursor-pointer hover:scale-125 hover:mx-2   transform transition-all ease-out" />
									</div>
								</div>

							</div>
						</motion.div>

					</>


				)

			}
			{aboutMeModal &&
				<AboutMeModal
					closeModal={() => {
						setAboutMeModal(false)
						setTab(1)
					}}
				/>
			}
		</div>
	)
}

export default App