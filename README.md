# 💝 Women's Day Gift - Dear Gift

A beautiful, interactive React + Vite web application to celebrate Women's Day with a special love letter, animated gallery, and romantic effects.

## 🌟 Features

- **Matrix Rain Animation**: Romantic "LOVE" text falling in the background
- **Floating Hearts**: 30 floating hearts with smooth animations
- **Music Player**: Toggle music on/off with play/pause button
- **Typing Text**: Rotating romantic messages with typewriter effect
- **Interactive Gallery**: Image slider with smooth transitions and dot navigation
- **Love Letter Modal**: Beautiful animated envelope that opens to reveal a heartfelt message
- **Confetti Effect**: Celebration confetti when opening the love letter
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- **Dark Theme**: Elegant dark background with pink gradient accents

## 🛠️ Tech Stack

- **React 19.2.0**: Modern UI library
- **Vite 7.3.1**: Lightning-fast build tool
- **Framer Motion**: Smooth animations
- **React Confetti**: Celebration effect
- **Typewriter Effect**: Text animation
- **React Slick**: Image carousel
- **TSParticles**: Particle effects

## 📦 Installation

1. **Clone or extract the project**:
```bash
cd love-gift
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run development server**:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## 🚀 Build & Deployment

**Build for production**:
```bash
npm run build
```

**Preview production build**:
```bash
npm run preview
```

## 📁 Project Structure

```
love-gift/
├── src/
│   ├── components/
│   │   ├── FloatingHearts.jsx       # Floating hearts animation
│   │   ├── FloatingHearts.css
│   │   ├── Gallery.jsx               # Image gallery slider
│   │   ├── Gallery.css
│   │   ├── LoveLetter.jsx            # Love letter modal
│   │   ├── LoveLetter.css
│   │   ├── MatrixRain.jsx            # Matrix rain effect
│   │   ├── MusicPlayer.jsx           # Music player
│   │   ├── MusicPlayer.css
│   │   ├── TypingText.jsx            # Typing text effect
│   │   └── TypingText.css
│   ├── App.jsx                       # Main app component
│   ├── App.css                       # App styling
│   ├── index.css                     # Global styles
│   └── main.jsx                      # Entry point
├── public/                           # Static assets
├── index.html                        # HTML template
├── vite.config.js                    # Vite configuration
├── package.json                      # Dependencies
└── README.md                         # This file
```

## 🎨 Color Scheme

- **Primary Color**: `#ff4da6` (Hot Pink)
- **Secondary Color**: `#ff69b4` (Light Pink)
- **Accent Color**: `#ff1493` (Deep Pink)
- **Background**: `#0a0a0a` (Almost Black)
- **Text**: `rgba(255, 255, 255, 0.87)` (White)

## 🌈 Customization

### Change the Love Letter Content

Edit `src/components/LoveLetter.jsx`:
- Replace the message text
- Modify the emoji
- Change the styling

### Customize Images

Replace images in `src/components/Gallery.jsx`:
```javascript
const images=[
  "your-image-url-1",
  "your-image-url-2",
  // ...
]
```

### Modify Typing Messages

Edit `src/components/TypingText.jsx`:
```javascript
strings:[
  "Your custom message ❤️",
  "Another message 💕",
  // ...
]
```

### Change Matrix Text

In `src/App.jsx`, modify the MatrixRain component:
```jsx
<MatrixRain text="YOUR TEXT"/>
```

### Update Music

In `src/components/MusicPlayer.jsx`, change the audio source:
```jsx
src="your-music-url"
```

## 🎯 Key Components

### FloatingHearts
Animates 30 heart emojis floating from bottom to top with random delays and durations.

### Gallery
Interactive image slider with:
- Previous/Next buttons
- Dot indicators
- Smooth scale animations
- Responsive grid

### LoveLetter
Beautiful modal with:
- Envelope animation on hover
- Click-to-open animation
- Confetti effect
- Scrollable content

### MatrixRain
Canvas-based animation displaying random letters with pink color and trail effect.

### MusicPlayer
Audio player with:
- Play/Pause toggle
- Visual feedback
- Song completion handling

### TypingText
Text animation with:
- Multiple rotating messages
- Typewriter effect
- Cursor blink animation

## 📱 Responsive Breakpoints

- **Mobile**: `max-width: 480px`
- **Tablet**: `max-width: 768px`
- **Desktop**: `max-width: 1024px`

## 🎉 Special Effects

- **Glowing animation**: Title text with pulsing glow
- **Bounce animation**: Envelope icon bounces
- **Float animation**: Hearts float upward
- **Fade-in animation**: Main elements fade in on load
- **Confetti**: Celebration confetti on letter open
- **Drop shadow**: Dynamic drop shadows on hover

## 🔧 Performance Tips

1. Images use Unsplash for fast loading
2. Canvas animations optimized for 60fps
3. CSS animations use `transform` and `opacity` for best performance
4. Event listeners are properly cleaned up

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License

This project is free to use and modify.

## 💌 Credits

Created with ❤️ for Women's Day

---

**Enjoy creating special moments! 💕**

