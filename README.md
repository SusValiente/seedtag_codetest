# Seedtag Codetest 2: Backend Engineer

This project was made as a technical test sent by the company "Seedtag" 

The mission was to program the target selection module of a combat droid by creating a service that proccesses and retrieves the ideal coordinate from a list using the rules specified.

## Available Scripts

There are two default scripts you can run:

### `npm run watch`

Run the service in the development mode.\
By default it will run in 8888 port. \
It will automatically restart the service if there are any changes.\
For more information, check [nodemon's repo](https://github.com/remy/nodemon)

### `npm run test`

Runs all the unit tests specified inside the project

### Main endpoint
#### POST 'http://{host}:{port}/radar'

Body example:

{
    "protocols": [
        "assist-allies",
        "closest-enemies",
        "avoid-mech"
    ],
    "scan": [
        {
            "enemies": {
                "number": 10,
                "type": "soldier"
            },
            "allies": 3,
            "coordinates": {
                "y": 35,
                "x": 5
            }
        },
        {
            "enemies": {
                "number": 20,
                "type": "soldier"
            },
            "coordinates": {
                "y": 5,
                "x": 35
            }
        },
        {
            "enemies": {
                "number": 20,
                "type": "mech"
            },
            "coordinates": {
                "y": 5,
                "x": 35
            }
        }
    ]
}

Response example:

{
    "y": 35,
    "x": 5
}