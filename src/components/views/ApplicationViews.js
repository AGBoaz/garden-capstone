import { Outlet, Route, Routes, useNavigate } from "react-router-dom"
import { Login } from "../auth/Login"

export const ApplicationViews = () => {
	const navigate = useNavigate()

	return <>
		<Routes>
			<Route path="/" element={
				<>
					<Login/>
					<Outlet />
				</>
			}>

			</Route>
		</Routes>
	</>
}

