import React from 'react';

const Hero = () => {
	return (
		<div className="relative bg-white font-sans">
			{/* 1. BARRA DE NAVEGACIÓN */}
			<nav className="bg-[#1a2e26] text-white relative z-10">
				<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
					{/* Espacio izquierdo para equilibrar el logo flotante */}
					<div className="w-32 md:w-40"></div>

					{/* ENLACES CENTRALES */}
					<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
						<a href="#" className="hover:text-green-300 transition-colors">
							Inicio
						</a>
						<a
							href="#conocenos"
							className="hover:text-green-300 transition-colors"
						>
							Conócenos
						</a>
						<a
							href="#servicios"
							className="hover:text-green-300 transition-colors"
						>
							Servicios
						</a>
						<a
							href="#horarios"
							className="hover:text-green-300 transition-colors"
						>
							Horarios
						</a>
					</div>

					{/* BOTÓN CONTACTO */}
					<a
						href="#contacto"
						className="hidden md:block border border-white/40 px-6 py-2 rounded-full text-xs font-semibold hover:bg-white hover:text-[#1a2e26] transition-all cursor-pointer"
					>
						Contacto
					</a>
				</div>
			</nav>

			{/* 2. LOGO FLOTANTE (Efecto Apple Médico) */}
			<div className="absolute top-4 left-6 md:left-12 z-20">
				<img
					src="/logo.png"
					alt="Syso Sarare Logo"
					className="h-24 md:h-32 w-auto transition-all duration-500 ease-in-out
                               filter drop-shadow-2xl brightness-110 contrast-105
                               mix-blend-multiply hover:scale-105"
					style={{
						maskImage: 'radial-gradient(circle, black 75%, transparent 100%)',
						WebkitMaskImage:
							'radial-gradient(circle, black 75%, transparent 100%)',
					}}
				/>
			</div>

			{/* 3. CONTENIDO PRINCIPAL */}
			<div className="max-w-7xl mx-auto px-6 pt-20 pb-20 md:pt-32 md:pb-32 flex flex-col md:flex-row items-center">
				<div className="md:w-1/2 mb-12 md:mb-0 z-10 relative">
					<h1 className="text-4xl md:text-6xl font-bold text-[#1a2e26] leading-tight mb-6 font-serif">
						Seguridad y Salud <br />
						<span className="text-[#3c5f4d]">Ocupacional del Sarare</span>
					</h1>
					<p className="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed">
						Protegemos la salud de sus trabajadores con servicios médicos
						ocupacionales confiables, rápidos y certificados.
					</p>
					<button className="bg-[#4e7a62] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#3d614e] transition transform hover:-translate-y-1 hover:shadow-xl">
						Descargar certificados
					</button>
				</div>

				<div className="md:w-1/2 relative flex justify-end">
					<img
						src="/medicos.png"
						alt="Equipo Médico"
						className="w-full max-w-lg object-contain relative z-10 drop-shadow-lg"
					/>
					{/* Círculo de fondo decorativo */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-50/50 rounded-full blur-3xl -z-10"></div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
