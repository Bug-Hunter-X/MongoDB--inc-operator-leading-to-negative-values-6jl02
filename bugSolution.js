```javascript
// Solution using $inc with conditional update
db.collection('myCollection').updateOne(
  { "_id": ObjectId("someId"), "counter": { $gt: 0 } },
  { "$inc": { "counter": -1 } }
);
//This will decrement the counter only if the counter is greater than 0.
```