# Aboubakar Sidik Faha - Portfolio Website Design

## Overview
- **Motion Style**: "Digital Fluidity" - Physics-based interactions with liquid 3D depth
- **Animation Intensity**: Ultra-Dynamic
- **Technology Stack**: GSAP (ScrollTrigger, Flip), WebGL (Three.js for subtle distortions), CSS Houdini

## Brand Foundation
- **Colors**:
    - **Primary Background**: #010304 (Deep void black)
    - **Primary Text**: #FFFFFF (Pure white)
    - **Secondary Text**: #FFFFFFB3 (70% opacity white)
    - **Border/Dividers**: #FFFFFF1A (10% opacity white)
    - **Accent Color**: #3B82F6 (Electric Blue - used sparingly for energy)
    - **Success States**: Green palette
- **Typography**:
    - **Display**: "Bdogrotesk" (400-900 weight)
    - **Monospace/Labels**: "Inconsolata" (400-700 weight)
- **Core Message**: Precision engineering meets fluid creativity.
- **Font URLs**:
    ```css
    /* Inconsolata */
    https://fonts.googleapis.com/css?family=Inconsolata:400,700
    ```
    (Bdogrotesk assumed to be local @font-face)

## Global Motion System

### Animation Timing
- **Easing Library**:
    - `fluid`: `cubic-bezier(0.19, 1, 0.22, 1)` (Luxurious, long tail)
    - `snap`: `cubic-bezier(0.87, 0, 0.13, 1)` (Aggressive, fast)
- **Duration Scale**:
    - Micro-interactions: 0.3s
    - Structural shifts: 0.8s - 1.2s
- **Stagger Patterns**: 0.05s per letter for text, 0.1s per element for grids

### Continuous Effects
- **Living Gradients**: Subtle noise-based shifts in border colors.
- **Micro-Parallax**: Text and images move at slightly different speeds (z-depth simulation).
- **Cursor Physics**: Magnetic attraction to interactive elements; custom cursor blends (difference mode).

### Scroll Engine
- **Velocity Reactivity**: Elements skew slightly based on scroll speed (max 5deg).
- **Pinning**: Section headers pin while content scrolls past.
- **Progress Tracking**: Reading lines for long text sections.

## Section 1: Hero

