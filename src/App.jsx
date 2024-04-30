/* eslint-disable no-unused-vars */
import './App.css'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { AppleSvg, MaximizeSvg } from './assets/svg';
import AboutMeModal from './components/Modal/AboutMe';
import ContactModal from './components/Modal/Contact';
import ProjectsModal from './components/Modal/Projects';
import moment from 'moment';

const App = () => {

	const [welcome, setWelcome] = useState(true)
	const [info, setInfo] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setWelcome(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	const [aboutMeModal, setAboutMeModal] = useState(false)
	const [contactModal, setContactModal] = useState(false)
	const [projectsModal, setProjectsModal] = useState(false)

	const [maiTooltip, setMailTooltip] = useState(false)
	const [projectsTooltip, setProjectTooltop] = useState(false)
	const [contactTooltip, setContactTooltip] = useState(false)

	const [weatherData, setWeatherData] = useState({})

	useEffect(() => {

		navigator.geolocation.getCurrentPosition((position) => {
			console.log(position)

			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;

			fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8aa3ebfb7eb0ce4277f8b9eabb365502`)
				.then(response => response.json())
				.then(data => setWeatherData(data))
				.catch(error => console.error('Hava durumu API\'sine erişilemedi.', error));

		}, (error) => {
			console.error('Konum bilgisine erişilemedi.', error);
		})
		
	}, [])

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
							className="bg-cover bg-center bg-no-repeat h-screen flex flex-col"
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

							<div className='w-full bg-gray-900 bg-opacity-30 px-4 py-1 flex justify-between'>
								<div className='flex items-center gap-4'>
									<div className='cursor-pointer mb-[2px]'>
										<AppleSvg width='14px' height='14px' />
									</div>

									{
										!aboutMeModal && !contactModal && !projectsModal && (
											<div className='cursor-pointer'>
												<p className={`text-sm text-white font-bold`}>Finder</p>
											</div>
										)
									}

									{
										!contactModal && !projectsModal && (
											<div className='cursor-pointer' onClick={() => { setAboutMeModal(true) }}>
												<p className={`text-sm text-white ${aboutMeModal && 'font-bold'}`}>About Me</p>
											</div>
										)
									}

									{
										!projectsModal && <div className='cursor-pointer' onClick={() => { setContactModal(true) }}>
											<p className={`text-sm text-white ${contactModal && 'font-bold'}`}>Contact</p>
										</div>
									}

									<div className='cursor-pointer' onClick={() => { setProjectsModal(true) }}>
										<p className='text-sm text-white'>Projects</p>
									</div>
								</div>

								<div>
									<p className='text-white'>{moment(new Date()).format('ddd D MMM HH:mm')}</p>
								</div>
							</div>

							<div className='flex-1 flex justify-between items-start w-full px-4 my-4 self-start gap-3'>

								<div className='flex'>
									<div>
										<a onClick={() => { setProjectsModal(true) }}>
											<div className='m-2 flex flex-col items-center justify-center' >
												<div className='w-16 h-16 bg-slate-100 rounded-xl p-1 flex items-center justify-center cursor-pointer'>
													<img src='public/images/react.png' className='object-contain' />
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
													<img src='public/images/linkedin.png' className="object-cover" />
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
													<img src='public/images/github.png' className='object-contain' />
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
													<img src='public/images/npm.png' className='object-contain' />
												</div>
												<p className='text-sm text-slate-100 mt-2'>Package</p>
											</div>
										</a>

									</div>

								</div>

								<div className='bg-gray-900 bg-opacity-30 text-slate-300 p-3 rounded-[14px] border border-gray-500 w-60'>
									<h3 className='text-base text-gray-300'>{weatherData.name}</h3>
									<p className='text-4xl text-white mt-1'>{(weatherData.main.temp - 273.15).toFixed(1)} °C</p>
									<img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} />
									<span className='text-white text-sm'>{weatherData.weather[0].main}</span>
									<div className='flex gap-2 items-center'>
										<p className='text-sm text-white'>H: {(weatherData.main.temp_max - 273.15).toFixed(1)} °C</p>
										<p className='text-sm text-white'>L: {(weatherData.main.temp_min - 273.15).toFixed(1)} °C</p>
									</div>
								</div>
							</div>

							<div
								className='bg-gray-900 bg-opacity-30 text-slate-300 bottom-5 flex items-center justify-center px-2 py-2 rounded-[14px] border border-gray-600 mb-4 self-center'
							>
								<div
									className='flex justify-between gap-2 relative'
								>
									{/* Email */}
									<div
										onMouseEnter={() => { setMailTooltip(true) }}
										onMouseLeave={() => { setMailTooltip(false) }}
									>
										<a
											target="_blank"
											href="mailto:cmbicakci@gmail.com"
										>
											<img src='public/images/email.png' className="w-12 h-12 cursor-pointer hover:scale-125 hover:mx-2 transform transition-all ease-out" />
										</a>

										<div className={`absolute whitespace-nowrap -top-14 -left-8 border border-gray-600 bg-gray-900 bg-opacity-30 text-slate-300 rounded-md px-4 py-2 ${maiTooltip ? 'block' : 'hidden'}`}>
											<p className="text-sm ">Send me an email</p>
										</div>
									</div>

									{/* Project */}
									<div
										onMouseEnter={() => { setProjectTooltop(true) }}
										onMouseLeave={() => { setProjectTooltop(false) }
										}>
										<a className='w-[44px] h-[44px] mt-[2px] bg-slate-100 rounded-xl p-1 flex items-center justify-center cursor-pointer hover:scale-125 hover:mx-2 transform transition-all ease-out'>
											<img src='public/images/react.png' className='object-contain' />
										</a>

										<div className={`absolute whitespace-nowrap -top-14 -left-1 border border-gray-600 bg-gray-900 bg-opacity-30 text-slate-300 rounded-md px-4 py-2 ${projectsTooltip ? 'block' : 'hidden'}`}>
											<p className="text-sm ">Send my projects</p>
										</div>
									</div>

									{/* Contact me */}
									<div
										onClick={() => { setContactModal(true) }}
										onMouseEnter={() => { setContactTooltip(true) }}
										onMouseLeave={() => { setContactTooltip(false) }}
									>
										<img src='public/images/contact.png' className="w-12 h-12 cursor-pointer hover:scale-125 hover:mx-2   transform transition-all ease-out" />
										<div className={`absolute whitespace-nowrap -top-14 -right-6  border border-gray-600 bg-gray-900 bg-opacity-30 text-slate-300 rounded-md px-4 py-2 ${contactTooltip ? 'block' : 'hidden'}`}>
											<p className="text-sm ">Contact Me</p>
										</div>
									</div>

								</div>

							</div>
						</motion.div>

					</>


				)

			}
			{aboutMeModal && <AboutMeModal closeModal={() => { setAboutMeModal(false) }} handleContact={() => { setAboutMeModal(false, setContactModal(true)) }} />}
			{contactModal && <ContactModal closeModal={() => { setContactModal(false) }} handleAboutMe={() => { setContactModal(false), setAboutMeModal(true) }} />}
			{projectsModal && <ProjectsModal closeModal={() => { setProjectsModal(false) }} />}
		</div>
	)
}

export default App