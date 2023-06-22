import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../maintance/GetPopularMovies';
import "../css/carousel.css" ;

const Carousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies.slice(0, 5)); // Limita a exibição a 5 filmes
    };

    fetchMovies();
  }, []);

 
  

  return (

    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>

        <div className="carousel-inner">
            {movies.map((movie, index) => (

                
                    <div key={movie.id} className={`carrossel carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} style={{ width: '160%' }}/>
                        <br/>
                        <h1 className='titulo'>{movie.title}</h1>
                        <br/><br/><br/>
                    </div>
            ))}
        </div>
        
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
</div>

  );
};

export default Carousel;
