/* @ds-bundle: {"format":4,"namespace":"SunriseCreditUnionDesignSystem_2a2795","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"273510576c96","components/actions/IconButton.jsx":"6db84f02ca73","components/display/Badge.jsx":"fb10023002d7","components/display/Card.jsx":"cd2d3d114615","components/display/Tabs.jsx":"775c87fec810","components/display/Tag.jsx":"778de8b71856","components/feedback/Dialog.jsx":"923761ae776a","components/feedback/Toast.jsx":"125aa2b56573","components/feedback/Tooltip.jsx":"f5aada981110","components/forms/Checkbox.jsx":"c574da27d4a3","components/forms/Input.jsx":"e2b5fc448bd6","components/forms/Radio.jsx":"b0b56bdc62ff","components/forms/Select.jsx":"42bb8a5c9d96","components/forms/Switch.jsx":"d5c5823e0e7d","components/icons/Icon.jsx":"d87cb0aa62ac","ui_kits/website/Chrome.jsx":"776549383dcc","ui_kits/website/Home.jsx":"86ffa70a9ab0","ui_kits/website/OpenAccount.jsx":"e4e5215153e1","ui_kits/website/Screens.jsx":"e5048d3b2668"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SunriseCreditUnionDesignSystem_2a2795 = window.SunriseCreditUnionDesignSystem_2a2795 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    height: 36,
    padding: '0 16px',
    fontSize: 14
  },
  md: {
    height: 44,
    padding: '0 22px',
    fontSize: 15
  },
  lg: {
    height: 52,
    padding: '0 28px',
    fontSize: 16
  }
};
const variants = {
  primary: {
    base: {
      background: 'var(--gradient-brand)',
      color: 'var(--text-on-gradient)',
      border: 'none'
    },
    hover: {
      filter: 'brightness(0.96)',
      boxShadow: 'var(--shadow-md)'
    }
  },
  secondary: {
    base: {
      background: 'var(--color-navy)',
      color: '#fff',
      border: 'none'
    },
    hover: {
      background: 'var(--navy-800)',
      boxShadow: 'var(--shadow-md)'
    }
  },
  outline: {
    base: {
      background: 'transparent',
      color: 'var(--color-navy)',
      border: '1.5px solid var(--color-navy)'
    },
    hover: {
      background: 'var(--navy-25)'
    }
  },
  ghost: {
    base: {
      background: 'transparent',
      color: 'var(--color-navy)',
      border: 'none'
    },
    hover: {
      background: 'var(--navy-50)'
    }
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-body)',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all var(--duration-fast) var(--ease-out)',
      width: fullWidth ? '100%' : undefined,
      ...s,
      ...v.base,
      ...(hover && !disabled ? v.hover : null),
      ...(active && !disabled ? {
        filter: 'brightness(0.9)'
      } : null),
      ...(disabled ? {
        opacity: 0.45
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 36,
  md: 44,
  lg: 52
};
function IconButton({
  label,
  variant = 'outline',
  size = 'md',
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size] || sizes.md;
  const v = {
    solid: {
      background: 'var(--color-navy)',
      color: '#fff',
      border: 'none'
    },
    outline: {
      background: '#fff',
      color: 'var(--color-navy)',
      border: '1.5px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-navy)',
      border: 'none'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all var(--duration-fast) var(--ease-out)',
      ...v,
      ...(hover && !disabled ? {
        background: variant === 'solid' ? 'var(--navy-800)' : 'var(--navy-50)'
      } : null),
      ...(disabled ? {
        opacity: 0.45
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function Badge({
  tone = 'navy',
  children,
  style
}) {
  const tones = {
    navy: {
      background: 'var(--navy-50)',
      color: 'var(--color-navy)'
    },
    orange: {
      background: 'var(--accent-soft)',
      color: 'var(--accent-strong)'
    },
    gold: {
      background: 'var(--color-cream)',
      color: '#8a6d00'
    },
    success: {
      background: '#E6F2EB',
      color: 'var(--status-success)'
    },
    error: {
      background: '#F9E8E6',
      color: 'var(--status-error)'
    },
    solid: {
      background: 'var(--color-navy)',
      color: '#fff'
    },
    gradient: {
      background: 'var(--gradient-brand)',
      color: 'var(--color-navy)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 600,
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...(tones[tone] || tones.navy),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'elevated',
  padding = 24,
  interactive = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    elevated: {
      background: '#fff',
      boxShadow: 'var(--shadow-md)',
      border: 'none'
    },
    outlined: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'none'
    },
    cream: {
      background: 'var(--surface-cream)',
      border: 'none',
      boxShadow: 'none'
    },
    navy: {
      background: 'var(--color-navy)',
      color: '#fff',
      border: 'none',
      boxShadow: 'none'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tracking-body)',
      transition: 'box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)',
      ...(variants[variant] || variants.elevated),
      ...(interactive && hover ? {
        boxShadow: 'var(--shadow-lg)',
        transform: 'translateY(-2px)',
        cursor: 'pointer'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const isControlled = value !== undefined;
  const [inner, setInner] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const current = isControlled ? value : inner;
  const pick = v => {
    if (!isControlled) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1.5px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tracking-body)',
      ...style
    }
  }, tabs.map(t => {
    const tab = typeof t === 'string' ? {
      value: t,
      label: t
    } : t;
    const active = tab.value === current;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => pick(tab.value),
      style: {
        appearance: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '10px 16px',
        fontSize: 15,
        fontFamily: 'inherit',
        letterSpacing: 'inherit',
        fontWeight: active ? 700 : 500,
        color: active ? 'var(--color-navy)' : 'var(--text-muted)',
        boxShadow: active ? 'inset 0 -2.5px 0 var(--color-orange)' : 'none',
        transition: 'color var(--duration-fast) var(--ease-out)'
      }
    }, tab.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  position = 'top',
  children
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%, -6px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%, 6px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-6px, -50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(6px, -50%)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 50,
      whiteSpace: 'nowrap',
      background: 'var(--color-navy)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 500,
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none',
      ...(pos[position] || pos.top)
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  prefix,
  type = 'text',
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 38 : 46;
  const borderColor = error ? 'var(--status-error)' : focus ? 'var(--color-orange)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tracking-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--color-navy)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: h,
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${borderColor}`,
      background: disabled ? 'var(--navy-25)' : '#fff',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'box-shadow var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)',
      overflow: 'hidden'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: 14,
      color: 'var(--text-muted)',
      fontSize: 15
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: '0 14px',
      fontSize: 15,
      fontFamily: 'inherit',
      letterSpacing: 'inherit',
      color: 'var(--text-body)'
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12.5,
      marginTop: 5,
      color: error ? 'var(--status-error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  style
}) {
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(defaultChecked);
  const on = isControlled ? checked : inner;
  const handle = e => {
    if (disabled) return;
    if (!isControlled) setInner(true);
    onChange && onChange(value, e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: on,
    disabled: disabled,
    onChange: handle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      flex: 'none',
      boxSizing: 'border-box',
      border: on ? '6px solid var(--color-navy)' : '1.5px solid var(--border-strong)',
      background: '#fff',
      transition: 'border var(--duration-fast) var(--ease-out)'
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  style
}) {
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(defaultChecked);
  const on = isControlled ? checked : inner;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInner(!on);
    onChange && onChange(!on, e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 44,
      height: 26,
      borderRadius: 99,
      flex: 'none',
      position: 'relative',
      background: on ? 'var(--color-navy)' : 'var(--navy-200)',
      transition: 'background var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE_SRC = 'https://unpkg.com/lucide@0.474.0/dist/umd/lucide.min.js';

/* Ensures the Lucide UMD bundle is present, once per page. Components
   render nothing until it resolves. */
