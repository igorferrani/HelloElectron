function Service (service) {
  this.url = service.url || ''
  this.request = service.request || false
  this.status = service.status || ''
}

module.exports = Service
