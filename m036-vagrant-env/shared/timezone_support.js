// insert document on timezone collection
db.timezones.insert( {"now": ISODate("2017-10-24T21:21:54.892Z") } );

// find the inserted document
db.timezones.findOne();

// project the UTC hour and Olson hour
db.timezones.aggregate([
  { "$project": {
    "hourUTC": { "$hour": { "date": "$now", "timezone": "-05" }},
    "hourOlson": { "$hour": { "date": "$now", "timezone": "America/New_York" }}
  }}
]);