let loadPromise = null;
function ensureLucide() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.lucide && window.lucide.icons) return Promise.resolve();
  if (loadPromise) return loadPromise;
  loadPromise = new Promise(resolve => {
    const existing = document.querySelector('script[data-lucide-loader]');
    if (existing) {
      existing.addEventListener('load', resolve);
      return;
    }
    const s = document.createElement('script');
    s.src = LUCIDE_SRC;
    s.setAttribute('data-lucide-loader', '');
    s.onload = resolve;
    s.onerror = resolve;
    document.head.appendChild(s);
  });
  return loadPromise;
}
const pascal = n => String(n).split(/[-_ ]/).filter(Boolean).map(p => p[0].toUpperCase() + p.slice(1)).join('');
const camel = k => k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style,
  ...rest
}) {
  const [, tick] = React.useState(0);
  React.useEffect(() => {
    let live = true;
    ensureLucide().then(() => {
      if (live) tick(n => n + 1);
    });
    return () => {
      live = false;
    };
  }, [name]);
  const set = typeof window !== 'undefined' && window.lucide ? window.lucide.icons : null;
  const node = set ? set[pascal(name)] || set[name] : null;
  const children = Array.isArray(node) ? Array.isArray(node[0]) ? node : node[2] : null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    "aria-hidden": "true",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flex: 'none',
      ...style
    }
  }, rest), (children || []).map(([tag, attrs], i) => {
    const props = {
      key: i
    };
    for (const k in attrs) props[camel(k)] = attrs[k];
    return React.createElement(tag, props);
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  removable = false,
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 500,
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: selected ? '1.5px solid var(--color-navy)' : '1.5px solid var(--border-strong)',
      background: selected ? 'var(--color-navy)' : hover ? 'var(--navy-25)' : '#fff',
      color: selected ? '#fff' : 'var(--color-navy)',
      transition: 'all var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, rest), children, removable && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13,
    strokeWidth: 2.5
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  children,
  actions,
  onClose,
  width = 440
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(13, 55, 89, 0.45)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: '100%',
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      padding: 28,
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tracking-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 12
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--color-navy)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      appearance: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 4,
      color: 'var(--text-muted)',
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18,
    strokeWidth: 2.5
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--text-body)',
      lineHeight: 1.55
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      marginTop: 24
    }
  }, actions)));
}
Dialog.Button = __ds_scope.Button;
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'info',
  title,
  children,
  onDismiss,
  style
}) {
  const tones = {
    info: {
      bar: 'var(--color-navy)'
    },
    success: {
      bar: 'var(--status-success)'
    },
    warning: {
      bar: 'var(--color-gold)'
    },
    error: {
      bar: 'var(--status-error)'
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 360,
      maxWidth: '100%',
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: '14px 16px',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tracking-body)',
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: t.bar
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingLeft: 4
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--color-navy)',
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-body)'
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      appearance: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 2,
      color: 'var(--text-muted)',
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14,
    strokeWidth: 2.5
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  style
}) {
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(defaultChecked);
  const on = isControlled ? checked : inner;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInner(!on);
    onChange && onChange(!on, e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      borderRadius: 5,
      flex: 'none',
      border: on ? 'none' : '1.5px solid var(--border-strong)',
      background: on ? 'var(--color-navy)' : '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    color: "#fff",
    strokeWidth: 3.5
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tracking-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--color-navy)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 46,
      borderRadius: 'var(--radius-md)',
      appearance: 'none',
      border: `1.5px solid ${focus ? 'var(--color-orange)' : 'var(--border-strong)'}`,
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      background: disabled ? 'var(--navy-25)' : '#fff',
      padding: '0 40px 0 14px',
      fontSize: 15,
      fontFamily: 'inherit',
      color: 'var(--text-body)',
      cursor: 'pointer',
      transition: 'box-shadow var(--duration-fast) var(--ease-out)'
    }
  }, rest), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--color-navy)",
    strokeWidth: 2.5,
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12.5,
      marginTop: 5,
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  useState
} = React;
const DS = window.SunriseCreditUnionDesignSystem_2a2795;
const {
  Button,
  Card,
  Badge,
  Tabs,
  Tag,
  Input,
  Select,
  Checkbox,
  Switch,
  Radio,
  Toast,
  Tooltip,
  IconButton
} = DS;
const Icon = DS.Icon || (() => null);
const NAV = ['Personal', 'Business', 'Agriculture', 'Rates', 'About us'];
function Chevron({
  dir = 'down',
  size = 14
}) {
  return /*#__PURE__*/React.createElement(Icon, {
    name: dir === 'right' ? 'chevron-right' : 'chevron-down',
    size: size,
    strokeWidth: 2.2
  });
}
function SiteHeader({
  page,
  onNav
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-navy)',
      color: '#fff',
      fontSize: 12.5,
      padding: '7px 40px',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 22,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .85
    }
  }, "Find a branch"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .85
    }
  }, "1-877-368-4795")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      padding: '14px 40px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      lineHeight: 0,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/sunrise-logo.png",
    alt: "Sunrise Credit Union",
    style: {
      height: 40
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: 15
    }
  }, NAV.map(n => {
    const active = n === 'Rates' && page === 'rates' || n === 'Personal' && page === 'home';
    return /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav(n === 'Rates' ? 'rates' : 'home');
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        textDecoration: 'none',
        fontWeight: active ? 700 : 500,
        color: 'var(--color-navy)',
        paddingBottom: 2,
        boxShadow: active ? 'inset 0 -2.5px 0 var(--color-orange)' : 'none'
      }
    }, n, n !== 'Rates' && n !== 'About us' && /*#__PURE__*/React.createElement(Chevron, null));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Search sunrisecu.mb.ca"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 17
  }))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNav('login')
  }, "Online banking"))));
}
function SiteFooter() {
  const cols = [['Personal', ['Chequing accounts', 'Savings & TFSA', 'Mortgages', 'Credit cards']], ['Business', ['Business accounts', 'Commercial lending', 'Merchant services']], ['Agriculture', ['Operating loans', 'Land & equipment', 'AgriInvest']], ['About us', ['Our co-operative', 'Community giving', 'Careers', 'Contact']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-navy)',
      color: '#fff',
      padding: '52px 40px 32px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 250,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/sunrise-logo-white.png",
    alt: "Sunrise Credit Union",
    style: {
      height: 38,
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      opacity: .8,
      lineHeight: 1.6
    }
  }, "Member-owned, prairie-rooted. Building a brighter future together.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 32,
      flex: 1
    }
  }, cols.map(([head, items]) => /*#__PURE__*/React.createElement("div", {
    key: head
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 700,
      fontSize: 14.5,
      marginBottom: 10
    }
  }, head), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 13.5,
      color: '#fff',
      opacity: .78,
      textDecoration: 'none'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      paddingTop: 18,
      borderTop: '1px solid rgba(255,255,255,.18)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12.5,
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Sunrise Credit Union. Deposits guaranteed by the Deposit Guarantee Corporation of Manitoba."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: '#fff',
      textDecoration: 'none'
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: '#fff',
      textDecoration: 'none'
    }
  }, "Legal"))));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Chevron,
  NAV,
  DS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  useState
} = React;
const DS = window.SunriseCreditUnionDesignSystem_2a2795;
const {
  Button,
  Card,
  Badge,
  Tabs,
  Tag,
  Input,
  Select,
  Checkbox,
  Switch,
  Radio,
  Toast,
  Tooltip,
  IconButton
} = DS;
const Icon = DS.Icon || (() => null);
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 460,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/friends-sunlit-field.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(13,55,89,.88) 0%, rgba(13,55,89,.72) 46%, rgba(13,55,89,.05) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '0 40px',
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gradient"
  }, "Member-owned since 1940"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 54,
      lineHeight: 1.06,
      fontWeight: 800,
      color: '#fff',
      margin: '16px 0 14px'
    }
  }, "Building a brighter future together"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tracking-body)',
      fontSize: 17.5,
      lineHeight: 1.55,
      color: '#fff',
      opacity: .92,
      margin: '0 0 26px',
      maxWidth: 500
    }
  }, "Everyday banking, farm financing and advice from people who live where you live. Everything we earn stays in Manitoba."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNav('open')
  }, "Become a member"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => onNav('rates'),
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,.7)'
    }
  }, "See today's rates"))));
}
function QuickActions({
  onNav
}) {
  const items = [['Open an account', 'Ten minutes, all online.', 'open'], ["Apply for a mortgage", 'Pre-approval in one visit.', 'rates'], ['Book an advisor', 'At any of our 18 branches.', 'home'], ['Farm & ag lending', 'Operating and land loans.', 'rates']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 40px',
      marginTop: -46,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, items.map(([t, d, dest]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    interactive: true,
    padding: 20,
    onClick: () => onNav(dest)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--color-navy)',
      marginBottom: 5
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-strong)',
      fontSize: 13.5,
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, "Start ", /*#__PURE__*/React.createElement(Chevron, {
    dir: "right",
    size: 13
  }))))));
}
function ProductTabs() {
  const [tab, setTab] = useState('Personal');
  const data = {
    Personal: [['Everyday Chequing', 'No monthly fee for members under 25.', 'assets/imagery/tap-card-payment.jpg'], ['High-Interest Savings', '3.45% on every dollar, no minimum.', 'assets/imagery/online-shopping-autumn.jpg'], ['First Home Mortgage', 'Fixed and variable, prairie-friendly terms.', 'assets/imagery/family-new-home.jpg']],
    Business: [['Business Operating', 'Flat-fee bundles for small business.', 'assets/imagery/wallet-card-closeup.jpg'], ['Commercial Lending', 'Local decisions, local underwriters.', 'assets/imagery/student-campus-sunlight.jpg'], ['Merchant Services', 'Tap, chip and online payments.', 'assets/imagery/tap-card-payment.jpg']],
    Agriculture: [['Operating Loans', 'Seed-to-harvest cash flow.', 'assets/imagery/farmer-field-sunset.jpg'], ['Land & Equipment', 'Amortizations built around your cycle.', 'assets/imagery/farmer-field-sunset.jpg'], ['AgriInvest Accounts', 'Manage matched contributions.', 'assets/imagery/friends-sunlit-field.jpg']]
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '68px 40px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 34,
      fontWeight: 700,
      color: 'var(--color-navy)',
      margin: '0 0 6px'
    }
  }, "Banking that fits your life"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-muted)',
      margin: '0 0 18px'
    }
  }, "Pick a side of the co-operative to explore."), /*#__PURE__*/React.createElement(Tabs, {
    tabs: Object.keys(data),
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      marginTop: 24
    }
  }, data[tab].map(([t, d, img]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    interactive: true,
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../' + img,
    alt: "",
    style: {
      width: '100%',
      height: 168,
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--color-navy)',
      marginBottom: 6
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-body)',
      marginBottom: 16
    }
  }, d), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "Learn more"))))));
}
function GradientCta({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      margin: '72px 40px 0',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--gradient-brand)',
      padding: '44px 48px',
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 32,
      fontWeight: 800,
      color: 'var(--color-navy)',
      margin: '0 0 8px'
    }
  }, "Ready to join the co-operative?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16.5,
      color: 'var(--color-navy)',
      opacity: .85,
      margin: 0,
      maxWidth: 520
    }
  }, "Open your first account online in about ten minutes. You'll be a member and an owner.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('open')
  }, "Become a member"));
}
function CommunityStrip() {
  const stats = [['18', 'branches across southwest Manitoba'], ['$2.1B', 'in member assets'], ['$480K', 'returned to communities in 2025']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-cream)',
      margin: '72px 0 0',
      padding: '54px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/student-campus-sunlight.jpg",
    alt: "",
    style: {
      width: 340,
      height: 230,
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 30,
      fontWeight: 700,
      color: 'var(--color-navy)',
      margin: '0 0 12px'
    }
  }, "Profit that comes home"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-body)',
      margin: '0 0 24px',
      maxWidth: 560,
      lineHeight: 1.6
    }
  }, "As a member you're an owner. That means our surplus funds scholarships, rinks, 4-H clubs and main-street businesses instead of shareholders somewhere else."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40
    }
  }, stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontWeight: 800,
      fontSize: 34,
      color: 'var(--color-orange)',
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 6,
      maxWidth: 150
    }
  }, l)))))));
}
function Home({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(QuickActions, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(ProductTabs, null), /*#__PURE__*/React.createElement(GradientCta, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(CommunityStrip, null), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64
    }
  }));
}
Object.assign(window, {
  Home,
  Hero,
  QuickActions,
  ProductTabs,
  GradientCta,
  CommunityStrip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/OpenAccount.jsx
try { (() => {
const {
  useState
} = React;
const {
  Button,
  Card,
  Badge,
  Input,
  Select,
  Checkbox,
  Radio,
  Dialog,
  Toast
} = window.SunriseCreditUnionDesignSystem_2a2795;
function OpenAccount({
  onNav
}) {
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState('Everyday Chequing');
  const [confirm, setConfirm] = useState(false);
  const steps = ['Choose an account', 'About you', 'Review'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-25)',
      padding: '40px 40px 72px',
      minHeight: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 36,
      fontWeight: 800,
      color: 'var(--color-navy)',
      margin: '0 0 6px'
    }
  }, "Become a member"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-body)',
      margin: '0 0 26px'
    }
  }, "About ten minutes. You'll need one piece of photo ID."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 22
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      background: i + 1 <= step ? 'var(--color-navy)' : 'var(--navy-100)',
      color: i + 1 <= step ? '#fff' : 'var(--navy-500)'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: i + 1 === step ? 700 : 500,
      color: i + 1 <= step ? 'var(--color-navy)' : 'var(--text-muted)'
    }
  }, s), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 2,
      background: i + 1 < step ? 'var(--color-orange)' : 'var(--navy-100)',
      borderRadius: 2
    }
  })))), /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Everyday Chequing', 'No monthly fee under 25 · unlimited debits'], ['High-Interest Savings', '3.45% · no minimum balance'], ['TFSA Savings', '3.60% · 2026 room $7,500']].map(([t, d]) => /*#__PURE__*/React.createElement("label", {
    key: t,
    onClick: () => setProduct(t),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px 18px',
      cursor: 'pointer',
      border: `1.5px solid ${product === t ? 'var(--color-navy)' : 'var(--border-subtle)'}`,
      background: product === t ? 'var(--navy-25)' : '#fff',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "product",
    value: t,
    checked: product === t,
    onChange: () => setProduct(t)
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      fontWeight: 600,
      color: 'var(--color-navy)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, d))))), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    placeholder: "Dana"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last name",
    placeholder: "Whitmore"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email address",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "204 555 0142"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Home branch",
    options: ['Souris', 'Brandon — Victoria Ave', 'Killarney', 'Melita', 'Virden']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "I'm banking for",
    options: ['Myself', 'My household', 'My farm', 'My business']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me e-statements instead of paper",
    defaultChecked: true
  }))), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid var(--border-subtle)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Account"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--color-navy)'
    }
  }, product)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid var(--border-subtle)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Member share purchase"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--color-navy)'
    }
  }, "$5.00 (one time)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid var(--border-subtle)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Home branch"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--color-navy)'
    }
  }, "Souris")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "I agree to the account agreement and privacy policy.",
    checked: confirm,
    onChange: setConfirm
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => step === 1 ? onNav('home') : setStep(step - 1)
  }, step === 1 ? 'Cancel' : 'Back'), step < 3 ? /*#__PURE__*/React.createElement(Button, {
    onClick: () => setStep(step + 1)
  }, "Continue") : /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    disabled: !confirm,
    onClick: () => onNav('done')
  }, "Submit application")))));
}
function Done({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 40px',
      textAlign: 'center',
      background: 'var(--surface-cream)',
      minHeight: 620,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gradient"
  }, "Application received"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 40,
      fontWeight: 800,
      color: 'var(--color-navy)',
      margin: 0,
      maxWidth: 700
    }
  }, "Welcome to the co-operative."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'var(--text-body)',
      margin: 0,
      maxWidth: 520,
      lineHeight: 1.6
    }
  }, "We'll email you within one business day to finish verifying your ID. Your Souris branch advisor is Marla Deering."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav('login')
  }, "Go to online banking"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNav('home')
  }, "Back to sunrisecu.mb.ca")));
}
Object.assign(window, {
  OpenAccount,
  Done
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/OpenAccount.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Screens.jsx
try { (() => {
const {
  useState
} = React;
const {
  Button,
  Card,
  Badge,
  Tabs,
  Tag,
  Input,
  Select,
  Checkbox,
  Switch,
  Radio,
  Toast,
  Tooltip
} = window.SunriseCreditUnionDesignSystem_2a2795;
function Rates() {
  const [group, setGroup] = useState('Mortgages');
  const [filters, setFilters] = useState(['Fixed']);
  const toggle = f => setFilters(p => p.includes(f) ? p.filter(x => x !== f) : [...p, f]);
  const rows = {
    Mortgages: [['1-year fixed closed', '5.14%', 'Prepay 20% annually'], ['3-year fixed closed', '4.69%', 'Most popular'], ['5-year fixed closed', '4.44%', 'Rate held 120 days'], ['5-year variable', 'Prime − 0.55%', 'Convert any time']],
    Savings: [['High-Interest Savings', '3.45%', 'No minimum balance'], ['TFSA Savings', '3.60%', '2026 limit $7,500'], ['Youth Savings', '3.75%', 'Under 18, no fees']],
    'Term deposits': [['1-year term', '4.05%', '$500 minimum'], ['3-year term', '4.15%', 'Redeemable annually'], ['5-year term', '4.25%', 'RRSP eligible']]
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '36px 40px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, "Personal \xB7 Rates"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 42,
      fontWeight: 800,
      color: 'var(--color-navy)',
      margin: '0 0 8px'
    }
  }, "Today's rates"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-body)',
      margin: '0 0 24px'
    }
  }, "Effective July 2, 2026. Rates are posted and subject to change \u2014 talk to an advisor about what you'd actually qualify for."), /*#__PURE__*/React.createElement(Tabs, {
    tabs: Object.keys(rows),
    value: group,
    onChange: setGroup
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      margin: '18px 0 20px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginRight: 4
    }
  }, "Filter"), ['Fixed', 'Variable', 'Registered'].map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: filters.includes(f),
    onClick: () => toggle(f)
  }, f))), /*#__PURE__*/React.createElement(Card, {
    variant: "outlined",
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--navy-25)'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: '13px 20px',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--color-navy)'
    }
  }, "Product"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: '13px 20px',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--color-navy)'
    }
  }, "Rate"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: '13px 20px',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--color-navy)'
    }
  }, "Notes"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, rows[group].map(([p, r, n], i) => /*#__PURE__*/React.createElement("tr", {
    key: p,
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '15px 20px',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--color-navy)'
    }
  }, p), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '15px 20px',
      fontFamily: 'var(--font-accent)',
      fontSize: 19,
      fontWeight: 700,
      color: 'var(--accent-strong)'
    }
  }, r), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '15px 20px',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, n, i === 1 && /*#__PURE__*/React.createElement(Badge, {
    tone: "orange",
    style: {
      marginLeft: 8
    }
  }, "Featured")), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '15px 20px',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, "Apply"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "cream",
    padding: 24,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--color-navy)',
      marginBottom: 6
    }
  }, "Not sure where to start?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--text-body)',
      margin: '0 0 18px'
    }
  }, "Book fifteen minutes with an advisor at your branch. No pressure, no commitment."), /*#__PURE__*/React.createElement(Button, null, "Book an appointment")), /*#__PURE__*/React.createElement(Card, {
    variant: "navy",
    padding: 24,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 700,
      fontSize: 20,
      marginBottom: 6
    }
  }, "Payment calculator"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      opacity: .85,
      margin: '0 0 18px'
    }
  }, "Estimate a mortgage payment before you apply."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Open calculator"))));
}
function Login({
  onNav
}) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/mobile-banking-outdoors.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(13,55,89,.15), rgba(13,55,89,.75))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 40,
      left: 40,
      right: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 30,
      fontWeight: 700,
      color: '#fff',
      margin: 0
    }
  }, "Bank from the field, the shop, or the couch."))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 440,
      flex: 'none',
      padding: '56px 44px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/sunrise-logo.png",
    alt: "Sunrise Credit Union",
    style: {
      height: 40,
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 28,
      fontWeight: 700,
      color: 'var(--color-navy)',
      margin: 0
    }
  }, "Online banking"), /*#__PURE__*/React.createElement(Input, {
    label: "Member card number",
    placeholder: "6288 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022",
    value: id,
    onChange: e => setId(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Personal access code",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    value: pw,
    onChange: e => setPw(e.target.value)
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Remember this device"
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    onClick: () => onNav('dashboard')
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontFamily: 'var(--font-body)',
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--accent-strong)'
    }
  }, "Forgot your code?"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('open');
    },
    style: {
      color: 'var(--accent-strong)'
    }
  }, "Not a member yet?"))));
}
function Dashboard({
  onNav
}) {
  const [toast, setToast] = useState(null);
  const [tab, setTab] = useState('Accounts');
  const accounts = [['Everyday Chequing', '•••• 4021', '$3,184.55'], ['High-Interest Savings', '•••• 7730', '$21,460.02'], ['TFSA', '•••• 1188', '$44,905.17'], ['Farm Operating Loan', '•••• 5502', '−$128,400.00']];
  const txns = [['Jul 2', 'Co-op Fuel — Souris', '−$142.18'], ['Jul 1', 'Payroll deposit', '+$2,840.00'], ['Jun 30', 'Transfer to Savings', '−$500.00'], ['Jun 28', 'Manitoba Hydro', '−$186.42'], ['Jun 27', 'Main Street Grocers', '−$97.35']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: 620,
      background: 'var(--navy-25)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      flex: 'none',
      background: '#fff',
      borderRight: '1px solid var(--border-subtle)',
      padding: '24px 0'
    }
  }, ['Overview', 'Accounts', 'Transfers', 'Bill payments', 'e-Transfer', 'Statements', 'Settings'].map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'block',
      padding: '11px 24px',
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      fontWeight: i === 0 ? 700 : 500,
      textDecoration: 'none',
      color: i === 0 ? 'var(--color-navy)' : 'var(--navy-500)',
      background: i === 0 ? 'var(--navy-50)' : 'transparent',
      boxShadow: i === 0 ? 'inset 3px 0 0 var(--color-orange)' : 'none'
    }
  }, n))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontSize: 30,
      fontWeight: 700,
      color: 'var(--color-navy)',
      margin: '0 0 4px'
    }
  }, "Good morning, Dana"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "Last sign-in July 1, 2026 at 8:14 am")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: () => onNav('rates')
  }, "Rates"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => setToast({
      tone: 'success',
      title: 'Transfer sent',
      body: '$500.00 moved to High-Interest Savings.'
    })
  }, "Transfer money"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px 0'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Accounts', 'Loans'],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", null, (tab === 'Accounts' ? accounts.slice(0, 3) : accounts.slice(3)).map(([n, num, bal]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 22px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--color-navy)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, num)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontSize: 19,
      fontWeight: 700,
      color: bal.startsWith('−') ? 'var(--status-error)' : 'var(--color-navy)'
    }
  }, bal))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "cream",
    padding: 22
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "orange"
  }, "Member offer"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--color-navy)',
      margin: '10px 0 6px'
    }
  }, "Lock in 4.25% for 5 years"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)',
      margin: '0 0 16px'
    }
  }, "Move idle cash into a term deposit before July 31."), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "See term deposits")), /*#__PURE__*/React.createElement(Card, {
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      marginBottom: 12
    }
  }, "Recent activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, txns.map(([d, desc, amt]) => /*#__PURE__*/React.createElement("div", {
    key: desc,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      fontFamily: 'var(--font-body)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      width: 46,
      flex: 'none'
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'var(--text-body)'
    }
  }, desc), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: amt.startsWith('+') ? 'var(--status-success)' : 'var(--color-navy)'
    }
  }, amt))))))), /*#__PURE__*/React.createElement(Card, {
    padding: 22,
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--color-navy)',
      marginBottom: 4
    }
  }, "Alerts & preferences"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "Choose how we reach you.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Transaction alerts",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Paperless statements"
  })))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 28,
      bottom: 28,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: toast.tone,
    title: toast.title,
    onDismiss: () => setToast(null)
  }, toast.body))));
}
Object.assign(window, {
  Rates,
  Login,
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

})();
