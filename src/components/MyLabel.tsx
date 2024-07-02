import "./MyLabel.css";

/**
 * ! Todas son opcionales
 * allCaps: boolean
 * color: color
 */
interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Text to display
   */
  AllCaps?: string;
  /**
   * Capitalize all letters
   */
  allCaps?: boolean;
  /**
   * Label color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * Font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = true,
  color = "text-primary",
  fontColor = 'red',
}: Props) => {
  return (
    <span className={`${size} ${color}`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