### Layout
**The "Dimensional Portal" Layout**
Breaking the standard 2-column grid, the hero uses a **layered depth composition**. The text floats in the foreground (z-index: 10), while the profile image acts as a "portal" in the mid-ground. The background is not black void but an **interactive fluid simulation** that reacts to mouse movement, creating ripples of very dark blue (#0a0f14).

#### Spatial Composition
- **Layer 1 (Back)**: WebGL Fluid Shader (React to mouse).
- **Layer 2 (Mid)**: Profile Image - positioned absolute, breaking container bounds on the right.
- **Layer 3 (Front)**: Typography - Massive, breaking words into lines that slide in from different X positions.
- **Layer 4 (UI)**: Navigation and social links floating on edges.

### Content
- **Headline**: "BUILDING DIGITAL EXPERIENCES"
- **Sub-headline**: "DevOps & Software Architecture"
- **Location**: "Abidjan, Ivory Coast"
- **Scroll Indicator**: "Scroll to explore"

### Images
**Hero Background Image**
- **Resolution**: High-Res
- **Aspect Ratio**: Portrait
- **Transparent Background**: **Yes** (Crucial for the layered effect)
- **Visual Style**: Professional portrait photography, black and white.
- **Subject**: Young adult male, 3/4 profile, confident.
- **Color Palette**: Monochrome.
- **Generation Prompt**: "A high-contrast black and white portrait photograph of a young adult male in profile view..."

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Background | Fluid Fade-In | Opacity 0->1 | 2.0s | 0s | linear |
| Headline Words | Split-Text Slide | Y: 100%->0% | 1.2s | 0.2s | fluid |
| Profile Image | Scale & Reveal | Scale: 1.2->1, Mask: 0->100% | 1.5s | 0.4s | fluid |
| UI Elements | Fade Slide | X: -20->0, Opacity 0->1 | 0.8s | 1.0s | fluid |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Profile Image | Parallax Y | Top | Bottom | Y: -100px |
| Scroll | Headline | Parallax Y | Top | Bottom | Y: -50px |
| Scroll | Profile Image | Scale | Top | Bottom | Scale: 1.0 -> 1.1 |

#### Continuous Animations
- **Fluid Background**: Constant slow morphing of noise patterns.
- **Image Hover**: Slight "breathing" scale (1.0 -> 1.02) over 6s.

#### Interaction Effects
- **Mouse Move**: Fluid simulation ripples originate from cursor.
- **Text Hover**: Letters have "weight" - they push slightly away from cursor (magnetic repulsion).

### Advanced Effects
#### Shader Effects
- **Fluid Simulation**: A dark, viscous fluid simulation in the background using the Primary Background color mixed with very dark blues. It adds life without distracting.

---

## Section 2: Logo Ecosystem (Infinite Flow)

### Layout
**The "Cylindrical" Marquee**
Instead of a flat horizontal scroll, the logos appear to rotate around a massive invisible cylinder in 3D space. This gives a feeling of an endless, looping ecosystem.

### Content
- **Heading**: "TRUSTED BY INNOVATORS"
- **Logos**: [7 Client Logos]

### Motion Choreography
#### Scroll Effects
- **Velocity Control**: Scroll speed adds velocity to the marquee rotation. Scrolling down speeds it up; scrolling up reverses it.

#### Continuous Animations
- **Infinite Rotation**: The cylinder rotates continuously.
- **Fade Edges**: Gradient masks on left/right to smooth entrance/exit.

---

## Section 3: About (The Deconstructed Grid)

### Layout
**Broken Grid & Parallax Columns**
The rigid 3-column layout is exploded. The 6 cards are treated as "floating debris" in a zero-gravity environment.
- **Column 1**: Moves at speed 1.0 (Normal)
- **Column 2**: Moves at speed 1.2 (Fast)
- **Column 3**: Moves at speed 0.9 (Slow)
This creates massive depth and interest as the user scrolls.

### Content
- **Heading**: "DIGITAL INNOVATOR & SOLUTIONS ARCHITECT"
- **Cards**: Innovation, Collaboration, Development, AI/ML, Strategy, Excellence.

### Motion Choreography
#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Viewport | Column 2 | TranslateY | Enter | Leave | -150px (relative) |
| Viewport | Column 3 | TranslateY | Enter | Leave | +100px (relative) |
| Viewport | Cards | 3D Rotation | Enter | Center | RotateX: 10deg -> 0deg |

#### Interaction Effects
- **Card Hover**: **"Glass Refraction"**. The white border (#FFFFFF1A) glows brighter (#FFFFFF40), and the card tilts 3D towards the mouse (perspective: 1000px). The "Plus" icon spins 90deg and scales up.

---

## Section 4: Video Experience (Cinema Mode)

### Layout
**The "Focus" Transition**
The video section starts as a small, centered box. As it enters the viewport, it expands to fill 95% of the screen width (Cinema mode). The surrounding interface dims to focus attention on the play button.

### Content
- **Video**: Background video loop.
- **Play Button**: Magnetic circular trigger.

### Motion Choreography
#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Viewport | Video Container | Width | Enter | Center | 60% -> 95% |
| Viewport | Video Container | Border Radius | Enter | Center | 40px -> 0px |

#### Interaction Effects
- **Play Button**: Magnetic pull (moves towards cursor within 50px radius). On click, the button expands circularly to fill the screen (transition to video overlay).

---

## Section 5: Services (Holographic Accordion)

### Layout
**Interactive List with Depth**
A vertical stack where inactive items are dimmed and slightly scaled down. The active/hovered item expands, revealing details and a preview image that **follows the cursor** within the item bounds.

### Content
- **Heading**: "PREMIUM SERVICES"
- **Items**: Web Development, Cloud Architecture, AI Solutions, DevOps Automation.

### Images
**Service Preview Images**
- **Resolution**: 300x200px
- **Transparent Background**: **No**
- **Visual Style**: Abstract digital art.

### Motion Choreography
#### Interaction Effects
- **Hover**:
    - Text slides x: 20px.
    - Number opacity drops to 0.3.
    - A "ghost" image appears floating near the cursor (blends with difference mode).
    - Border-bottom color animates from left to right (Blue accent).

#### Scroll Effects
- **Staggered Reveal**: Each service item slides up with a 0.1s delay between them.

---

## Section 6: Projects (The Distortion Gallery)

### Layout
**WebGL Distortion Slider**
The 2-column grid is reimagined. The large project images are rendered on a WebGL canvas.
- **Hover**: Instead of a simple scale, the image undergoes a **liquid displacement** effect (using a noise map) at the cursor position.
- **Cursor**: Becomes a "View Case" magnetic circle when hovering any project.

### Content
- **Heading**: "SELECTED WORKS"
- **Projects**: 4 Featured Projects.

### Images
**Project Images**
- **Resolution**: 1000x1000px
- **Transparent Background**: **No**
- **Visual Style**: App mockups on devices.

### Motion Choreography
#### Interaction Effects
- **Image Hover**:
    - RGB Split effect (Chromatic Aberration) on the edges of the image.
    - Liquid distortion at cursor point.
    - Project title underlines itself with the accent color.

#### Scroll Effects
- **Parallax Images**: The image inside the container moves slightly slower than the container itself (overflow: hidden).

---

## Section 7: Testimonials (Orbital Voices)

### Layout
**The "Planet" System**
The 5 testimonials are not a flat slider. They are arranged on a large invisible wheel (3D carousel). The active testimonial is front and center, large and opaque. The others fade into the background and blur.

### Content
- **Heading**: "CLIENT VOICES"
- **Testimonials**: 5 Reviews.

### Motion Choreography
#### Continuous Animations
- **Auto-Rotation**: The wheel slowly rotates (20s per revolution).
- **Drag Interaction**: User can grab and spin the wheel. Physics-based inertia applies.

#### Interaction Effects
- **Active Slide**: Scale 1.0, Opacity 1.0, Blur 0px.
- **Inactive Slide**: Scale 0.8, Opacity 0.5, Blur 4px.

---

## Section 8: CTA (The Event Horizon)

### Layout
**Singularity Focus**
A massive, screen-filling section. The background is a deep void, but the center holds a "gravity well"—a subtle radial gradient that pulses.
The two info boxes (24h Response, NDA) float in the lower corners, tethered by thin animated lines to the central action.

### Content
- **Heading**: "READY TO START?"
- **Button**: "Schedule a Call"
- **Details**: Response time, NDA assurance.

### Motion Choreography
#### Scroll Effects
- **Heading Reveal**: "READY TO START?" scales up from 0.5 to 1.0 and fades in.

#### Interaction Effects
- **Button Hover**: The button creates a "warp speed" particle effect—small dots shooting outward from the center.
- **Magnetic Button**: Strong magnetic pull towards cursor.

---

## Technical Implementation Notes

### Required Libraries
- **GSAP**: Core timeline management and ScrollTrigger.
- **Three.js**: For the Hero fluid simulation and Project image displacement.
- **Lenis**: For smooth scroll inertia (essential for the parallax effects).

### Critical Performance Rules
- ✅ **Use transform3d()**: Force hardware acceleration for all moving cards.
- ✅ **WebGL Canvas**: Single full-screen canvas in background with `pointer-events: none` where possible to minimize contexts.
- ✅ **Texture Reuse**: Load project images once as textures for WebGL.
- ❌ **No Layout Thrashing**: Read layout values once, write style updates in RAF.
- ❌ **Limit Blurs**: Backdrop-filter is expensive; use opacity layering instead where possible.

### Browser Support
- **Progressive Enhancement**:
    - **High-End**: Full WebGL fluid and distortion effects.
    - **Low-Power/Mobile**: CSS-only gradients, static images, simplified parallax.
    - **Reduced Motion**: Instant fades, no parallax, no continuous rotation.

---

## Enhancement Rules Applied
1.  **Hero Impact**: WebGL fluid background replaces static black.
2.  **Content Adapts**: Typography broken for dramatic entrance.
3.  **Transform Boldly**: "Cylinder" marquee, "Orbital" testimonials.
4.  **Animate Dramatically**: Split-text, liquid distortion, 3D card tilts.
5.  **Asset Preservation**: All original images and fonts utilized.
6.  **Brand Soul**: Dark, minimal, engineering-precision aesthetic maintained but elevated to immersive.
