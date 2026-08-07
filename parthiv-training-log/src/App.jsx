import { useState } from 'react';
import Header from './components/Header';
import TabBar from './components/TabBar';
import DayPanel from './components/DayPanel';
import ProgressPanel from './components/ProgressPanel';
import VideoModal from './components/VideoModal';
import { workoutDays } from './data/workoutData';

export default function App() {
  const [activeTab, setActiveTab] = useState('back-biceps');
  const [activeVideo, setActiveVideo] = useState(null); // { videoId, title }

  const activeDay = workoutDays.find((d) => d.id === activeTab);

  const handleVideoOpen = (video) => setActiveVideo(video);
  const handleVideoClose = () => setActiveVideo(null);

  return (
    <>
      <Header />
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="wrap">
        {activeTab === 'progress' ? (
          <ProgressPanel />
        ) : (
          activeDay && (
            <DayPanel
              key={activeDay.id}
              day={activeDay}
              onVideoOpen={handleVideoOpen}
            />
          )
        )}
      </div>

      <footer>
        Star 11 Gym · Plan: Fitness Basic · 06 Mar – 01 Sep 2026
      </footer>

      {/* Video modal rendered at root level so it overlays everything */}
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
