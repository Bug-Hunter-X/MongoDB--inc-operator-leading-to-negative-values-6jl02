```javascript
// Incorrect use of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")}, {"$inc":{"counter": -1}});
//This will decrement the counter value, if the counter value is already 0, it will become -1.
```