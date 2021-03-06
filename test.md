## Classes

<dl>
<dt><a href="#GameObject">GameObject</a></dt>
<dd></dd>
<dt><a href="#World">World</a> ÔçÉ <code><a href="#GameObject">GameObject</a></code></dt>
<dd></dd>
<dt><a href="#Crumb">Crumb</a></dt>
<dd></dd>
<dt><a href="#Map">Map</a></dt>
<dd></dd>
<dt><a href="#Player">Player</a> ÔçÉ <code><a href="#GameObject">GameObject</a></code></dt>
<dd></dd>
<dt><a href="#Room">Room</a></dt>
<dd></dd>
<dt><a href="#AssetContainer">AssetContainer</a> ÔçÉ <code>createjs.Container</code></dt>
<dd></dd>
<dt><a href="#BalloonContainer">BalloonContainer</a></dt>
<dd></dd>
<dt><a href="#BeepContainer">BeepContainer</a></dt>
<dd></dd>
<dt><a href="#BeepItem">BeepItem</a></dt>
<dd></dd>
<dt><a href="#CritterContainer">CritterContainer</a></dt>
<dd></dd>
<dt><a href="#LayerContainer">LayerContainer</a> ÔçÉ <code>createjs.Container</code></dt>
<dd></dd>
<dt><a href="#MapContainer">MapContainer</a></dt>
<dd></dd>
<dt><a href="#MascotContainer">MascotContainer</a></dt>
<dd></dd>
<dt><a href="#MenuContainer">MenuContainer</a></dt>
<dd></dd>
<dt><a href="#MonsterContainer">MonsterContainer</a></dt>
<dd></dd>
<dt><a href="#NicknameContainer">NicknameContainer</a></dt>
<dd></dd>
<dt><a href="#PlayerContainer">PlayerContainer</a></dt>
<dd></dd>
<dt><a href="#RoomContainer">RoomContainer</a></dt>
<dd></dd>
<dt><a href="#Inventory">Inventory</a></dt>
<dd></dd>
<dt><a href="#Background">Background</a></dt>
<dd></dd>
<dt><a href="#CoinsWidget">CoinsWidget</a></dt>
<dd></dd>
<dt><a href="#Beep">Beep</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#calculateDistance">calculateDistance(t, e, i, o)</a> ÔçÆ <code>Number</code></dt>
<dd></dd>
<dt><a href="#calculateAngle">calculateAngle(t, e, i, o)</a> ÔçÆ <code>Number</code></dt>
<dd></dd>
<dt><a href="#findDirection">findDirection(t)</a> ÔçÆ <code>Number</code></dt>
<dd></dd>
<dt><a href="#handleDepthSort">handleDepthSort(t)</a></dt>
<dd></dd>
<dt><a href="#findObjectInArray">findObjectInArray(t, e, i)</a></dt>
<dd></dd>
<dt><a href="#removeObjectInArray">removeObjectInArray(t, e, i)</a></dt>
<dd></dd>
<dt><a href="#createBalloon">createBalloon(t, e)</a></dt>
<dd></dd>
</dl>

<a name="GameObject"></a>

## GameObject
**Kind**: global class  
**Properties**

| Name | Type |
| --- | --- |
| _events | <code>\*</code> | 


