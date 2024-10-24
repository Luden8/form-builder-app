# FormBuilderApp

## Installation
```yarn install```

## Setting up postgres bd
```docker-compose up```

## Run microservices
FE Application
```
// FE app
nx serve client
// API gateway
nx serve api
// Steps service
nx serve steps-microservice
// Answers service
nx serve answers-microservice
// Users service
nx serve user-microservice
```

Due to time constraints, the Docker containers were not configured, but their use was implied.
