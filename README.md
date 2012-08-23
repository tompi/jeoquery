jeoquery
========

jQuery wrapper for easily calling geonames.org jsonp services,
and a few ui-controls for populating html selects and inputs
with geonames data.

Why use it?
-----------

There are heaps of server side libs that wrap geonames services.
Many web-projects use these libs and make their web pages do a
request against their own server which in turn does another request
against the geonames services. This is really not necessary, use the
geonames service directly from the users browser, and avoid superflous
latency!

How to use
----------

You need to:

* Download and include jeoquery.js
* Get an account at geonames: http://www.geonames.org/login (it's free)
* Set this account before using any methods: jeoquery.userName = 'geonames-user';

Check out the demo-pages for more info: http://tompi.github.com/jeoquery/

Maintainer
----------

Thomas Haukland
thomas.haukland@gmail.com

License
-------

The same as jquery: http://jquery.org/license
