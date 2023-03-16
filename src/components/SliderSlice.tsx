import { FC } from 'react';

interface SliderSliceProps {
	height: number;
	count: number;
	top: number;
	src: string;
}
const randBt = (min: number, max: number) => {
	// 1500 - 4500
	return Math.floor(Math.random() * (max - min) + min);
};
const SliderSlice: FC<SliderSliceProps> = ({ src, count, height, top }) => {
	return (
		<div
			style={{
				height: height / count,
				backgroundColor: `hsl(${Math.random() * 30 + 30} , 70%, 50%)`,
				animationDuration: `${randBt(3500, 5500)}ms`,
			}}
			className='animation_movement overflow-hidden relative text-white bg-black'>
			<img
				src={src}
				alt='burger image'
				style={{
					height,
					top,
				}}
				className='absolute object-cover'
			/>
		</div>
	);
};

export default SliderSlice;
