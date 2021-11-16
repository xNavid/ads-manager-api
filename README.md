# Ads Manager APIs

## Overview

This is the APIs for the ads manager. The requirement mentioned to use PHP yet I decided to use express becuase my very limited available time. Since I knew I am much more experienced in Node I wanted to use a framework to finish the work in one seating. It took apporx an hour to finish and push the code. The missing parts have been addressed below as todos

## Scope

I have created the CRUD operations for ads.

## Project Link

[Project is hosted on Glitch!](https://tasty-desert-dead.glitch.me/)

## API docs

### Create Ad

create a single ad resource.

### Endpoint

`POST /ads`

### Request Headers

None

### Request params

| Param       | Type         | Required |
| ----------- | ------------ | -------- |
| title       | string       | true     |
| link        | string       | true     |
| valid_until | date(string) | true     |

### Response

```
[
  {
    "_id": "619364cbd5a4129232254db1",
    "title": "Brand New Ad Horizon",
    "link": "google.com",
    "valid_until": "2022-11-20T00:00:00.000Z",
    "createdAt": "2021-11-16T07:59:07.600Z",
    "updatedAt": "2021-11-16T07:59:07.600Z",
    "__v": 0
  },
]

```

### Get Ad

Get a single ad resource by id.

### Endpoint

`GET /ads/:id`

### Request Headers

None

### Request params

| Param | Type   | Required |
| ----- | ------ | -------- |
| id    | string | true     |

### Response

```
{
  "_id": "619364cbd5a4129232254dac",
  "title": "New Ad Campaign",
  "link": "google.com",
  "valid_until": "2021-12-20T00:00:00.000Z",
  "createdAt": "2021-11-16T07:59:07.559Z",
  "updatedAt": "2021-11-16T07:59:07.559Z",
  "__v": 0
}

```

### Get Ads

Get all ads resource.

### Endpoint

`GET /ads`

### Request Headers

None

### Request params

None

### Response

```
[
  {
    "_id": "619364cbd5a4129232254db1",
    "title": "Brand New Ad Horizon",
    "link": "google.com",
    "valid_until": "2022-11-20T00:00:00.000Z",
    "createdAt": "2021-11-16T07:59:07.600Z",
    "updatedAt": "2021-11-16T07:59:07.600Z",
    "__v": 0
  },
  {
    "_id": "619364cbd5a4129232254dac",
    "title": "New Ad Campaign",
    "link": "google.com",
    "valid_until": "2021-12-20T00:00:00.000Z",
    "createdAt": "2021-11-16T07:59:07.559Z",
    "updatedAt": "2021-11-16T07:59:07.559Z",
    "__v": 0
  }
]

```

### Update Ad

Update a single ad resource by id.

### Endpoint

`PUT /ads/:id`

### Request Headers

None

### Request params

| Param       | Type         | Required |
| ----------- | ------------ | -------- |
| id          | string       | true     |
| title       | string       | false    |
| link        | string       | false    |
| valid_until | date(string) | false    |

### Response

```
{
  "_id": "619364cbd5a4129232254dac",
  "title": "New Ad Campaign",
  "link": "google.com",
  "valid_until": "2021-12-20T00:00:00.000Z",
  "createdAt": "2021-11-16T07:59:07.559Z",
  "updatedAt": "2021-11-16T07:59:07.559Z",
  "__v": 0
}

```

### Delete Ad

Delete a single ad resource by id.

### Endpoint

`DELETE /ads/:id`

### Request Headers

None

### Request params

| Param | Type   | Required |
| ----- | ------ | -------- |
| id    | string | true     |

### Response

```
{
  "_id": "619364cbd5a4129232254dac",
  "title": "New Ad Campaign",
  "link": "google.com",
  "valid_until": "2021-12-20T00:00:00.000Z",
  "createdAt": "2021-11-16T07:59:07.559Z",
  "updatedAt": "2021-11-16T07:59:07.559Z",
  "__v": 0
}

```

## Todo

- [ ] Add authentication with JWT and add middleware for it.
- [ ] Add user model and hierarchy for marketing agents to manage and assign ad campaignes.
- [ ] Add unit tests for endpoint functions
- [ ] As project grows and APIs use multiple functions one can separate the functions in APIs by creating `/services` directory
- [ ] Add performance simulation and testing
- [ ] Whitelist IPs that can acess and request to server.
