import { useState } from 'react'
import { toast } from 'react-toastify'

export default function Settings() {
  const [theme, setTheme] = useState('light')

  const saveSettings = () => {
    toast.info(`Settings saved: Theme = ${theme}`)
  }

  return (
    <div className="card p-4">
      <h3>Settings</h3>
      <div className="mb-3">
        <label className="form-label">Theme Preference</label>
        <select className="form-select" value={theme} onChange={e => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={saveSettings}>Save Preferences</button>
    </div>
  )
}