import Icon from '../Icon.jsx';

export default function Callout({ title, icon = 'info', tone = 'info', children }) {
  return (
    <aside className={`callout callout-${tone}`}>
      <span className="callout-icon">
        <Icon name={icon} size={20} />
      </span>
      <div className="callout-body">
        {title && <p className="callout-title">{title}</p>}
        {children}
      </div>
    </aside>
  );
}