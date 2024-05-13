/* eslint-disable react/prop-types */

const NavItem = ({ text, isActive, onClick }) => {
	return (
		<div className='cursor-pointer' onClick={() => { onClick() }}>
			<p className={`text-sm text-white ${isActive && 'font-bold'}`}>{text}</p>
		</div>
	)
};

export default NavItem;
