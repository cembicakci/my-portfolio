import { motion, AnimatePresence } from 'framer-motion';
import { AppleSvg } from '../../assets/svg';

const Welcome = () => {
	return (
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
	)
};

export default Welcome;
