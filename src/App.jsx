import React, { useState } from 'react';

function App() {
  const colorPalettes = [
    { name: 'Sky Blue', color: 'bg-sky-500' },
    { name: 'Emerald', color: 'bg-emerald-500' },
    { name: 'Amber', color: 'bg-amber-500' },
    { name: 'Fuchsia', color: 'bg-fuchsia-500' },
    { name: 'Slate', color: 'bg-slate-700' },
    { name: 'Rose', color: 'bg-rose-400' },
    { name: 'Lime', color: 'bg-lime-500' },
  ];
  
  const [bgColor, setBgColor] = useState('bg-white');

  return (
    <div className={`min-h-screen ${bgColor} flex flex-col items-center justify-center transition-colors duration-500`}>
      <h1 className="text-3xl font-bold text-white mb-8">Color Palette Switcher</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {colorPalettes.map((palette) => (
          <button
            key={palette.name}
            onClick={() => setBgColor(palette.color)}
            className={`w-20 h-20 rounded-full cursor-pointer border-4 border-white ${palette.color}`}
            title={palette.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
