import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Sidebar = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const initialGender = searchParams.getAll("gender");
  const initialOrder = searchParams.get("order");
  const [category, setCategory] = useState(initialCategory || []);
  const [gender, setGender] = useState(initialGender || []);
  const [order, setOrder] = useState(initialOrder || "");

  useEffect(() => {
    let params = {
      gender,
      category,
    };

    order && (params.order = order);

    setSearchParams(params);
  }, [category, gender, order]);

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

  const handelGender = (e) => {
    const { value } = e.target;
    let newGender = [...gender];

    if (newGender.includes(value)) {
      newGender = newGender.filter((el) => el !== value);
    } else {
      newGender.push(value);
    }

    setGender(newGender);
  };

  const handelOrder = (e) => {
    const { value } = e.target;
    setOrder(value);
  };


  return (
    <>
        <h3>Filter By Category</h3>
      <div>
        <input
          type="checkbox"
          value={"top-wear"}
          onChange={handelCategory}
          checked={category.includes("top-wear")}
        />
        <label>Top Wear</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"bottom-wear"}
          onChange={handelCategory}
          checked={category.includes("bottom-wear")}
        />
        <label>Bottom Wear</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"foot-wear"}
          onChange={handelCategory}
          checked={category.includes("foot-wear")}
        />
        <label>Foot Wear</label>
      </div>

      <br />

      <h3>Filter By Gender</h3>
      <div>
        <input
          type="checkbox"
          value={"mens"}
          onChange={handelGender}
          checked={gender.includes("mens")}
        />
        <label>Male</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"womens"}
          onChange={handelGender}
          checked={gender.includes("womens")}
        />
        <label>Woman</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"kids"}
          onChange={handelGender}
          checked={gender.includes("kids")}
        />
        <label>Kids</label>
      </div>

      <br />

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
    </>
  )
}
