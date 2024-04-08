/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const ItemRow = ({ title, value }) => {
	return (
		<div className="flex gap-3">
			<h4 className="flex-1 text-base text-right">{title}</h4>
			<p className="flex-[2] text-base text-left">{value}</p>
		</div>
	)
}

export default ItemRow