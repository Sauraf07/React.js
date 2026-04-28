import { useState, useRef, useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function TaskForm({ tasks, onSubmit, onUpdate, loading }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  
  // useRef: Auto-focus input on mount
  const inputRef = useRef(null)

  const isEdit = location.pathname.includes('/edit')
  const existingTask = isEdit ? tasks?.find(t => t.id === id) : null

  const [title, setTitle] = useState(existingTask?.title || '')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = title.trim()

    if (!trimmed) {
      toast.error('Task title cannot be empty!')
      return
    }

    setSubmitting(true)
    if (isEdit && existingTask) {
      onUpdate(existingTask.id, trimmed)
      toast.success('Task updated successfully!')
    } else {
      onSubmit(trimmed)
      toast.success('Task added successfully!')
    }
    setSubmitting(false)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="card p-4">
      <h3>{isEdit ? 'Edit Task' : 'Add New Task'}</h3>
      <div className="mb-3">
        <label className="form-label">Task Title</label>
        <input
          ref={inputRef} // useRef attached here
          type="text"
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter task..."
        />
      </div>
      <button type="submit" className="btn btn-success" disabled={loading || submitting || !title.trim()}>
        {submitting || loading ? 'Saving...' : (isEdit ? 'Update' : 'Add Task')}
      </button>
    </form>
  )
}