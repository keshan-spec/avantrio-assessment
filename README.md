# API Routes
The api consists of 3 main routes

```
POST : api/user/login 
      -> requires a username & password provided in the body
      -> return : JSON web token (expires in 1hr)

GET : api/users 
      -> requires a bearer token return from the login
      -> returns a list of user objects 
         example; [{"id": 1,"name": "Jaison Burnatte"}]
         
GET : api/users/{id}/logs
      -> requires a bearer token return from the login
      -> returns an list of logs for a user with the ID 
         example; 
        {
        "user_id": 1,
        "user": "Jaison Burnatte",
        "logs": [
            {
                "id": 1,
                "date": "2020-02-26",
                "alert_view": false,
                "time": "07:34",
                "latitude": 53.4963900568602,
                "longitude": -0.0812715020512485
            }
        ]}
```