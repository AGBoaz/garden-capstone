import { Outlet, Route, Routes, useNavigate } from "react-router-dom"
import { SummerNav } from "../nav/SummerNav"
import { FallList } from "../seasons/FallList"
import { SpringList } from "../seasons/SpringList"
import { SummerList } from "../seasons/SummerList"
import { WinterList } from "../seasons/WinterList"

export const ApplicationViews = () => {
	const navigate = useNavigate()

	return <>
		<Routes>
			<Route path="/" element={
				<>
					
					<SummerNav/>
					<Outlet />
				</>
			}>

			</Route>
		</Routes>
	</>
}

