import { Outlet, Route, Routes, useNavigate } from "react-router-dom"
import { SummerList } from "../seasons/SummerList"
import { WinterList } from "../seasons/WinterList"

export const ApplicationViews = () => {
	const navigate = useNavigate()

	return <>
		<Routes>
			<Route path="/" element={
				<>
					

					<Outlet />
				</>
			}>
				<Route path="seasons/SummerList" element={ <SummerList/> } />
				<Route path="seasons/WinterList" element={ <WinterList/> } />

			</Route>
		</Routes>
	</>
}

