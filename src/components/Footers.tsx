import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="bg-[#1a2e26] text-white pt-16 pb-8" id="contacto">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
					{/* Lado Izquierdo: Información y Mapa */}
					<div className="space-y-8">
						<div>
							<div className="flex items-center gap-3 mb-6">
								<div className="bg-white text-[#1a2e26] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
									S
								</div>
								<h2 className="text-2xl font-bold tracking-tight">
									SYSO SARARE S.A.S.
								</h2>
							</div>
							<p className="text-gray-300 text-sm mb-6 leading-relaxed">
								Seguridad y Salud Ocupacional del Sarare. <br />
								Comprometidos con el bienestar de sus trabajadores.
							</p>
						</div>

						{/* Datos de contacto oficiales */}
						<div className="space-y-4 text-sm">
							<div className="flex items-start gap-3">
								<span className="text-lg">📍</span>
								<p>Diag. 30 No. 12-18 Barrio San Luis, Saravena (Arauca)</p>
							</div>
							<div className="flex items-start gap-3">
								<span className="text-lg">📞</span>
								<p>
									3112177779/ 3123720231 <br />{' '}
									<span className="text-green-400 font-bold">
										Tel: 607-8821377
									</span>
								</p>
							</div>
							<div className="flex items-start gap-3">
								<span className="text-lg">🆔</span>
								<p>Nit: 900.710.269-5</p>
							</div>
						</div>

						{/* Mapa de Google Maps (Iframe) */}
						<div className="w-full h-64 rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.782415177002!2d-71.8943346!3d6.9531102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a1078693c06e1%3A0x96f3c582845c088c!2sSaravena%2C%20Arauca!5e0!3m2!1ses!2sco!4v1700000000000"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen={true}
								loading="lazy"
							></iframe>
						</div>
					</div>

					{/* Lado Derecho: Bloque de Contacto */}
					<div className="bg-[#2d4a3e] p-8 md:p-12 rounded-[3rem] shadow-2xl">
						<h3 className="text-3xl font-bold mb-8">Contáctenos</h3>
						<form className="space-y-6">
							<input
								type="text"
								placeholder="Nombre"
								className="w-full bg-[#3d5c4f] border-none rounded-2xl p-4 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-400"
							/>
							<input
								type="email"
								placeholder="Correo Electrónico"
								className="w-full bg-[#3d5c4f] border-none rounded-2xl p-4 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-400"
							/>
							<textarea
								placeholder="Mensaje"
								rows={4}
								className="w-full bg-[#3d5c4f] border-none rounded-2xl p-4 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-400 resize-none"
							></textarea>
							<button
								type="submit"
								className="bg-[#4e7a62] hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-lg transform hover:scale-105"
							>
								Enviar Mensaje
							</button>
						</form>
					</div>
				</div>

				{/* Línea final */}
				<div className="border-t border-white/10 pt-8 text-center text-xs text-gray-400">
					<p>
						© 2026 SYSO SARARE S.A.S. - Todos los derechos reservados. Seguridad
						y Salud Ocupacional del Sarare.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
