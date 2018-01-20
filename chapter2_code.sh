mongod -f /shared/mongod0.conf
mongod -f /shared/mongod1.conf
mongod -f /shared/mongod2.conf

mongo --host m036:30000 --eval 'rs.initiate({ _id: "CS", members: [{_id: 0, host:"m036:30000"}, {_id: 1, host:"m036:30001"}, {_id: 2, host:"m036:30002"}]})'
