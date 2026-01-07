import React from 'react';

// Interfaz para definir el tipo de datos de un servicio
interface ServicioItem {
	titulo: string;
	desc: string;
	icon: string; // Puede ser una URL de imagen o un emoji por ahora
}

const serviciosData: ServicioItem[] = [
	{
		titulo: 'Evaluaciones Médicas',
		desc: 'Exámenes médicos ocupacionales para monitorear la salud de sus trabajadores.',
		icon: '📋',
	},
	{
		titulo: 'Exámenes Ocupacionales',
		desc: 'Pruebas especializadas para detectar riesgos y enfermedades laborales.',
		icon: '🩺',
	},
	{
		titulo: 'Certificados Laborales',
		desc: 'Emisión de certificados de aptitud laboral para cumplir con las normativas.',
		icon: '🛡️',
	},
	{
		titulo: 'Plataforma en Línea',
		desc: 'Consulta y descarga de certificados desde nuestro portal web.',
		icon: '💻',
	},
];

export const Servicios: React.FC = () => {
	return (
		<section className="servicios-section" id="servicios">
			<h2 className="section-title">Nuestros Servicios</h2>
			<div className="servicios-grid">
				{serviciosData.map((item, index) => (
					<div key={index} className="servicio-card">
						<div className="icon-box">{item.icon}</div>
						<h3>{item.titulo}</h3>
						<p>{item.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
};
