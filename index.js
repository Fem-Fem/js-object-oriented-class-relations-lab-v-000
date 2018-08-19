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
    let passenger_ids = this.trips().map(trip => {return trip.passengerId})
    let passengers = passenger_ids.map(id => {
      return store.passengers.find(passenger => {
        return passenger.id == id
      })
    })
    return passengers
  }

}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId

    store.passengers.push(this)
  }

  drivers() {
    let driver_ids = this.trips().map(trip => {return trip.driverId})
    let drivers = driver_ids.map(id => {
      return store.drivers.find(passenger => {
        return driver.id == id
      })
    })
    return drivers
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
