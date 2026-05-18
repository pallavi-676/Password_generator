const Checkbox = ({ label, checked, onChange, color = 'fuchsia' }) => {
  const activeColorClasses = {
    fuchsia: 'checked:bg-fuchsia-500 checked:border-fuchsia-500',
    cyan: 'checked:bg-cyan-500 checked:border-cyan-500',
  };

  const selectedColorClass = activeColorClasses[color] || activeColorClasses.fuchsia;

  return (
    <label className="flex items-center space-x-3 cursor-pointer group">
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className={`peer appearance-none w-6 h-6 border-2 border-zinc-600 rounded-lg transition-all cursor-pointer ${selectedColorClass}`}
        />
        <svg
          className="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-zinc-300 group-hover:text-white transition-colors">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
