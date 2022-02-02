#   ft-anywhere-fitness-6

Hello Build Weeks team- welcome to your project channel!

-   Your team will be working on Anywhere Fitness
-   You can check out the product canvas [here: ](https://www.notion.so/lambdaschool/Anywhere-Fitness-fc0ac268df284aaf8db3ae1913fa3134)
-   books  If ya haven’t already, check out the [FT Build Weeks Student Guide: ](https://www.notion.so/lambdaschool/Build-Week-Student-Guide-Full-time-1995e4ff529e40db9f240f46c3d2afd3) -  This will cover anything you need for your Build Week.

# <p align="center">Anywhere Fitness API</p>

## <p align="center"> https://fitness-06.herokuapp.com </p>

## <p align="center">--- REGISTER / LOGIN / USERS -----</p>

## Dummy Login Info

<details>
<summary>Usernames/Passwords</summary>

```json
[
  {
    "user_id": 1,
    "username": "tom",
    "password": "1234",
    "role_name": "instructor"
  },
  {
    "user_id": 2,
    "username": "jerry",
    "password": "1234",
    "role_name": "instructor"
  },
  {
    "user_id": 3,
    "username": "garfield",
    "password": "1234",
    "role_name": "client"
  },
  {
    "user_id": 4,
    "username": "odie",
    "password": "1234",
    "role_name": "client"
  }
]
```

</details>

### [POST] /api/auth/register

- Register a new user
  - _username required (must be between 3 and 30 characters)_
  - _password required (must be between 5 and 200 characters)_
  - _role required (must be between 'client' or 'instructor', insructor requires auth code)_

_What you send:_

```json client
{
  "username": "SampleUser",
  "password": "1234",
  "role_name": "client"
}
```

```json instructor
{
  "username": "SampleUser",
  "password": "1234",
  "role_name": "instructor",
  "auth_code": "auth_instructor_123"
}
```

_What you receive:_

```json
{
  "message": "Account successfully created. Please login.",
  "newUser": {
    "user_id": 15,
    "username": "SampleUser",
    "role_name": "instructor"
  }
}
```

### [POST] /api/auth/login

- Login
  - _username and password required_
  - _provides a newly created token_

_What you send:_

```json
{
  "username": "SampleUser",
  "password": "1234"
}
```

_What you receive:_

```json
{
  "message": "welcome, SampleUser",
  "role": "instructor",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6Ik5ld1VzZXIiLCJpYXQiOjE2MjcyNjY4MDYsImV4cCI6MTYyNzM1MzIwNn0.J1dFd3ghUPYVTodsaAU3Bg2RRcmYM_1oOe-96nvLLUg"
}
```

##

### [GET] /api/users/

**_RESTRICTED ENDPOINT_**

- Get an array of users
  - _requires valid token in authorization header to access_

_What you receive:_

```json
[
  {
    "user_id": 1,
    "username": "tom",
    "role_name": "instructor"
  },
  {
    "user_id": 2,
    "username": "jerry",
    "role_name": "instructor"
  },
  {
    "user_id": 3,
    "username": "garfield",
    "role_name": "client"
  },
  {
    "user_id": 4,
    "username": "odie",
    "role_name": "client"
  }
]
```

### [GET] /api/users/:user_id

**_RESTRICTED ENDPOINT_**

- Get information on a specific user
  - _requires valid token AND a role of 'instructor' to access_

_What you receive:_

```json
{
  "user_id": 3,
  "username": "garfield",
  "role_name": "client"
}
```

##

## <p align="center">---------- CLASSES ----------</p>