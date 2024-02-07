export default function Fruit({ name, price }) {
  return (
    <>
      {price > 15 ? (
        <li>
          {name} {price}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
