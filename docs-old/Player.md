<h1>Player</h1>
Description

Parameter|Type|Description
---|---|---
t|[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
t.playerId|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.nickname|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.critterID|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.inventory|[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
t.friends|[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
t.gear|[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
t.gear.mask|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.gear.hand|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.gear.eyes|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.gear.head|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.gear.neck|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.gear.ears|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.gear.body|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.gear.belt|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.gold|[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

## Properties
### .playerId
Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
### .nickname
Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
### .critterId
Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
### .inventory
Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
### .friends
Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
### .gear
Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Property|Type|Description
---|---|---
.gear.mask|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
.gear.hand|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
.gear.eyes|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
.gear.head|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
.gear.neck|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
.gear.ears|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
.gear.body|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
.gear.belt|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### .status
Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
### .level
Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
### .weapon
Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
### .def
Type: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
Default: 10
### .str
Type: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
Default: 10
### .armour
Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
### .isDead
Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
### .gold
Type: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### .goldInBank
Type: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### .gems
Type: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### .coins
Type: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### .xp
Type: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### .hp
Type: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### .mp
Type: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
Default: 100

## Methods
### .getPlayerId()
Returns: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
### .handleSocket(t)
Parameter|Type|Description
---|---|---
t|[Socket](https://socket.io/docs/client-api/#Socket)

Reacts to Sockets:
* [`"updatePlayer"`](../Socket/in/updatePlayer)
* [`"playerData"`](../Socket/in/playerData)

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
### .updateData(t)
Parameter|Type|Description
---|---|---
t|[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
t.inventory|[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
t.gear|[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
t.gear.mask|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.gear.hand|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.gear.eyes|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.gear.head|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.gear.neck|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.gear.ears|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.gear.body|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
t.gear.belt|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
### .updateGear(t)
Parameter|Type|Description
---|---|---
t|[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Emits Socket:
* [`"updateGear"`](socket/out/playerData)


Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
### .addItem(t)
Equips an item from the players inventory to the gear.

Parameter|Type|Description
---|---|---
t|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)|Item Id String

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
### .removeItem(t)
Parameter|Type|Description
---|---|---
t|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)|Gear slot name

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
### .isItemActive(t)
Parameter|Type|Description
---|---|---
t|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)|Item ID String

Returns:[bool](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
### .getItemFromInventory(t)
Parameter|Type|Description
---|---|---
t|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)|Item ID String

Returns: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Property|Type|Description
---|---|---
.getItemFromInventory(t).itemId|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
.getItemFromInventory(t).slot|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
