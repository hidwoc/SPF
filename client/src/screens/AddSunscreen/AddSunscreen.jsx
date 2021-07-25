import { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { createSunscreen } from "../../services/sunscreens";
import { categories } from "../../utils/categories";
import "./AddSunscreen.css";

const AddSunscreen = (props) => {
  const [sunscreen, setSunscreen] = useState({
    name: "",
    SPF: "",
    price: "",
    imgURL: "",
    applyTo: "Body",
    category: [],
  });
  const [checked, setChecked] = useState(
    new Array(categories.length).fill(false)
  );

  const [isCreated, setCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSunscreen({
      ...sunscreen,
      [name]: value,
    });
  };

  const handleCheck = (position) => {
    const updatedCheck = checked.map((curr, index) =>
      index === position ? !curr : curr
    );
    setChecked(updatedCheck);
    setSunscreen({
      ...sunscreen,
      category: updatedCheck.reduce((acc, curr, index) => {
        if (curr) {
          acc.push(categories[index]);
        }
        return acc;
      }, []),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createSunscreen(sunscreen);

    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/sunscreens`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-name">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              required
              autoFocus
              name="name"
              value={sunscreen.name}
              onChange={handleChange}
            />
          </div>
          <div className="numbers-container">
            <div className="input-spf">
              <label htmlFor="spf">SPF:</label>
              <input
                type="text"
                id="spf"
                required
                name="SPF"
                value={sunscreen.SPF}
                onChange={handleChange}
              />
            </div>
            <div className="input-price">
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                required
                name="price"
                value={sunscreen.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-imgURL">
            <label htmlFor="imgURL">Image URL:</label>
            <input
              type="text"
              id="imgURL"
              required
              accept="image" // accept image file type only
              name="imgURL"
              value={sunscreen.imgURL}
              onChange={handleChange}
            />
          </div>
          <div className="input-applyTo">
            <label htmlFor="applyTo">Apply to:</label>
            <fieldset
              className="radio"
              id="applyTo"
              name="applyTo"
              value={sunscreen.applyTo}
              onChange={handleChange}
            >
              <div className="radio-div" id="applyTo-body">
                <input
                  type="radio"
                  name="applyTo"
                  id="body"
                  value="Body"
                  defaultChecked
                />
                <label htmlFor="body">Body</label>
              </div>
              <div className="radio-div" id="applyTo-face">
                <input type="radio" name="applyTo" id="face" value="Face" />
                <label htmlFor="face">Face</label>
              </div>
            </fieldset>
          </div>
          <div className="input-category">
            <label htmlFor="category">Category: </label>
            <fieldset
              className="checkbox"
              id="category"
              name="category"
              // value={sunscreen.category}
            >
              {categories.map((category, index) => (
                <div
                  className="category-item"
                  id={`category-${category.replace(" ", "-").toLowerCase()}`}
                  key={`category-${category.replace(" ", "-").toLowerCase()}`}
                >
                  <input
                    type="checkbox"
                    name="category"
                    checked={checked[index]}
                    onChange={() => handleCheck(index)}
                    id={`category-${category.replace(" ", "-").toLowerCase()}`}
                    value={`${category}`}
                  />
                  <label
                    htmlFor={`category-${category
                      .replace(" ", "-")
                      .toLowerCase()}`}
                  >{`${category}`}</label>
                </div>
              ))}
            </fieldset>
          </div>
          <div className="button-container">
            <button className="add-button" type="submit">
              Add Sunscreen
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddSunscreen;

// Handling multiple checkboxes in React: https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
