/* eslint-disable no-unused-vars */
import './App.css'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { AppleSvg } from './assets/svg';

const App = () => {

	const [welcome, setWelcome] = useState(true)
	const [info, setInfo] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setWelcome(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

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
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="bg-cover bg-center bg-no-repeat h-screen"
					>
						{
							info && (
								<motion.div
									initial={{ opacity: 0, y: -100 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, ease: 'backOut' }}
									exit={{ opacity: 0, y: -100 }}
									className='absolute bg-gray-900 bg-opacity-30 text-slate-300 left-1/2 w-[400px] ml-[-200px] flex items-center justify-center py-4 rounded-[14px] border border-gray-500'

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

						<h1>First Screen</h1>
					</motion.div>
				)

			}
		</div>
	)
}

export default App