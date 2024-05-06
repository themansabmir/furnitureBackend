module.exports = class DatabaseService {
  constructor(dbSchema) {
    this.model = dbSchema;
  }

  async save(data) {
    const savedData = await this.model.create(data);
    return savedData;
  }

  createMany = async (data) => {
    const documents = await this.model.insertMany(data);
    return documents;
  };

  getAllDocuments = async (query, options = {}) => {
    const { limit, sort, skip } = options;

    let customQuery = this.model.find(query);

    if (skip !== "" && limit !== "") {
      customQuery = customQuery.limit(limit).skip(skip);
    }

    if (sort) {
      customQuery = customQuery.sort({ [sort]: -1 });
    } else {
      customQuery = customQuery.sort({ createdAt: -1 });
    }

    const documents = await customQuery.exec();
    return documents;
  };

  updateDocument = async (filter, data, options) => {
    const document = await this.model.findOneAndUpdate(filter, data, options);
    return document;
  };

  getDocumentById = async (query) => {
    const document = await this.model.findOne(query);
    return document;
  };

  deleteDocument = async (filter) => {
    const deletedDocument = await this.model.deleteOne(filter);
    return deletedDocument;
  };

  totalCounts = async (query) => {
    const count = await this.model.countDocuments(query);
    return count;
  };
};