// find one document from the movieDetails collection
db.movieDetails.findOne();

// get all movieDetails collection indexes
db.movieDetails.getIndexes();

// aggregate all films where countries is equal to "Costa Rica" and sort by ``title``
db.movieDetails.aggregate([
  {"$match": {"year": { "$gt": 2010}, "countries": "Costa Rica"}},
  {"$sort": {"title":1}}
]);

// hint an index on aggregation
db.movieDetails.aggregate([
  {"$match": {"year": { "$gt": 2010}, "countries": "Costa Rica"}},
  {"$sort": {"title":1}}],
{"hint":{"countries": 1}});

// hint an index and explain
db.movieDetails.aggregate([
  {"$match": {"year": { "$gt": 2010}, "countries": "Costa Rica"}},
  {"$sort": {"title":1}}],
{"hint":{"countries": 1}, "explain": true});
