# ProvenanceWidgets React Starter

A minimal Vite application using the ProvenanceWidgets React API.

## Getting started

```bash
git clone --branch feat/pw-v2-starter https://github.com/ProvenanceWidgets/provenance-widgets-starter.git
cd provenance-widgets-starter
npm install
npm run dev
```

Open the URL printed by Vite. Change the checkbox selection, then use its
footprint button to switch between Aggregate and Temporal views.

## Structure

- `src/main.jsx` mounts React and provides the shared provenance context.
- `src/App.jsx` contains a controlled ProvenanceWidgets example.
- `src/styles.css` contains only starter-specific layout styles.

## Build

```bash
npm run build
```

The migration branch installs `provenance-widgets` from its active PW2 GitHub
branch. Replace that dependency with `^2.0.0` after PW2 is published to npm.
