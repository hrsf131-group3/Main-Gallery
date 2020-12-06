# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Server API

### Add a property
- POST api.localhost:8040/v1/homes

  **Path Parameters:**
    - `id` property id

  **Success Status Code:** `204`

  **Request Body:**
  ```json
    {
      "topHeader": {
        "sale": "Boolean",
        "pending": "Boolean",
        "new": "Boolean",
        "construction": "Boolean"
      },
      "images": [ "String" ],
      "price": "Number",
      "bed": "Number",
      "bath": "Number"
    }
  ```

### Get property info
- GET api.localhost:8040/v1/homes/:id

  **Path Parameters:**
  - `id` property id

  **Success Status Code:** `200`

  **Returns:** JSON
  ```json
    {
      "topHeader": {
        "sale": "Boolean",
        "pending": "Boolean",
        "new": "Boolean",
        "construction": "Boolean"
      },
      "images": [ "String" ],
      "listing_id": "Number",
      "price": "Number",
      "bed": "Number",
      "bath": "Number"
    }
  ```
### Update a property
- PATCH api.localhost:8040/v1/homes/:id

  **Path Parameters:**
  - `id` property id

  **Success Status Code:** `204`

  **Request Body:** Expects JSON with keys to be updated
  ```json
    {
      "topHeader": {
        "sale": "Boolean",
        "pending": "Boolean",
        "new": "Boolean",
        "construction": "Boolean"
      },
      "images": [ "String" ],
      "price": "Number",
      "bed": "Number",
      "bath": "Number"
    }
  ```
### Delete a property
- DELETE api.locahost:8040/v1/homes/:id

  **Path Parameters:**
  - `id` property id

  **Success Status Code:** `204`


### Add an image to a property
- POST api.localhost:8040/v1/homes/:id/image

  **Path Parameters:**
    - `id` property id

  **Success Status Code:** `204`

  **Request Body:** Expects JSON with keys to be updated
  ```json
    {
      "image": "String",
    }
  ```

### Get an image from a property
- GET api.localhost:8040/v1/homes/:id/images/:imageid

  **Path Parameters:**
  - `id` property id
  - `imageid` image id

  **Success Status Code:** `200`

  **Returns:** JSON
  ```json
    {
      "image": "String",
    }
  ```
### Get all images from a property
- GET api.localhost:8040/v1/homes/:id/images/

  **Path Parameters:**
  - `id` property id
  - `imageid` image id

  **Success Status Code:** `200`

  **Returns:** JSON
  ```json
    {
      "images": [ "String" ],
    }
  ```
### Update an image in a property
- PATCH api.localhost:8040/v1/homes/:id/images/:imageid

  **Path Parameters:**
  - `id` property id
  - `imageid` image id

  **Success Status Code:** `204`

  **Request Body:**
  ```json
    {
      "newimageurl": "String",
    }
  ```
### Delete an image from a property
- DELETE api.locahost:8040/v1/homes/:id/images:imageid

  **Path Parameters:**
  - `id` property id
  - `imageid` image id

  **Success Status Code:** `204`