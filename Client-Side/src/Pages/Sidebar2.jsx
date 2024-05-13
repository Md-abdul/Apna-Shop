import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Sidebar2 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const initialOrder = searchParams.get("order");
  const [category, setCategory] = useState(initialCategory || []);
  const [order, setOrder] = useState(initialOrder || "");

  useEffect(() => {
    let params = {
      category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [category,order]);

  const handelCategory = (e) => {
    const { value } = e.target;

    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handelOrder = (e) => {
    const { value } = e.target;
    setOrder(value);
  };
  return (
    <div>
      <h3>Filter By Category</h3>
      <div>
        <input
          type="checkbox"
          value={"Electronics"}
          onChange={handelCategory}
          checked={category.includes("Electronics")}
        />
        <label>Electronics</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"Bottem-wear"}
          onChange={handelCategory}
          checked={category.includes("Bottem-wear")}
        />
        <label>Bottom Wear</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"Mens"}
          onChange={handelCategory}
          checked={category.includes("Mens")}
        />
        <label>Mens</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"Shirts"}
          onChange={handelCategory}
          checked={category.includes("Shirts")}
        />
        <label>Shirts</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"T-Shirt"}
          onChange={handelCategory}
          checked={category.includes("T-Shirt")}
        />
        <label>T-Shirt</label>
      </div>

      <h3>Sort By Price</h3>
      <div onChange={handelOrder}>
        <div>
          <input
            type="radio"
            name="order"
            value={"asc"}
            defaultChecked={order === "asc"}
          />
          <label> Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            name="order"
            value={"desc"}
            defaultChecked={order === "desc"}
          />
          <label> Descending</label>
        </div>
      </div>
    </div>
  );
};
