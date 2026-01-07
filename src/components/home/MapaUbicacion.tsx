import './MapaUbicacion.css';

export const MapaUbicacion = () => {
	// Esta es la URL corregida para el mapa
	const mapUrl =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.511394541539!2d-71.8953162!3d6.9458693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a3370743063b5%3A0xebe98ef1cd297f0c!2sSYSO%20SARARE%20SAS!5e0!3m2!1ses!2sco!4v1704550000000!5m2!1ses!2sco';

	return (
		<section className="contacto-section">
			<div className="contacto-grid">
				{/* LADO IZQUIERDO: Información y Mapa */}
				<div className="info-container">
					<div className="brand-header">
						<img src="/logo-syso.png" alt="Logo" className="mini-logo" />
						<h2 className="brand-title">SYSO SARARE S.A.S.</h2>
					</div>

					<div className="contact-details">
						<p>📞 3112377799 / 3132202311 / 3119932112</p>
						<p>☎️ 607-8821377</p>
						<p>📍 Diag. 30 No° 12-18 Barrio Santa Inés, Saravena, Arauca.</p>
						<p>🆔 Nit: 900710249-5</p>
					</div>

					{/* EL MAPA VA AQUÍ ABAJO DE LA INFO */}
					<div className="map-wrapper">
						<iframe
							title="Ubicación SYSO Sarare S.A.S"
							src={mapUrl}
							width="100%"
							height="250"
							style={{ border: 0 }}
							allowFullScreen={true}
							loading="lazy"
						></iframe>
					</div>
				</div>

				{/* LADO DERECHO: Formulario Verde */}
				<div className="form-container">
					<h3>Contáctenos</h3>
					<form className="contact-form">
						<input type="text" placeholder="Nombre" />
						<input type="email" placeholder="Correo Electrónico" />
						<textarea placeholder="Mensaje" rows={4}></textarea>
						<button type="submit" className="btn-submit">
							Enviar Mensaje
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};
