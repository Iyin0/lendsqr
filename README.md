# LENDSQR MVP

## Table of Content

* [Background](#background)
* [API Schema](#api-schema)
* [Getting Started](#getting-started)
    * [API Language](#api-language) 
    * [Database](#database) 
    * [Postman](#postman) 
* [APIs](#apis)
    * [Create an Account - POST](#create-an-account---post)
    * [Login to your Account - GET](#login---post)
    * [Make a Deposit - POST](#make-a-deposit---post)
    * [Make a Transfer - POST](#make-a-transfer---post)
    * [Make a withdrawal - POST](#make-a-withdrawal---post)
    * [Get your Account balance - GET](#get-your-account-balance---get)

## Background
This is a Minimum viable product (MVP) wallet service API. The API is developed for Lendsqr test. This app provides users the ability to:
* Create an account.
* Fund the account.
* Transfer to other users.
* Withdraw from the account.

## API Schema

![Schema of the Account and Transaction tables with user_id as the foreign key](./server/schema.png "Schema Diagram")


## Getting Started

### API Language

NodeJS, ExpressJS, Javascript

### Database

MYSQL, KnexJS ORM.

### Postman

[View Postman Documentation Here](https://documenter.getpostman.com/view/23863686/2s847BVGEj).


[View Postman Collection Here](https://www.postman.com/cryosat-operator-45283811/workspace/bb816340-6bd5-4e3f-8933-9182a1fdb548/collection/23863686-1c74878c-995a-43d2-b561-509bec27d07b?action=share&creator=23863686).

## APIs

### Create an Account - POST

```
https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/accounts/register
```

This provides the user the means to create an account.
The user has to provide the following:
* First name
* Last name
* Email address
* Password

These information retrieved from the user is stored and can be accessed for login.
The account balance upon login is defaulted to 0.

##### Body

```
{
            "fname": "Mary",
            "lname": "Jane",
            "email": "maryjane@lendsqr.com",
            "password": "maryjane"
}
```
##### Example
###### Good Request
```
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/accounts/register',
  'headers': {
            "Content-Type": "application/json"
  },
  body: '{  
            "fname": "Mary",
            "lname": "Jane",
            "email": "maryjane@lendsqr.com",
            "password": "maryjane"
  }'

};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

```
###### Response
```
New User created
```
###### Bad Request
```
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/accounts/register',
  'headers': {
            "Content-Type": "application/json"
  },
  body: '{  
            "fname": "Mary",
            "lname": "Jane",
            "email": "maryjane@lendsqr.com",
            "password": "maryjane"
  }'

};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

```
###### Response
```
User Already Exist
```


### Login - POST

```
https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/accounts/login
```

This provide the user an access to the account they created. The user provides:
* The email address they created their account with.
* The password used during the account creation.

The information provided by the user is cross referenced with the existing accounts in the database.
If the account exists, the following data is returned:
* a message of successful login
* user_id.
* first_name.
* last_name.
* email.
* password.
* acc_balance (the current account balance).
* date of account creation.

The user_id returned is to be stored as this is the major key to future transactions on the app.

##### Body

```
{
    "email": "maryjane@lendsqr.com",
    "password": "maryjane"
}
```
##### Examples
###### Good Request
```
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/accounts/login',
  'headers': {
            "Content-Type": "application/json"
  },
  body: '{
            "email": "maryjane@lendsqr.com",
            "password": "maryjane"
        }'

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


```
###### Response
```
{
    "message": "Successfully Authenticated",
    "user_id": 31,
    "first_name": "Mary",
    "last_name": "Jane",
    "email": "maryjane@lendsqr.com",
    "acc_balance": 0
}
```

###### Bad Request - Wrong email or password
```
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/accounts/login',
  'headers': {
            "Content-Type": "application/json"
  },
  body: '{
            "email": "maryjane@lendsqr.com",
            "password": "maryjaneeee"
        }''

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


```
###### Response
```
{
    "message": "User does not exist",
}
```

### Get User - GET

```
https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/accounts/user
```

This returns the information of the authenticated user.

##### Examples
###### Good Request
```
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/accounts/user',
  'headers': {
            "Content-Type": "application/json"
  },

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


```
###### Response
```
{
    "user_id": 31,
    "first_name": "Mary",
    "last_name": "Jane",
    "email": "maryjane@lendsqr.com",
    "acc_balance": 0
}
```



### Make a Deposit - POST

```
https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/user/deposit
```

This grants the authenticated user access to fund their account. The API takes in 2 fields which includes:
* user_id
* amount to be deposited.

Upon a successful deposit, a response is returned stating the transaction was successful.
If the transaction fails, a response is returned stating the reason of failure.

##### Body

```
{
    "user_id": 11,
    "amount": 10000
}
```
##### Examples
###### Good Request
```
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/user/deposit',
  'headers': {
            "Content-Type": "application/json"
  },
  body: '{
            "user_id": 11,
            "amount": 10000
            }'

};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

```
###### Response
```
"Account Credited Successfully!!!"
```

###### Bad Request - Depositing 0 amount
```
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/user/deposit',
  'headers': {
            "Content-Type": "application/json"
  },
  body: '{
            "user_id": 11,
            "amount": 0
            }'

};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

```
###### Response
```
"You cannot credit your account with no money!"
```


### Make a Transfer - POST

```
https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/user/transfer
```

This grants the authenticated user access to transfer funds from their account to another user's account. The API takes in 3 fields which includes:
* user_id
* amount to be transferred.
* recipient_id (the user the money is being transferred to)

Upon a successful transfer, a response is returned stating the transaction was successful.
If the transaction fails, a response is returned stating the reason of failure.


#### Good Request

##### Body

```
{
    "user_id": 81,
    "amount": 6000,
    "recipient_id": 71
}
```
##### Examples
###### Good Request
```
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/user/transfer',
  'headers': {
            "Content-Type": "application/json"
  },
  body: '{
            "user_id": 81,
            "amount": 6000,
            "recipient_id": 71
            }'

};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


```
###### Response
```
"Transfer Successful!!!"
```

###### Bad Request - Transferring 0 amount
```
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/user/transfer',
  'headers': {
            "Content-Type": "application/json"
  },
  body: '{
            "user_id": 81,
            "amount": 0,
            "recipient_id": 71
            }'

};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


```
###### Response
```
"You cannot transfer no money"
```


###### Bad Request - Non-existing Recipient
```
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/user/transfer',
  'headers': {
            "Content-Type": "application/json"
  },
  body: '{
            "user_id": 81,
            "amount": 0,
            "recipient_id": 7
            }'

};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


```
###### Response
```
"Your recipient does not exist"
```


###### Bad Request - Transferring to same user
```
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/user/transfer',
  'headers': {
            "Content-Type": "application/json"
  },
  body: '{
            "user_id": 81,
            "amount": 0,
            "recipient_id": 81
            }'

};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


```
###### Response
```
"You cannot transfer to yourself"
```


### Make a withdrawal - POST

```
https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/user/withdraw
```

This grants the authenticated user access to withdraw from their account. The API takes in 2 fields which includes:
* user_id
* amount to be withdrawn.

Upon a successful withdrawal, a response is returned stating the transaction was successful.
If the transaction fails, a response is returned stating the reason of failure.

##### Body

```
{
    "user_id": 81,
    "amount": 5000
}
```
##### Examples
###### Good Request
```
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/user/withdraw',
  'headers': {
            "Content-Type": "application/json"
  },
  body: '{
            "user_id": 81,
            "amount": 5000
            }'

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


```
###### Response
```
"Withdrawal Successful!!!"
```

###### Bad Request - Withdrawing 0 amount
```
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/user/withdraw',
  'headers': {
            "Content-Type": "application/json"
  },
  body: '{
            "user_id": 81,
            "amount": 0
            }'

};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


```
###### Response
```
"You cannot withdraw no money"
```


### Get your Account balance - GET

```
https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/user/balance
```

This API link returns the current account balance of the user.

##### Body

```
{
    "user_id": 81
}
```
##### Example
###### Good Request
```
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/user/balance',
  'headers': {
            "Content-Type": "application/json"
  },
  body: '{
            "user_id": 81
            }'

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


```
###### Response
```
"Your balance is 18000"
```