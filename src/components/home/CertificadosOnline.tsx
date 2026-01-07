import React from 'react';

const CertificadosOnline: React.FC = () => {
	return (
		<section className="w-full flex justify-center py-20 bg-[#f3f6f4]">
			<div className="max-w-6xl w-full bg-[#1f4037] rounded-3xl shadow-2xl p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				{/* TEXTO */}
				<div>
					<h3 className="text-white text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
						Descarga de Certificados <br /> en Línea
					</h3>

					<p className="text-green-100 text-lg leading-relaxed mb-8">
						Podrá descargar los certificados de salud ocupacional de sus
						empleados en cualquier momento o lugar ingresando a nuestra
						plataforma en línea, de forma rápida, segura y confiable.
					</p>

					<button className="bg-white text-[#1f4037] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition">
						Ingresar a la Plataforma
					</button>
				</div>

				{/* IMÁGENES MÉDICOS (FAKE) */}
				<div className="grid grid-cols-2 gap-6">
					<img
						src="https://images.unsplash.com/photo-1606813909029-20a7d4bfe3b7"
						alt="Médico 1"
						className="rounded-2xl shadow-xl object-cover h-48 w-full"
					/>
					<img
						src="https://images.unsplash.com/photo-1580281657527-47bcb7a8c6b0"
						alt="Médico 2"
						className="rounded-2xl shadow-xl object-cover h-48 w-full"
					/>
					<img
						src="https://images.unsplash.com/photo-1550831107-1553da8c8464"
						alt="Médico 3"
						className="rounded-2xl shadow-xl object-cover h-48 w-full col-span-2"
					/>
				</div>
			</div>
		</section>
	);
};

export default CertificadosOnline;
