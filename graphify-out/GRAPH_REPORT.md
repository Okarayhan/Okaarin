# Graph Report - Okarin  (2026-11-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 25 nodes · 46 edges · 5 communities (3 shown, 2 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dac41d22`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- verifyPinIfComplete
- script.js
- tryStartMusic
- switchScreen
- renderLightboxPhoto

## God Nodes (most connected - your core abstractions)
1. `verifyPinIfComplete()` - 6 edges
2. `tryStartMusic()` - 6 edges
3. `detachAutoplayUnlock()` - 5 edges
4. `initMusicAutoplay()` - 5 edges
5. `handleFirstInteraction()` - 4 edges
6. `toggleMusic()` - 4 edges
7. `updateMusicUI()` - 4 edges
8. `switchScreen()` - 4 edges
9. `fallbackSha256()` - 3 edges
10. `sha256Hex()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `verifyPinIfComplete()` --calls--> `switchScreen()`  [EXTRACTED]
  script.js → script.js  _Bridges community 0 → community 3_
- `openLightbox()` --calls--> `renderLightboxPhoto()`  [EXTRACTED]
  script.js → script.js  _Bridges community 3 → community 4_

## Import Cycles
- None detected.

## Communities (5 total, 2 thin omitted)

### Community 0 - "verifyPinIfComplete"
Cohesion: 0.29
Nodes (6): clearPinInputs(), fallbackSha256(), fillDigitsFrom(), setPinFeedback(), sha256Hex(), verifyPinIfComplete()

### Community 2 - "tryStartMusic"
Cohesion: 0.73
Nodes (6): detachAutoplayUnlock(), handleFirstInteraction(), initMusicAutoplay(), toggleMusic(), tryStartMusic(), updateMusicUI()

### Community 3 - "switchScreen"
Cohesion: 0.50
Nodes (4): buildGalleryOnce(), openLightbox(), startLetterReveal(), switchScreen()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `fallbackSha256()` connect `verifyPinIfComplete` to `script.js`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `handleFirstInteraction()` (e.g. with `detachAutoplayUnlock()` and `initMusicAutoplay()`) actually correct?**
  _`handleFirstInteraction()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Why does `verifyPinIfComplete()` connect `verifyPinIfComplete` to `script.js`, `switchScreen`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `switchScreen()` connect `switchScreen` to `verifyPinIfComplete`, `script.js`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._