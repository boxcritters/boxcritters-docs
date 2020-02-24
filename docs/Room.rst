====
Room
====


Represents a room of players

Constructor
===========
.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
   * - t
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`_
     - 
   * - t.roomId
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`_
     - Room ID
   * - t.name
     - `String <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>`_
     - Room Name
   * - t.triggers
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`_
     - 
   * - t.map
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`_
     - Map Setup
   * - t.map.triggers
     - `Object <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>`_
     - 
   * - t.layers
     - `Array.<Object> <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>`_
     - 
   * - t.players
     - `Array.<Object> <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>`_
     - Players in the room

Properties
==========
.. _Room.roomId:


.roomId
-------


.. _Room.name:


.name
-----
Type: `String <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>`_

.. _Room.players:


.players
--------


.. _Room.layers:


.layers
-------
Type: `Array.<Object> <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>`_

.. _Room.map:


.map
----
Type: :doc:`Map`_

.. _Room.e:


.e
--


.. _Room.i:


.i
--


.. _Room.players[undefined]:


.players[undefined]
-------------------



Methods
=======
.. _Room.addPlayer:

.addPlayer()
------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
.. _Room.getPlayer:

.getPlayer()
------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
.. _Room.removePlayer:

.removePlayer()
---------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
.. _Room.updatePlayer:

.updatePlayer()
---------------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Parameter
     - Type
     - Description
