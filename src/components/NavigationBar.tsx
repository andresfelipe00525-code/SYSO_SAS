import { useState } from 'react';
import '../App.css';
export const NavigationBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				{/* LOGO */}
				<div className="logo-container">
					{/* Asegúrate de que logo-syso.png esté en la carpeta /public */}
					<img src="/logo-syso.png" alt="SYSO Logo" className="logo-img" />
				</div>

				{/* BOTÓN HAMBURGUESA (Móvil) */}
				<button
					className="menu-icon"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Menu"
				>
					{isOpen ? '✕' : '☰'}
				</button>

				{/* ENLACES */}
				<ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
					<li className="nav-item">
						<a
							href="#inicio"
							className="nav-link"
							onClick={() => setIsOpen(false)}
						>
							Inicio
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#conocenos"
							className="nav-link"
							onClick={() => setIsOpen(false)}
						>
							Conócenos
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#servicios"
							className="nav-link"
							onClick={() => setIsOpen(false)}
						>
							Servicios
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#horarios"
							className="nav-link"
							onClick={() => setIsOpen(false)}
						>
							Horarios
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#contacto"
							className="btn-nav-contacto"
							onClick={() => setIsOpen(false)}
						>
							Contacto
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default NavigationBar;
