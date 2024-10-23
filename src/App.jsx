import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import Dashboard from "./pages/Dashboard";
import ProductsPage from "./pages/ProductsPage";
import Leads from "./pages/Leads";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
	return (
		<div className='flex h-screen bg-gray-900 bg-black text-gray-100 overflow-hidden'>
			
			{/* <div className='fixed inset-0 z-0'> */}
				{/* <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' /> */}
				{/* <div className='absolute inset-0 backdrop-blur-sm' /> */}
			{/* </div> */}

			<Sidebar />
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/leads' element={<Leads />} />
				<Route path='/analytics' element={<AnalyticsPage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/reports' element={<SalesPage />} />
				<Route path='/orders' element={<OrdersPage />} />
				<Route path='/settings' element={<SettingsPage />} />
			</Routes>
		</div>
	);
}

export default App;