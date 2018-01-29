db.createCollection("claims", {
    validator : {
      $jsonSchema : {
        bsonType : "object",
        required: ["airportCode", "airlineName", "claims"],
        additionalProperties: false,
        properties: {
            _id: {
                bsonType: "objectId"
            },
            airportCode: {
                bsonType: "string",
                minLength: 3
            },
            airportName: {
                bsonType: "string"
            },
            airlineName: {
                bsonType: "string",
                minLength: 5
            },
            claims: {
                bsonType: "object",
                properties: {
                    itemCategory: {
                        bsonType: "array",
                        maxItems: 3
                    },
                    amount: {
                        bsonType: "string",
                        pattern: "^\\$"
                    }
                }
            }    
        }
      }
    }
  }
)