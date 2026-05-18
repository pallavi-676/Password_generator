const LengthSlider = ({ length, onChange, min = 4, max = 30 }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center text-sm font-medium text-zinc-300">
        <label htmlFor="length-slider">Character Length</label>
        <span className="text-xl text-fuchsia-400 font-bold">{length}</span>
      </div>
      <input
        id="length-slider"
        type="range"
        min={min}
        max={max}
        value={length}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-fuchsia-500"
      />
    </div>
  );
};

export default LengthSlider;
