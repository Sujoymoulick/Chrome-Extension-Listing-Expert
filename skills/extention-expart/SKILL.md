---
name: extention-expart
description: Generates high-quality Chrome Web Store listing content (titles, summaries, descriptions, image prompts) based on official branding and image guidelines. Use when a user needs to prepare their extension for publishing, ensure trademark compliance, or optimize graphical asset requirements.
---

# Extention Expart

This skill guides you through creating a professional, compliant, and branding-aware Chrome Web Store listing.

## Workflow

1.  **Gather Extension Info**: Ask the user about the extension's core functionality, target audience, and unique value proposition if not already clear from the project files.
2.  **Reference Guidelines**: Read `references/listing-guidelines.md` for branding and `references/api-setup.md` for technical setup.
3.  **Handle Advanced Lifecycle**:
    *   **Updates**: See `references/updates-and-rollbacks.md` for rollout and upgrade strategies.
    *   **Rollbacks**: Use `references/updates-and-rollbacks.md` if an emergency revert is needed.
    *   **Reviews & Appeals**: Consult `references/review-and-appeals.md` if the user faces rejections or warnings.
4.  **Generate Text Content**:
    *   **Title**: Propose 3 options. Ensure NO Google trademarks are used at the start of the name (e.g., use "MyTool for Google Chrome™" instead of "Google Chrome MyTool").
    *   **Summary**: A punchy <132 character hook. No superlatives.
    *   **Description**: A structured overview paragraph followed by a feature list.
    *   **Attribution**: If Google trademarks are used, provide the required legal attribution string.
4.  **Recommend Category**: Suggest the most appropriate category from the guidelines.
5.  **Graphic Asset Prompts**:
    *   **Extension Icon**: Describe the 128x128 PNG (96x96 artwork) with front-facing perspective and required 16px padding.
    *   **Screenshots**: Suggest themes for 1-5 screenshots (1280x800, full bleed).
    *   **Promotional Images**: Propose a design for the Small Promo Tile (440x280) and Marquee (1400x560), emphasizing minimal text and saturated colors.
6.  **Review Checklist**: Verify Manifest V3 compliance, BFCache optimizations (no `unload` handlers), and Privacy disclosure readiness.

## Tips for the Agent

*   **Trademark Safety**: Strictly avoid using "Google" or "Chrome" in the name itself unless it's a "for [Product]" suffix.
*   **Visual Precision**: When describing icons, specify the 16px transparent padding and front-facing requirement to prevent rejection.
*   **Keyword Strategy**: Focus on relevance in the description; avoid spamming keywords.
