
const newsModel = require('../models/news.model');


module.exports.addNews = async (req, res) => {
    const { title, desc } = req.body;
    await newsModel.insertMany({ title, desc, createdBy:req.id});
    res.json({ message: 'success' });
};

module.exports.allNews = async (req, res) => {
    let news = await newsModel.find({})
    res.json({ message: "success", news });
};

module.exports.userNews = async (req, res) => {
    const createdBy = req.header('id')
    let news = await newsModel.find({ createdBy })
    res.json({ message: "success", news });
};


module.exports.update = async (req, res) => {
    const { title, desc, _id } = req.body;
    await newsModel.findByIdAndUpdate({ _id }, { title, desc })
    res.json({ message: "success" });
}


module.exports.deleteNews = async (req, res) => {
    const { _id } = req.body;
    await newsModel.deleteOne({ _id })
    res.json({ message: "success" });
}
