import "./button.css";

function BtnSize(size) {
  switch (size) {
    case "m":
      return "Btn Btn__m_size";
    case "l":
      return "Btn Btn__l_size";
    default:
      break;
  }
}

function BtnBorder(rounding) {
  switch (rounding) {
    case "none":
      return "Btn__border-round-none";
    case "right":
      return "Btn__border-round-right";
    case "left":
      return "Btn__border-round-left";
    case "both":
      return "Btn__border-round-both";
    default:
      break;
  }
}

function className(size, rounding) {
  return `${BtnSize(size)} ${BtnBorder(rounding)}`;
}

export function Button({
  role,
  size,
  rounding,
  clickEvent,
  isDisabled,
  children,
}) {
  return (
    <button
      role={role}
      type="button"
      className={className(size, rounding)}
      onClick={clickEvent}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
