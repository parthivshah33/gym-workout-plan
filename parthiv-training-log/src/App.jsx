import { useState } from 'react';
import Header from './components/Header';
import TabBar from './components/TabBar';
import DayPanel from './components/DayPanel';
import ProgressPanel from './components/ProgressPanel';
import MedicalPanel from './components/MedicalPanel';
import VideoModal from './components/VideoModal';
import { workoutDays } from './data/workoutData';

export default function App() {
  const [activeTab, setActiveTab] = useState('back-biceps');
  const [activeVideo, setActiveVideo] = useState(null);

  const activeDay = workoutDays.find((d) => d.id === activeTab);

  const handleVideoOpen = (video) => setActiveVideo(video);
  const handleVideoClose = () => setActiveVideo(null);

  let panel = null;
  if (activeTab === 'progress') {
    panel = <ProgressPanel />;
  } else if (activeTab === 'labs') {
    panel = <MedicalPanel />;
  } else if (activeDay) {
    panel = (
      <DayPanel
        key={activeDay.id}
        day={activeDay}
        onVideoOpen={handleVideoOpen}
      />
    );
  }

  return (
    <>
      <Header />
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="wrap">{panel}</div>

      <footer>
        Gym · BMI · Labs · Personal analysis
      </footer>

      {activeVideo && (
        <VideoModal
          videoId={activeVideo.videoId}
          title={activeVideo.title}
          onClose={handleVideoClose}
        />
      )}
    </>
  );
}
