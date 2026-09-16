import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { progressData } from '../data/workoutData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

function MiniChart({ title, data, labels, color }) {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        borderColor: color,
        backgroundColor: color + '22',
        pointBackgroundColor: color,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        fill: true,
        tension: 0.35,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 800,
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e222a',
        borderColor: '#2a2f3a',
        borderWidth: 1,
        titleFont: { family: 'IBM Plex Mono', size: 11 },
        bodyFont: { family: 'IBM Plex Mono', size: 12 },
        padding: 8,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: { color: '#2a2f3a' },
        ticks: { color: '#8b9099', font: { family: 'IBM Plex Mono', size: 10 } },
      },
      y: {
        grid: { color: '#2a2f3a' },
        ticks: { color: '#8b9099', font: { family: 'IBM Plex Mono', size: 10 } },
      },
    },
  };

  return (
    <div className="chart-card">
      <h3>{title}</h3>
      <div style={{ height: 170 }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}

export default function ProgressPanel() {
  const { labels, kpis, charts, measurements, trainerNote } = progressData;

  return (
    <section className="day-panel">
      <div className="prog-head">
        <div className="day-tag" style={{ color: 'var(--steel)' }}>
          BMI · Body composition
        </div>
        <div className="prog-title">Weight &amp; measurements</div>
        <div className="sub">
          Latest weight 74 kg · estimated BMI ~24.5 · 05 Mar → 16 Sep 2026
        </div>
      </div>

      {/* ─── KPI Row ─── */}
      <div className="kpi-row">
        {kpis.map((kpi) => (
          <div className="kpi" key={kpi.label}>
            <div className="val">
              {kpi.value}
              <span className="val-unit">{kpi.unit}</span>
            </div>
            <div className={`delta delta--${kpi.direction}`}>{kpi.delta}</div>
            <div className="lbl">{kpi.label}</div>
          </div>
        ))}
      </div>

      {/* ─── Charts ─── */}
      {charts.map((c) => (
        <MiniChart
          key={c.title}
          title={c.title}
          data={c.data}
          labels={labels}
          color={c.color}
        />
      ))}

      {/* ─── Measurement Table ─── */}
      <div className="mtable-wrap">
        <table className="mtable">
          <thead>
            <tr>
              {measurements.headers.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {measurements.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ─── Trainer Note ─── */}
      <div className="trainer-note">{trainerNote}</div>
    </section>
  );
}
