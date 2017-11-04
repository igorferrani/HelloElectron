function Service (service) {
  this.url = service.url || ''
  this.request = service.request || false
  this.status = service.status || -1
}

module.exports = Service
