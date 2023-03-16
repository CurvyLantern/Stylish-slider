import { createContext, useContext, useState } from 'react';

import useMeasure from 'react-use-measure';
import SliderContent from './components/SliderContent';

// @ts-ignore
const DebugContext = createContext({
	count: 0,
});
export const useDebug = () => useContext(DebugContext);

const App: React.FC<{}> = () => {
	const [count, setCount] = useState(5);
	const [height, setHeight] = useState(0);

	return (
		<DebugContext.Provider
			value={{
				count,
			}}>
			<div>
				{/* slider */}
				<SliderContent debug={(v: number) => setHeight(v)} />

				{/* debug panel */}
				<div
					className='
			mt-10
			bg-red-100
			py-4
			grid gap-4 place-items-center text-xl'>
					<p>height : {height} </p>
					<p>count : {count}</p>
					<div className='flex gap-5'>
						<button
							onClick={() => {
								setCount(Math.min(20, count + 1));
							}}>
							+
						</button>
						<button
							onClick={() => {
								setCount(Math.max(0, count - 1));
							}}>
							-
						</button>
					</div>
				</div>
			</div>
		</DebugContext.Provider>
	);
};

export default App;
