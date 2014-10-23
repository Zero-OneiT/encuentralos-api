module.exports = function(User) {
	User.beforeRemote('**', function(ctx, user, next) {
	  console.log(ctx.methodString, 'was invoked remotely'); // users.prototype.save was invoked remotely
	  next();
	});

};
