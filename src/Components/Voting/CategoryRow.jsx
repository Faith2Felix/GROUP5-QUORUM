function CategoryRow({ label, img, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center  cursor-pointer w-[80px] shrink-0"
    >
      <div className=" w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-white/10 bg-white/5">
        <img
          src={img}
          alt={label}
          className=" w-full h-full object-cover"
        />
      </div>
      <p className="text-sm text-center text-[#8a94a8] leading-tight ">{label}</p>
    </div>
  );
}

export default CategoryRow;