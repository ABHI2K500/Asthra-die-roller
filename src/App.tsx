import React, { useState, useEffect } from 'react';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';

function App() {
  const [isRolling, setIsRolling] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const diceIcons = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  const rollDice = () => {
    if (isRolling) return;

    setIsRolling(true);
    setShowResult(false);
    setResult(null);

    // Simulate rolling animation duration
    setTimeout(() => {
      const newResult = Math.floor(Math.random() * 6) + 1;
      setResult(newResult);
      setIsRolling(false);
      
      // Show result popup with slight delay
      setTimeout(() => {
        setShowResult(true);
      }, 200);
    }, 2000);
  };

  const DiceIcon = result ? diceIcons[result - 1] : Dice1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Header with Logo */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <svg width="280" height="120" viewBox="0 0 351 153" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-2xl">
              <path d="M152.872 22.8343C167.392 18.1086 174.777 10.4274 175.497 0.0662231V123.872H172.75V22.8343H152.872Z" fill="white" stroke="white" strokeWidth="0.131989"/>
              <path d="M66.689 138.787H149.668" stroke="white" strokeWidth="0.923923" strokeLinecap="round"/>
              <path d="M136.852 73.3857V61.7707C149.668 64.2785 168.304 57.679 169.219 49.8257C170.119 55.3661 171.181 57.613 175.235 58.009V73.3857H136.852Z" fill="white" stroke="white" strokeWidth="0.131989" strokeLinecap="round"/>
              <path d="M158.626 80.3808H164.576V97.8033C166.94 98.886 168.616 99.2672 171.965 99.7172C168.854 100.107 167.252 100.565 164.576 101.697V118.988H158.626V80.3808Z" fill="white"/>
              <path d="M164.576 97.8033V80.3808H158.626V118.988H164.576V101.697M164.576 97.8033C166.94 98.886 168.616 99.2672 171.965 99.7172C168.854 100.107 167.252 100.565 164.576 101.697M164.576 97.8033V101.697" stroke="white" strokeWidth="0.131989"/>
              <path d="M156.86 99.9157C140.775 105.459 131.489 84.869 150.125 80.7113C141.102 78.6655 131.555 87.6407 136.524 97.8039L135.217 99.1238C150.975 96.814 155.749 114.698 140.121 117.866C149.733 121.562 160.391 112.653 155.749 101.368L156.86 99.9157Z" fill="white" stroke="white" strokeWidth="0.131989"/>
              <path d="M154.506 50.4196C155.2 50.5254 155.463 50.6613 155.749 51.0135C153.643 52.7995 148.033 53.9833 138.878 53.9833C137.979 53.7743 137.878 53.0172 138.486 50.4196C141.479 38.2229 145.156 30.8192 151.629 25.0777C152.864 23.9823 154.388 23.9655 155.945 24.2858C159.214 25.4737 163.399 28.5094 165.23 33.459C166.342 39.5305 157.58 48.1758 147.902 45.8C145.981 45.4484 147.313 43.4902 151.171 37.0227C152.664 35.0846 153.371 34.2678 155.16 33.2611C155.945 32.8651 156.468 33.1951 156.468 34.449V37.4847C156.431 37.8755 156.32 37.9955 155.945 38.0127H154.376C151.237 38.9366 150.256 43.8862 151.041 43.8202C157.58 44.0842 163.072 39.0686 162.549 33.789C162.451 32.7991 157.841 28.4435 155.422 28.1795C151.629 27.3876 144.829 37.8807 142.867 48.6377C144.447 50.5554 148.49 51.1455 154.506 50.4196Z" fill="white"/>
              <path d="M53.3235 119.846C40.6526 135.223 19.2044 147.696 0 146.508C27.7837 132.913 36.033 124.136 45.4042 101.896C58.6732 75.7696 69.345 65.7214 94.0421 57.0194L124.202 49.1664C128.827 48.9271 129.877 50.6179 129.877 52.4662V125.06H76.4876L112.982 108.297V72.0001C89.0265 65.1371 57.4152 93.1188 53.3235 119.846Z" fill="white"/>
              <path d="M198.121 22.7681C183.601 18.0424 176.216 10.3611 175.497 0V123.806H178.243V22.7681H198.121Z" fill="white" stroke="white" strokeWidth="0.131989"/>
              <path d="M284.303 138.72H201.325" stroke="white" strokeWidth="0.923923" strokeLinecap="round"/>
              <path d="M214.142 73.32V61.705C201.325 64.2128 182.689 57.6133 181.774 49.76C180.875 55.3004 179.812 57.5474 175.758 57.9433V73.32H214.142Z" fill="white" stroke="white" strokeWidth="0.131989" strokeLinecap="round"/>
              <path d="M192.366 80.3151H186.416V97.7377C184.053 98.8203 182.376 99.2016 179.027 99.6515C182.138 100.041 183.74 100.499 186.416 101.631V118.922H192.366V80.3151Z" fill="white"/>
              <path d="M186.416 97.7377V80.3151H192.366V118.922H186.416V101.631M186.416 97.7377C184.053 98.8203 182.376 99.2016 179.027 99.6515C182.138 100.041 183.74 100.499 186.416 101.631M186.416 97.7377V101.631" stroke="white" strokeWidth="0.131989"/>
              <path d="M194.133 99.8498C210.219 105.393 219.504 84.803 200.868 80.6454C209.892 78.5996 219.438 87.5748 214.469 97.738L215.777 99.0579C200.018 96.7481 195.244 114.633 210.872 117.8C201.26 121.496 190.602 112.587 195.244 101.302L194.133 99.8498Z" fill="white" stroke="white" strokeWidth="0.131989"/>
              <path d="M196.486 50.3536C195.792 50.4595 195.529 50.5954 195.244 50.9476C197.349 52.7336 202.959 53.9173 212.114 53.9173C213.013 53.7084 213.114 52.9513 212.506 50.3536C209.513 38.157 205.837 30.7533 199.363 25.0117C198.128 23.9164 196.604 23.8996 195.047 24.2199C191.778 25.4078 187.593 28.4435 185.762 33.3931C184.65 39.4646 193.413 48.1099 203.09 45.7341C205.011 45.3825 203.679 43.4243 199.821 36.9568C198.328 35.0187 197.621 34.2019 195.832 33.1951C195.047 32.7992 194.524 33.1291 194.524 34.383V37.4188C194.561 37.8096 194.672 37.9295 195.047 37.9467H196.617C199.755 38.8707 200.736 43.8202 199.952 43.7543C193.413 44.0182 187.92 39.0027 188.443 33.7231C188.541 32.7332 193.151 28.3775 195.57 28.1136C199.363 27.3216 206.163 37.8148 208.125 48.5718C206.545 50.4894 202.502 51.0796 196.486 50.3536Z" fill="white"/>
              <path d="M297.676 119.78C310.347 135.157 331.796 147.63 351 146.442C323.216 132.847 314.967 124.07 305.596 101.829C292.327 75.7034 281.655 65.6552 256.958 56.9532L226.798 49.1003C222.173 48.861 221.123 50.5518 221.123 52.4V124.994H274.512L238.017 108.231V71.9339C261.973 65.0709 293.585 93.0527 297.676 119.78Z" fill="white"/>
              <path d="M158.198 146.328V134.768H154.45V132.592C156.933 132.495 158.327 131.512 158.633 129.641H161.511V146.328H158.198ZM170.909 146.715C168.797 146.715 167.112 145.933 165.855 144.369C164.613 142.805 163.993 140.701 163.993 138.057C163.993 135.413 164.621 133.309 165.879 131.745C167.136 130.181 168.821 129.4 170.933 129.4C173.061 129.4 174.738 130.181 175.963 131.745C177.205 133.293 177.825 135.397 177.825 138.057C177.825 140.701 177.205 142.805 175.963 144.369C174.738 145.933 173.053 146.715 170.909 146.715ZM170.933 143.91C173.239 143.91 174.391 141.959 174.391 138.057C174.391 136.219 174.109 134.784 173.545 133.753C172.981 132.721 172.11 132.205 170.933 132.205C169.74 132.205 168.853 132.721 168.273 133.753C167.709 134.784 167.427 136.219 167.427 138.057C167.427 139.895 167.709 141.33 168.273 142.362C168.853 143.394 169.74 143.91 170.933 143.91ZM178.945 146.328V142.821H182.476V146.328H178.945ZM190.511 146.715C188.399 146.715 186.714 145.933 185.456 144.369C184.215 142.805 183.594 140.701 183.594 138.057C183.594 135.413 184.223 133.309 185.481 131.745C186.738 130.181 188.423 129.4 190.535 129.4C192.663 129.4 194.34 130.181 195.565 131.745C196.806 133.293 197.427 135.397 197.427 138.057C197.427 140.701 196.806 142.805 195.565 144.369C194.34 145.933 192.655 146.715 190.511 146.715ZM190.535 143.91C192.84 143.91 193.993 141.959 193.993 138.057C193.993 136.219 193.711 134.784 193.147 133.753C192.582 132.721 191.712 132.205 190.535 132.205C189.342 132.205 188.455 132.721 187.875 133.753C187.31 134.784 187.028 136.219 187.028 138.057C187.028 139.895 187.31 141.33 187.875 142.362C188.455 143.394 189.342 143.91 190.535 143.91Z" fill="white"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Die Roller</h1>
          <p className="text-blue-200 text-lg">Roll the dice and test your luck!</p>
        </div>

        {/* Die Container */}
        <div className="mb-12">
          <div className={`relative transition-all duration-300 ${isRolling ? 'animate-bounce' : ''}`}>
            <div className={`w-32 h-32 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-105 ${
              isRolling ? 'animate-spin' : ''
            } ${result && !isRolling ? 'scale-110' : ''}`}>
              <DiceIcon 
                size={64} 
                className={`text-gray-800 transition-all duration-300 ${
                  isRolling ? 'opacity-50' : 'opacity-100'
                }`} 
              />
            </div>
          </div>
        </div>

        {/* Roll Button */}
        <button
          onClick={rollDice}
          disabled={isRolling}
          className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform ${
            isRolling
              ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl'
          } focus:outline-none focus:ring-4 focus:ring-blue-300/50`}
        >
          {isRolling ? 'Rolling...' : 'Roll Dice'}
        </button>

        {/* Result Popup */}
        {showResult && result && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300">
            <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm mx-4 transform animate-in zoom-in-95 duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <DiceIcon size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">You rolled a</h3>
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                  {result}
                </p>
                <button
                  onClick={() => setShowResult(false)}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="absolute bottom-6 text-center">
          <p className="text-blue-200 text-sm">
            Powered by <span className="font-semibold">ASTHRA 10.0</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;