var debug = require('debug')('boot:create-role-resolver');
module.exports = function(app){
	var User = app.models.user,
		Role = app.models.Role,
		RoleMapping = app.models.RoleMapping;

	User.create([
		{username: 'admin', email: 'admin@local.com', password:'olakease'},
		{username: 'dresendez', email: 'aion.chrno@gmail.com', password:'diego4rmando'}
	], function(err, user){
		if (err) return debug('%j', err);

		debug(user);

		Role.create({
			name: 'admin'
		},function(err, role){
			if(err) return debug('%j', err);
			debug(role);

			role.principals.create({
				principalType: RoleMapping.USER,
				principalId:user[0].id
			}, function(err, principal){
				if(err) return debug('%j', err);
				debug(principal);

			});
		});

	});

};

