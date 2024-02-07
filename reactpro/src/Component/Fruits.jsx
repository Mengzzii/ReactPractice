import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, soldout: false },
    { name: "Mango", price: 15, soldout: false },
    { name: "Banana", price: 20, soldout: true },
    { name: "Orange", price: 25, soldout: false },
    { name: "Pineapple", price: 30, soldout: true },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
