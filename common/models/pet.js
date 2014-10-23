module.exports = function(Pet) {
	Pet.beforeRemote('**', function(ctx, pet, next) {
	  console.log(ctx.methodString, 'a pet list'); // users.prototype.save was invoked remotely
	  next();
	});

};
