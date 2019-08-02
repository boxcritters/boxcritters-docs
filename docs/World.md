---
title: World
---
The current session housing notably the current player and the room they're in.

Parameter|Type|Description
---|---|---
t|[HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) \| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
e|[Socket](https://socket.io/docs/client-api/#Socket)
i|[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

# Properties
## .settings
Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Property|Type|Description
---|---|---
.settings.lobby|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)|Starting RoomID

## .events
Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
## .player
Type: [Player](Player)
## .critters
Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
## .items
Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
## .stage
Type: [Stage](https://www.createjs.com/docs/easeljs/classes/Stage.html)
## .room
Type: [Room](Room)
## .socket
Type: [Socket](https://socket.io/docs/client-api/#Socket)
## .chat
Type: [Chat](Chat)
## .code
Type: [Code](Code)

# Methods
## .handleSocket(i, o)
Parameter|Type|Description
---|---|---
i|[Socket](https://socket.io/docs/client-api/#Socket)
o|[World](World)

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
## .sendMessage(t)
Parameter|Type|Description
---|---|---
t|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)|Message Text

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
## .login(t)
Parameter|Type|Description
---|---|---
t|[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)|Login Ticket

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
## .logout()
Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
## .joinRoom(t)
Parameter|Type|Description
---|---|---
t|[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)|RoomID

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
## .addRoom(t)
Parameter|Type|Description
---|---|---
t|[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)|Room Creation Data

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
## .removeRoom()
Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
### .addMenu(t)

<div class="admonition attention">
    <p class="first admonition-title">Attention</p>
    <p class="last">
        The `t` paramater in this function is seemingly not used. Perhaps rocket snail may use it in the future for Menu creation data.
    </p>
</div>

Parameter|Type|Description
---|---|---
t|[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)|Unused in the function

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
## .removeMenu()
Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
