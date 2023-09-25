import { useState } from "react"
import { Button } from "react-bootstrap";

export const ItemCount = ({onAdd, stock}) => {

    const [count, setCount] = useState(1);

    const handleDecreaseCount = () => {
        if(count > 1){
            setCount((prev) => prev - 1);
        } 
    };

    const handleIncreaseCount = () => {
        if(count < stock){
            setCount((prev) => prev + 1);
        }
    }; 

  return (
    <div>
        <span className="signoCounter" onClick={handleDecreaseCount}>-</span>
        <span className="itemCount">{count}</span>
        <span className="signoCounter" onClick={handleIncreaseCount}>+</span>
        <Button variant="secondary" className="mx-5" onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </div>
  )
}
