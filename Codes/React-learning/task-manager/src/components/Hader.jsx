function Hader({ totalTasks, completedTasks, pendingTasks }) {
  return (
    <header className="task-hero">
      <div className="task-hero__glow task-hero__glow--one" />
      <div className="task-hero__glow task-hero__glow--two" />

      <div className="task-hero__content">
        <div className="task-hero__badge">Plan smarter. Finish stronger.</div>

        <div className="task-hero__text">
          <p className="task-hero__eyebrow">Daily productivity dashboard</p>
          <h1 className="task-hero__title">Task Manager</h1>
          <p className="task-hero__subtitle">
            Organize your day, track progress at a glance, and keep momentum
            with a clean workspace built for focused work.
          </p>
        </div>

        <div className="task-hero__stats" aria-label="Task summary">
          <div className="task-hero__stat-card">
            <span className="task-hero__stat-label">Total</span>
            <strong className="task-hero__stat-value">{totalTasks}</strong>
          </div>
          <div className="task-hero__stat-card">
            <span className="task-hero__stat-label">Completed</span>
            <strong className="task-hero__stat-value">{completedTasks}</strong>
          </div>
          <div className="task-hero__stat-card">
            <span className="task-hero__stat-label">Pending</span>
            <strong className="task-hero__stat-value">{pendingTasks}</strong>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hader;
