import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './myCounterSlice'

const MyCounter = () => {
	const count = useSelector((state) => state.counter.value)
	const dispatch = useDispatch()

	return (
		<div className="h-screen bg-purple-300 grid place-items-center">
			<div className="flex flex-col items-center gap-8">
				<div className="flex items-center gap-8">
					<button
						onClick={() => dispatch(decrement())}
						className="px-8 h-20  rounded bg-red-500 text-white text-4xl flex items-center justify-center"
					>
						-
					</button>
					<h1 className="text-6xl font-bold">{count}</h1>
					<button
						onClick={() => dispatch(increment())}
						className="px-8 h-20 py-2  rounded bg-green-500 text-white text-4xl flex items-center justify-center"
					>
						+
					</button>
				</div>
				<button
					onClick={() => dispatch(reset())}
					className="px-8 h-20 py-2  rounded bg-yellow-500 uppercase text-white text-4xl flex items-center justify-center"
				>
					Reset
				</button>
			</div>
		</div>
	)
}

export default MyCounter
