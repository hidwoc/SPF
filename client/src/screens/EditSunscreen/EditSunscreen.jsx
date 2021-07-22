import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import {
  getOneSunscreen,
  editSunscreen,
  deleteSunscreen,
} from "../../services/sunscreens";
import { categories } from "../../utils/categories";

const EditSunscreen = (props) => {
  const [sunscreen, setSunscreen] = useState({
    name: "",
    SPF: "",
    price: "",
    imgURL: "",
    applyTo: "",
    category: [],
  });

  const [checked, setChecked] = useState(
    new Array(categories.length).fill(false)
  );
  const [isUpdated, setUpdated] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchSunscreen = async () => {
      const sunscreen = await getOneSunscreen(id);
      setSunscreen(sunscreen);
    
      const checkedArray = new Array(categories.length).fill(false)
      sunscreen.category
        .map((category) => categories.indexOf(category))
        .map((index) => checkedArray
          .splice(index, 1, true))
      setChecked(checkedArray)
    };
    fetchSunscreen();
  }, [id]);

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

  const handleDelete = async (e) => {
    await deleteSunscreen(id);
    e.preventDefault()
    console.log("deleted!");
    return <Redirect to="/sunscreens"/>
  };
  /**
   * ? Successfully DELETES, but instead of Redirecting, it goes and PUTs, then is unable to return to /sunscreens
   * I'm thinking that the handleDelete is also causing the form to submit, therefore triggering handleSubmit...
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await editSunscreen(id, sunscreen);
    console.log("updated!");
    setUpdated({ updated });
  };

  if (isUpdated) {
    return <Redirect to={`/sunscreens/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="edit-sunscreen">
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
              <div id="applyTo-body">
                <input
                  type="radio"
                  name="applyTo"
                  id="body"
                  value="body"
                  defaultChecked
                />
                <label htmlFor="body">Body</label>
              </div>
              <div id="applyTo-face">
                <input type="radio" name="applyTo" id="face" value="face" />
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
              value={sunscreen.category}
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
          <button className="save-button" type="submit">
            Save
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default EditSunscreen;

// Handling multiple checkboxes in React: https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
