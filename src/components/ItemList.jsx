import { Item } from "./Item";

export const ItemList = ({objects}) => 
  objects.map((object) => (
    <Item key={object.id} object={object}/>
  ));

