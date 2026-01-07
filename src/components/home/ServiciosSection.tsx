import React from 'react';
import {
	ClipboardList,
	FlaskConical,
	ShieldCheck,
	MonitorPlay,
} from 'lucide-react';

const listaServicios = [
	{
		id: 1,
		titulo: 'Evaluaciones Médicas',
		desc: 'Exámenes médicos ocupacionales para monitorear la salud de sus trabajadores.',
		icon: <ClipboardList className="w-6 h-6 text-green-700" />,
		imagen:
			'https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?w=800&q=80',
	},
	{
		id: 2,
		titulo: 'Exámenes Ocupacionales',
		desc: 'Pruebas especializadas para detectar riesgos y enfermedades laborales.',
		icon: <FlaskConical className="w-6 h-6 text-green-700" />,
		imagen:
			'https://images.pexels.com/photos/8442150/pexels-photo-8442150.jpeg?w=800&q=80',
	},
	{
		id: 3,
		titulo: 'Certificados Laborales',
		desc: 'Emisión de certificados de aptitud laboral para cumplir con las normativas.',
		icon: <ShieldCheck className="w-6 h-6 text-green-700" />,
		imagen:
			'https://images.pexels.com/photos/8386713/pexels-photo-8386713.jpeg?w=800&q=80',
	},
	{
		id: 4,
		titulo: 'Plataforma en Línea',
		desc: 'Consulta y descarga de certificados desde nuestro portal web.',
		icon: <MonitorPlay className="w-6 h-6 text-green-700" />,
		imagen:
			'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
	},
];

export default function ServiciosSection() {
	return (
		<section
			className="py-24 bg-gradient-to-b from-green-50 to-white"
			id="servicios"
		>
			<div className="max-w-7xl mx-auto px-6">
				<div className="mb-24">
					<div className="bg-gradient-to-r from-green-800 to-green-700 rounded-3xl p-12 text-center shadow-xl">
						<p className="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
							Podrá descargar los certificados de salud ocupacional de sus
							empleados en cualquier momento o lugar ingresando a nuestra
							plataforma en línea.
						</p>
					</div>
				</div>

				<div className="text-center mb-16">
					<div className="flex items-center justify-center gap-4 mb-4">
						<div className="h-px w-16 bg-gray-300"></div>
						<p className="text-sm uppercase tracking-widest text-gray-500 font-medium">
							Equipo Médico Syso Sarare
						</p>
						<div className="h-px w-16 bg-gray-300"></div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-800">
						Nuestros Servicios
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{listaServicios.map((s) => (
						<div
							key={s.id}
							className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
						>
							<div className="relative h-48 overflow-hidden">
								<img
									src={s.imagen}
									alt={s.titulo}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
							</div>
							<div className="p-6">
								<div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
									{s.icon}
								</div>
								<h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
									{s.titulo}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">
									{s.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
