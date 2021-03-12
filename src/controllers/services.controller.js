const Service = require('../models/service');

exports.getServices = async (req, res) => {
    const services = await Service.find();
    res.json(services)
}

exports.getService = async (req, res) => {
    const service = await Service.findById(req.params.serviceId);
    res.status(200).json(service)
}

exports.createService = async(req, res) => {
    const { name, subtitle, price, description } = req.body
    const newService = new Service({ name, subtitle, price, description });
    const serviceSaved = await newService.save()
    res.status(201).json(serviceSaved)
}

exports.updateService = async (req, res) => {
    const updateService = await Service.findByIdAndUpdate(req.params.serviceId, req.body, {
        new: true
    })
    res.status(200).json(updateService)
}

exports.deleteService = async (req, res) => {
    await Service.findByIdAndDelete(req.params.serviceId)
    res.status(204).json()
}