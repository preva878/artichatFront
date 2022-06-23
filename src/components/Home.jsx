const Home = () => {
    return (
      <>
    <ul>
    <h2>Login</h2>
      <form action="/login" method="post">
        <input class="form-control" type="text" name="email" placeholder="email" value="test@test.be" />
        <input class="form-control" type="password" name="pwd" placeholder="password" value="test1234"></input>
        <input class="btn btn-primary" type="submit"></input>
      </form>
        
    </ul>
    </>
    )
  };
  
  export default Home;