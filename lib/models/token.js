var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

/*
  Token Schema
 */
var TokenSchema = new Schema({
    user:     { type: ObjectId, required: true, ref: 'Citizen' }
  , scope: { type: String, enum: ['password-reset'], required: true }
  , createdAt:  { type: Date, default: Date.now }
});

TokenSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Token', TokenSchema);