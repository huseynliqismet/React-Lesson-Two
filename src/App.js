import "./App.css";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
function App() {
  const [users, setUsers] = useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }

getData();
useEffect(() => {
  getData();
}, []);

return (
<>
<Container fixed>
  <Grid container spacing={2}>
    {users.map((user,index)=>(
      <Grid key={index} xs={4}>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
      </Grid>
    ))}
  </Grid>

</Container>
</>
) 
}
export default App;
