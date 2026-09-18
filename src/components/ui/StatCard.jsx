export default function StatCard({ value, label, accent = false }) {
  return (
    <div className={`stat-card${accent ? ' stat-accent' : ''}`}>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}