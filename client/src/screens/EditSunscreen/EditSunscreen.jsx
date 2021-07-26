import { useEffect, useState } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import {
  getOneSunscreen,
  editSunscreen,
  deleteSunscreen,
} from "../../services/sunscreens";
import { categories } from "../../utils/categories";
import "./EditSunscreen.css";

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
  const history = useHistory();

  useEffect(() => {
    const fetchSunscreen = async () => {
      const sunscreen = await getOneSunscreen(id);
      setSunscreen(sunscreen);

      const checkedArray = new Array(categories.length).fill(false);
      sunscreen.category
        .map((category) => categories.indexOf(category))
        .map((index) => checkedArray.splice(index, 1, true));
      setChecked(checkedArray);
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
    history.push("/sunscreens");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await editSunscreen(id, sunscreen);
    setUpdated({ updated });
  };

  if (isUpdated) {
    return <Redirect to={`/sunscreens/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="form-container add-edit" id="edit-form">
        <form onSubmit={handleSubmit}>
        <div className="input-div" id="name">
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
            <div className="input-div" id="spf">
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
            <div className="input-div" id="price">
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
          <div className="input-div" id="imgURL">
            <label htmlFor="imgURL">Image URL:</label>
            <input
              type="text"
              id="imgURL"
              required
              accept="image" // accept image file type only
              name="imgURL"
              placeholder="must be PNG file"
              value={sunscreen.imgURL}
              onChange={handleChange}
            />
          </div>
          <div className="input-div" id="applyTo">
            <label htmlFor="applyTo-fieldset">Apply to:</label>
            <fieldset
              id="applyTo-fieldset"
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
          <div className="input-div" id="category">
            <label htmlFor="category-fieldset">Category: </label>
            <fieldset
              id="category-fieldset"
              name="category"
            >
              {categories.map((category, index) => (
                <div
                  className="category-item"
                  id={`category-${category.replace(" ", "-").toLowerCase()}-div`}
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
            <button className="save-button" type="submit">
              Save
            </button>
          </div>
        </form>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </Layout>
  );
};

export default EditSunscreen;

// Handling multiple checkboxes in React: https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
