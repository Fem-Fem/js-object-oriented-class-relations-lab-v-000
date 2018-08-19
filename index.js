// In the following lab, we want to model our Scuber system in such a way that we can see all of the passengers related to a driver. A driver becomes related to a passenger when he takes a single trip. Only one passenger is associated with a trip -- the passenger who books, and pays for the trip on their phone.
//
// Each class should be defined in such a way that it adds an incrementing id to each individual instance of the respective class. An object should also be added to the store upon being initialized.
//
// Construct the following classes:

let store = {drivers: [], passengers: [], trips:[]}

let passengerId = 0
let driverId = 0
let tripId = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId

    store.drivers.push(this)
  }

}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId

    store.passengers.push(this)
  }

  // items() {
  //   return store.passengers.filter(item => {
  //   return item.passengerId === this.id
  // })

}

class Trip {
  constructor(driver, passenger) {
    this.driver = driver
    // this.passenger = passenger
    this.id = ++tripId

    this.driverId = driver.id
    this.passengerId = passenger.id

    store.trips.push(this)

  }

  passenger() {
    return store.passengers.find(passenger) => {
      return passenger.id === this.passengerId
    }
  }


}
// Driver class:
//
//     A driver has many trips, and has many passengers through trips.
//     new Driver() - initialized with a name; returns a JavaScript object that has attributes of id, and name
//     trips() - returns all of the trips that a driver has taken
//     passengers() - returns all of the passengers that a driver has taken on a trip
//
// Passenger class:
//
//     A passenger has many trips, and has many drivers through trips.
//     new Passenger() - initialized with a name; returns a JavaScript object that has attributes of id, and name
//     trips() - returns all of the trips that a passenger has taken
//     drivers() - returns all of the drivers that has taken a passenger on a trip
//
// Trip class:
//
//     A trip belongs to a driver and belongs to a passenger.
//     new Trip() - initialized with an instance of driver and an instance of passenger; returns a JavaScript that has attributes id, driverId, and passengerId
//     driver() - returns the driver associated with the trip
//     passenger() - returns the passenger associated with the trip
