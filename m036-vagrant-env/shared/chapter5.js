db.air_alliances.aggregate([
  {
    "$lookup": {
      "from": "air_routes",
      "let": {
        "airlines": "$airlines"
      },
      "pipeline": [{
          "$match": {
            $expr : {$in :["$airline.name, $airlines"]}
          }
        },
        {
          "$project": {
            "_id": 0,
            "airplanes": "$airplane"
          }
        }
      ],
      "as": "fleet"
    }
  },
  {
    "$project": {
      "name": 1,
      "fleet": {
        "$size": {
          "$reduce": {
            "input": "$fleet.airplanes",
            "initialValue": [],
            "in": {
              "$setUnion": [
                "$$value",
                {
                  "$split": ["$$this", " "]
                }
              ]
            }
          }
        }
      }
    }
  }
])