#!/bin/sh

mongorestore --db TSA --collection claims /shared/document_validation.bson

echo "Copy the following output into the validator"

mongo --quiet --eval 'db.getSiblingDB("TSA").claims.count()'
