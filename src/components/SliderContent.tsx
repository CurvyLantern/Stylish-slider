import { FC, useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';
import burgerImg from '../assets/burger.jpg';
import { useDebug } from '../App';
import SliderSlice from './SliderSlice';

interface Props {
	debug: (v: number) => void;
}
const SliderContent: FC<Props> = ({ debug }) => {
	const { count } = useDebug();

	const [ref, { height }] = useMeasure({});

	useEffect(() => {
		debug(height);
	}, [height]);

	return (
		<div
			ref={ref}
			className='
				resize-y
				overflow-hidden
			h-[450px] bg-green-200 relative'>
			{/* <img src={burgerImg} alt='burger image' className='h-full object-cover' /> */}

			<div className='absolute top-0 left-0 w-full h-full'>
				{Array(count)
					.fill(0)
					.map((item, index) => {
						let top = height / count;
						top = top * index * -1;
						return <SliderSlice key={index} src={burgerImg} count={count} height={height} top={top} />;
					})}
			</div>
		</div>
	);
};

export default SliderContent;
