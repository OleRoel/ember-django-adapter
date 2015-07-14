Ember Django Adapter
====================

[![Circle CI](https://circleci.com/gh/dustinfarris/ember-django-adapter/tree/master.png?style=badge)](https://circleci.com/gh/dustinfarris/ember-django-adapter/tree/master)

[![Ember Observer Score](http://emberobserver.com/badges/ember-django-adapter.svg)](http://emberobserver.com/addons/ember-django-adapter)

[Ember Data][] is a core Ember.js library that provides a store and ORM for working
with your Ember models.  Ember Data works with JSON API out of the box, however
"Ember Data is designed to be agnostic to the underlying persistence mechanism".
To that end, Ember Data encourages the use of adapters to manage communication with
various backend APIs.

This adapter enables the use of [Django REST Framework][] as an API backend for
Ember Data.  The addon is compatible with [ember-cli][] version 0.2.7 and higher, Ember 1.12.1 and
higher, and Ember Data v1.13.5.


Community
---------

* IRC: #ember-django-adapter on freenode
* Issues: [ember-django-adapter/issues][]
* Website: [dustinfarris.com/ember-django-adapter][]


Goals
-----

* Support applications built with Django REST Framework and Ember.js by
  offering easy-to-use addons, and providing documentation and guidance.
* Ensure as much as possible that the Ember.js and Django REST Framework
  documentation is up-to-date and accurate as it pertains to their combined
  usage.
* Promote the adoption of Ember.js and Django REST Framework and actively take
  part in their respective communities.



[Ember Data]: https://github.com/emberjs/data
[Django REST Framework]: http://www.django-rest-framework.org/
[ember-cli]: http://www.ember-cli.com/
[ember-django-adapter/issues]: https://github.com/dustinfarris/ember-django-adapter/issues
[dustinfarris.com/ember-django-adapter]: http://dustinfarris.com/ember-django-adapter/
[coalesce-find-requests-option]: http://emberjs.com/api/data/classes/DS.RESTAdapter.html#property_coalesceFindRequests
