import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";
function Data(props) {
  let [user, setUser] = useState([]);

  // Data Fatching
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((respones) => {
        setUser(respones.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Data Posting
  useEffect(() => {
    axios
      .post("https://reqres.in/api/users", {
        name: "Sohail",
        job: "Developer",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  });

  // Data Putting
  useEffect(() => {
    axios
      .put("https://reqres.in/api/users/2", {
        name: "Sohail Khan",
        job: "Web developer",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

  //   Deleting Data
  useEffect(() => {
    axios
      .delete("https://reqres.in/api/users/2")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className="pt-10 flex items-center justify-start flex-wrap gap-12 cursor-pointer">
        {user.map((data) => {
          return (
            <>
              <Item
                key={data.id}
                image={data.avatar}
                name={data.first_name + " " + data.last_name}
                email={data.email}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Data;
