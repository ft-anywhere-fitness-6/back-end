#   ft-anywhere-fitness-6

Hello Build Weeks team- welcome to your project channel!

-   Your team will be working on Anywhere Fitness
-   You can check out the product canvas [here: ](https://www.notion.so/lambdaschool/Anywhere-Fitness-fc0ac268df284aaf8db3ae1913fa3134)
-   books  If ya haven’t already, check out the [FT Build Weeks Student Guide: ](https://www.notion.so/lambdaschool/Build-Week-Student-Guide-Full-time-1995e4ff529e40db9f240f46c3d2afd3) -  This will cover anything you need for your Build Week.

# <p align="center">Anywhere Fitness API</p>

## <p align="center"> https://ft-anywhere-fitness-6-0f101cd9a63d.herokuapp.com </p>

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

### [GET] /api/classes

**_RESTRICTED ENDPOINT_**

- Get an array of all classes you can sing up for
  - _requires valid token in authorization header to access_

_What you receive:_

```json
[
    {
        "class_id": 1,
        "Name": "Morning Zen",
        "Type": "yoga",
        "Start time": "08:00:00",
        "Duration": "1 hour",
        "Intensity level": "beginner",
        "Location": "Central Park",
        "Max class size": 30,
        "number_registered": 3
    },
    {
        "class_id": 2,
        "Name": "Boxing Basics",
        "Type": "boxing",
        "Start time": "09:00:00",
        "Duration": "45 min",
        "Intensity level": "intermediate",
        "Location": "YMCA",
        "Max class size": 30,
        "number_registered": 2
    },
    {
        "class_id": 3,
        "Name": "Sunday Spinning",
        "Type": "cycling",
        "Start time": "19:00:00",
        "Duration": "1.5 hours",
        "Intensity level": "advanced",
        "Location": "Gym Z",
        "Max class size": 20,
        "number_registered": 1
    },
    {
        "class_id": 4,
        "Name": "Water Aerobics",
        "Type": "swimming",
        "Start time": "16:45:00",
        "Duration": "2 hours",
        "Intensity level": "advanced",
        "Location": "Community Pool",
        "Max class size": 20,
        "number_registered": 3
    },
    {
        "class_id": 5,
        "Name": "Bikram Yoga",
        "Type": "yoga",
        "Start time": "18:00:00",
        "Duration": "45 min",
        "Intensity level": "intermediate",
        "Location": "Central Park",
        "Max class size": 20,
        "number_registered": 0
    }
]
```

### [GET] /api/classes/:class_id

**_RESTRICTED ENDPOINT_**

- Get information for a specific class
  - _requires valid token in authorization header to access_
  - _(example uses "2" for **:class_id** in URL)_

_What you receive:_

```json
{
  "class_id": 1,
  "class_name": "Morning Zen",
  "class_duration": "1 hour",
  "max_class_size": 15,
  "class_date": "2021-11-17T05:00:00.000Z",
  "start_time": "08:00:00",
  "class_location": "Central Park",
  "instructor": "tom",
  "intensity_level": "beginner",
  "type_description": "yoga",
  "number_registered": 2
}
```

### [GET] /api/classes/:user_id/teaching

** As a instructor (using user_id) to find what you are teaching and how many class in your class **

**_RESTRICTED ENDPOINT_**

- Get an array of classes a specific instructor is teaching
  - _requires valid token in authorization header to access_
- _(example uses "2" for **:user_id** in URL)_
  _What you receive:_

```json
[
    {
        "class_id": 1,
        "Name": "Morning Zen",
        "Type": "yoga",
        "Date": "2021-11-17T08:00:00.000Z",
        "Start time": "08:00:00",
        "Duration": "1 hour",
        "Intensity level": "beginner",
        "instructor": "tom",
        "Location": "Central Park",
        "Max class size": 30
    },
    {
        "class_id": 3,
        "Name": "Sunday Spinning",
        "Type": "cycling",
        "Date": "2021-11-17T08:00:00.000Z",
        "Start time": "19:00:00",
        "Duration": "1.5 hours",
        "Intensity level": "advanced",
        "instructor": "tom",
        "Location": "Gym Z",
        "Max class size": 20
    }
]
```

### [POST] /api/classes/add

** As a instructor you can create virtual punch pass categories for each type of group fitness class they offer   **

**_RESTRICTED ENDPOINT_**

- Add information for a new class
  - _requires valid token in authorization header to access_

_What you send:_

```json
{
      class_name: 'Some Sports',
      class_type: "yoga",
      class_duration: '1 hour',
      class_intensity: 'beginner',
      class_location: 'Central Park',
      start_time: '08:00:00',
      class_date: '2021-11-17',
      class_size: 30,
      user_id: 2         
    },
```

### [GET] /api/classes/:user_id/attending

** As a client (using user_id) to find what classes you are attending  **

**_RESTRICTED ENDPOINT_**

- Get an array of classes a specific user is registered for
  - _requires valid token in authorization header to access_
- _(example uses "4" for **:user_id** in URL)_
  _What you receive:_

```json
[
    {
        "class_id": 1,
        "Name": "Morning Zen",
        "Type": "yoga",
        "Start time": "08:00:00",
        "Duration": "1 hour",
        "Intensity level": "beginner",
        "Location": "Central Park",
        "Max class size": 30
    },
    {
        "class_id": 2,
        "Name": "Boxing Basics",
        "Type": "boxing",
        "Start time": "09:00:00",
        "Duration": "45 min",
        "Intensity level": "intermediate",
        "Location": "YMCA",
        "Max class size": 30
    },
    {
        "class_id": 3,
        "Name": "Sunday Spinning",
        "Type": "cycling",
        "Start time": "19:00:00",
        "Duration": "1.5 hours",
        "Intensity level": "advanced",
        "Location": "Gym Z",
        "Max class size": 20
    },
    {
        "class_id": 4,
        "Name": "Water Aerobics",
        "Type": "swimming",
        "Start time": "16:45:00",
        "Duration": "2 hours",
        "Intensity level": "advanced",
        "Location": "Community Pool",
        "Max class size": 20
    }
]
```


