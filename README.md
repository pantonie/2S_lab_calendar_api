# 2s lab calendar api

API made with [Sails v1](https://sailsjs.com) application


### Links

+ [Get started](https://sailsjs.com/get-started)
+ [Sails framework documentation](https://sailsjs.com/documentation)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### List of fields managed by API
+ name (required)
+ surname (required)
+ date (required)
+ eventType (required)
+ comment (optional)

### How to use API

+ Full list of events: GET ip_address/calendar
+ Get event for dedicated date: GET ip_address/calendar?date=10.04
+ Get event by id: GET ip_address/calendar/5b055e1ea371a0eab0357aa4
+ Get event by name: GET ip_address/calendar?name=Anton
+ Get event by fields combination: GET ip_address/calendar?name=Anton&surname=Panteleev
+ Create new event: POST ip_address/calendar with JSON
+ Remove event: DELETE ip_address:/calendar/5b055e1ea371a0eab0357aa4
+ Update event: PUT ip_address:/calendar/5b055e1ea371a0eab0357aa4


