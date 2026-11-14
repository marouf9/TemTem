import { Link } from "react-router";
import "./Style/Button.css";

interface ButtonProps {
  label: string;
  to: string;
}

function Button({ label, to }: ButtonProps) {
  return (
    <Link to={to} className="start-button">
      {label}
    </Link>
  );
}

export default Button;