import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10 },
    { name: "Mango", price: 15 },
    { name: "Banana", price: 20 },
    { name: "Orange", price: 25 },
    { name: "Pineapple", price: 30 },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </div>
  );
}
