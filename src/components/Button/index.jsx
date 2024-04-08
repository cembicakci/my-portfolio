/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

const Button = ({ click, text }) => {
	return (
		<button
			onClick={() => { click() }}
			className='bg-gray-600 px-3 py-[2px] text-sm rounded-md'
		>
			{text}
		</button>
	)
}

export default Button