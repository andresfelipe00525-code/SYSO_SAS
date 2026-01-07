import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const BuzonContacto: React.FC = () => {
	const form = useRef<HTMLFormElement>(null);
	const [enviando, setEnviando] = useState(false);

	const enviarEmail = (e: React.FormEvent) => {
		e.preventDefault();
		if (!form.current) return;
		setEnviando(true);

		emailjs
			.sendForm(
				'YOUR_SERVICE_ID',
				'YOUR_TEMPLATE_ID',
				form.current,
				'WVFOl9BHfyEstqOZl',
			)
			.then((result) => {
				alert('¡Mensaje enviado con éxito!');
				form.current?.reset();
			})
			.catch((error) => {
				alert('Hubo un error al enviar el mensaje.');
				console.error(error);
			})
			.finally(() => setEnviando(false));
	};

	return (
		// 👇 ¡AQUÍ ESTÁ LA CLAVE! Agregamos id="contacto" para que el botón funcione
		<section id="contacto" className="bg-white py-12 px-6">
			<div className="max-w-6xl mx-auto bg-[#1a2e26] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
				{/* Información de Contacto */}
				<div className="md:w-1/2 p-10 text-white flex flex-col justify-center">
					<div className="mb-6">
						<h2 className="text-2xl font-bold flex items-center gap-2">
							<span className="bg-white text-[#1a2e26] rounded-full p-1 text-xs">
								S
							</span>
							SYSO SARARE S.A.S.
						</h2>
					</div>
					<div className="space-y-4 text-sm opacity-90">
						<p className="flex items-center gap-3">
							📞 3112177779 / 3123720231
						</p>
						<p className="flex items-center gap-3">
							📍 Diag. 30 No. 12-18 Barrio San Luis
						</p>
						<p className="flex items-center gap-3">🆔 Nit: 900.710.269-5</p>
					</div>
				</div>

				{/* Formulario */}
				<div className="md:w-1/2 p-10 bg-[#2d4a3e]">
					<h3 className="text-white text-3xl font-semibold mb-6">
						Contáctenos
					</h3>
					<form ref={form} onSubmit={enviarEmail} className="space-y-4">
						<input
							type="text"
							name="user_name"
							placeholder="Nombre"
							required
							className="w-full p-3 rounded-lg bg-[#3d5c4f] text-white outline-none"
						/>
						<input
							type="email"
							name="user_email"
							placeholder="Correo Electrónico"
							required
							className="w-full p-3 rounded-lg bg-[#3d5c4f] text-white outline-none"
						/>
						<textarea
							name="message"
							placeholder="Mensaje"
							rows={4}
							required
							className="w-full p-3 rounded-lg bg-[#3d5c4f] text-white outline-none"
						></textarea>
						<button
							type="submit"
							disabled={enviando}
							className="w-full px-8 py-3 bg-[#4e7a62] hover:bg-[#5f8c73] text-white font-bold rounded-full transition"
						>
							{enviando ? 'Enviando...' : 'Enviar Mensaje'}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default BuzonContacto;
