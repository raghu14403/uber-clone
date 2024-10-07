function Home() {
  return (
    <div>
      <div>
        <div>
          <h1>Request a ride for now or later</h1>
          <h4>Add your trip details, hop in, and go.</h4>
          <button>Get a Ride</button>
          <button>Schedule for Later</button>
        </div>
        <div>
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_698,w_698/v1683919251/assets/42/a29147-e043-42f9-8544-ecfffe0532e9/original/travel-ilustra.png"
            alt="travel-image"
          />
        </div>
      </div>
      <div suggestions>
        <h1>Suggestions</h1>
        <div>
          <div>
            <div>
              <h3>Package</h3>
              <p>Uber Connect makes same-day delivery easier than ever</p>
              <button>Details</button>
            </div>
            <div>
              <img
                src="https://mobile-content.uber.com/launch-experience/connect.png"
                alt="package-image"
              />
            </div>
          </div>
          <div>
            <div>
              <h3>Ride</h3>
              <p>Go any where with Uber. Request a ride, hop-in and go</p>
              <button>Details</button>
            </div>
            <div>
              <img
                src="https://mobile-content.uber.com/launch-experience/ride.png"
                alt="car-image"
              />
            </div>
          </div>
          <div>
            <div>
              <h3>Reserve</h3>
              <p>
                Reserve your ride in advance so you can relax on the day of your
                top.
              </p>
              <button>Details</button>
            </div>
            <div>
              <img
                src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
                alt="reserve-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div seamlessly>
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_393,w_698/v1683576635/assets/f7/7aa380-a378-47bf-8b88-aaba1587efdd/original/landing-stops-group-rides.png"
          alt="ride-image"
        />
        <div>
          <h1>Ride with friends seamlessly</h1>
          <p>
            Riding with friends just got easier: set up a group ride in the Uber
            app, invite your friends, and arrive at your destination. Friends
            who ride together save together.
          </p>
          <a href="">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
