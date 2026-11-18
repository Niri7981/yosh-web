# Yosh website

The editorial product website for Yosh, built with Next.js, TypeScript, React, CSS, and Motion. One continuous editorial sheet, with no component library.

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```sh
npm run build
npm run typecheck
npm run lint
```

For production locally, run `npm run build` followed by `npm start`.

## Composition and theme

The homepage preserves its approved editorial composition and dark theme. Public copy uses Yosh; internal repository identifiers retain the older project name. Four real chapter anchors—Product, How it works, Docs, and Roadmap—appear in the global navigation and hero index. Smooth scrolling respects reduced-motion preferences.

Existing Hero, How it works, Budget, Product/Members, Control, Activity, Permission layer, and Closing sections remain. Get started, Security, Docs, Roadmap, and FAQ provide concise product guidance. Detailed installation remains in repository documentation; no separate documentation site or public download is claimed.

The semantic theme tokens in `app/globals.css` are the color source of truth. Every section uses those same warm charcoal surfaces, ivory text, restrained signal, and fine rules. Instrument Serif is self-hosted with its SIL Open Font License. Coming Soon is reserved for tiny annotations, with its Apache 2.0 license alongside the font. Explanatory copy and functional data use sans-serif.

The fixed `ScrollRuler` spans the entire document. It stays compact at rest and subtly expands rightward during scrolling. Reading progress drives its line and marker. Reduced motion removes the spring lag and expansion.

## Yosh and interactions

`public/spirit/design-sheet.png` is the unchanged supplied artwork. `Spirit.tsx` selects idle, focused, waiting, curious, notified, and sleeping crops at render time. The existing SVG matte removes only the source backdrop without recoloring the character. All instances share responsive dimensions; sleeping naturally has a lower silhouette.

The approved hero retains its existing subtle motion. Other Yosh instances remain stationary except for small evaluation-driven movements. Reduced-motion preferences are respected.

The authority section illustrates a 1.00 test USDC shared daily limit, a 0.40 grant total, a 0.20 per-transaction limit, and one-hour expiry. Market Snapshot (0.20) is approved with authority reserved; Market Analysis (20.00) is denied. Both are explicitly simulated examples, with no payment started. Activate either resource name to evaluate or replay it. The budget ruler supports dragging and keyboard control: arrows change the request by one cent, Shift + arrows by five, Page Up/Down by ten, and Home/End reach the daily range endpoints. The visible marker stops at the 0.20 test USDC per-transaction boundary; requests beyond it are denied calmly.

## Product video and resources

`ProductVideo` is currently an accessible, static placeholder, with no simulated playback or video requests. When the actual film is supplied, place it at `public/videos/control.mp4` and set `<ProductVideo src="/videos/control.mp4" />` in `ControlSection`. The component also accepts a poster and uses native playback controls without autoplay.

Navigation and closing resources link to the homepage anchors and the product source repository supplied in the verified content pack. `lib/links.ts` holds those URLs. Docs provides a curated gateway, identifies source-install prerequisites, and notes that published repository guides may contain older names and examples.

Product copy was refreshed on November 17, 2026 for Plugin Edition 0.2.13: Codex on Apple Silicon macOS, x402 and MPP Solana Charge, a bundled standalone backend, and explicit Mainnet/Devnet selection. Mainnet still requires an existing configured Yosh wallet; fresh Mainnet onboarding and public plugin directory distribution are not complete. The older native App demo is labeled accordingly. Interactive budget and activity examples remain simulations.

## Plugin installation preview (2026-11-17)

The homepage links to `#get-started`, with a downloadable plugin ZIP, an agent installation prompt, terminal commands and a read-only first status request. “Copy instructions for Codex” includes the current website origin, package URL and SHA-256. It instructs Codex to download, verify, extract and install through its supported plugin CLI. It does not use an unverified app deep link, silently install software, or authorize a payment.

The website serves the versioned plugin ZIP and its SHA-256 file from `public/downloads/`. Both files are included in this repository so a deployment from main serves the same package as the reviewed production website. The 0.2.13 archive and its members were checked against the packaging evidence. This is a development preview for Apple Silicon macOS.

Local preview: `npm run dev -- --hostname 127.0.0.1 --port 3107`.

Validation: typecheck, production build and website-source lint (`npx eslint app components content lib`) pass. Full-repository lint currently fails in existing untracked `pitch-kit/pitch/.build` scripts on `FontLibrary.use` React-hook rules. The preview homepage returns HTTP 200 and the HTTP-downloaded ZIP matches its published checksum. Browser automation timed out, so visual and clipboard interaction verification remains manual.
