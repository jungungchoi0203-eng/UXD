# Wikipedia reading redesign

Open index.html directly in a browser. Keep styles.css and app.js in the same folder. No installation or build step is required. JavaScript powers search, article navigation, reading settings, and dialogs.

## Scope

Includes a Wikipedia-style homepage, a local search covering two articles, an abridged PUBG Mobile article, and an abridged PUBG: Battlegrounds related article. This is a student prototype, not a complete Wikipedia mirror. Source links and attribution are included in the interface.

## Changes tied to the supplied evaluation

- Heuristic 8, severity 2: fewer persistent controls, readable spacing, compact facts, collapsible contents, and focus mode reduce competing visual elements.
- Heuristic 9, severity 2: unsuccessful searches retain the query, explain the prototype's scope, offer spelling guidance, link directly to available articles, and provide a Change your search button.
- Heuristic 5, severity 1: Contribute opens guidance with a reversible Return to reading action before the user deliberately follows an external editing link. No changes can be published from this prototype.
- Upholding the other heuristics: visible reading mode, familiar labels, section navigation, consistent controls, print support, and reading help.

## Accessibility features

Semantic landmarks, labeled search and text-size fields, a skip link, visible focus outlines, native buttons and dialog, adjustable article text, underlined body links, and responsive layouts. Branding is rendered as text; the prototype has no content images requiring alt text.

The evaluation supplied no accessibility findings. These features are proposed improvements, not evidence that Wikipedia failed an accessibility audit. Run the assignment's automated and manual checks on the original site and this rebuild before claiming verified accessibility fixes.

## Suggested task

Start on Main page, search for PUBG Mobile, find its international release date, then follow PUBG: Battlegrounds.

## Verification

Browser verified: article rendering at a narrow viewport; unmatched search recovery; keyboard search for PUBG returning two results; opening a result with Enter; contribution guidance opening with Enter. Full Lighthouse/WAVE auditing and comprehensive cross-browser testing have not been performed.

## Content

Short adapted summaries sourced from https://en.wikipedia.org/wiki/PUBG_Mobile and https://en.wikipedia.org/wiki/PUBG:_Battlegrounds. Full sources and contributor histories are on Wikipedia. Adapted text is available under CC BY-SA 4.0. Wikipedia and PUBG names belong to their respective owners.
