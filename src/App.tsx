import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Hero from './components/home/Hero';
import ServiciosSection from './components/home/ServiciosSection';
import BuzonContacto from './components/home/BuzonContacto';
import Conocenos from './section/Conocenos';
import HorarioDeAtencion from './components/home/Horarioatencion';

// Configuración de API
const meta = import.meta as any;
const BACKEND_URL = meta.env?.VITE_BACKEND_URL as string;
const API = BACKEND_URL ? `${BACKEND_URL}/api` : 'http://localhost:5000/api';

const Home = () => {
	const helloWorldApi = async () => {
		try {
			const response = await axios.get(`${API}/`);
			console.log('API Status:', response.data.message);
		} catch (error: any) {
			console.error('Error conectando con la API:', error.message || error);
		}
	};

	useEffect(() => {
		helloWorldApi();
	}, []);

	return (
		<div className="min-h-screen bg-white">
			<Hero />

			<Conocenos />

			<ServiciosSection />

			{/* 👇 AQUÍ MOSTRAMOS LOS HORARIOS */}
			<HorarioDeAtencion />

			<BuzonContacto />
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
