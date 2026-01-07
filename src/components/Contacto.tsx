import React from 'react';

export const Contacto: React.FC = () => {
	const mapUrl =
		'https://www.google.com/search?q=https://www.google.com/maps/search/%3Fapi%3D1%26query%3DSYSO%2BSARARE%2BSAS%26query_place_id%3DChIJtWMwdNAzb44RDH8pzfGO6bw';

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert('Mensaje enviado (Simulación)');
	};

	return (
		<section className="contacto-section" id="contacto">
			<div className="contacto-container-main">
				{/* IZQUIERDA: Info + Mapa */}
				<div className="info-side">
					<div className="brand-block">
						<h3>SYSO SARARE S.A.S.</h3>
					</div>

					<div className="contact-list">
						<p>
							<strong>📞 Tels:</strong> 3112377799 / 3132202311
						</p>
						<p>
							<strong>📍 Dir:</strong> Diag. 30 No° 12-18 Barrio Santa Inés,
							Saravena.
						</p>
						<p>
							<strong>⌚ Horario:</strong> Lun-Vie 7am-5:30pm
						</p>
					</div>

					<div className="map-wrapper">
						<iframe
							title="Mapa Syso"
							src={mapUrl}
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen={true}
							loading="lazy"
						></iframe>
					</div>
				</div>

				{/* DERECHA: Formulario Verde Oscuro */}
				<div className="form-side">
					<h3>Contáctenos</h3>
					<form onSubmit={handleSubmit}>
						<input type="text" placeholder="Nombre" required />
						<input type="email" placeholder="Correo Electrónico" required />
						<textarea placeholder="Mensaje" rows={4} required></textarea>
						<button type="submit" className="btn-enviar">
							Enviar Mensaje
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};
