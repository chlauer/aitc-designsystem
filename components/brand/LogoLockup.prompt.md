The mark from `assets/`. `teal` on light, `white` on dark, `square` for the teal tile.

The supplied logo is a square lock-up with the wordmark baked in, illegible below ~64px. So the
component has two modes and never combines them:

- `showWordmark` — typeset wordmark only, no mark. Use in headers, footers and any lock-up under 64px.
- default — the full logo asset. Use at 64px and up, and for avatars/favicons (`tone="square"`).

```jsx
<LogoLockup size={36} showWordmark href="/" />
<LogoLockup tone="square" size={72} assetBase="../../assets" />
```

Set `assetBase` to the relative path of your copy of `assets/`. Never recolour or redraw the mark,
and never scale the dot motif down into a mark — it is a background asset (see DotMotif).
