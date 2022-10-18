import React, { useState } from "react";
import "../assets/sass/dynamicAnswer.scss";

function DynamicAnswer() {
  const [formFields, setFormFields] = useState([{ name: "", age: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const addFields = () => {
    let object = {
      answer: "",
      iscorrect: false,
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };
  return (
    <div>
      {formFields.map((form, index) => (
        <div key={index} className="d-flex justify-content-between mt-2">
          <input
            className="form-control"
            id={`anwser${index}`}
            placeholder="Answer"
            onChange={(event) => handleFormChange(event, index)}
            value={form.answer}
          />
          <select
            className="select-correct ms-2"
            name={`anwser${index}`}
            id={`anwser${index}`}
            defaultValue="False"
          >
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
          <i
            onClick={() => removeFields(index)}
            className="uil uil-plus-square btn-rm ms-2"
            style={{ fontSize: "xx-large" }}
          ></i>
        </div>
      ))}

      <i
        onClick={() => addFields()}
        className="uil uil-plus-square btn-add"
        style={{ fontSize: "xx-large" }}
      ></i>
    </div>
  );
}

export default DynamicAnswer;
