import React, { useEffect, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Login, FindUser, SeeAllUsers } from "../services/dataServices";
import { Link } from "react-router-dom";
const TestLoginComponent = () => {
  //first value is the set variable, second value with change the first value when it is called
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  //anaonymous function that executes code when the values in the array changes
  useEffect(() => {
    // console.log(`username: ${username}`);
  }, [username]);

  useEffect(() => {
    // console.log(`password: ${password}`);
  }, [password]);

  const callAndClear = async (e) => {
    console.log(username + " " + password);
    Login(username, password);
    // if (localStorage.getItem("MyFirstToken", 0) != "") {
    //   setData(await FindUser(username));
    //   console.log(data);
    // }
    // console.log(await FindUser(username))
  };

  return (
    <div className="flex justify-center place-items-center flex-col min-h-screen">
      <div>
        <Button onClick={SeeAllUsers}>console log all accounts</Button>
        <p className="text-center text-xs">all passwords are 1234</p>
      </div>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label value="login" />
          </div>
          <TextInput
            onChange={(event) => setUsername(event.target.value)}
            type="username"
            placeholder="username"
            required
          />
        </div>
        <div>
          <TextInput
            onChange={(event) => setPassword(event.target.value)}
            id="password"
            type="password"
            placeholder="password"
            required
          />
        </div>
        <div className="text-center">
          <p className="text-[12px] text-blue-600 hover:cursor-pointer hover:text-cyan-600 hover:underline">
            forgot password? click here
          </p>

          <p className="text-[12px] text-blue-600 hover:cursor-pointer hover:text-cyan-600 hover:underline">
            new user? sign up now
          </p>
        </div>

        <Button type="reset" onClick={callAndClear}>
          Submit
        </Button>
        {/* <Link to="HomePage">
        <Button>
          GO
        </Button>
        </Link> */}
      </form>
    </div>
  );
};

export default TestLoginComponent;
