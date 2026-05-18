import { useState, useCallback, useEffect } from 'react';
import PasswordDisplay from './components/PasswordDisplay';
import LengthSlider from './components/LengthSlider';
import Checkbox from './components/Checkbox';
import GenerateButton from './components/GenerateButton';

const App = () => {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
    setIsCopied(false);
  }, [length, includeNumbers, includeSymbols]);

  // Generate initial password
  useEffect(() => {
    generatePassword();
  }, []);

  const copyToClipboard = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white p-4 font-sans selection:bg-fuchsia-500/30">
      <div className="w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 mb-8 text-center tracking-tight">
          Password Generator
        </h1>

        {/* Display */}
        <PasswordDisplay
          password={password}
          isCopied={isCopied}
          onCopy={copyToClipboard}
        />

        {/* Controls */}
        <div className="space-y-6">
          {/* Slider */}
          <LengthSlider
            length={length}
            onChange={setLength}
            min={4}
            max={30}
          />

          <div className="h-px w-full bg-white/5 my-6"></div>

          {/* Checkboxes */}
          <div className="space-y-4">
            <Checkbox
              label="Include Numbers (0-9)"
              checked={includeNumbers}
              onChange={setIncludeNumbers}
              color="fuchsia"
            />

            <Checkbox
              label="Include Symbols (!@#$%)"
              checked={includeSymbols}
              onChange={setIncludeSymbols}
              color="cyan"
            />
          </div>

          {/* Generate Button */}
          <GenerateButton onClick={generatePassword} />
        </div>
      </div>
    </div>
  );
};

export default App;

