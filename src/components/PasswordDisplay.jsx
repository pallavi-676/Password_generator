const PasswordDisplay = ({ password, isCopied, onCopy }) => {
  return (
    <div className="relative group mb-8">
      <input
        type="text"
        value={password}
        readOnly
        placeholder="Password will appear here"
        className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-6 pr-16 text-xl tracking-wider text-cyan-50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 transition-all font-mono placeholder-zinc-600"
      />
      <button
        onClick={onCopy}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-xl transition-colors duration-200"
        title="Copy to clipboard"
      >
        {isCopied ? (
          <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default PasswordDisplay;
