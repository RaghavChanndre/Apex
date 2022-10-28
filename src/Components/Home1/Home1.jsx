import React from "react";
import "./home1.css";

const Home1 = () => {
  return (
    <>
      <div className="container4">
        <div className="row">
       
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
          
            <div class="carousel-inner">
            
               <div class="carousel-item active">
                <img
                  src="https://th.bing.com/th/id/OIP.kesJ6n7rFhocvGRXarIwiAHaDI?pid=ImgDet&w=1276&h=540&rs=1" class="d-block w-100"
                  alt="..." 
                />
               </div>
              <div class="carousel-item">
                <img src="https://th.bing.com/th/id/OIP.kesJ6n7rFhocvGRXarIwiAHaDI?pid=ImgDet&w=1276&h=540&rs=1" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://th.bing.com/th/id/OIP.kesJ6n7rFhocvGRXarIwiAHaDI?pid=ImgDet&w=1276&h=540&rs=1" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1;