* [GameObject](#GameObject)
    * [.on(t, e)](#GameObject+on)
    * [.emit(t)](#GameObject+emit)

<a name="GameObject+on"></a>

### gameObject.on(t, e)
**Kind**: instance method of [<code>GameObject</code>](#GameObject)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

<a name="GameObject+emit"></a>

### gameObject.emit(t)
**Kind**: instance method of [<code>GameObject</code>](#GameObject)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World"></a>

## World ÔçÉ [<code>GameObject</code>](#GameObject)
**Kind**: global class  
**Extends**: [<code>GameObject</code>](#GameObject)  
**Properties**

| Name | Type |
| --- | --- |
| player | [<code>Player</code>](#Player) | 
| room | [<code>Room</code>](#Room) | 
| data | <code>\*</code> | 
| data.settings | <code>\*</code> | 
| data.critters | <code>Array.&lt;Critter&gt;</code> | 


* [World](#World) ÔçÉ [<code>GameObject</code>](#GameObject)
    * [new World(t)](#new_World_new)
    * [.updateData(t, e)](#World+updateData)
    * [.getData(t)](#World+getData)
    * [.getItemData(t)](#World+getItemData)
    * [.getCritterData(t)](#World+getCritterData)
    * [.updatePlayer(t)](#World+updatePlayer)
    * [.getPlayer()](#World+getPlayer)
    * [.handleSocket()](#World+handleSocket)
    * [.handleLogin(t)](#World+handleLogin)
    * [.handleJoinRoom(t)](#World+handleJoinRoom)
    * [.login(t)](#World+login)
    * [.logout()](#World+logout)
    * [.joinRoom(t)](#World+joinRoom)
    * [.sendMessage(t)](#World+sendMessage)
    * [.sendCode(t)](#World+sendCode)
    * [.sendMove(t, e)](#World+sendMove)
    * [.sendTrigger()](#World+sendTrigger)
    * [.updateData(t, e)](#World+updateData)
    * [.getData(t)](#World+getData)
    * [.getItemData(t)](#World+getItemData)
    * [.getCritterData(t)](#World+getCritterData)
    * [.updatePlayer(t)](#World+updatePlayer)
    * [.getPlayer()](#World+getPlayer)
    * [.handleSocket()](#World+handleSocket)
    * [.handleLogin(t)](#World+handleLogin)
    * [.handleJoinRoom(t)](#World+handleJoinRoom)
    * [.login(t)](#World+login)
    * [.logout()](#World+logout)
    * [.joinRoom(t)](#World+joinRoom)
    * [.sendMessage(t)](#World+sendMessage)
    * [.sendCode(t)](#World+sendCode)
    * [.sendMove(t, e)](#World+sendMove)
    * [.sendTrigger()](#World+sendTrigger)
    * [.on(t, e)](#GameObject+on)
    * [.emit(t)](#GameObject+emit)

<a name="new_World_new"></a>

### new World(t)
The current session housing notably the current player and the room they're in.


| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+updateData"></a>

### world.updateData(t, e)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

<a name="World+getData"></a>

### world.getData(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+getItemData"></a>

### world.getItemData(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+getCritterData"></a>

### world.getCritterData(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+updatePlayer"></a>

### world.updatePlayer(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+getPlayer"></a>

### world.getPlayer()
**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+handleSocket"></a>

### world.handleSocket()
**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+handleLogin"></a>

### world.handleLogin(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+handleJoinRoom"></a>

### world.handleJoinRoom(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+login"></a>

### world.login(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+logout"></a>

### world.logout()
**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+joinRoom"></a>

### world.joinRoom(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+sendMessage"></a>

### world.sendMessage(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+sendCode"></a>

### world.sendCode(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+sendMove"></a>

### world.sendMove(t, e)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

<a name="World+sendTrigger"></a>

### world.sendTrigger()
**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+updateData"></a>

### world.updateData(t, e)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

<a name="World+getData"></a>

### world.getData(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+getItemData"></a>

### world.getItemData(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+getCritterData"></a>

### world.getCritterData(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+updatePlayer"></a>

### world.updatePlayer(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+getPlayer"></a>

### world.getPlayer()
**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+handleSocket"></a>

### world.handleSocket()
**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+handleLogin"></a>

### world.handleLogin(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+handleJoinRoom"></a>

### world.handleJoinRoom(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+login"></a>

### world.login(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+logout"></a>

### world.logout()
**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+joinRoom"></a>

### world.joinRoom(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+sendMessage"></a>

### world.sendMessage(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+sendCode"></a>

### world.sendCode(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="World+sendMove"></a>

### world.sendMove(t, e)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

<a name="World+sendTrigger"></a>

### world.sendTrigger()
**Kind**: instance method of [<code>World</code>](#World)  
<a name="GameObject+on"></a>

### world.on(t, e)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

<a name="GameObject+emit"></a>

### world.emit(t)
**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Crumb"></a>

## Crumb
**Kind**: global class  

* [Crumb](#Crumb)
    * [new Crumb(t)](#new_Crumb_new)
    * [.get(t)](#Crumb+get)

<a name="new_Crumb_new"></a>

### new Crumb(t)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Crumb+get"></a>

### crumb.get(t)
**Kind**: instance method of [<code>Crumb</code>](#Crumb)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Map"></a>

## Map
**Kind**: global class  

* [Map](#Map)
    * [new Map(t)](#new_Map_new)
    * [.getTile(t, e)](#Map+getTile)
    * [.getTrigger(t)](#Map+getTrigger)
    * [.getLayer(t)](#Map+getLayer)
    * [.new(t, e)](#Map+new)

<a name="new_Map_new"></a>

### new Map(t)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Map+getTile"></a>

### map.getTile(t, e)
**Kind**: instance method of [<code>Map</code>](#Map)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

<a name="Map+getTrigger"></a>

### map.getTrigger(t)
**Kind**: instance method of [<code>Map</code>](#Map)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Map+getLayer"></a>

### map.getLayer(t)
**Kind**: instance method of [<code>Map</code>](#Map)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Map+new"></a>

### map.new(t, e)
**Kind**: instance method of [<code>Map</code>](#Map)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

<a name="Player"></a>

## Player ÔçÉ [<code>GameObject</code>](#GameObject)
**Kind**: global class  
**Extends**: [<code>GameObject</code>](#GameObject)  

* [Player](#Player) ÔçÉ [<code>GameObject</code>](#GameObject)
    * [new Player(t)](#new_Player_new)
    * [.getPlayerId()](#Player+getPlayerId)
    * [.getCrumb()](#Player+getCrumb)
    * [.updateData(t)](#Player+updateData)
    * [.getCoins()](#Player+getCoins)
    * [.updateCoins(t)](#Player+updateCoins)
    * [.updateGear(t)](#Player+updateGear)
    * [.addItem(t)](#Player+addItem)
    * [.removeItem(t)](#Player+removeItem)
    * [.isItemActive(t)](#Player+isItemActive)
    * [.getItemFromInventory(t)](#Player+getItemFromInventory)
    * [.on(t, e)](#GameObject+on)
    * [.emit(t)](#GameObject+emit)

<a name="new_Player_new"></a>

### new Player(t)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Player+getPlayerId"></a>

### player.getPlayerId()
**Kind**: instance method of [<code>Player</code>](#Player)  
<a name="Player+getCrumb"></a>

### player.getCrumb()
**Kind**: instance method of [<code>Player</code>](#Player)  
<a name="Player+updateData"></a>

### player.updateData(t)
**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Player+getCoins"></a>

### player.getCoins()
**Kind**: instance method of [<code>Player</code>](#Player)  
<a name="Player+updateCoins"></a>

### player.updateCoins(t)
**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Player+updateGear"></a>

### player.updateGear(t)
**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Player+addItem"></a>

### player.addItem(t)
**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Player+removeItem"></a>

### player.removeItem(t)
**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Player+isItemActive"></a>

### player.isItemActive(t)
**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Player+getItemFromInventory"></a>

### player.getItemFromInventory(t)
**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="GameObject+on"></a>

### player.on(t, e)
**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

<a name="GameObject+emit"></a>

### player.emit(t)
**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Room"></a>

## Room
**Kind**: global class  

* [Room](#Room)
    * [new Room(t)](#new_Room_new)
    * [.addPlayer(t)](#Room+addPlayer)
    * [.getPlayer(t)](#Room+getPlayer)
    * [.removePlayer(t)](#Room+removePlayer)
    * [.updatePlayer(t)](#Room+updatePlayer)

<a name="new_Room_new"></a>

### new Room(t)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Room+addPlayer"></a>

### room.addPlayer(t)
**Kind**: instance method of [<code>Room</code>](#Room)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Room+getPlayer"></a>

### room.getPlayer(t)
**Kind**: instance method of [<code>Room</code>](#Room)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Room+removePlayer"></a>

### room.removePlayer(t)
**Kind**: instance method of [<code>Room</code>](#Room)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Room+updatePlayer"></a>

### room.updatePlayer(t)
**Kind**: instance method of [<code>Room</code>](#Room)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="AssetContainer"></a>

## AssetContainer ÔçÉ <code>createjs.Container</code>
**Kind**: global class  
**Extends**: <code>createjs.Container</code>  

* [AssetContainer](#AssetContainer) ÔçÉ <code>createjs.Container</code>
    * [new AssetContainer(t)](#new_AssetContainer_new)
    * [.showEdit()](#AssetContainer+showEdit)

<a name="new_AssetContainer_new"></a>

### new AssetContainer(t)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="AssetContainer+showEdit"></a>

### assetContainer.showEdit()
**Kind**: instance method of [<code>AssetContainer</code>](#AssetContainer)  
<a name="BalloonContainer"></a>

## BalloonContainer
**Kind**: global class  

* [BalloonContainer](#BalloonContainer)
    * [new BalloonContainer(t)](#new_BalloonContainer_new)
    * [.showMessage(t)](#BalloonContainer+showMessage)

<a name="new_BalloonContainer_new"></a>

### new BalloonContainer(t)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="BalloonContainer+showMessage"></a>

### balloonContainer.showMessage(t)
**Kind**: instance method of [<code>BalloonContainer</code>](#BalloonContainer)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="BeepContainer"></a>

## BeepContainer
**Kind**: global class  

* [BeepContainer](#BeepContainer)
    * [new BeepContainer(t, e)](#new_BeepContainer_new)
    * [.show(t)](#BeepContainer+show)
    * [.alert(t, e)](#BeepContainer+alert)
    * [.message(t)](#BeepContainer+message)
    * [.grant(t)](#BeepContainer+grant)

<a name="new_BeepContainer_new"></a>

### new BeepContainer(t, e)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

<a name="BeepContainer+show"></a>

### beepContainer.show(t)
**Kind**: instance method of [<code>BeepContainer</code>](#BeepContainer)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="BeepContainer+alert"></a>

### beepContainer.alert(t, e)
**Kind**: instance method of [<code>BeepContainer</code>](#BeepContainer)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

<a name="BeepContainer+message"></a>

### beepContainer.message(t)
**Kind**: instance method of [<code>BeepContainer</code>](#BeepContainer)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="BeepContainer+grant"></a>

### beepContainer.grant(t)
**Kind**: instance method of [<code>BeepContainer</code>](#BeepContainer)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="BeepItem"></a>

## BeepItem
**Kind**: global class  
<a name="new_BeepItem_new"></a>

### new BeepItem(t)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="CritterContainer"></a>

## CritterContainer
**Kind**: global class  

* [CritterContainer](#CritterContainer)
    * [new CritterContainer(t)](#new_CritterContainer_new)
    * [.addItem(t, e)](#CritterContainer+addItem)
    * [.removeItem(t)](#CritterContainer+removeItem)
    * [.updateGear(t)](#CritterContainer+updateGear)
    * [.updateDirection(t)](#CritterContainer+updateDirection)
    * [.updateDepth()](#CritterContainer+updateDepth)
    * [.updateState(t)](#CritterContainer+updateState)

<a name="new_CritterContainer_new"></a>

### new CritterContainer(t)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="CritterContainer+addItem"></a>

### critterContainer.addItem(t, e)
**Kind**: instance method of [<code>CritterContainer</code>](#CritterContainer)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

<a name="CritterContainer+removeItem"></a>

### critterContainer.removeItem(t)
**Kind**: instance method of [<code>CritterContainer</code>](#CritterContainer)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="CritterContainer+updateGear"></a>

### critterContainer.updateGear(t)
**Kind**: instance method of [<code>CritterContainer</code>](#CritterContainer)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="CritterContainer+updateDirection"></a>

### critterContainer.updateDirection(t)
**Kind**: instance method of [<code>CritterContainer</code>](#CritterContainer)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="CritterContainer+updateDepth"></a>

### critterContainer.updateDepth()
**Kind**: instance method of [<code>CritterContainer</code>](#CritterContainer)  
<a name="CritterContainer+updateState"></a>

### critterContainer.updateState(t)
**Kind**: instance method of [<code>CritterContainer</code>](#CritterContainer)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="LayerContainer"></a>

## LayerContainer ÔçÉ <code>createjs.Container</code>
**Kind**: global class  
**Extends**: <code>createjs.Container</code>  

* [LayerContainer](#LayerContainer) ÔçÉ <code>createjs.Container</code>
    * [new LayerContainer(t, e, i)](#new_LayerContainer_new)
    * [.addSprite(t, e)](#LayerContainer+addSprite)
    * [.addGroup(t, e)](#LayerContainer+addGroup)

<a name="new_LayerContainer_new"></a>

### new LayerContainer(t, e, i)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 
| i | <code>\*</code> | 

<a name="LayerContainer+addSprite"></a>

### layerContainer.addSprite(t, e)
**Kind**: instance method of [<code>LayerContainer</code>](#LayerContainer)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

<a name="LayerContainer+addGroup"></a>

### layerContainer.addGroup(t, e)
**Kind**: instance method of [<code>LayerContainer</code>](#LayerContainer)  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

<a name="MapContainer"></a>

## MapContainer
**Kind**: global class  
<a name="new_MapContainer_new"></a>

### new MapContainer(t)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="MascotContainer"></a>

## MascotContainer
**Kind**: global class  
<a name="new_MascotContainer_new"></a>

### new MascotContainer(t)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="MenuContainer"></a>

## MenuContainer
**Kind**: global class  
<a name="new_MenuContainer_new"></a>

### new MenuContainer(t)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="MonsterContainer"></a>

## MonsterContainer
**Kind**: global class  
<a name="new_MonsterContainer_new"></a>

### new MonsterContainer(t)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="NicknameContainer"></a>

## NicknameContainer
**Kind**: global class  
<a name="new_NicknameContainer_new"></a>

### new NicknameContainer(t)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="PlayerContainer"></a>

## PlayerContainer
**Kind**: global class  
<a name="new_PlayerContainer_new"></a>

### new PlayerContainer(t, e)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

<a name="RoomContainer"></a>

## RoomContainer
**Kind**: global class  
<a name="new_RoomContainer_new"></a>

### new RoomContainer(t)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="Inventory"></a>

## Inventory
**Kind**: global class  
<a name="new_Inventory_new"></a>

### new Inventory(e)

| Param | Type |
| --- | --- |
| e | <code>\*</code> | 

<a name="Background"></a>

## Background
**Kind**: global class  
<a name="CoinsWidget"></a>

## CoinsWidget
**Kind**: global class  
<a name="Beep"></a>

## Beep
**Kind**: global class  
<a name="new_Beep_new"></a>

### new Beep(t, e)

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

<a name="calculateDistance"></a>

## calculateDistance(t, e, i, o) ÔçÆ <code>Number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| t | <code>Number</code> | 
| e | <code>Number</code> | 
| i | <code>Number</code> | 
| o | <code>Number</code> | 

<a name="calculateAngle"></a>

## calculateAngle(t, e, i, o) ÔçÆ <code>Number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| t | <code>Number</code> | 
| e | <code>Number</code> | 
| i | <code>Number</code> | 
| o | <code>Number</code> | 

<a name="findDirection"></a>

## findDirection(t) ÔçÆ <code>Number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| t | <code>Number</code> | 

<a name="handleDepthSort"></a>

## handleDepthSort(t)
**Kind**: global function  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 

<a name="findObjectInArray"></a>

## findObjectInArray(t, e, i)
**Kind**: global function  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 
| i | <code>\*</code> | 

<a name="removeObjectInArray"></a>

## removeObjectInArray(t, e, i)
**Kind**: global function  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 
| i | <code>\*</code> | 

<a name="createBalloon"></a>

## createBalloon(t, e)
**Kind**: global function  

| Param | Type |
| --- | --- |
| t | <code>\*</code> | 
| e | <code>\*</code> | 

