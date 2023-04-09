import React, { useState, useRef } from "react";
// import { useState } from "react";

function Hero(props) {
    const [contacts, setContact] = useState([]);
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");

  function addContact(e) {
    e.preventDefault();
    const date = new Date();
    
    const newContact = {
        id: Date.now(),
        username : username.toLocaleUpperCase(),
        number : number,
        addedTime : date.toDateString()
    }

    if(newContact.username != "" || newContact.number != "") setContact([...contacts, newContact]);

    setNumber("");
    setUsername("");
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <form
            className="form d-grid gap-5 mt-5 w-75 mx-auto shadow p-5"
            onSubmit={(e)=>addContact(e)}
          >
            <h1 className="text-center text-success">Add contacts</h1>
            <input
              type="text"
              placeholder="Enter your name"
              className="form-control p-2 fs-5"
              value={username}
              onInput={(e)=>setUsername(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter your number (+998 ...)"
              className="form-control p-2 fs-5"
              value={number}
              onInput={(e)=>setNumber(e.target.value)}
            />
            <button className="btn btn-primary  fs-4" type="submit">Add contact</button>
          </form>
          <div className="body mt-5 shadow p-5">
            <h2 className="text-center mb-4 text-uppercase text-danger">Your contacts</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <td>№</td>
                <th>Name</th>
                <th>Phone number</th>
                <th>Added time</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                {
                    contacts?.map((item,index) =>{
                        return (<tr>
                            <td>{index +1}</td>
                        <td>{item.username}</td>
                        <td>+998{item.number}</td>
                        <td>{item.addedTime}</td>
                        <td><button className="btn btn-warning">EDIT</button></td>
                        <td><button className="btn btn-danger">DELETE</button></td>
                    </tr>)
                    })
                }
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
