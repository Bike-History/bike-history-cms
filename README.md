# Bike History CMS

```sh
# To install type
$ yarn install
# Start application
$ yarn develop
# Then go to http://localhost:1337
```

To use the application you need a database config in `config/database.js`. See [Strapi Docs](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#database) how to configure your databse correctly.

The `config/server_example.js` file contains an example configuration for localhost development. Be sure to don't forget to change the JWT secret.

For using the API for public calls: activate the public rights for the according API calls (find & findone) in the settings of strapi.

This application uses strapi.
