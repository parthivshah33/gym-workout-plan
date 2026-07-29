import { useState } from 'react';
import Header from './components/Header';
import TabBar from './components/TabBar';
import DayPanel from './components/DayPanel';
import ProgressPanel from './components/ProgressPanel';
import { workoutDays } from './data/workoutData';

export default function App() {
  const [activeTab, setActiveTab] = useState('push');

  const activeDay = workoutDays.find((d) => d.id === activeTab);

  return (
    <>
      <Header />
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="wrap">
        {activeTab === 'progress' ? (
          <ProgressPanel />
        ) : (
          activeDay && <DayPanel key={activeDay.id} day={activeDay} />
        )}
      </div>

      <footer>
        Static log · v2 React — logging &amp; auto-progression coming next
      </footer>
    </>
  );
}
