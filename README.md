Based on the template from https://github.com/facebook/create-react-app

Vanced Website Repo (https://vancedapp.com)

## Developing

### 1. Running
```
npm start
```

## Docker testing

### 1. Building local image
```
docker build --build-arg REACT_APP_VANCED_LATEST_API_URL=https://cors-anywhere.herokuapp.com/https://vancedapp.com/api/v1/latest.json -t vanced/website-v2:local .
```

### 2. Running the container
```
docker-compose up
```

Or to run in detached mode

```
docker-compose up -d
```

### 3. Open the site
Go to http://localhost:4001/