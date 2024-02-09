const Product = require('../models/product');

const getAllProducts = async (req, res) => {
  const { CurrentGrade, sort , HEIName, select } = req.query;
  const queryObject = {};

  if (CurrentGrade) {
    queryObject.CurrentGrade = CurrentGrade;
  }

  if (HEIName) {
    queryObject.HEIName = {$regex: HEIName, $options: 'i'};
  }

  let apiData = Product.find(queryObject);

  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);



  console.log(queryObject)

  const myData = await apiData;
  res.status(200).json({ myData, nbHits: myData.length});
};


const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query).sort("-HEIName");

    res.status(200).json({ myData });
  };



module.exports = {getAllProducts, getAllProductsTesting};






