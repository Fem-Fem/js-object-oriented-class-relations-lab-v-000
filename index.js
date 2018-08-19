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

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers() {
    debugger
    passenger_ids = this.trips().map(trip => trip.passengerId)
    passengers = passenger_ids
  }

}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId

    store.passengers.push(this)
  }

  drivers() {
    return this.trips().map(driver => driver)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id

    store.trips.push(this)

  }

  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId
    })
  }

  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }

}
