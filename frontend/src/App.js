import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
function App(props) {
  const url = "http://localhost:8080/";
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  function submit(e) {
    e.preventDefault();
    console.log("click");
    axios
      .post(url, {
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
      })
      .then((res) => {
        console.log(res.data);
        alert("Thanks for Equiring we will shortly contact you :)");
        setData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      });
  }
  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            value={data.name}
            onChange={(e) => handle(e)}
            id="name"
            placeholder="enter your name"
            name="name"
          />
          <label for="phone" class="form-label">
            Phone
          </label>
          <input
            type="text"
            value={data.phone}
            class="form-control"
            onChange={(e) => handle(e)}
            id="phone"
            name="phone"
            placeholder="enter your phone number"
          />
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            value={data.email}
            onChange={(e) => handle(e)}
            id="email"
            name="email"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            onChange={(e) => handle(e)}
            id="message"
            rows="3"
            name="message"
            value={data.message}
          ></textarea>
          <button type="submit" class="btn btn-primary">
            submit
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
