import './Style/Cartd.css';
interface CartdProps {
    title: string;
    description: string;
    details: string;}

function Cartd({title, description, details}: CartdProps) {
  return (
    <div className="cartd">
    <p>{description}</p>
      <h2>{title}</h2>
      
      <p>{details}</p>
    </div>
  );
}

export default Cartd;