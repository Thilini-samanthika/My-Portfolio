# Thilini Portfolio — Feature Upgrade

This is a runnable integration based on the **earlier uploaded `thilini-3d-portfolio-home.zip`**. Your more recent local edits (including a realistic GLB, if any) cannot be automatically recovered from that older snapshot. Back up your current local project first.

## Installation
1. Unzip the project into a new folder (do not overwrite your current project).
2. Open the folder containing `package.json` in VS Code.
3. Run `npm install` then `npm run dev`.
4. Open the local URL printed by Vite.

## Important
- A primitive-based `GirlAvatar.jsx` from the prior avatar package is included to make the 3D scene runnable. If your current local `GirlAvatar.jsx` / `HeroScene.jsx` is better, **copy those two local files over the corresponding files in this upgrade**. The Home section keeps the HeroScene slot.
- The contact form validates and opens an email draft; it does not send messages from a server. Change email in `src/data/portfolio.js`.
- Resume button uses `public/resume.pdf`; replace this with your final CV.
- Background music toggle is included, but audio is not bundled. Add your own licensed `public/music.mp3` before using the button.
- Skills and projects are preserved from the original portfolio snapshot.
- The welcome screen appears once per browser tab session and can be skipped.
- A realistic GLB avatar is not included.
- Run `npm run build` to check production compilation.
