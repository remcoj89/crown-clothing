const App = () => {

  const categories = [
    {
      id: 1,
      title: "Hats",
      img: "",
    },
    {
      id: 2,
      title: "Jackets",
      img: "",
    },
    {
      id: 3,
      title: "Sneakers",
      img: "",
    },
    {
      id: 4,
      title: "Womens",
      img: "",
    },
    {
      id: 5,
      title: "Mens",
      img: "",
    },
  ]

  return (
    <div className="categories-container">
      {categories.map(({title, id}) => ( 
      <div className="category-container" key={id}>
            <div className="background-image"/>
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop now</p>
            </div>
        </div>
       )
      )}
    </div>
  );
}

export default App;
