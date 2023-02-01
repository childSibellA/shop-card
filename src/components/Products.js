const Products = () => {
  const PRODACTS = [
    {
      name: "hp230",
      id: 1,
      price: 300,
    },
    {
      name: "hp230",
      id: 2,
      price: 400,
    },
    {
      name: "hp230",
      id: 3,
      price: 500,
    },
  ];

  return (
    <div>
      {/* {PRODACTS.map((item) => {
        return (
          <div
            style={{ width: "200px", height: "200px", backgroundColor: "red" }}
          >
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default Products;
