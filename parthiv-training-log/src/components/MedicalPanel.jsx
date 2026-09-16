import { labReports } from '../data/medicalData';

function statusLabel(status) {
  if (status === 'low') return 'Low';
  if (status === 'high') return 'High';
  return 'In range';
}

export default function MedicalPanel() {
  const latest = labReports[0];

  return (
    <section className="day-panel">
      <div className="prog-head">
        <div className="day-tag" style={{ color: 'var(--upper)' }}>
          Labs · {latest.date}
        </div>
        <div className="prog-title">Medical track</div>
        <div className="sub">
          {latest.patient} · {latest.type} · Report {latest.reportId} · {latest.referredBy}
        </div>
      </div>

      <div className="lab-summary">{latest.summary}</div>

      <div className="lab-overview">
        <div className="lab-overview-heading">What this means in simple language</div>
        {latest.overview.map((item) => (
          <div className={`lab-overview-item lab-overview-item--${item.tone}`} key={item.title}>
            <div className="lab-overview-title">{item.title}</div>
            <div className="lab-overview-text">{item.text}</div>
          </div>
        ))}
      </div>

      <div className="kpi-row">
        {latest.flags.map((flag) => (
          <div className="kpi kpi--flag" key={flag.label}>
            <div className="val val--flag">{flag.label}</div>
            <div className="delta delta--down">{flag.detail}</div>
            <div className="lbl">Outside lab range</div>
          </div>
        ))}
      </div>

      <div className="lab-screens">
        {latest.screens.map((item) => (
          <div className="lab-screen" key={item.label}>
            <span className="lab-screen-label">{item.label}</span>
            <span className="lab-screen-value">{item.value}</span>
          </div>
        ))}
      </div>

      {latest.groups.map((group) => (
        <div className="mtable-wrap" key={group.title}>
          <div className="lab-group-title">{group.title}</div>
          <table className="mtable lab-table">
            <thead>
              <tr>
                <th>Test</th>
                <th>Result</th>
                <th>Reference</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {group.rows.map((row) => (
                <tr key={row.name} className={row.status !== 'ok' ? 'lab-row--flag' : undefined}>
                  <td>{row.name}</td>
                  <td>
                    {row.value} {row.unit}
                  </td>
                  <td>{row.ref}</td>
                  <td>
                    <span className={`lab-status lab-status--${row.status}`}>
                      {statusLabel(row.status)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <div className="trainer-note">
        This is a plain-language summary, not a diagnosis. Discuss the flagged white-cell
        percentages with a doctor, especially if you feel unwell, have persistent fever,
        unusual fatigue, breathing problems, or worsening symptoms.
      </div>
    </section>
  );
}
