
import './Button.css';

interface ButtonProps {
  label: string;
}
function Button({label} :ButtonProps )
{
    return(
        <>
        <button className="start-button">{label}</button>
        </>
    )
}

export default Button;