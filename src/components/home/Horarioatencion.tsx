import React from 'react';
import { Clock, CalendarCheck, CalendarX } from 'lucide-react';

const HorarioDeAtencion = () => {
	return (
		// El id="horarios" es vital para que el botón del menú funcione
		<section id="horarios" className="py-24 bg-green-50">
			<div className="max-w-6xl mx-auto px-6">
				{/* Título */}
				<div className="text-center mb-16">
					<div className="inline-block px-4 py-1 bg-white border border-green-100 text-green-800 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
						Disponibilidad
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-[#1a2e26] mb-4 font-serif">
						Horarios de Atención
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Visítenos en nuestras instalaciones. Estamos comprometidos con
						brindarle la mejor atención en los siguientes horarios.
					</p>
				</div>

				{/* Tarjetas de Horarios */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Lunes a Viernes */}
					<div className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-green-600 hover:-translate-y-2 transition-transform duration-300">
						<div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-700">
							<Clock className="w-7 h-7" />
						</div>
						<h3 className="text-xl font-bold text-[#1a2e26] mb-2">
							Lunes a Viernes
						</h3>
						<p className="text-gray-500 font-medium text-lg">
							7:00 am - 12:00 pm y de 2:00pm a 5:30 pm
						</p>
						<div className="mt-4 flex items-center gap-2 text-sm text-green-700 bg-green-50 py-1 px-3 rounded-lg w-fit">
							<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
							Jornada Continua
						</div>
					</div>

					{/* Sábados */}
					<div className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-blue-500 hover:-translate-y-2 transition-transform duration-300">
						<div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-700">
							<CalendarCheck className="w-7 h-7" />
						</div>
						<h3 className="text-xl font-bold text-[#1a2e26] mb-2">Sábados</h3>
						<p className="text-gray-500 font-medium text-lg">
							7:00 am - 12:00 pm
						</p>
						<div className="mt-4 text-sm text-blue-700 bg-blue-50 py-1 px-3 rounded-lg w-fit">
							Media Jornada
						</div>
					</div>

					{/* Domingos */}
					<div className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-gray-300 opacity-90 hover:opacity-100 transition-opacity">
						<div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 text-gray-500">
							<CalendarX className="w-7 h-7" />
						</div>
						<h3 className="text-xl font-bold text-gray-500 mb-2">Domingos</h3>
						<p className="text-gray-400 font-medium text-lg">Cerrado</p>
						<div className="mt-4 text-sm text-gray-500 bg-gray-100 py-1 px-3 rounded-lg w-fit">
							Día de descanso
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HorarioDeAtencion;
