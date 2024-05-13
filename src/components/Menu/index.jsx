/* eslint-disable react/prop-types */
import { MaximizeSvg } from "../../assets/svg";

const Menu = ({ setProjectsModal }) => {
	return (
		<div className='flex order-2'>
			<div>
				<a onClick={() => { setProjectsModal(true) }}>
					<div className='m-2 flex flex-col items-center justify-center' >
						<div className='w-16 h-16 bg-slate-100 rounded-xl p-1 flex items-center justify-center cursor-pointer'>
							<img src='images/react.png' className='object-contain' />
						</div>
						<p className='text-sm text-slate-100 mt-2'>Projects</p>
					</div>
				</a>


				<a
					href='https://www.linkedin.com/in/cembicakci/'
					target='_blank'
				>
					<div className='m-2 flex flex-col items-center justify-center mt-6'>
						<div className='w-20 h-20 cursor-pointer'>
							<img src='images/linkedin.png' className="object-cover" />
						</div>
						<p className='text-sm text-slate-100'>Linkedin</p>
					</div>
				</a>

				<a
					href='https://www.github.com/cembicakci'
					target='_blank'
				>
					<div className='m-2 flex flex-col items-center justify-center mt-6'>
						<div className='w-20 h-20 cursor-pointer'>
							<img src='images/github.png' className='object-contain' />
						</div>
						<p className='text-sm text-slate-100'>Github</p>
					</div>
				</a>

			</div>

			<div>
				<a
					onClick={() => {
						document.documentElement.webkitRequestFullscreen()
					}}>
					<div className='m-2 flex flex-col items-center justify-center'>
						<div className='w-16 h-16 bg-slate-100 rounded-xl p-1 flex items-center justify-center cursor-pointer'>
							<MaximizeSvg />
						</div>
						<p className='text-sm text-slate-100 mt-2'>Full Screen</p>
					</div>
				</a>

				<a
					href='https://www.npmjs.com/~cembicakci'
					target='_blank'
				>
					<div className='flex flex-col items-center justify-center mt-6'>
						<div className='mt-2 w-16 h-16 cursor-pointer'>
							<img src='images/npm.png' className='object-contain' />
						</div>
						<p className='text-sm text-slate-100 mt-2'>Package</p>
					</div>
				</a>

			</div>

		</div>
	)
};

export default Menu;
