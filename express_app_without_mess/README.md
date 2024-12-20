```
social_media_app_men/
├── config/
│   └── db.js                    # MongoDB connection setup
├── user_app/
│   ├── controllers/
│   │   └── user_controller.js    # User-related controllers
│   ├── models/
│   │   ├── user.js               # User model
│   │   └── follow.js             # Follow model
│   ├── routes/
│   │   └── user_routes.js        # Routes for user-related operations
│   ├── services/
│   │   └── user_service.js       # User-related business logic
├── post_app/
│   ├── controllers/
│   │   └── post_controller.js    # Post-related controllers
│   ├── models/
│   │   └── post.js               # Post model
│   ├── routes/
│   │   └── post_routes.js        # Routes for post-related operations
│   ├── services/
│   │   └── post_service.js       # Post-related business logic
├── migrations/                   # Migration scripts
├── shared/
│   └── utils/
│       └── validation.js         # Utility functions
├── .env                          # Environment variables (DB_URI, PORT)
├── app.js                        # Entry point to set up and configure Express
├── server.js                     # Server startup file
└── migrate-mongo-config.js       # Migration configuration
```

## Add the following to .zshrc
1. `alias mongod='brew services run mongodb-community'`
2. `alias mongod-status='brew services list'`
3. `alias mongod-stop='brew services stop mongodb-community'`

### Source the .zshrc file by running the following
`source ~/.zshrc`

### Open `mongosh` and run the following to check if documents were created
1. `show databases`
2. `use social_media_app`
3. `show tables`
4. `db.getCollectionNames()`