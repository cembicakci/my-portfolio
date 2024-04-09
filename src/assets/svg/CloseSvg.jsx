/* eslint-disable react/prop-types */
export const CloseSvg = ({ width = "18", height = "18", fill = "currentColor" }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={fill} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
			<line x1="18" y1="6" x2="6" y2="18"></line>
			<line x1="6" y1="6" x2="18" y2="18"></line>
		</svg>
	)
}