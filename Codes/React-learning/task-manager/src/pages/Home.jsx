import { useState } from 'react'

export default function Home({ tasks, toggleComplete, deleteTask }) {
  const [filter, setFilter] = useState('all')

  const filteredTasks = tasks.filter(t => {
    if (filter === 'completed') return t.completed
    if (filter === 'active') return !t.completed
    return true
  })

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Tasks</h2>
        <select className="form-select w-auto" value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="alert alert-info">No tasks found.</div>
      ) : (
        <ul className="list-group">
          {filteredTasks.map(task => (
            <li key={task.id} className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'text-muted' : ''}`}>
              <div>
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
              </div>
              <button className="btn btn-sm btn-outline-danger" onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
