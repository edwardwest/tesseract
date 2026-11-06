/* @ds-bundle: {"format":4,"namespace":"TesseractDesignSystem_c0df64","components":[{"name":"BulletList","sourcePath":"components/content/BulletList.jsx"},{"name":"FeatureRow","sourcePath":"components/content/FeatureRow.jsx"},{"name":"InfoCard","sourcePath":"components/content/InfoCard.jsx"},{"name":"PersonCard","sourcePath":"components/content/PersonCard.jsx"},{"name":"StatusPair","sourcePath":"components/content/StatusPair.jsx"},{"name":"DiamondBadge","sourcePath":"components/slide-parts/DiamondBadge.jsx"},{"name":"Eyebrow","sourcePath":"components/slide-parts/Eyebrow.jsx"},{"name":"SlideHeader","sourcePath":"components/slide-parts/SlideHeader.jsx"}],"sourceHashes":{"components/content/BulletList.jsx":"a6bae7db9e17","components/content/FeatureRow.jsx":"2b4dbd3215a7","components/content/InfoCard.jsx":"64fc0e321faa","components/content/PersonCard.jsx":"23183847a4ae","components/content/StatusPair.jsx":"817d04c0d411","components/slide-parts/DiamondBadge.jsx":"0f109da103fd","components/slide-parts/Eyebrow.jsx":"76af59c1f14e","components/slide-parts/SlideHeader.jsx":"c19672c31371"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TesseractDesignSystem_c0df64 = window.TesseractDesignSystem_c0df64 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/BulletList.jsx
try { (() => {
function BulletList({
  items = [],
  size = 34,
  tone = "primary",
  style
}) {
  const color = tone === "muted" ? "var(--fg-2)" : "var(--fg-1)";
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: "0 0 0 var(--bullet-indent, 20px)",
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "var(--bullet-gap, 40px)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "30px 1fr",
      fontSize: size,
      lineHeight: "var(--leading-bullet, 1.3)",
      fontWeight: 500,
      color
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("span", null, t))));
}
Object.assign(__ds_scope, { BulletList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BulletList.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureRow.jsx
try { (() => {
function FeatureRow({
  icon,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28,
      padding: "20px 28px",
      background: "var(--surface-pill)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-sans)",
      fontSize: 30,
      fontWeight: 700,
      color: "var(--fg-1)",
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--fg-2)",
      flex: "none"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { FeatureRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureRow.jsx", error: String((e && e.message) || e) }); }

// components/content/InfoCard.jsx
try { (() => {
function InfoCard({
  kicker,
  title,
  children,
  emphasis = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: `1px solid ${emphasis ? "var(--border-strong)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-card)",
      padding: "30px 36px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, kicker ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      fontWeight: 700,
      color: "var(--fg-label)",
      marginBottom: 14
    }
  }, kicker) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--type-title)",
      fontWeight: 700,
      color: emphasis ? "var(--fg-1)" : "#E9E8E2",
      marginBottom: 12
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      lineHeight: 1.42,
      color: "var(--fg-3)"
    }
  }, children));
}
Object.assign(__ds_scope, { InfoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/InfoCard.jsx", error: String((e && e.message) || e) }); }

// components/content/PersonCard.jsx
try { (() => {
function PersonCard({
  photo,
  name,
  role,
  bio,
  size = 200,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      background: "var(--ink-200)",
      overflow: "hidden"
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "grayscale(1)"
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      fontSize: 28,
      fontWeight: 700,
      color: "var(--fg-1)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 24,
      color: "var(--fg-label)"
    }
  }, role), bio ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 24,
      lineHeight: 1.4,
      color: "var(--fg-3)"
    }
  }, bio) : null);
}
Object.assign(__ds_scope, { PersonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PersonCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatusPair.jsx
try { (() => {
function StatusPair({
  label,
  now,
  next,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "210px 1fr 64px 1fr",
      columnGap: 34,
      alignItems: "stretch",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 30,
      fontSize: 22,
      letterSpacing: "0.14em",
      fontWeight: 700,
      color: "#7E7D73",
      textTransform: "uppercase"
    }
  }, label), /*#__PURE__*/React.createElement(__ds_scope.InfoCard, {
    title: now.title
  }, now.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 36,
      color: "#6E6E66"
    }
  }, "\u2192"), /*#__PURE__*/React.createElement(__ds_scope.InfoCard, {
    title: next.title,
    emphasis: true
  }, next.body));
}
Object.assign(__ds_scope, { StatusPair });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatusPair.jsx", error: String((e && e.message) || e) }); }

// components/slide-parts/DiamondBadge.jsx
try { (() => {
function DiamondBadge({
  src = "assets/logo/tesseract-mark.png",
  size = 132,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: size,
      height: size,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: size * 0.106,
      background: "#000",
      transform: "rotate(45deg)",
      borderRadius: size * 0.136
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      position: "relative",
      width: size * 0.73
    }
  }));
}
Object.assign(__ds_scope, { DiamondBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide-parts/DiamondBadge.jsx", error: String((e && e.message) || e) }); }

// components/slide-parts/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = "label",
  style
}) {
  const color = tone === "strong" ? "var(--fg-1)" : "var(--fg-label)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      fontWeight: 700,
      color,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide-parts/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/slide-parts/SlideHeader.jsx
try { (() => {
function SlideHeader({
  src = "assets/logo/tesseract-lockup.svg",
  height = 40,
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Tesseract",
    style: {
      position: "absolute",
      left: "var(--header-inset)",
      top: "var(--header-inset)",
      height,
      ...style
    }
  });
}
Object.assign(__ds_scope, { SlideHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide-parts/SlideHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BulletList = __ds_scope.BulletList;

__ds_ns.FeatureRow = __ds_scope.FeatureRow;

__ds_ns.InfoCard = __ds_scope.InfoCard;

__ds_ns.PersonCard = __ds_scope.PersonCard;

__ds_ns.StatusPair = __ds_scope.StatusPair;

__ds_ns.DiamondBadge = __ds_scope.DiamondBadge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SlideHeader = __ds_scope.SlideHeader;

})();
