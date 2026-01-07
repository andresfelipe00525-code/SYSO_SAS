import React, { useState } from 'react';

// Interfaz del servicio
interface ServicioItem {
	titulo: string;
	desc: string;
	icon: string;
	detalle: string;
}

const serviciosData: ServicioItem[] = [
	{
		titulo: 'Evaluaciones Médicas',
		desc: 'Exámenes médicos ocupacionales para monitorear la salud de sus trabajadores.',
		icon: '📋',
		detalle:
			'Son exámenes de salud que se realizan a los trabajadores para verificar que estén aptos física y mentalmente para desempeñar su cargo. Ayudan a prevenir enfermedades laborales, detectar riesgos a tiempo y proteger tanto al trabajador como a la empresa. Se pueden realizar antes de ingresar, durante el trabajo o al finalizar la relación laboral.',
	},
	{
		titulo: 'Exámenes Ocupacionales',
		desc: 'Pruebas especializadas para detectar riesgos y enfermedades laborales.',
		icon: '🩺',
		detalle:
			'Son evaluaciones médicas preventivas que permiten conocer el estado de salud del trabajador en relación con las funciones de su cargo. Su objetivo es identificar riesgos, prevenir enfermedades laborales y garantizar que la persona sea apta para realizar sus labores de forma segura, cumpliendo con la normatividad vigente.',
	},
	{
		titulo: 'Certificados Laborales',
		desc: 'Emisión de certificados de aptitud laboral para cumplir con las normativas.',
		icon: '🛡️',
		detalle:
			'Son documentos médicos que acreditan el estado de salud y la aptitud del trabajador para desempeñar sus funciones laborales. Se emiten con base en evaluaciones ocupacionales y son requeridos para ingreso, permanencia o retiro del trabajo, cumpliendo con las normas de seguridad y salud en el trabajo.',
	},
	{
		titulo: 'Plataforma en Línea',
		desc: 'Consulta y descarga de certificados desde nuestro portal web.',
		icon: '💻',
		detalle:
			'Es un sistema digital de gestión en salud ocupacional que permite el registro, control y consulta segura de historias clínicas, exámenes médicos y certificados laborales. Facilita el seguimiento del estado de salud del trabajador, optimiza los procesos administrativos y garantiza confidencialidad, trazabilidad y cumplimiento de la normatividad vigente.',
	},
];

export const Servicios: React.FC = () => {
	const [activo, setActivo] = useState<number | null>(null);

	const toggleServicio = (index: number) => {
		setActivo(activo === index ? null : index);
	};

	return (
		<section className="servicios-section" id="servicios">
			<h2 className="section-title">Nuestros Servicios</h2>

			<div className="servicios-grid">
				{serviciosData.map((item, index) => (
					<div key={index} className="servicio-card">
						<div className="icon-box" onClick={() => toggleServicio(index)}>
							{item.icon}
						</div>

						<h3>{item.titulo}</h3>
						<p>{item.desc}</p>

						{activo === index && (
							<div className="servicio-detalle">
								<p>{item.detalle}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
};
