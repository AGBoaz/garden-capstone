import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Garden.css"
import { SummerNav } from "./nav/SummerNav"
import { WinterNav } from "./nav/WinterNav"
import { FallNav } from "./nav/FallNav"
import { SpringNav } from "./nav/SpringNav"
import { SummerList } from "./seasons/SummerList"
import { WinterList } from "./seasons/WinterList"
import { FallList } from "./seasons/FallList"
import { SpringList } from "./seasons/SpringList"
import { BuySeeds } from "./nav/BuySeeds"
import { Seeds } from "./Seeds"


export const Garden = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					<ApplicationViews />
				</>
			</Authorized>

		} />


		{/* SEASON VIEWS */}
		<Route path="/seasons/SummerList" element={
			<Authorized>
				<>
					<SummerNav />
					<SummerList />
					<BuySeeds />
				</>
			</Authorized>
		} />

		<Route path="/seasons/WinterList" element={
			<Authorized>
				<>
					<WinterNav />
					<WinterList />
					<BuySeeds />
				</>
			</Authorized>
		} />

		<Route path="/seasons/FallList" element={
			<Authorized>
				<>
					<FallNav />
					<FallList />
					<BuySeeds />
				</>
			</Authorized>
		} />

		<Route path="/seasons/SpringList" element={
			<Authorized>
				<>
					<SpringNav />
					<SpringList />
					<BuySeeds />
				</>
			</Authorized>
		} />


		<Route path="/Seeds" element={
			<Authorized>
				<>
					<Seeds />
				</>
			</Authorized>
		} />


	</Routes>
}

