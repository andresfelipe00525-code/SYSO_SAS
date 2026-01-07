interface Props {
	onInicio: () => void;
	onConocenos: () => void;
	onServicios: () => void;
	onHorarios: () => void;
}

const NavigationButtons = ({
	onInicio,
	onConocenos,
	onServicios,
	onHorarios,
}: Props) => {
	const btnClass =
		'bg-[#1e4620] text-white px-8 py-2 rounded-full font-bold text-sm tracking-widest shadow-lg hover:bg-[#2a5e2d] hover:scale-105 transition-all border border-green-400 uppercase';

	return (
		<div className="w-fullS from-green-100 to-[#dcfce7] pt-6 pb-2">
			<div className="flex flex-wrap justify-center gap-4 md:gap-8 px-4">
				<button onClick={onInicio} className={btnClass}>
					Inicio
				</button>
				<button onClick={onConocenos} className={btnClass}>
					Conócenos
				</button>
				<button onClick={onServicios} className={btnClass}>
					Nuestros Servicios
				</button>
				<button onClick={onHorarios} className={btnClass}>
					Horarios
				</button>
			</div>
		</div>
	);
};

export default NavigationButtons;
