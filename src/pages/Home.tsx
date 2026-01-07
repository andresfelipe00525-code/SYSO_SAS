import ServiciosSection from '../components/home/ServiciosSection';
export default function NuestrosServicios() {
	return (
		<section className="py-20 bg-green-50" id="servicios">
			{/* BLOQUE DESCARGA */}
			<div className="max-w-5xl mx-auto px-6 mb-20">
				<div className="bg-green-800 rounded-2xl p-10 text-center">
					<h3 className="text-white text-3xl font-bold mb-6">
						Descarga de Certificados en Línea
					</h3>

					<p className="text-green-100 text-lg max-w-3xl mx-auto">
						Podrá descargar los certificados de salud ocupacional de sus
						empleados en cualquier momento o lugar ingresando a nuestra
						plataforma en línea.
					</p>
				</div>
			</div>

			{/* TÍTULO */}
			<h2 className="text-center text-4xl font-bold text-green-900 mb-14">
				Nuestros Servicios
			</h2>

			{/* SERVICIOS */}
			<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				<div className="bg-white rounded-xl shadow p-6 text-center">
					<div className="text-4xl mb-3">📋</div>
					<h3 className="font-semibold text-lg text-green-900 mb-2">
						Evaluaciones Médicas
					</h3>
					<p className="text-gray-600 text-sm">
						Exámenes médicos ocupacionales para monitorear la salud de sus
						trabajadores.
					</p>
				</div>

				<div className="bg-white rounded-xl shadow p-6 text-center">
					<div className="text-4xl mb-3">🩺</div>
					<h3 className="font-semibold text-lg text-green-900 mb-2">
						Exámenes Ocupacionales
					</h3>
					<p className="text-gray-600 text-sm">
						Pruebas especializadas para detectar riesgos y enfermedades
						laborales.
					</p>
				</div>

				<div className="bg-white rounded-xl shadow p-6 text-center">
					<div className="text-4xl mb-3">🛡️</div>
					<h3 className="font-semibold text-lg text-green-900 mb-2">
						Certificados Laborales
					</h3>
					<p className="text-gray-600 text-sm">
						Emisión de certificados de aptitud laboral para cumplir con las
						normativas.
					</p>
				</div>

				<div className="bg-white rounded-xl shadow p-6 text-center">
					<div className="text-4xl mb-3">💻</div>
					<h3 className="font-semibold text-lg text-green-900 mb-2">
						Plataforma en Línea
					</h3>
					<p className="text-gray-600 text-sm">
						Consulta y descarga de certificados desde nuestro portal web.
					</p>
				</div>
			</div>

			<p className="mt-16 text-center text-sm text-gray-500">
				Equipo Médico <span className="font-semibold">Syso Sarare</span>
			</p>
		</section>
	);
}
