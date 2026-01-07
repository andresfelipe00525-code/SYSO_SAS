import React from 'react';

const Conocenos = () => {
	return (
		// El id="conocenos" es lo que hace que el botón del menú funcione
		<section id="conocenos" className="py-24 bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex flex-col lg:flex-row items-center gap-16">
					{/* 1. IMAGEN (Izquierda) */}
					<div className="w-full lg:w-1/2 relative">
						<div className="relative rounded-3xl overflow-hidden shadow-2xl group">
							<div className="absolute inset-0 bg-[#1a2e26]/10 group-hover:bg-transparent transition-colors duration-500"></div>
							<img
								src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
								alt="Equipo Syso Sarare"
								className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
							/>
						</div>
						{/* Elemento decorativo detrás */}
						<div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-green-50 rounded-3xl -z-10"></div>
					</div>

					{/* 2. TEXTO (Derecha) */}
					<div className="w-full lg:w-1/2">
						<div className="inline-block px-4 py-1 bg-green-100 text-[#1a2e26] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
							Nuestra Empresa
						</div>

						<h2 className="text-3xl md:text-4xl font-bold text-[#1a2e26] mb-6 font-serif leading-tight">
							SYSO SARARE S.A.S <br />
							<span className="text-[#4e7a62]">
								Seguridad y Salud Ocupacional
							</span>
						</h2>

						<div className="text-gray-600 text-lg leading-relaxed space-y-6 text-justify">
							<p>
								Actualmente diversos factores ‐como la necesidad del
								mejoramiento continuo en el desempeño del sector laboral en
								términos de garantía para su salud y seguridad, la actualización
								de la reglamentación oﬁcial y la necesidad de generar conﬁanza‐
								demandan a las empresas la utilización de herramientas
								prácticas.
							</p>

							<div className="border-l-4 border-[#1a2e26] pl-6 py-2 italic text-gray-700 bg-gray-50 rounded-r-lg">
								"Facilitamos el logro de los objetivos corporativos disminuyendo
								costos por accidentes y enfermedades laborales."
							</div>

							<p>
								Nuestras herramientas permiten el control de riesgos de
								seguridad y salud en el trabajo (SST), ayudando a su
								organización a cumplir con las nuevas perspectivas y enfoques de
								la comunidad nacional e internacional.
							</p>
						</div>

						{/* Checkmarks opcionales para decorar */}
						<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
							{[
								'Normativa Oficial',
								'Disminución de Costos',
								'Garantía de Salud',
								'Control de Riesgos',
							].map((item) => (
								<div key={item} className="flex items-center gap-2">
									<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs">
										✓
									</div>
									<span className="text-sm font-medium text-gray-700">
										{item}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Conocenos;
