=====
World
=====
extends :doc:`GameObject<./GameObject>`
The current session housing notably the current player and the room they're in.


.. list-table:: Title
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 

Properties
==========
.. _World.player:


.player
-------
Type: `Player <Player>`

.. _World.room:


.room
-----
Type: `Socket <https://socket.io/docs/client-api/#Socket>`

.. _World.data:


.data
-----


.. _World.settings:


.settings
---------


.. _World.stage:


.stage
------


.. _World.data[undefined]:


.data[undefined]
----------------


.. _World.itemSS:


.itemSS
-------


.. _World.player:


.player
-------


.. _World.room:


.room
-----


.. _World.data[undefined]:


.data[undefined]
----------------


.. _World.itemSS:


.itemSS
-------


.. _World.player:


.player
-------


.. _World.room:


.room
-----


.. _World._events:


._events
--------
Type: `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`


Methods
=======
.. _World.updateData:

.updateData(t, e)
-----------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.getData:

.getData(t)
-----------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.getItemData:

.getItemData(t)
---------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.getCritterData:

.getCritterData(t)
------------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.updatePlayer:

.updatePlayer(t)
----------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.getPlayer:

.getPlayer()
------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.handleSocket:

.handleSocket()
---------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.handleLogin:

.handleLogin(t)
---------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.handleJoinRoom:

.handleJoinRoom(t)
------------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.login:

.login(t)
---------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.logout:

.logout()
---------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.joinRoom:

.joinRoom(t)
------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.sendMessage:

.sendMessage(t)
---------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.sendCode:

.sendCode(t)
------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.sendMove:

.sendMove(t, e)
---------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.sendTrigger:

.sendTrigger()
--------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.updateData:

.updateData(t, e)
-----------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.getData:

.getData(t)
-----------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.getItemData:

.getItemData(t)
---------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.getCritterData:

.getCritterData(t)
------------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.updatePlayer:

.updatePlayer(t)
----------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.getPlayer:

.getPlayer()
------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.handleSocket:

.handleSocket()
---------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.handleLogin:

.handleLogin(t)
---------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.handleJoinRoom:

.handleJoinRoom(t)
------------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.login:

.login(t)
---------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.logout:

.logout()
---------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.joinRoom:

.joinRoom(t)
------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.sendMessage:

.sendMessage(t)
---------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.sendCode:

.sendCode(t)
------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.sendMove:

.sendMove(t, e)
---------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.sendTrigger:

.sendTrigger()
--------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.on:

.on(t, e)
---------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
.. _World.emit:

.emit(t)
--------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`
     - 
