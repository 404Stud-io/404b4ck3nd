const ComboService = require('../models/comboService');

exports.getComboService = async (req, res) => {
    const comboServices = await ComboService.find();
    res.json(comboServices)
}

exports.createComboService = async (req, res) => {
    const { name } = req.body
    const newComboService = new ComboService({ name });
    const comboServiceSaved = await newComboService.save()
    res.status(201).json(comboServiceSaved)
}

exports.updateComboService = async (req, res) => {
    const updateComboService = await ComboService.findByIdAndUpdate(req.params.comboServiceId, req.body, {
        new: true
    })
    res.status(200).json(updateComboService)
}

exports.deleteComboService = async (req, res) => {
    await ComboService.findByIdAndDelete(req.params.comboServiceId)
    res.status(204).json()
}