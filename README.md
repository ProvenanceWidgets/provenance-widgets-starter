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

This starter installs the published `provenance-widgets` 2.x package from npm.
