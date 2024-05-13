/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const Info = ({ setInfo }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: 'backOut' }}
			exit={{ opacity: 0, y: -100 }}
			className='absolute bg-gray-900 bg-opacity-60 text-slate-300 md:left-1/2 left-3 md:right-1/2 w-[95%] md:w-[410px] md:-ml-[175px] flex items-center justify-center py-4 rounded-[14px] border border-gray-600 mt-4 glass z-[999]'

		>
			<div className='flex items-center justify-between w-full px-4'>
				<div className='flex flex-col'>
					<div className='flex gap-4'>
						<p className='text-base'>👋🏻</p>
						<p className='text-base font-bold'>Welcome!</p>
					</div>
					<div className='mt-2'>
						<p className='block md:hidden'>You can check it out also with desktop</p>
						<p className='hidden md:block'>You can check it out also with mobile</p>
					</div>
				</div>

				<button
					onClick={() => { setInfo(false) }}
					className='bg-gray-600 px-3 py-[2px] text-sm rounded-md'
				>
					Close
				</button>
			</div>
		</motion.div>
	)
};

export default Info;
