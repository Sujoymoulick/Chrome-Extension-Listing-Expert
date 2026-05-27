# Chrome Web Store Listing & Branding Guidelines

## Text Resources

### Item Title
- **Goal**: Accurately reflect core function.
- **Do**: Clear, descriptive, concise, unique.
- **Don't**: Keyword stuffing. **No Google trademarks** (e.g., "Chrome", "Google") without written permission. Confusingly similar marks are also prohibited.
- **Style**: Brief and memorable.

### Item Summary
- **Limit**: 132 characters or less.
- **Usage**: Seen in homepage, category pages, search results.
- **Do**: Highlight features resonating with audience use cases.
- **Don't**: Generic descriptions ("best ever"), superlatives ("greatest", "fastest"), competitor references.

### Item Description
- **Format**: Overview paragraph + short list of main features.
- **Content**: In-depth overview of features and capabilities.
- **Do**: Focus on keywords representing important features.
- **Don't**: Repetitive or irrelevant keyword stuffing (spam).
- **Trademarks**: Use "for", "for use with", or "compatible with" when referencing Google products (e.g., "compatible with Google Chrome™").
- **Attribution**: Include proper attribution at the bottom if using trademarks (e.g., "Google Maps is a trademark of Google LLC...").

## Graphical Assets

### Extension Icon
- **Dimensions**: 128x128 pixels (PNG format).
- **Artwork Size**: 96x96 pixels (square) or 112 diameter (circle).
- **Padding**: 16 pixels of transparent padding per side.
- **Perspective**: Front-facing only; avoid dramatic angles.
- **Style**: Simple design, works on light/dark backgrounds.
- **Do**: Use subtle white outer glow for dark icons; 4px bevel depth if used.
- **Don't**: Edges around the 128x128 image; large drop shadows; UI elements in the icon.
- **Note**: No alpha channel results in an automatic 12px rounded corner frame.

### Screenshots (1-5 allowed)
- **Specs**: 1280x800 or 640x400 pixels.
- **Content**: Demonstrate actual user experience, core features.
- **Do**: Full bleed (no padding), square corners, consistent branding.
- **Don't**: Blurry, distorted, pixelated, or overwhelming text.

### Promotional Images
- **Small Promo Tile**: 440x280 pixels **(REQUIRED)**.
- **Marquee Image**: 1400x560 pixels (for rotating carousel).
- **Design Rules**:
    - **Avoid text** (focus on brand/graphics).
    - Works at half size.
    - Saturated colors (avoid too much white/light gray).
    - Fill the entire region; well-defined edges.
    - No misleading badges (e.g., "Editor's Choice").
    - Assume a light gray background.

## Branding & Trademark Rules
- **Naming**: Don't start your extension name with a Google trademark.
- **Logos**: Don't use modified Google logos as your extension logo.
- **Badge**: Use the "Available in the Chrome Web Store" badge on your site (unaltered except for resizing).
- **Attribution**: Always attribute Google trademarks used in descriptions.

## Categories (Extensions)
- **Accessibility**, **Art & Design**, **Communication**, **Developer Tools**, **Education**, **Entertainment**, **Functionality & UI**, **Games**, **Household**, **Just for Fun**, **News & Weather**, **Privacy & Security**, **Shopping**, **Social Media & Networking**, **Tools**, **Travel**, **Well-being**, **Workflow & Planning**.

## Best Practices
- **Manifest V3**: Mandatory for new items.
- **Performance**: Avoid `unload` handlers (use `pagehide`), move WebSockets/WebRTC to background workers.
- **Security**: Use HTTPS, avoid deceptive tactics.
- **Privacy**: Accurate disclosures in the Privacy tab.
- **Onboarding**: Use screenshots/videos to explain setup.
- **Sign in with Google**: Recommended if login is required.
