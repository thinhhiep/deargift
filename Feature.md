Design and build an interactive romantic single-page website that acts as a digital love gift.

The page should be visually immersive and emotionally engaging.

INTRO SCREEN

Before the main website appears, show an intro screen.

Center text:
"Press and Hold to Start"

INTERACTION

The user must press and hold the button for 2 seconds.

When the user starts holding:
- a circular progress indicator fills up
- the button glow increases

If the user releases early:
- progress resets.

When the hold reaches 100%:
- intro screen fades out
- background music starts
- matrix rain animation begins
- hero section fades in

STYLE

Dark theme background
Neon pink and purple color palette
Glowing romantic aesthetic
Soft particles and animations

LAYOUT

Top Bar
- music play button
- settings icon

Hero Section (center screen)
- large glowing headline
- typing text animation
- button "Open Letter"

BACKGROUND ANIMATION

Matrix rain effect using HTML canvas.

Animation behavior:
- random characters such as LOVE, hearts, or custom letters
- vertical falling columns
- fade trail effect
- full screen background layer
- medium speed animation

FLOATING ELEMENTS

Floating images and heart icons.

Animation behavior:
- start from bottom of screen
- float upward
- random horizontal position
- random delay
- loop infinitely
- duration between 10 and 20 seconds

TYPING TEXT ANIMATION

Typing animation in the hero section.

Behavior:
- type character by character
- pause at the end
- delete text
- type the next sentence
- loop between multiple romantic sentences

HEADLINE ANIMATION

Large glowing headline.

Effects:
- soft glow
- text shadow
- slow pulse animation

BUTTON INTERACTION

Open Letter button should include:

hover animation:
- scale up slightly
- glow effect

click event:
- open modal letter

LETTER MODAL

When the user clicks the button:

animation timeline:
1 overlay fades in
2 letter modal scales up
3 confetti animation triggers

Letter design:
- romantic paper card style
- rounded corners
- elegant typography

CONFETTI ANIMATION

Confetti particles appear when the letter opens.

Behavior:
- burst from center
- fall down
- disappear after 3 seconds

MUSIC INTERACTION

Top corner music button.

Behavior:
- click to play background music
- toggle play / pause
- optional animated icon

SETTINGS PANEL

Settings panel opens from the right side.

Animation:
- slide in panel

Settings options:
- change headline text
- change typing messages
- upload background music
- upload floating images
- change matrix rain color
- change animation density

ANIMATION ARCHITECTURE

Layer system:

Layer 1: matrix rain background
Layer 2: floating hearts and images
Layer 3: hero text content
Layer 4: modal and confetti

TECH STACK

React + Vite
HTML Canvas for matrix rain
CSS animations for floating elements
JavaScript event system
LocalStorage for saving settings

UX GOALS

Create an emotional storytelling experience.

The website should feel like a digital romantic gift where the user discovers the message through animations and interaction.

RESPONSIVE

The layout should work on desktop and mobile.

OUTPUT

Generate:
- component structure
- animation logic
- interaction event flow
- CSS animation code