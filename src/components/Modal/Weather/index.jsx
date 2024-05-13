/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

const Weather = ({ weatherData }) => {
	return (
		<div className='bg-gray-900 bg-opacity-30 text-slate-300 p-3 rounded-[14px] border border-gray-500 w-full md:w-60 order-1 md:order-2 glass'>
			<div className='flex md:flex-col justify-between'>
				<div>
					<h3 className='text-base text-gray-300'>{weatherData?.name}</h3>
					<p className='text-4xl text-white mt-1'>{(weatherData?.main?.temp - 273.15).toFixed(1)} °C</p>
				</div>
				<div className='flex items-center flex-col md:flex-row'>
					<img src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}.png`} />
					<span className='text-white text-sm'>{weatherData.weather[0].main}</span>
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<p className='text-sm text-white'>H: {(weatherData.main.temp_max - 273.15).toFixed(1)} °C</p>
				<p className='text-sm text-white'>L: {(weatherData.main.temp_min - 273.15).toFixed(1)} °C</p>
			</div>
		</div>
	)
};

export default Weather;
