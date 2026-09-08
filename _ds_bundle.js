/* @ds-bundle: {"format":4,"namespace":"AITransformationCollectiveDesignSystem_5cdd67","components":[{"name":"DotMotif","sourcePath":"components/brand/DotMotif.jsx"},{"name":"ExpertCard","sourcePath":"components/brand/ExpertCard.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"LogoLockup","sourcePath":"components/brand/LogoLockup.jsx"},{"name":"PullQuote","sourcePath":"components/brand/PullQuote.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"StatFigure","sourcePath":"components/brand/StatFigure.jsx"},{"name":"TestimonialCard","sourcePath":"components/brand/TestimonialCard.jsx"},{"name":"TopicTile","sourcePath":"components/brand/TopicTile.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"assets/icons/aitc-icons.js":"acfc27591594","components/brand/DotMotif.jsx":"b8612131f3a8","components/brand/ExpertCard.jsx":"c4758df3a7da","components/brand/Eyebrow.jsx":"cec6b820d24f","components/brand/LogoLockup.jsx":"eadff09f4723","components/brand/PullQuote.jsx":"db45796f645e","components/brand/SectionHeading.jsx":"36e5f1aa6a68","components/brand/StatFigure.jsx":"ff8538f82d1f","components/brand/TestimonialCard.jsx":"8c7bb346622e","components/brand/TopicTile.jsx":"7185293c483c","components/core/Badge.jsx":"1668d3591cf7","components/core/Button.jsx":"9b458e89f2b7","components/core/Card.jsx":"e1741088ccbd","components/core/IconButton.jsx":"1976e77d1885","components/core/Tag.jsx":"65e375777b5c","components/feedback/Dialog.jsx":"bd448843c763","components/feedback/Toast.jsx":"e7218debb81f","components/feedback/Tooltip.jsx":"a7fd4604dd1e","components/forms/Checkbox.jsx":"c34d8b532de3","components/forms/Field.jsx":"147257dc5408","components/forms/Input.jsx":"604d5c2fb8b7","components/forms/Radio.jsx":"625ebdc79bdb","components/forms/Select.jsx":"4fd9682db98a","components/forms/Switch.jsx":"e29a72470739","components/forms/Textarea.jsx":"db642c254b68","components/navigation/NavBar.jsx":"f5494319c278","components/navigation/Tabs.jsx":"20cbe13fb454","ui_kits/website/App.jsx":"d91fe34c0eeb","ui_kits/website/Contact.jsx":"85e65e78225e","ui_kits/website/Home.jsx":"ac2daa9fafdd","ui_kits/website/Insight.jsx":"0347cb2bca8b","ui_kits/website/Network.jsx":"64e2e67771d5","ui_kits/website/Shell.jsx":"14e63f1e06d1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AITransformationCollectiveDesignSystem_5cdd67 = window.AITransformationCollectiveDesignSystem_5cdd67 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/icons/aitc-icons.js
try { (() => {
/* React wrapper around the Lucide UMD build (CDN). Load lucide.js and React before this file. */
(function () {
  function AITCIcon(props) {
    var name = props.name,
      size = props.size || 20,
      strokeWidth = props.strokeWidth || 1.6;
    var ref = React.useRef(null);
    React.useEffect(function () {
      var L = window.lucide;
      if (!L || !ref.current) return;
      var node = L.icons && L.icons[name] || L[name];
      if (!node) return;
      ref.current.innerHTML = "";
      var el = L.createElement(node);
      el.setAttribute("width", size);
      el.setAttribute("height", size);
      el.setAttribute("stroke-width", strokeWidth);
      ref.current.appendChild(el);
    }, [name, size, strokeWidth]);
    return React.createElement("span", {
      ref: ref,
      className: props.className,
      style: Object.assign({
        display: "inline-flex",
        lineHeight: 0,
        color: "inherit"
      }, props.style || {})
    });
  }
  window.AITCIcon = AITCIcon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons/aitc-icons.js", error: String((e && e.message) || e) }); }

// components/brand/DotMotif.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DotMotif({
  size = 420,
  opacity = 0.5,
  position = "right",
  tone = "white",
  assetBase = "assets",
  style = {},
  className = "",
  ...rest
}) {
  const pos = position === "right" ? {
    right: "-8%",
    top: "-10%"
  } : position === "left" ? {
    left: "-12%",
    bottom: "-15%"
  } : {
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    className: ["aitc-motif", className].filter(Boolean).join(" "),
    style: {
      width: size,
      height: size,
      opacity,
      backgroundImage: "url(" + assetBase + "/motif-dots-" + tone + ".png)",
      ...pos,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { DotMotif });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/DotMotif.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  tone = "brand",
  rule = true,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["aitc-eyebrow", tone !== "brand" ? "aitc-eyebrow--" + tone : "", rule ? "" : "aitc-eyebrow--bare", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/LogoLockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The only supplied asset is the full square logo (swirl + baked-in wordmark), which is
   illegible below ~64px. So: with showWordmark we typeset the wordmark and show no mark;
   without it we show the full logo asset, which already carries the wordmark. */
function LogoLockup({
  src,
  tone = "teal",
  size = 40,
  showWordmark = false,
  href,
  assetBase = "assets",
  className = "",
  ...rest
}) {
  const url = src || assetBase + "/logo-aitc-" + (tone === "white" ? "white" : tone === "square" ? "square" : "teal") + ".png";
  const Tag = href ? "a" : "span";
  const color = tone === "white" ? "#fff" : "var(--text-1)";
  if (showWordmark) {
    return /*#__PURE__*/React.createElement(Tag, _extends({
      className: ["aitc-lockup", className].filter(Boolean).join(" "),
      href: href,
      style: {
        height: size
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      className: "aitc-lockup__text",
      style: {
        color
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "aitc-lockup__ai",
      style: {
        fontSize: size * 0.62,
        marginBottom: size * 0.08
      }
    }, "AI"), /*#__PURE__*/React.createElement("span", {
      className: "aitc-lockup__sub",
      style: {
        fontSize: size * 0.24
      }
    }, "Transformation Collective")));
  }
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ["aitc-lockup", className].filter(Boolean).join(" "),
    href: href,
    style: {
      height: size
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "aitc-lockup__mark",
    style: {
      height: size,
      width: size,
      background: tone === "square" ? "var(--surface-brand)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: "AI Transformation Collective",
    style: {
      height: size,
      width: size,
      objectFit: "contain"
    }
  })));
}
Object.assign(__ds_scope, { LogoLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoLockup.jsx", error: String((e && e.message) || e) }); }

// components/brand/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PullQuote({
  quote,
  author,
  role,
  size = "lg",
  tone = "default",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: ["aitc-quote", tone === "invert" ? "aitc-quote--invert" : "", className].filter(Boolean).join(" "),
    style: {
      margin: 0
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    className: ["aitc-quote__text", size === "sm" ? "aitc-quote__text--sm" : ""].filter(Boolean).join(" ")
  }, quote), author ? /*#__PURE__*/React.createElement("figcaption", {
    className: "aitc-quote__attr"
  }, /*#__PURE__*/React.createElement("strong", null, author), role ? /*#__PURE__*/React.createElement("span", null, role) : null) : null);
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  lead,
  size = "md",
  align = "start",
  eyebrowTone = "brand",
  className = "",
  ...rest
}) {
  const sizeCls = size === "lg" ? "aitc-heading__title--lg" : size === "sm" ? "aitc-heading__title--sm" : "";
  return /*#__PURE__*/React.createElement("header", _extends({
    className: ["aitc-heading", align === "center" ? "aitc-heading--center" : "", className].filter(Boolean).join(" ")
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: eyebrowTone
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    className: ["aitc-heading__title", sizeCls].filter(Boolean).join(" ")
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    className: "aitc-heading__lead"
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatFigure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatFigure({
  value,
  unit,
  label,
  tone = "default",
  ruled = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["aitc-stat", tone !== "default" ? "aitc-stat--" + tone : "", ruled ? "aitc-stat--ruled" : "", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "aitc-stat__value"
  }, value, unit ? /*#__PURE__*/React.createElement("span", {
    className: "aitc-stat__unit"
  }, unit) : null), label ? /*#__PURE__*/React.createElement("span", {
    className: "aitc-stat__label"
  }, label) : null);
}
Object.assign(__ds_scope, { StatFigure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatFigure.jsx", error: String((e && e.message) || e) }); }

// components/brand/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function initials(name = "") {
  return name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("");
}
function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: ["aitc-testimonial", className].filter(Boolean).join(" "),
    style: {
      margin: 0
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    className: "aitc-testimonial__text"
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    className: "aitc-testimonial__foot"
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    className: "aitc-testimonial__avatar",
    src: avatar,
    alt: author
  }) : /*#__PURE__*/React.createElement("span", {
    className: "aitc-testimonial__avatar"
  }, initials(author)), /*#__PURE__*/React.createElement("span", {
    className: "aitc-testimonial__who"
  }, /*#__PURE__*/React.createElement("strong", null, author), [role, company].filter(Boolean).join(", "))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/TopicTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TopicTile({
  title,
  description,
  index,
  icon,
  href,
  variant = "default",
  cta = "Mehr erfahren →",
  onClick,
  className = "",
  ...rest
}) {
  const Tag = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ["aitc-topic", "aitc-topic--" + variant, !href && onClick ? "aitc-topic--interactive" : "", className].filter(Boolean).join(" "),
    href: href,
    onClick: onClick
  }, rest), index ? /*#__PURE__*/React.createElement("span", {
    className: "aitc-topic__num"
  }, index) : null, icon ? /*#__PURE__*/React.createElement("span", {
    className: "aitc-topic__icon"
  }, icon) : null, /*#__PURE__*/React.createElement("h3", {
    className: "aitc-topic__title"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "aitc-topic__desc"
  }, description) : null, cta ? /*#__PURE__*/React.createElement("span", {
    className: "aitc-topic__arrow"
  }, cta) : null);
}
Object.assign(__ds_scope, { TopicTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TopicTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = "neutral",
  outline = false,
  icon,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["aitc-badge", "aitc-badge--" + tone, outline ? "aitc-badge--outline" : "", className].filter(Boolean).join(" ")
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = "primary",
  size = "md",
  block = false,
  iconStart,
  iconEnd,
  href,
  disabled = false,
  children,
  className = "",
  ...rest
}) {
  const cls = ["aitc-btn", "aitc-btn--" + variant, "aitc-btn--" + size, block ? "aitc-btn--block" : "", className].filter(Boolean).join(" ");
  const inner = [iconStart ? /*#__PURE__*/React.createElement("span", {
    className: "aitc-btn__icon",
    key: "s"
  }, iconStart) : null, children, iconEnd ? /*#__PURE__*/React.createElement("span", {
    className: "aitc-btn__icon",
    key: "e"
  }, iconEnd) : null];
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: disabled ? undefined : href,
    "aria-disabled": disabled || undefined
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: rest.type || "button",
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = "default",
  interactive = false,
  rule = false,
  as = "div",
  children,
  className = "",
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ["aitc-card", "aitc-card--" + variant, interactive ? "aitc-card--interactive" : "", className].filter(Boolean).join(" ")
  }, rest), rule ? /*#__PURE__*/React.createElement("span", {
    className: "aitc-card__rule"
  }) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    className: ["aitc-iconbtn", "aitc-iconbtn--" + variant, "aitc-iconbtn--" + size, className].filter(Boolean).join(" ")
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  className = "",
  ...rest
}) {
  const interactive = Boolean(onClick);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["aitc-tag", interactive ? "aitc-tag--interactive" : "", selected ? "aitc-tag--selected" : "", className].filter(Boolean).join(" "),
    onClick: onClick,
    role: interactive ? "button" : undefined,
    tabIndex: interactive ? 0 : undefined
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "aitc-tag__remove",
    "aria-label": "Entfernen",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/brand/ExpertCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function initials(name = "") {
  return name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("");
}
function ExpertCard({
  name,
  role,
  bio,
  photo,
  tags = [],
  layout = "stack",
  onClick,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    className: ["aitc-expert", layout === "row" ? "aitc-expert--row" : "", onClick ? "aitc-expert--interactive" : "", className].filter(Boolean).join(" "),
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "aitc-expert__photo"
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", {
    className: "aitc-expert__ph"
  }, initials(name))), /*#__PURE__*/React.createElement("div", {
    className: "aitc-expert__body"
  }, role ? /*#__PURE__*/React.createElement("span", {
    className: "aitc-expert__role"
  }, role) : null, /*#__PURE__*/React.createElement("h3", {
    className: "aitc-expert__name"
  }, name), bio ? /*#__PURE__*/React.createElement("p", {
    className: "aitc-expert__bio"
  }, bio) : null, tags.length ? /*#__PURE__*/React.createElement("div", {
    className: "aitc-expert__tags"
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))) : null));
}
Object.assign(__ds_scope, { ExpertCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ExpertCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  wide = false,
  onClose,
  footer,
  children,
  className = "",
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "aitc-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    className: ["aitc-dialog", wide ? "aitc-dialog--wide" : "", className].filter(Boolean).join(" "),
    onClick: e => e.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "aitc-dialog__head"
  }, title ? /*#__PURE__*/React.createElement("h2", {
    className: "aitc-dialog__title"
  }, title) : /*#__PURE__*/React.createElement("span", null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Schlie\xDFen",
    onClick: onClose,
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 6 6 18M6 6l12 12"
    }))
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "aitc-dialog__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "aitc-dialog__foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  tone = "info",
  title,
  description,
  onClose,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    className: ["aitc-toast", "aitc-toast--" + tone, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "aitc-toast__bar"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "aitc-toast__title"
  }, title), description ? /*#__PURE__*/React.createElement("div", {
    className: "aitc-toast__desc"
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "aitc-toast__close",
    "aria-label": "Schlie\xDFen",
    onClick: onClose
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = "top",
  children,
  className = "",
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["aitc-tooltip", className].filter(Boolean).join(" "),
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    "data-open": open,
    className: "aitc-tooltip__bubble aitc-tooltip__bubble--" + placement
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  disabled = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["aitc-choice", className].filter(Boolean).join(" "),
    "data-disabled": disabled
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "aitc-choice__box"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "aitc-choice__mark",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.5 6.2 4.4 9 10.5 2.6"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "aitc-choice__text"
  }, label, description ? /*#__PURE__*/React.createElement("span", {
    className: "aitc-choice__desc"
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["aitc-field", className].filter(Boolean).join(" ")
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    className: "aitc-field__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "aitc-field__req"
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "aitc-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "aitc-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  size = "md",
  invalid = false,
  iconStart,
  iconEnd,
  className = "",
  ...rest
}) {
  const cls = ["aitc-input", "aitc-input--" + size, iconStart ? "aitc-input--has-start" : "", iconEnd ? "aitc-input--has-end" : "", className].filter(Boolean).join(" ");
  const input = /*#__PURE__*/React.createElement("input", _extends({
    className: cls,
    "aria-invalid": invalid || undefined
  }, rest));
  if (!iconStart && !iconEnd) return input;
  return /*#__PURE__*/React.createElement("span", {
    className: "aitc-inputwrap"
  }, iconStart ? /*#__PURE__*/React.createElement("span", {
    className: "aitc-inputwrap__affix aitc-inputwrap__affix--start"
  }, iconStart) : null, input, iconEnd ? /*#__PURE__*/React.createElement("span", {
    className: "aitc-inputwrap__affix aitc-inputwrap__affix--end"
  }, iconEnd) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  disabled = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["aitc-choice", className].filter(Boolean).join(" "),
    "data-disabled": disabled
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "aitc-choice__box aitc-choice__box--radio"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aitc-choice__dot"
  })), /*#__PURE__*/React.createElement("span", {
    className: "aitc-choice__text"
  }, label, description ? /*#__PURE__*/React.createElement("span", {
    className: "aitc-choice__desc"
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  placeholder,
  invalid = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    className: ["aitc-select", className].filter(Boolean).join(" "),
    "aria-invalid": invalid || undefined,
    defaultValue: placeholder ? "" : undefined
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["aitc-switch", className].filter(Boolean).join(" "),
    "data-disabled": disabled
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "aitc-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aitc-switch__knob"
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid = false,
  rows = 4,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    "aria-invalid": invalid || undefined,
    className: ["aitc-textarea", className].filter(Boolean).join(" ")
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  brand,
  links = [],
  activeHref,
  actions,
  tone = "light",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["aitc-nav", tone === "ink" ? "aitc-nav--ink" : "", className].filter(Boolean).join(" ")
  }, rest), brand, /*#__PURE__*/React.createElement("div", {
    className: "aitc-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href || l.label,
    className: "aitc-nav__link",
    href: l.href || "#",
    "data-active": activeHref === l.href || undefined,
    onClick: l.onClick
  }, l.label)), actions));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = "underline",
  className = "",
  ...rest
}) {
  const [internal, setInternal] = React.useState(value ?? (items[0] && (items[0].value ?? items[0])));
  const active = value ?? internal;
  const pick = v => {
    setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: ["aitc-tabs", variant === "pills" ? "aitc-tabs--pills" : "", className].filter(Boolean).join(" ")
  }, rest), items.map(it => {
    const v = it.value ?? it;
    const l = it.label ?? it;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      type: "button",
      className: "aitc-tab",
      "aria-selected": active === v,
      onClick: () => pick(v)
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function App() {
  const [route, setRoute] = React.useState("home");
  const go = r => {
    setRoute(r);
    window.scrollTo({
      top: 0
    });
  };
  const screen = route === "network" ? /*#__PURE__*/React.createElement(NetworkScreen, {
    go: go
  }) : route === "insight" ? /*#__PURE__*/React.createElement(InsightScreen, {
    go: go
  }) : route === "contact" ? /*#__PURE__*/React.createElement(ContactScreen, {
    go: go
  }) : route === "topics" ? /*#__PURE__*/React.createElement(HomeScreen, {
    go: go
  }) : /*#__PURE__*/React.createElement(HomeScreen, {
    go: go
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    route: route,
    go: go
  }), screen, /*#__PURE__*/React.createElement(SiteFooter, {
    go: go
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  SectionHeading,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Button,
  Card,
  Toast,
  Badge,
  Eyebrow,
  DotMotif
} = window.AITransformationCollectiveDesignSystem_5cdd67;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [mail, setMail] = React.useState("");
  const submit = e => {
    e.preventDefault();
    if (!mail.includes("@")) {
      setErr("Bitte eine gültige E-Mail-Adresse angeben.");
      return;
    }
    setErr("");
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-ink)",
      color: "#fff",
      padding: "var(--space-16) 0"
    }
  }, /*#__PURE__*/React.createElement(DotMotif, {
    tone: "white",
    size: 480,
    opacity: .2,
    position: "right",
    assetBase: ASSETS
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrowTone: "invert",
    eyebrow: "Kontakt",
    title: "45 Minuten, eine ehrliche Einordnung",
    lead: "Sie schildern das Vorhaben, wir sagen, ob und wie wir helfen k\xF6nnen."
  }))), /*#__PURE__*/React.createElement("section", {
    className: "sect"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true,
    htmlFor: "n"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "n",
    placeholder: "Vor- und Nachname"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Organisation",
    htmlFor: "o"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "o",
    placeholder: "Firma, Beh\xF6rde, Verband"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "E-Mail",
    required: true,
    htmlFor: "e",
    error: err
  }, /*#__PURE__*/React.createElement(Input, {
    id: "e",
    type: "email",
    placeholder: "name@unternehmen.de",
    value: mail,
    invalid: Boolean(err),
    onChange: ev => setMail(ev.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Themenfeld",
    htmlFor: "t"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "t",
    placeholder: "Bitte w\xE4hlen",
    options: ["Strategie & Roadmap", "Daten & Plattform", "Befähigung", "Governance & Recht", "Noch unklar"]
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Ihr Vorhaben",
    hint: "Zwei bis drei S\xE4tze reichen f\xFCr das erste Gespr\xE4ch."
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 5,
    placeholder: "Wir pr\xFCfen gerade, ob \u2026"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Wie sollen wir antworten?"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginTop: "var(--space-1)"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "w",
    label: "Per E-Mail",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "w",
    label: "R\xFCckruf"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "w",
    label: "Video-Termin"
  }))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Ich habe die Datenschutzhinweise gelesen.",
    description: "Wir nutzen Ihre Angaben ausschlie\xDFlich f\xFCr die Beantwortung."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    iconEnd: /*#__PURE__*/React.createElement(Icon, {
      name: "Send",
      size: 17
    })
  }, "Anfrage senden"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "sand",
    rule: true
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: false
  }, "Direkt"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-3) 0 0"
    }
  }, "kontakt@ai-transformation-collective.de", /*#__PURE__*/React.createElement("br", null), "+49 40 555 01 22"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-3) 0 0",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-2)"
    }
  }, "Antwort innerhalb von zwei Werktagen, auch wenn wir absagen.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    style: {
      alignSelf: "flex-start",
      marginBottom: "var(--space-3)"
    }
  }, "F\xFCr Expert:innen"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "var(--text-h4)",
      fontWeight: 500,
      margin: "0 0 var(--space-2)"
    }
  }, "Im Netzwerk mitarbeiten"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-sm)",
      color: "var(--text-2)",
      margin: "0 0 var(--space-4)"
    }
  }, "Wir nehmen Menschen auf, die mindestens ein Vorhaben bis in den Betrieb begleitet haben."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Profil einreichen"))))), sent ? /*#__PURE__*/React.createElement("div", {
    className: "toasts"
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Anfrage gesendet",
    description: "Wir melden uns innerhalb von zwei Werktagen.",
    onClose: () => setSent(false)
  })) : null);
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  SectionHeading,
  StatFigure,
  PullQuote,
  TopicTile,
  ExpertCard,
  TestimonialCard,
  DotMotif,
  Eyebrow,
  Badge
} = window.AITransformationCollectiveDesignSystem_5cdd67;
const TOPICS = [{
  index: "01",
  title: "Strategie & Roadmap",
  icon: "Compass",
  description: "Reifegrad ermitteln, Anwendungsfälle priorisieren, Roadmap verabschieden."
}, {
  index: "02",
  title: "Daten & Plattform",
  icon: "Database",
  description: "Das Fundament, das Anwendungsfälle im Betrieb trägt."
}, {
  index: "03",
  title: "Befähigung",
  icon: "Users",
  description: "Teams, die nach dem Projekt selbst weiterarbeiten."
}, {
  index: "04",
  title: "Governance & Recht",
  icon: "Scale",
  description: "EU AI Act, Risikoklassen, Freigabeprozesse ohne Stillstand."
}, {
  index: "05",
  title: "Prozess & Automatisierung",
  icon: "Workflow",
  description: "Wo Automatisierung Arbeit spart und wo sie sie verlagert."
}, {
  index: "06",
  title: "Kultur & Führung",
  icon: "MessagesSquare",
  description: "Führungskräfte, die Entscheidungen mit KI treffen können."
}];
const EXPERTS = [{
  name: "Anna Weiß",
  role: "Datenstrategie",
  bio: "Baut Datenplattformen, die Fachbereiche selbst nutzen.",
  tags: ["Data Mesh", "Governance"]
}, {
  name: "Jonas Feld",
  role: "Change & Befähigung",
  bio: "Bringt Pilotprojekte in den Regelbetrieb.",
  tags: ["Enablement"]
}, {
  name: "Rana Sahin",
  role: "Recht & Compliance",
  bio: "Übersetzt den EU AI Act in Freigabeprozesse.",
  tags: ["EU AI Act"]
}, {
  name: "Tobias Krenz",
  role: "MLOps",
  bio: "Betreibt Modelle, die nach dem Launch nicht verwaisen.",
  tags: ["Monitoring", "Cloud"]
}];
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-brand)",
      color: "#fff",
      paddingTop: "var(--space-24)",
      paddingBottom: "var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(DotMotif, {
    tone: "white",
    size: 720,
    opacity: .28,
    position: "right",
    assetBase: ASSETS
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "invert"
  }, "Expertennetzwerk f\xFCr KI-Transformation"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "var(--text-display-1)",
      fontWeight: 500,
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-display)",
      margin: "var(--space-6) 0 var(--space-6)",
      maxWidth: "18ch"
    }
  }, "Erst die Organisation, dann das Modell"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lead)",
      lineHeight: "var(--leading-snug)",
      color: "rgba(255,255,255,.86)",
      maxWidth: "52ch",
      margin: "0 0 var(--space-10)"
    }
  }, "Wir sind vierzig Fachleute, die KI-Vorhaben dort ansetzen, wo sie scheitern oder gelingen: in Prozessen, Daten und Entscheidungen. Sie sprechen mit einer Ansprechperson und arbeiten mit dem Team, das zu Ihrer Frage passt."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => go("contact"),
    iconEnd: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    })
  }, "Gespr\xE4ch vereinbaren"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => go("network"),
    style: {
      background: "transparent",
      color: "#fff",
      borderColor: "rgba(255,255,255,.5)"
    }
  }, "Netzwerk ansehen"))));
}
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement("section", {
    className: "sect"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid4"
  }, /*#__PURE__*/React.createElement(StatFigure, {
    ruled: true,
    value: "40",
    unit: "+",
    label: "Expert:innen im Netzwerk"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    ruled: true,
    value: "6",
    unit: "Wo.",
    label: "Vom Assessment zur verabschiedeten Roadmap"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    ruled: true,
    value: "3",
    label: "K\xF6pfe pro Projektteam \u2014 nicht mehr"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    ruled: true,
    value: "0",
    label: "Lizenzverkauf, keine Toolagenda"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "sect",
    style: {
      background: "var(--surface-sand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Themenfelder",
    title: "Sechs Felder, in denen wir arbeiten",
    lead: "Jedes Feld hat im Netzwerk mindestens vier Fachleute. Projekte kombinieren zwei bis drei Felder."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid3",
    style: {
      marginTop: "var(--space-12)"
    }
  }, TOPICS.map((t, i) => /*#__PURE__*/React.createElement(TopicTile, _extends({
    key: t.index
  }, t, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 28
    }),
    variant: i === 2 ? "ink" : "default",
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("topics");
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-ink)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(DotMotif, {
    tone: "white",
    size: 560,
    opacity: .22,
    position: "left",
    assetBase: ASSETS
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative",
      maxWidth: "var(--container-narrow)"
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    tone: "invert",
    quote: "KI-Transformation ist eine Organisationsfrage. Die Technologie ist der einfachere Teil.",
    author: "Dr. Anna Wei\xDF",
    role: "Sprecherin des Kollektivs"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "sect"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Das Netzwerk",
    title: "Expertise, die zusammenarbeitet",
    lead: "Keine Beratungspyramide: Sie arbeiten mit den Menschen, die auch im Angebot stehen."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go("network"),
    iconEnd: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 16
    })
  }, "Alle Expert:innen")), /*#__PURE__*/React.createElement("div", {
    className: "grid4",
    style: {
      marginTop: "var(--space-12)"
    }
  }, EXPERTS.map(e => /*#__PURE__*/React.createElement(ExpertCard, _extends({
    key: e.name
  }, e, {
    onClick: () => go("network")
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "sect",
    style: {
      background: "var(--surface-sand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Referenzen",
    title: "Was Auftraggeber:innen berichten",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid3",
    style: {
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Nach acht Wochen hatten wir eine Roadmap, die intern getragen wird \u2014 nicht eine, die im Laufwerk liegt.",
    author: "Markus Lindner",
    role: "CDO",
    company: "Nordwerk AG"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Das Team hat uns widersprochen, wo es n\xF6tig war. Das war der Unterschied zu vorherigen Projekten.",
    author: "Sabine Ortmann",
    role: "Bereichsleitung Operations",
    company: "Hansa Logistik"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Zwei Anwendungsf\xE4lle laufen im Betrieb, vier haben wir bewusst verworfen. Beides war wertvoll.",
    author: "Dr. Peter Salm",
    role: "Gesch\xE4ftsf\xFChrung",
    company: "Rheinwerk Industrie"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "sect"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "flex",
      gap: "var(--space-12)",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Kostenlos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "var(--text-display-3)",
      fontWeight: 500,
      lineHeight: 1,
      letterSpacing: "var(--tracking-display)",
      margin: "var(--space-4) 0 var(--space-3)"
    }
  }, "45 Minuten, eine ehrliche Einordnung"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-2)",
      margin: 0,
      maxWidth: "48ch"
    }
  }, "Sie schildern das Vorhaben, wir sagen, ob und wie wir helfen k\xF6nnen \u2014 auch wenn die Antwort \u201Enicht wir\u201C lautet.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("contact"),
    iconEnd: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    })
  }, "Termin anfragen"))));
}
Object.assign(window, {
  HomeScreen,
  TOPICS,
  EXPERTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Insight.jsx
try { (() => {
const {
  Badge,
  Eyebrow,
  PullQuote,
  StatFigure,
  Card,
  Button,
  ExpertCard,
  SectionHeading,
  Tag
} = window.AITransformationCollectiveDesignSystem_5cdd67;
function InsightScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: "var(--surface-sand)"
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      paddingTop: "var(--space-16)",
      paddingBottom: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      maxWidth: "var(--container-narrow)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center",
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Whitepaper"), /*#__PURE__*/React.createElement(Badge, {
    outline: true
  }, "14 Min Lesezeit"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-3)"
    }
  }, "M\xC4RZ 2026")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "var(--text-display-3)",
      fontWeight: 500,
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-display)",
      margin: "0 0 var(--space-6)"
    }
  }, "Warum KI-Pilotprojekte den Betrieb nie erreichen"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lead)",
      lineHeight: "var(--leading-snug)",
      color: "var(--text-2)",
      margin: "0 0 var(--space-10)"
    }
  }, "Eine Auswertung von 34 Vorhaben aus dem Mittelstand. Der h\xE4ufigste Grund f\xFCr den Abbruch ist nicht die Modellqualit\xE4t, sondern eine offene Zust\xE4ndigkeitsfrage."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-4) 0",
      borderTop: "1px solid var(--sand-300)",
      borderBottom: "1px solid var(--sand-300)",
      marginBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "var(--sand-300)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-display)",
      color: "var(--sand-500)"
    }
  }, "AW"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body-sm)",
      color: "var(--text-2)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      color: "var(--text-1)"
    }
  }, "Dr. Anna Wei\xDF"), "Datenstrategie \xB7 AI Transformation Collective"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconStart: /*#__PURE__*/React.createElement(Icon, {
      name: "Download",
      size: 15
    })
  }, "PDF laden"))), /*#__PURE__*/React.createElement("p", null, "34 Vorhaben, 19 Organisationen, ein wiederkehrendes Muster: Der Pilot funktioniert technisch, und trotzdem geht er nicht in Betrieb. In 21 von 34 F\xE4llen war beim \xDCbergang niemand benannt, der die laufenden Kosten, die Modellpflege und die fachliche Verantwortung \xFCbernimmt."), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: "var(--space-10)"
    }
  }, "Der \xDCbergang ist die Projektphase, die niemand plant"), /*#__PURE__*/React.createElement("p", null, "Projektpl\xE4ne enden mit dem Abnahmetermin. Was danach kommt \u2014 Monitoring, Nachtraining, Eskalationswege \u2014 steht in keinem Angebot, weil es keine Projektleistung ist, sondern Linienarbeit. Genau dort bricht die Kette."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "var(--space-12) 0",
      padding: "var(--space-8) 0",
      borderTop: "var(--rule-width) solid var(--surface-brand)",
      borderBottom: "1px solid var(--sand-300)"
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    size: "sm",
    quote: "Die Frage ist nicht, ob das Modell gut ist. Die Frage ist, wer montags um neun draufschaut."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)",
      margin: "var(--space-10) 0"
    }
  }, /*#__PURE__*/React.createElement(StatFigure, {
    ruled: true,
    value: "21",
    unit: "/34",
    label: "Vorhaben ohne benannte Betriebsverantwortung"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    ruled: true,
    value: "7",
    unit: "Mon.",
    label: "Median bis zum Abbruch nach Abnahme"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    ruled: true,
    value: "4",
    label: "Rollen, die vor dem Start gekl\xE4rt sein m\xFCssen"
  })), /*#__PURE__*/React.createElement("h2", null, "Vier Rollen, die vor dem Start feststehen m\xFCssen"), /*#__PURE__*/React.createElement("p", null, "Fachliche Verantwortung, technischer Betrieb, Datenqualit\xE4t, Freigabe. Sind diese vier Rollen vor dem ersten Sprint namentlich besetzt, steigt die Betriebsquote in unserer Auswertung von 38 auf 71 Prozent."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      margin: "var(--space-10) 0"
    }
  }, ["Betriebsübergang", "Governance", "MLOps", "Mittelstand"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    onClick: () => {}
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      marginTop: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Weiterlesen",
    title: "Aus dem gleichen Themenfeld",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid3",
    style: {
      marginTop: "var(--space-8)"
    }
  }, [["Impuls", "Der EU AI Act als Freigabeprozess", "Was Risikoklassen für Ihre bestehende Governance bedeuten."], ["Whitepaper", "Reifegrad ohne Reifegradmodell", "Sechs Interviews sagen mehr als ein 40-seitiger Fragebogen."], ["Podcast", "Folge 12: Wer trägt das Modell?", "Gespräch über Betriebsverantwortung mit Tobias Krenz."]].map(([k, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    interactive: true,
    rule: true,
    onClick: () => go("insight")
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sand",
    style: {
      alignSelf: "flex-start",
      marginBottom: "var(--space-3)"
    }
  }, k), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "var(--text-h4)",
      fontWeight: 500,
      margin: "0 0 var(--space-2)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-sm)",
      color: "var(--text-2)",
      margin: 0
    }
  }, d)))))));
}
Object.assign(window, {
  InsightScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Insight.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Network.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  ExpertCard,
  Tabs,
  Input,
  Switch,
  Tag,
  Badge,
  Card,
  Button,
  Dialog,
  Eyebrow
} = window.AITransformationCollectiveDesignSystem_5cdd67;
const ALL = [{
  name: "Anna Weiß",
  role: "Datenstrategie",
  field: "Daten",
  bio: "Baut Datenplattformen, die Fachbereiche selbst nutzen.",
  tags: ["Data Mesh", "Governance"],
  city: "Hamburg"
}, {
  name: "Jonas Feld",
  role: "Change & Befähigung",
  field: "Befähigung",
  bio: "Bringt Pilotprojekte in den Regelbetrieb.",
  tags: ["Enablement", "Workshops"],
  city: "Leipzig"
}, {
  name: "Rana Sahin",
  role: "Recht & Compliance",
  field: "Governance",
  bio: "Übersetzt den EU AI Act in Freigabeprozesse.",
  tags: ["EU AI Act", "DSGVO"],
  city: "Berlin"
}, {
  name: "Tobias Krenz",
  role: "MLOps",
  field: "Daten",
  bio: "Betreibt Modelle, die nach dem Launch nicht verwaisen.",
  tags: ["Monitoring", "Cloud"],
  city: "München"
}, {
  name: "Miriam Dahl",
  role: "Strategie",
  field: "Strategie",
  bio: "Priorisiert Anwendungsfälle nach Wirkung, nicht nach Neuheit.",
  tags: ["Portfolio", "Business Case"],
  city: "Wien"
}, {
  name: "Ellen Ruck",
  role: "Prozessanalyse",
  field: "Strategie",
  bio: "Findet die Stellen, an denen Automatisierung Arbeit wirklich spart.",
  tags: ["Process Mining"],
  city: "Köln"
}, {
  name: "Said Barzani",
  role: "Produkt & Interaktion",
  field: "Befähigung",
  bio: "Gestaltet Werkzeuge, die Mitarbeitende freiwillig nutzen.",
  tags: ["UX", "Adoption"],
  city: "Zürich"
}, {
  name: "Katrin Loos",
  role: "Datenschutz",
  field: "Governance",
  bio: "Verhandelt zwischen Datenschutz und Machbarkeit.",
  tags: ["DSGVO", "Auditierung"],
  city: "Bremen"
}];
const FIELDS = ["Alle", "Strategie", "Daten", "Befähigung", "Governance"];
function NetworkScreen() {
  const [field, setField] = React.useState("Alle");
  const [q, setQ] = React.useState("");
  const [onlyFree, setOnlyFree] = React.useState(false);
  const [detail, setDetail] = React.useState(null);
  const list = ALL.filter(e => (field === "Alle" || e.field === field) && (q === "" || (e.name + e.role + e.tags.join()).toLowerCase().includes(q.toLowerCase()))).filter((e, i) => !onlyFree || i % 2 === 0);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-sand)",
      paddingTop: "var(--space-16)",
      paddingBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Netzwerk",
    title: "Vierzig K\xF6pfe, ein Zugang",
    lead: "Sie k\xF6nnen jede Person direkt anfragen. Wer nicht passt, sagt das \u2014 und nennt jemanden, der passt."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "sticky",
      top: "var(--header-height)",
      zIndex: 20,
      background: "color-mix(in oklab,var(--surface-page) 92%,transparent)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "var(--space-4) var(--space-6)",
      padding: "var(--space-4) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 280px",
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Name, Rolle, Stichwort",
    value: q,
    onChange: e => setQ(e.target.value),
    iconStart: /*#__PURE__*/React.createElement(Icon, {
      name: "Search",
      size: 18
    })
  })), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pills",
    items: FIELDS,
    value: field,
    onChange: setField
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Nur kurzfristig verf\xFCgbar",
    checked: onlyFree,
    onChange: e => setOnlyFree(e.target.checked)
  })))), /*#__PURE__*/React.createElement("section", {
    className: "sect",
    style: {
      paddingTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-3)",
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-3)"
    }
  }, list.length, " Personen"), field !== "Alle" ? /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => setField("Alle")
  }, field) : null), /*#__PURE__*/React.createElement("div", {
    className: "grid4"
  }, list.map(e => /*#__PURE__*/React.createElement(ExpertCard, _extends({
    key: e.name
  }, e, {
    onClick: () => setDetail(e)
  })))), list.length === 0 ? /*#__PURE__*/React.createElement(Card, {
    variant: "sand",
    style: {
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Niemand gefunden."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-2) 0 0",
      color: "var(--text-2)"
    }
  }, "Schreiben Sie uns Ihre Frage \u2014 wir vermitteln.")) : null)), /*#__PURE__*/React.createElement(Dialog, {
    open: Boolean(detail),
    wide: true,
    title: detail && detail.name,
    onClose: () => setDetail(null),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setDetail(null)
    }, "Schlie\xDFen"), /*#__PURE__*/React.createElement(Button, {
      iconEnd: /*#__PURE__*/React.createElement(Icon, {
        name: "ArrowRight",
        size: 16
      })
    }, "Anfrage senden"))
  }, detail ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "160px 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4/5",
      background: "var(--surface-sand-deep)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-display)",
      fontSize: 32,
      color: "var(--sand-500)"
    }
  }, detail.name.split(" ").map(w => w[0]).join("")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, detail.role), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, detail.bio), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-2)",
      fontSize: "var(--text-body-sm)"
    }
  }, "Standort ", detail.city, " \xB7 Themenfeld ", detail.field), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      marginTop: "var(--space-4)"
    }
  }, detail.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))))) : null));
}
Object.assign(window, {
  NetworkScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Network.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const {
  NavBar,
  Button,
  LogoLockup,
  Eyebrow
} = window.AITransformationCollectiveDesignSystem_5cdd67;
const Icon = window.AITCIcon;
const ASSETS = "../../assets";
const NAV = [{
  label: "Themenfelder",
  href: "topics"
}, {
  label: "Netzwerk",
  href: "network"
}, {
  label: "Wissen",
  href: "insight"
}, {
  label: "Kontakt",
  href: "contact"
}];
function SiteHeader({
  route,
  go
}) {
  return /*#__PURE__*/React.createElement(NavBar, {
    brand: /*#__PURE__*/React.createElement(LogoLockup, {
      size: 36,
      showWordmark: true,
      assetBase: ASSETS,
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("home");
      }
    }),
    activeHref: route,
    links: NAV.map(l => ({
      ...l,
      onClick: e => {
        e.preventDefault();
        go(l.href);
      }
    })),
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => go("contact")
    }, "Gespr\xE4ch vereinbaren")
  });
}
function SiteFooter({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LogoLockup, {
    tone: "white",
    size: 40,
    showWordmark: true,
    assetBase: ASSETS
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,.66)",
      fontSize: "var(--text-body-sm)",
      marginTop: "var(--space-5)",
      maxWidth: "32ch"
    }
  }, "Ein Expertennetzwerk f\xFCr KI-Transformation. Sitz in Hamburg, Arbeit im gesamten deutschsprachigen Raum.")), [["Themenfelder", ["Strategie & Roadmap", "Daten & Plattform", "Befähigung", "Governance"]], ["Netzwerk", ["Expert:innen", "Mitmachen", "Partner"]], ["Wissen", ["Whitepaper", "Impulse", "Podcast"]]].map(([t, items]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "invert",
    rule: false
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      marginTop: "var(--space-4)"
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("network");
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "var(--space-16)",
      paddingTop: "var(--space-5)",
      borderTop: "1px solid rgba(255,255,255,.12)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      letterSpacing: "var(--tracking-wide)",
      color: "rgba(255,255,255,.5)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 AI Transformation Collective"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Impressum"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Datenschutz"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "LinkedIn")))));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  NAV,
  ASSETS,
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.DotMotif = __ds_scope.DotMotif;

__ds_ns.ExpertCard = __ds_scope.ExpertCard;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.LogoLockup = __ds_scope.LogoLockup;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatFigure = __ds_scope.StatFigure;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.TopicTile = __ds_scope.TopicTile;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
