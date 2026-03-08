import { useState, useEffect } from "react"
import "./SettingsPanel.css"

export default function SettingsPanel({ onClose }) {
  const [settings, setSettings] = useState({
    headlineText: "🌸 Happy Women's Day 🌸",
    matrixColor: "#ff4da6",
    animationDensity: 1,
    floatingImages: [],
  })

  const handleHeadlineChange = (e) => {
    setSettings({ ...settings, headlineText: e.target.value })
  }

  const handleColorChange = (e) => {
    setSettings({ ...settings, matrixColor: e.target.value })
  }

  const handleDensityChange = (e) => {
    setSettings({ ...settings, animationDensity: parseFloat(e.target.value) })
  }

  const handleReset = () => {
    setSettings({
      headlineText: "🌸 Happy Women's Day 🌸",
      matrixColor: "#ff4da6",
      animationDensity: 1,
      floatingImages: [],
    })
  }

  // Load saved floating images from localStorage on mount
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("floatingImages") || "null")
      if (Array.isArray(saved) && saved.length) {
        setSettings((s) => ({ ...s, floatingImages: saved }))
      }
    } catch (e) {
      // ignore
    }
  }, [])

  const handleImagesUpload = async (e) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    const dataUrls = await Promise.all(
      files.map((file) =>
        new Promise((res, rej) => {
          const reader = new FileReader()
          reader.onload = () => res(reader.result)
          reader.onerror = rej
          reader.readAsDataURL(file)
        })
      )
    )

    const merged = [...(settings.floatingImages || []), ...dataUrls]
    setSettings((s) => ({ ...s, floatingImages: merged }))
    try {
      localStorage.setItem("floatingImages", JSON.stringify(merged))
    } catch (e) {
      console.warn("Failed to save images", e)
    }
  }

  const handleRemoveImage = (idx) => {
    const copy = [...(settings.floatingImages || [])]
    copy.splice(idx, 1)
    setSettings((s) => ({ ...s, floatingImages: copy }))
    try {
      localStorage.setItem("floatingImages", JSON.stringify(copy))
    } catch (e) {}
  }

  return (
    <div className="settings-panel-overlay" onClick={onClose}>
      <div className="settings-panel" onClick={(e) => e.stopPropagation()}>
        <button className="panel-close" onClick={onClose}>
          ✕
        </button>

        <h2 className="settings-title">⚙️ Settings</h2>

        <div className="settings-group">
          <label htmlFor="headline">
            <span>Headline Text</span>
            <input
              id="headline"
              type="text"
              value={settings.headlineText}
              onChange={handleHeadlineChange}
              placeholder="Enter headline..."
            />
          </label>
        </div>

        <div className="settings-group">
          <label htmlFor="matrixColor">
            <span>Matrix Rain Color</span>
            <div className="color-input-wrapper">
              <input
                id="matrixColor"
                type="color"
                value={settings.matrixColor}
                onChange={handleColorChange}
              />
              <span className="color-value">{settings.matrixColor}</span>
            </div>
          </label>
        </div>

        <div className="settings-group">
          <label htmlFor="floatingImagesUpload">
            <span>Upload Floating Images</span>
            <input
              id="floatingImagesUpload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImagesUpload}
            />
          </label>

          <div className="uploaded-previews">
            {(settings.floatingImages || []).map((src, i) => (
              <div className="preview-item" key={i}>
                <img src={src} alt={`uploaded-${i}`} />
                <button onClick={() => handleRemoveImage(i)}>Remove</button>
              </div>
            ))}
          </div>
        </div>

        <div className="settings-group">
          <label htmlFor="density">
            <span>Animation Density</span>
            <div className="slider-wrapper">
              <input
                id="density"
                type="range"
                min="0.5"
                max="2"
                step="0.5"
                value={settings.animationDensity}
                onChange={handleDensityChange}
              />
              <span className="slider-value">{settings.animationDensity}x</span>
            </div>
          </label>
        </div>

        <div className="settings-info">
          <p>💡 Settings are saved locally in your browser</p>
        </div>

        <div className="settings-actions">
          <button className="btn-reset" onClick={handleReset}>
            Reset to Default
          </button>
          <button className="btn-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
