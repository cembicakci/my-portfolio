import './App.css'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { AppleSvg } from './assets/svg';
import { AboutMeModal, ContactModal, Dock, Info, Menu, NavItem, ProjectsModal, WeatherModal, Welcome } from './components';
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

	const [phoneTooltip, setPhoneTooltip] = useState(false)
	const [maiTooltip, setMailTooltip] = useState(false)
	const [projectsTooltip, setProjectTooltop] = useState(false)
	const [contactTooltip, setContactTooltip] = useState(false)

	const [weatherData, setWeatherData] = useState({})

	useEffect(() => {

		navigator.geolocation.getCurrentPosition((position) => {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;

			if (latitude) {
				fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8aa3ebfb7eb0ce4277f8b9eabb365502`)
					.then(response => response.json())
					.then(data => setWeatherData(data))
					.catch(error => console.error('Hava durumu API\'sine erişilemedi.', error));
			}

		}, (error) => {
			console.error('Konum bilgisine erişilemedi.', error);
		})

	}, [])

	return (
		<div className="h-screen w-screen bg-black">
			{
				welcome ? <Welcome /> : (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="bg-cover bg-center bg-no-repeat h-screen flex flex-col"
						>

							{
								info && <Info setInfo={setInfo} />
							}

							<div className='w-full bg-gray-900 bg-opacity-30 px-4 py-1 justify-between hidden md:flex'>
								<div className='flex items-center gap-4'>
									<div className='cursor-pointer mb-[2px]'>
										<AppleSvg width='14px' height='14px' />
									</div>

									{
										!aboutMeModal && !contactModal && !projectsModal && (
											<NavItem text={"Finder"} isActive={false} onClick={() => { }} />

										)
									}

									{
										!contactModal && !projectsModal && (
											<NavItem text={"About Me"} isActive={aboutMeModal} onClick={() => { setAboutMeModal(true) }} />
										)
									}

									{
										!projectsModal && (
											<NavItem text={"Contact"} isActive={contactModal} onClick={() => { setContactModal(true) }} />
										)
									}

									<NavItem text={"Projects"} isActive={projectsModal} onClick={() => { setProjectsModal(true) }} />

								</div>

								<div>
									<p className='text-white'>{moment(new Date()).format('ddd D MMM HH:mm')}</p>
								</div>
							</div>

							<div className='flex-1 flex flex-col md:flex-row justify-normal md:justify-between items-start w-full px-4 my-4 self-start gap-3'>

								<Menu setProjectsModal={setProjectsModal} />

								{
									weatherData.id && (<WeatherModal weatherData={weatherData} />)
								}

							</div>

							<div
								className='bg-gray-900 bg-opacity-30 text-slate-300 flex items-center justify-center px-2 py-2 rounded-[14px] border border-gray-500 mb-12 md:mb-4 self-center glass'
							>
								<Dock
									phoneTooltip={phoneTooltip}
									setPhoneTooltip={setPhoneTooltip}
									maiTooltip={maiTooltip}
									setMailTooltip={setMailTooltip}
									projectsTooltip={projectsTooltip}
									setProjectTooltop={setProjectTooltop}
									setProjectsModal={setProjectsModal}
									setContactModal={setContactModal}
									contactTooltip={contactTooltip}
									setContactTooltip={setContactTooltip}
								/>

							</div>

							<div className={`${weatherData.id ? 'h-14' : 'h-0'} md:h-0`} />
						</motion.div>

					</>


				)

			}
			{
				aboutMeModal &&
				<AboutMeModal
					closeModal={() => { setAboutMeModal(false) }}
					handleContact={() => { setAboutMeModal(false), setContactModal(true) }}
					handleProject={() => { setAboutMeModal(false), setContactModal(false), setProjectsModal(true) }}
				/>
			}
			{
				contactModal &&
				<ContactModal
					closeModal={() => { setContactModal(false) }}
					handleAboutMe={() => { setContactModal(false), setAboutMeModal(true) }}
				/>
			}
			{
				projectsModal &&
				<ProjectsModal
					closeModal={() => { setProjectsModal(false) }}
				/>
			}
		</div >
	)
}

export default App