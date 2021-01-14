# Trelia Main Gallery

An existing micro-service on a property listing site was scaled to 600 requests per second with 10 million primary listings through database query optimization, load-balancing, and pooling. An iterative process involving stress-testing using New Relic and loader.io to identify bottlenecks was used to determine the where optimizations could be applied. After optimizing, the scaled microservice was hosted on AWS EC2 after being dockerized and horizontally scaled with nginx as the load balancer.

## Statistics Showcase

### New Relic Instance Stress-Testing
<div>
<img src="https://i.imgur.com/VPgp5z2.png">
</div>

### Loader.io Stress-Testing
<div>
<img src="https://i.imgur.com/iGH7uzM.png" height="500">
</div>

### Post-Optimization Query Times
<div>
<img src="https://i.imgur.com/ySPw9WH.png">
</div>

## Server API

### Add a property
- POST localhost:8040/api/v1/listings

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
      "address": "String",
      "images": [ "String" ],
      "price": "Number",
      "bed": "Number",
      "bath": "Number"
    }
  ```

### Get property info
- GET localhost:8040/api/v1/listings/:id

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
      "address": "String",
      "images": [ "String" ],
      "listing_id": "Number",
      "price": "Number",
      "bed": "Number",
      "bath": "Number"
    }
  ```
### Update a property
- PATCH localhost:8040/api/v1/listings/:id

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
      "address": "String",
      "images": [ "String" ],
      "price": "Number",
      "bed": "Number",
      "bath": "Number"
    }
  ```
### Delete a property
- DELETE locahost:8040/api/v1/listings/:id

  **Path Parameters:**
  - `id` property id

  **Success Status Code:** `204`


### Add an image to a property
- POST localhost:8040/api/v1/listings/:id/images

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
- GET localhost:8040/api/v1/listings/:id/images/:imageid

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
- GET localhost:8040/api/v1/listings/:id/images

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
- PATCH localhost:8040/api/v1/listings/:id/images/:imageid

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
- DELETE locahost:8040/api/v1/listings/:id/images/:imageid

  **Path Parameters:**
  - `id` property id
  - `imageid` image id

  **Success Status Code:** `204`