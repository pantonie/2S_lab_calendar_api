# 2-s-lab-calendar-api

a [Sails v1](https://sailsjs.com) application


### Links

+ [Get started](https://sailsjs.com/get-started)
+ [Sails framework documentation](https://sailsjs.com/documentation)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Mon May 14 2018 12:46:16 GMT+0300 (Ryssland TZ 2, normaltid) using Sails v1.0.2.

<!-- Internally, Sails used [`sails-generate@1.15.25`](https://github.com/balderdashy/sails-generate/tree/v1.15.25/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

###List if fields
+ name (required)
+ surname (required)
+ date (required)
+ eventType (required)
+ comment (optional)

###How to use

+ Full list of events: GET ip_address/calendar
+ Get event for dedicated date: GET ip_address/calendar?date=10.04
+ Get event by id: GET ip_address/calendar/5b055e1ea371a0eab0357aa4
+ Get event by name: GET ip_address/calendar?name=Anton
+ Get event by fields combination: GET ip_address/calendar?name=Anton&surname=Panteleev
+ Create new event: POST ip_address/calendar with JSON
+ Remove event: DELETE ip_address:/calendar/5b055e1ea371a0eab0357aa4
+ Update event: PUT ip_address:/calendar/5b055e1ea371a0eab0357aa4


