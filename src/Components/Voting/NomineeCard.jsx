export default function NomineeCard({ nominee, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex flex-col items-center shrink-0 w-[140px] sm:w-[160px] cursor-pointer text-center"
    >
      {/* IMAGE CONTAINER */}
      <div className="w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden border-2 border-white/10">
        <img
          src={nominee.img}
          alt={nominee.name}
          className="w-full h-full object-cover block"
        />
      </div>

      {/* TEXT */}
      <div className="mt-3 px-2">
        <p className="text-sm sm:text-base font-bold text-white leading-tight truncate">
          {nominee.name}
        </p>
        <p className="text-xs sm:text-sm text-[#8a94a8] mt-0.5 truncate">
          {nominee.category}
        </p>
      </div>
    </button>
  );
}
