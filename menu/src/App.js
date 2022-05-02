import React, { useEffect, useState } from "react";
import menu from "./data";

const allCategories = ["all", ...new Set(menu.map((items) => items.category))];

const App = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState(allCategories);

  const Fliter = (category) => {
    if (category === "all") {
      setData(menu);
    } else {
      let sorted = menu.filter((item) => item.category === category);
      setData(sorted);
    }
  };

  useEffect(() => {
    setData(menu);
  }, [menu]);

  console.log(categories);

  return (
    <React.Fragment>
      <div className="container">
        <div className="heading-content">
          <p className="heading">Menu</p>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} Fliter={Fliter}></Categories>
        <div className="grid">
          {data.map((items) => {
            let item = items;
            return (
              <>
                <Cards key={item.id} {...item}></Cards>
              </>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

const Cards = ({ id, title, price, img, desc }) => {
  return (
    <>
      <div className="card">
        <div className="image-container">
          <img src={img} alt={title} />
        </div>
        <div className="content">
          <div className="content-header">
            <p className="title">{title}</p>
            <p className="price">$ {price}</p>
          </div>
          <hr />
          <div className="content-body">
            <p className="desc">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Categories = ({ categories, Fliter }) => {
  return (
    <React.Fragment>
      <div className="filters">
        {categories.map((items, index) => {
          return (
            <button
              key={index}
              className="filter-btn"
              onClick={() => Fliter(items)}
            >
              {items}
            </button>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default App;
