// https://sheargenius-awakhjcph2deb6b9.westus-01.azurewebsites.net/User/SeeAllUsers

const SeeAllUsers = async() => {
  const response = await fetch("https://sheargenius-awakhjcph2deb6b9.westus-01.azurewebsites.net/User/SeeAllUsers")
  const data = await response.json();
  console.log(data);
}
const FindUser = async(username) => {
  const response = await fetch("https://sheargenius-awakhjcph2deb6b9.westus-01.azurewebsites.net/User/SeeAllUsers")
  const data = await response.json();
  const foundUser = data.find(idx => idx.username == username)
  return foundUser
}

const CreateAccount = async (username, password) => {
    const response = await fetch(
      "https://sheargenius-awakhjcph2deb6b9.westus-01.azurewebsites.net/User/CreateUser",
      {
        //key value pairs
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );
  
    const data = await response.json();
  
    if (data) {
      alert("Account created successfully!");
    } else {
      alert("This account already exists...");
    }
  };
  
  const Login = async (username, password) => {
    const response = await fetch(
      "https://sheargenius-awakhjcph2deb6b9.westus-01.azurewebsites.net/User/Login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );
  
    const data = await response.json();
    if (data.token != undefined) {
      console.log(data.token);
      console.log(await FindUser(username))
      
      // let localStorageData = localStorage.getItem("MyFirstToken")
      // let tokenString = localStorageData == null ? "" : JSON.parse(localStorageData)
  
      // tokenString = data.token;
  
      localStorage.setItem("MyFirstToken", JSON.stringify(data.token));
  
      alert("Login Successful, bearertoken has been saved to local storage");
      
      AuthenticUserCheck(data.token);
  
    } else if (data.message != undefined) {
      // localStorage.setItem("MyFirstToken", "");
      alert(data.message);
    } else {
      alert("something went wrong..");
    }
  
  };
  const AuthenticUserCheck = async (bearerToken) => {
    const response = await fetch(
      "https://sheargenius-awakhjcph2deb6b9.westus-01.azurewebsites.net/User/AuthenticUser",
      {
        method: "GET",
        headers: {
          'Authorization': "Bearer " + bearerToken,
        },
      }
    );
    const data = await response.text();
    console.log(data)
    // alert(data);
  };
  
  const UpdatePassword = async(username,password) => {
      const response = await fetch("https://sheargenius-awakhjcph2deb6b9.westus-01.azurewebsites.net/User/updatePassword",{
          method:"PUT",
          headers: {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
              'username': username,
              'password': password
          })
      });
      const data = await response.json();
  
      if(data){
          alert("password updated successfully")
      }else{
          alert("account with the provided username could not be found...");
      }
  }
  
  export {CreateAccount,Login,UpdatePassword,FindUser,SeeAllUsers};
  