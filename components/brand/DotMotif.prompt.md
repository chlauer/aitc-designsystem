The logo's dot swirl as background decoration. Parent needs `position:relative;overflow:hidden`.

```jsx
<section style={{position:"relative",overflow:"hidden",background:"var(--surface-brand)"}}>
  <DotMotif tone="white" size={520} opacity={0.35} position="right" assetBase="../../assets" />
</section>
```

At most one per section, always behind content, never above 0.5 opacity.