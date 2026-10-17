import Icon from "./site-icons";

const iconNames = {
  whatsapp: "whatsapp",
  instagram: "instagram",
  maps: "pin",
};

export default function ActionLink({
  href,
  icon,
  children,
  variant = "button-primary",
}) {
  return (
    <a
      className={`button ${variant}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {icon && <Icon name={iconNames[icon]} />}
      <span>{children}</span>
      {variant === "button-arrow" && <Icon name="arrow" />}
    </a>
  );
}
