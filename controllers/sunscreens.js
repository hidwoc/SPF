import Suncreen from '../models/sunscreen.js'

export const getSuncreens = async (req, res) => {
  res.json([])
  // try {
  //   const suncreens = await Suncreen.find()
  //   console.log(suncreens)
  //   res.json(suncreens)
  // } catch (error) {
  //   console.log(error.message)
  //   res.status(500).json({ error: error.message })
  // }
}

export const getOneSuncreen = async (req, res) => {
  try {
    const { id } = req.params
    const suncreen = await Suncreen.findById(id).populate('userId')
    if (suncreen) {
      return res.json(suncreen)
    }
    res.status(404).json({ message: 'Suncreen not found!' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const createSuncreen = async (req, res) => {
  try {
    const suncreen = new Suncreen(req.body)
    await suncreen.save()
    res.status(201).json(suncreen)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const editSuncreen = async (req, res) => {
  const { id } = req.params
  const suncreen = await Suncreen.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(suncreen)
}

export const deleteSuncreen = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Suncreen.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Suncreen deleted')
    }
    throw new Error('Suncreen not found')
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}
