const User = require('./User');
const Trail = require('./Trail');
const TrailComment = require('./TrailComment');

//create associations
User.hasMany(Trail, {
    foreignKey: 'user_id'
});

Trail.belongsTo(User, {
    foreignKey: 'user_id',
});

TrailComment.belongsTo(User, {
    foreignKey: 'user_id'
  });

TrailComment.belongsTo(Trail, {
    foreignKey: 'trail_id'
});

User.hasMany(TrailComment, {
    foreignKey: 'user_id'
});

Trail.hasMany(TrailComment, {
    foreignKey: 'trail_id'
});

module.exports = {User, Trail, TrailComment};
