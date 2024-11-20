function Restaurants() {
    return (
      <div className="container my-4">
        <h2>Restaurants</h2>
        <div className="card my-2">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Taste of Italy"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Taste of Italy</h5>
                <p className="card-text">
                  Indulge in mouth-watering pizza at Taste of Italy.With a variety
                  of toppings and crusts, its a pizza lover's charm.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Rating: 4.5 | Open Now
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-2">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://media.istockphoto.com/id/537410478/photo/interior-of-mexican-restaurant.jpg?s=1024x1024&w=is&k=20&c=z873DfXJI7O9-o4yPvby7xtD0fuQ02t_ZPhG4OZ5aXI="
                alt="Spice Village"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Spice Village</h5>
                <p className="card-text">
                  Enjoy authentic Indian cuisine at Spice Village. Explore a
                  variety of delicious dishes from different parts of India.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Rating: 4.3 | Open Now
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Restaurants;
  