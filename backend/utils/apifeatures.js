class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword, //check for regex
            $options: "i", // Case insensitive ke liye "i"
          },
        }
      : {};

    this.query = this.query.find({ ...keyword }); // This is the keyword made by regex
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    //removing some fields for category
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach((key) => {
      delete queryCopy[key];
    });

    //Filter for price and rating...string ke liye diff filter coz we want rangle
    //MongoDb operator ke aagey '$' lgta hai

    let queryStr = JSON.stringify(queryCopy); //Object ->String

    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr)); //Back to json Object using json.parse

    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = ApiFeatures;
