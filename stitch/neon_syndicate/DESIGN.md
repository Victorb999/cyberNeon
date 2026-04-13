# Design System Specification: The Kinetic Edge

## 1. Overview & Creative North Star
**Creative North Star: "The Neon Brutalist"**

This design system is engineered to break the monotony of the "safe" modern web. We are not building a generic dashboard; we are crafting a high-fidelity tactical interface. The aesthetic moves beyond simple Cyberpunk tropes into "High-End Technical Editorial"—combining the raw energy of underground tech-culture with the precision of premium digital craftsmanship.

The system rejects the "container-in-a-container" template look. Instead, it utilizes **intentional asymmetry, razor-sharp geometry, and tonal layering** to create a sense of depth that feels like a digital landscape rather than a flat page. We prioritize high contrast and "active" visual states to keep the user engaged in a high-tech narrative.

---

## 2. Colors & Surface Logic

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. To define boundaries, we use **Tonal Transitions**. A `surface-container-low` section sitting against a `surface` background provides all the separation necessary. We rely on color value shifts and internal shadows rather than structural lines to maintain a "seamless hardware" feel.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical, interlocking plates. 
- **Base Layer:** `surface` (#040f1d) – The foundation.
- **Structural Depressions:** `surface-container-lowest` (#000000) – Used for input wells or "carved out" content areas.
- **Elevated Plates:** `surface-bright` (#1b2d43) – Used for floating modules or critical interactive zones.

### The "Glass & Glow" Rule
To move beyond "flat" cyberpunk, use **Glassmorphism** for overlays and floating panels. Use semi-transparent `surface-variant` colors with a `backdrop-filter: blur(20px)`. 
**Signature Texture:** Apply a 1px "Inner Glow" using `primary` (#ff8b9d) at 30% opacity on the top and left edges of cards to simulate light-bleed from a neon source.

---

## 3. Typography: The Technical Editorial
Our typography is a collision of human-centric geometry and machine-readable precision.

*   **Display & Headlines (Space Grotesk):** This is our "Voice." Use `display-lg` and `headline-md` to command attention. Use tight letter-spacing (-0.02em) for a more aggressive, high-tech editorial feel.
*   **Body & Utility (Manrope):** This is our "Intelligence." Manrope provides high legibility for long-form data. 
*   **Monospace Accents:** Use `label-sm` in a monospace font (fallback: System Mono) for metadata, timestamps, and "system readouts" to reinforce the high-tech narrative.
*   **Case Styling:** Display and Labels should be set to `uppercase` with increased letter-spacing (0.1em) to mimic military and aerospace HUDs.

---

## 4. Elevation & Depth: Tonal Layering
We do not use "drop shadows" to create height; we use **Light Emission**.

*   **The Layering Principle:** Stacking `surface-container` tiers creates natural depth. An inner card should be `surface-container-high` placed upon a `surface-container-low` section.
*   **Ambient Glow:** For floating elements, use a "Bloom" effect instead of a shadow. Use the `surface_tint` (#ff8b9d) at 5% opacity with a blur of 40px to create an atmospheric glow around the component.
*   **The "Ghost Border" Fallback:** If containment is required for accessibility, use the `outline-variant` token at 15% opacity. Never use 100% opaque borders except for primary action states.
*   **Angled Cuts:** Instead of standard rectangles, use `clip-path` to create 45-degree "dog-ear" cuts on the corners of buttons and containers to reinforce the "edgy" brand personality.

---

## 5. Components

### Buttons: Tactical Actuators
*   **Primary:** Background `primary_dim` (#e70057), Text `on_primary_fixed` (#000000). Features a subtle glitch hover animation (2px horizontal shift).
*   **Secondary:** No background. `Ghost Border` (15% opacity `primary`). Text `primary`. On hover, the border opacity jumps to 100% with a `primary` outer glow.
*   **Tertiary:** Monospace font, uppercase, with a preceding "double-slash" (// ACTION).

### Input Fields: Data Ports
*   **State:** Background `surface-container-lowest`. No top or side borders; only a 2px bottom border using `outline`.
*   **Active State:** Bottom border shifts to `primary`. A faint `primary` gradient "washes" up from the bottom (5% opacity).

### Cards: Modular Units
*   **Requirement:** No dividers. Use `body-sm` typography headers in `secondary` color (#e2e7b0) to separate data sections. 
*   **Visual Interest:** Use a 2px tall "Accent Bar" of `secondary` color at the very top-left of a card to denote category.

### Additional Component: "The Data Fragment" (Chip)
*   Used for tags. Sharp 0px corners. Background `tertiary_container` at 20% opacity. Text is always Monospace `label-sm`.

---

## 6. Do's and Don'ts

### Do:
*   **Use Intentional Asymmetry:** Align a header to the left and a CTA to the far right with significant negative space between them.
*   **Embrace High Contrast:** Use `secondary` (#e2e7b0) text on `surface` backgrounds for maximum "HUD" readability.
*   **Subtle Glitch:** Use glitch effects only on non-functional elements (e.g., decorative icons or section headers) to avoid disrupting user flow.

### Don't:
*   **Don't use Border Radius:** This system is `0px` throughout. Roundness softens the "edgy" tech feel and is strictly forbidden.
*   **Don't use Grey:** If you need a neutral, use a tinted Navy (`outline`) or a Deep Blue (`surface-container`). Pure greys make the design look "dead" rather than "cybernetic."
*   **Don't Overuse Glow:** If everything glows, nothing is important. Reserve glows for active states and primary CTAs.