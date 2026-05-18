const GenerateButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full mt-8 py-4 bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:from-fuchsia-500 hover:to-cyan-500 text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(192,38,211,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 transform active:scale-[0.98]"
    >
      Generate New Password
    </button>
  );
};

export default GenerateButton;
