import "../css/navbar.css";

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg barra_navegacao">
  <a class="navbar-brand spanNav" href="#" style={{fontSize: 40}}>Movie<span style={{fontSize: 50}}>TAG</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto" style={{marginLeft: 80}}>
      <li class="nav-item active">
        <a class="nav-link" href="#" tabIndex={1}>Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" tabIndex={2}>Filmes</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" href="#" tabIndex={3}>Séries</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#" tabIndex={4}>Pessoas</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Pesquise um filme" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    )
}

export default Navbar;