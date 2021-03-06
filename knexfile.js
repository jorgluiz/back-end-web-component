/* eslint-disable linebreak-style */
require('dotenv').config()

module.exports = {
	//mode development
	development: {
		client: 'pg',
		connection: {
			database: process.env.DB_DATABASE,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: `${__dirname}/api/database/migrations`
		},
	},

	//mode production
	production: {
		client: 'pg',
		connection: {
			connectionString: process.env.DATABASE_URL,
			ssl: { rejectUnauthorized: false },
		},

		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: `${__dirname}/api/database/migrations`
		},
	},
}