#!/bin/sh

echo 'Copy the value of "nullAirlineNames"'

mongo --quiet --eval 'db.getSiblingDB("m036").airline_claims.aggregate([{$unwind : {path : "$airlines"}},{$match : { "airlines.airlineName" : "-"}},{$count : "nullAirlineNames"}])'
