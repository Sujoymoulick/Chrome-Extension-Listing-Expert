```text
    ___ _   _  _____  ___  _  _  _____  ___   ___   _  _     ___ _   _  ___
   | __|\ \/ /|_   _|| __|| \| ||_   _||_ _| / _ \ | \| |   | __|\ \/ /| _ \
   | _|  >  <   | |  | _| | .` |  | |   | | | (_) || .` |   | _|  >  < |  _/
   |___|/_/\_\  |_|  |___||_|\_|  |_|  |___| \___/ |_|\_|   |___|/_/\_\|_|

   _    ___  _____
  /_\  | _ \|_   _|
 / _ \ |   /  | |
/_/ \_\|_|_\  |_|
```

# Extention Expart — Chrome Web Store Listing & Branding Expert

> A senior product manager and branding compliance officer in your command line, automated by the Gemini CLI agent.

**🔗 [View Live Documentation & CLI Simulator](https://sujoymoulick.github.io/Chrome-Extension-Listing-Expert/)**

---

**Extention Expart** is a highly specialized local skill package designed for the Gemini CLI agent framework. It automates the generation of compliant, high-performing Chrome Web Store listing metadata (titles, summaries, and descriptions), audits manifest permissions, and creates graphical layout specifications according to Google's strict guidelines.

---

## 🚀 Terminal Installation

Deploy the extension package to your active workspace using standard NPM or manual local linking commands:

### Method A: Install via NPM (Recommended)
You can now install the published package directly from the public registry globally:
```bash
npm i -g extention-expart
```

### Method B: Local Repository Development Installation
Clone the repository locally and install the local folder as a Gemini extension:
```bash
# Clone the repository locally
git clone https://github.com/sujoymoulick/chrome-dev-skill.git

# Install the local folder directly as an extension
gemini extensions install .
```

---

## 🛠️ Local Terminal Testing Workflow

To verify that the newly installed skill works correctly in your project workspace before preparing standard store listings:

### Option 1: Interactive Agent Console
Start the interactive `gemini` console shell:
```bash
gemini
```
Once inside the interactive agent chat console, trigger the reload and then run the skill:
```text
/skills reload
Help me prepare my Chrome Web Store listing for my project.
```

### Option 2: Project-Wide Execution (Recommended)
You can run the skill across your **entire project** directly from your normal macOS terminal (Zsh/Bash) without entering an interactive session. This is the fastest way to get a full audit:
```bash
gemini run "Help me prepare my Chrome Web Store listing for this project."
```

---

## 📋 The Compliance Database & Audits

When evaluated, **Extention Expart** scans your workspace and cross-references your current configurations against five core checklists:

### 1. Trademark Safety (No Google prefixes)
- **Violation:** Starting listing titles with "Google" or "Chrome" (e.g. *"Google Chrome Session Manager"* leads to instant store rejection).
- **Remediation:** Generates compliant naming structures using compatible suffixes (e.g. *"Session Manager for Google Chrome™"*).

### 2. Graphical Asset Boundaries
- **Icon Sizing:** Audits for a clean `128x128` PNG image featuring a `96x96` main artwork and **16px transparent padding** per side to prevent visual clipping.
- **Promo Banners:** Creates specifications for the **Small Promo Tile (440x280)** (strictly required) and **Marquee (1400x560)** with zero text overlays.

### 3. SEO Listing Polish
- **Summary:** Crafts high-conversion hooks strictly under **132 characters** (no generic terms or superlatives).
- **Description:** Formats a clean overview paragraph followed by a short feature checklist.

### 4. Manifest V3 & Performance checks
- Audits for **Manifest V3** migration parameters.
- Scans files for rendering bottlenecks (e.g., blocks standard `unload` listeners in background scripts to ensure BFCache optimization).

### 5. Review Appeals flow
- Actionable procedures to deal with rejection warnings (7-30 days windows), immediate takedowns (404 page status), and the appeals portal routing details.

---

## 📂 Reference Guidelines Directory

Developers can inspect the official documentation logs and reference files directly in the skill directory:
- [SKILL.md](file:///Users/sujoymoulick/PROJECTS/chrome-dev-skill/skills/extention-expart/SKILL.md) — The core skill prompt workflow and agent tips.
- [listing-guidelines.md](file:///Users/sujoymoulick/PROJECTS/chrome-dev-skill/skills/extention-expart/references/listing-guidelines.md) — Exact text length limits and visual dimensions.
- [review-and-appeals.md](file:///Users/sujoymoulick/PROJECTS/chrome-dev-skill/skills/extention-expart/references/review-and-appeals.md) — Takedown scopes, malware rules, and appeal forms.
- [updates-and-rollbacks.md](file:///Users/sujoymoulick/PROJECTS/chrome-dev-skill/skills/extention-expart/references/updates-and-rollbacks.md) — Multi-stage rollouts, emergency reverts, and upgrades.
- [api-setup.md](file:///Users/sujoymoulick/PROJECTS/chrome-dev-skill/skills/extention-expart/references/api-setup.md) — Publisher API keys and deployment parameters.

---

*Built with ❤️ for the Chrome Extension Developer Community. Designed in Bauhaus.*
