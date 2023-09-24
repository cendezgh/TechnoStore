import { useContext } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart-icon.webp";
import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => {
  const { totalWidget } = useContext(CartContext)
  return (
  <Link to="/cart">
    <img src={cartIcon} alt="Cart" />
    <span>{totalWidget}</span>
  </Link>
)};
