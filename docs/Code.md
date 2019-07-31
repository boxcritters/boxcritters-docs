# Code
Class for handling commands and item codes.

Parameter|Type|Description
---|---|---
t|[Socket](https://socket.io/docs/client-api/#Socket)
e|[World](World)

## Properties
### .socket
Type: [Socket](https://socket.io/docs/client-api/#Socket)
### .world
Type: [World](World)

## Methods
### .sendCode(t)
Invokes a command

Parameter|Type|Description
---|---|---
t|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)|Command String

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
### .toggleNicknames()
Hides the player nicknames from the current world.
Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
### .toggleBalloons()
Hides chat messages from the current world

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

