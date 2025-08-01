import React, { useState } from 'react';

import IntroScreen from './components/screens/IntroScreen/IntroScreen';
import WishScreen from './components/screens/WishScreen/WishScreen';
import HintScreen from './components/screens/HintScreen/HintScreen';
import RevealScreen from './components/screens/RevealScreen';
import FinalScreen from './components/screens/FinalScreen';

import FullscreenWrapper from './components/ui/FullscreenWrapper';
import BackgroundEffect from './components/effects/BackgroundEffect';
import MusicPlayer from './components/audio/MusicPlayer';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, screens.length - 1));
  };

  const screens = [
    <IntroScreen onNext={nextStep} key="intro" />,
    <WishScreen onNext={nextStep} key="wish" />,
    <HintScreen onNext={nextStep} key="hint" />,
    <RevealScreen onNext={nextStep} key="reveal" />,
    <FinalScreen key="final" />
  ];

  return (
    <FullscreenWrapper>
      <BackgroundEffect />
      <MusicPlayer src="/assets/music/background.mp3" />
      {screens[currentStep]}
    </FullscreenWrapper>
  );
};

export default App;
