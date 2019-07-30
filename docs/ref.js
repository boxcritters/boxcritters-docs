var itemSS, itemData;
function World(t, e, i) {
    console.info("-----------------------------------"),
    console.info("[BOX CRITTERS]"),
    console.info("A new world created by RocketSnail"),
    console.info("-----------------------------------"),
    console.info("https://twitter.com/rocketsnail"),
    console.info("https://rocketsnail.com"),
    console.info("-----------------------------------"),
    this.settings = i || {},
    this.events = {},
    this.player,
    this.critters = {},
    this.items = {},
    this.stage = new createjs.Stage(t),
    this.stage.room = new createjs.Container,
    this.stage.menu = new createjs.Container,
    this.stage.gear = new createjs.Container,
    this.stage.beep = new createjs.Container,
    this.stage.addChild(this.stage.room),
    this.stage.addChild(this.stage.menu),
    this.stage.addChild(this.stage.gear),
    this.stage.addChild(this.stage.beep),
    this.room,
    e && (this.socket = e,
    this.chat = new Chat(e,this),
    this.code = new Code(e,this),
    this.handleSocket(e, this));
    var o = this;
    createjs.Ticker.framerate = 60,
    createjs.Ticker.on("tick", function(t) {
        o.stage.update(t)
    })
}
function Beep(t, e) {
    this.socket = t || {},
    this.world = e || {},
    this.mc = new createjs.Container;
    var i = this;
    t && t.on("beep", function(t) {
        t.item && i.showItem(t.item)
    })
}
function Code(t, e) {
    this.socket = t,
    this.world = e
}
function Player(t) {
    this.playerId = t.playerId,
    this.nickname = t.nickname,
    this.critterId = t.critterId,
    this.inventory = t.inventory,
    this.friends = t.friends,
    this.gear = t.gear || {},
    this.status,
    this.level,
    this.weapon,
    this.def = 10,
    this.str = 10,
    this.armour,
    this.isDead,
    this.gold = t.gold,
    this.goldInBank,
    this.xp,
    this.hp = 100,
    this.mp,
    this.gems,
    localStorage.setItem("playerId", this.playerId),
    this.handleSocket(world.socket)
}
function World(t, e, i) {
    console.info("-----------------------------------"),
    console.info("[BOX CRITTERS]"),
    console.info("A new world created by RocketSnail"),
    console.info("-----------------------------------"),
    console.info("https://twitter.com/rocketsnail"),
    console.info("https://rocketsnail.com"),
    console.info("-----------------------------------"),
    this.settings = i || {},
    this.events = {},
    this.player,
    this.critters = {},
    this.items = {},
    this.stage = new createjs.Stage(t),
    this.stage.room = new createjs.Container,
    this.stage.menu = new createjs.Container,
    this.stage.gear = new createjs.Container,
    this.stage.beep = new createjs.Container,
    this.stage.addChild(this.stage.room),
    this.stage.addChild(this.stage.menu),
    this.stage.addChild(this.stage.gear),
    this.stage.addChild(this.stage.beep),
    this.room,
    e && (this.socket = e,
    this.chat = new Chat(e,this),
    this.code = new Code(e,this),
    this.handleSocket(e, this));
    var o = this;
    createjs.Ticker.framerate = 60,
    createjs.Ticker.on("tick", function(t) {
        o.stage.update(t)
    })
}
World.prototype.handleSocket = function(i, o) {
    i.on("connect", function() {
        console.info("CONNECTED"),
        console.info("-----------------------------------")
    }),
    i.on("disconnect", function() {}),
    i.on("login", function(t) {
        recordEvent("login");
        var e = new Player(t.player);
        o.player = e,
        console.info("PlayerId:", e.playerId),
        console.info("Nickname:", e.nickname),
        console.info("-----------------------------------"),
        o.critters = t.critters,
        setInterval(function() {
            e.getPlayerId() != e.playerId && i.disconnect()
        }, 1e4),
        o.settings.lobby && o.joinRoom(o.settings.lobby)
    }),
    i.on("joinRoom", function(t) {
        recordEvent("joinRoom", {
            roomId: t.roomId
        }),
        o.addRoom(t),
        o.addMenu(t)
    }),
    i.on("A", function(t) {
        o.room.addPlayer(t)
    }),
    i.on("R", function(t) {
        o.room.removePlayer(t)
    }),
    i.on("G", function(t) {
        o.room.updateGear(t)
    }),
    i.on("X", function(t) {
        o.room.movePlayer(t)
    }),
    i.on("E", function(t) {
        o.room.addEffect(t)
    }),
    i.on("M", function(t) {
        o.room.showMessage(t)
    })
}
,
World.prototype.sendMessage = function(t) {
    "/" === (t = t.trim()).substr(0, 1) ? this.code.sendCode(t) : this.chat.sendMessage(t, function(t) {
        var e = {
            i: this.player.playerId,
            n: this.player.nickname,
            m: t
        };
        recordEvent("sendMessage"),
        this.room.showMessage(e)
    }
    .bind(this))
}
,
World.prototype.login = function(t) {
    this.socket.open(),
    this.socket.emit("login", {
        ticket: t
    })
}
,
World.prototype.logout = function() {
    sessionStorage.clear(),
    this.socket.disconnect()
}
,
World.prototype.joinRoom = function(t) {
    this.socket.emit("joinRoom", {
        roomId: t
    })
}
,
World.prototype.addRoom = function(t) {
    this.removeRoom(),
    this.room = new RoomContainer(t);
    var o = this;
    this.room.on("click", function(t) {
        var e = Math.floor(t.localX)
          , i = Math.floor(t.localY);
        o.socket.emit("click", {
            x: e,
            y: i
        }),
        o.room.movePlayer({
            i: o.player.playerId,
            x: e,
            y: i
        })
    }),
    this.stage.room.addChild(this.room)
}
,
World.prototype.removeRoom = function() {
    this.room && (this.stage.room.removeAllChildren(),
    delete this.room)
}
,
World.prototype.addMenu = function(t) {
    this.removeMenu();
    var e = new MenuContainer(this);
    this.stage.menu.addChild(e)
}
,
World.prototype.removeMenu = function() {
    this.menu && this.stage.menu.removeAllChildren()
}
,
Beep.prototype.show = function() {
    var t = this
      , e = new createjs.Graphics;
    e.beginFill("black"),
    e.drawRect(0, 0, 850, 480);
    var i = new createjs.Shape(e);
    i.alpha = .6,
    i.on("click", function() {
        t.close()
    }),
    this.mc.addChild(i),
    this.mc.visible = !0
}
,
Beep.prototype.hide = function() {
    this.mc.visible = !1
}
,
Beep.prototype.close = function() {
    this.mc.removeAllChildren(),
    this.mc.visible = !1
}
,
Beep.prototype.showItem = function(t) {
    this.show();
    var e = new BeepItem(t);
    this.mc.addChild(e.mc)
}
,
Beep.prototype.showCard = function(t) {}
,
Beep.prototype.showWarning = function(t) {}
,
Code.prototype.sendCode = function(t) {
    var e = t.split(" ")
      , i = e.shift().substr(1).toLowerCase();
    switch (recordEvent("code", {
        code: i
    }),
    i) {
    case "nicknames":
        this.toggleNicknames();
        break;
    case "balloons":
        this.toggleBalloons();
        break;
    case "join":
        var o = e[0];
        o && world.joinRoom(o.toLowerCase());
        break;
    case "darkmode":
        toggleDarkmode && toggleDarkmode();
    default:
        this.socket.emit("code", {
            code: i,
            options: e
        })
    }
}
,
Code.prototype.toggleNicknames = function() {
    var t = this.world.room.nicknames;
    t.visible ? t.visible = !1 : t.visible = !0
}
,
Code.prototype.toggleBalloons = function() {
    var t = this.world.room.balloons;
    t.visible ? t.visible = !1 : t.visible = !0
}
,
Player.prototype.getPlayerId = function() {
    return localStorage.getItem("playerId")
}
,
Player.prototype.handleSocket = function(t) {
    var e = this;
    t.on("updatePlayer", function(t) {
        e.updateData(t)
    }),
    t.on("playerData", function(t) {
        e.updateData(t)
    })
}
,
Player.prototype.updateData = function(t) {
    t.gear && (this.gear = t.gear),
    t.inventory && this.inventory.push(t.inventory)
}
,
Player.prototype.updateGear = function(t) {
    world.socket.emit("updateGear", t)
}
,
Player.prototype.addItem = function(t) {
    var e = this.getItemFromInventory(t);
    e && (this.gear[e.slot] = e.itemId)
}
,
Player.prototype.removeItem = function(t) {
    delete this.gear[t]
}
,
Player.prototype.isItemActive = function(t) {
    for (var e in this.gear)
        if (this.gear[e] == t)
            return !0;
    return !1
}
,
Player.prototype.getItemFromInventory = function(t) {
    for (var e = 0; e < this.inventory.length; e++)
        if (this.inventory[e].itemId == t)
            return this.inventory[e]
}
,
World.prototype.handleSocket = function(i, o) {
    i.on("connect", function() {
        console.info("CONNECTED"),
        console.info("-----------------------------------")
    }),
    i.on("disconnect", function() {}),
    i.on("login", function(t) {
        recordEvent("login");
        var e = new Player(t.player);
        o.player = e,
        console.info("PlayerId:", e.playerId),
        console.info("Nickname:", e.nickname),
        console.info("-----------------------------------"),
        o.critters = t.critters,
        setInterval(function() {
            e.getPlayerId() != e.playerId && i.disconnect()
        }, 1e4),
        o.settings.lobby && o.joinRoom(o.settings.lobby)
    }),
    i.on("joinRoom", function(t) {
        recordEvent("joinRoom", {
            roomId: t.roomId
        }),
        o.addRoom(t),
        o.addMenu(t)
    }),
    i.on("A", function(t) {
        o.room.addPlayer(t)
    }),
    i.on("R", function(t) {
        o.room.removePlayer(t)
    }),
    i.on("G", function(t) {
        o.room.updateGear(t)
    }),
    i.on("X", function(t) {
        o.room.movePlayer(t)
    }),
    i.on("E", function(t) {
        o.room.addEffect(t)
    }),
    i.on("M", function(t) {
        o.room.showMessage(t)
    })
}
,
World.prototype.sendMessage = function(t) {
    "/" === (t = t.trim()).substr(0, 1) ? this.code.sendCode(t) : this.chat.sendMessage(t, function(t) {
        var e = {
            i: this.player.playerId,
            n: this.player.nickname,
            m: t
        };
        recordEvent("sendMessage"),
        this.room.showMessage(e)
    }
    .bind(this))
}
,
World.prototype.login = function(t) {
    this.socket.open(),
    this.socket.emit("login", {
        ticket: t
    })
}
,
World.prototype.logout = function() {
    sessionStorage.clear(),
    this.socket.disconnect()
}
,
World.prototype.joinRoom = function(t) {
    this.socket.emit("joinRoom", {
        roomId: t
    })
}
,
World.prototype.addRoom = function(t) {
    this.removeRoom(),
    this.room = new RoomContainer(t);
    var o = this;
    this.room.on("click", function(t) {
        var e = Math.floor(t.localX)
          , i = Math.floor(t.localY);
        o.socket.emit("click", {
            x: e,
            y: i
        }),
        o.room.movePlayer({
            i: o.player.playerId,
            x: e,
            y: i
        })
    }),
    this.stage.room.addChild(this.room)
}
,
World.prototype.removeRoom = function() {
    this.room && (this.stage.room.removeAllChildren(),
    delete this.room)
}
,
World.prototype.addMenu = function(t) {
    this.removeMenu();
    var e = new MenuContainer(this);
    this.stage.menu.addChild(e)
}
,
World.prototype.removeMenu = function() {
    this.menu && this.stage.menu.removeAllChildren()
}
;
var boot = boot || {};
function Chat(t, e) {
    this.socket = t,
    (this.world = t).on("message", function(t) {})
}
function calculateDistance(t, e, i, o) {
    var n = i - t
      , s = o - e;
    return Math.sqrt(n * n + s * s)
}
function calculateAngle(t, e, i, o) {
    var n = i - t
      , s = e - o
      , r = Math.atan2(n, s)
      , a = Math.floor(180 * r / Math.PI);
    return a < 0 ? a + 360 : a
}
function findDirection(t) {
    var e = Math.floor((t + 22.5) / 45);
    return 7 < e ? 0 : e
}
function Crumb(t) {
    this.playerId = t.i,
    this.nickname = t.n,
    this.critterId = t.c,
    this.gear = t.g,
    this.rotation = t.r,
    this.speed = t.s,
    this.x = t.x,
    this.y = t.y
}
function recordEvent(t, e) {}
function BalloonContainer(t) {
    createjs.Container.call(this),
    this.x = t.x,
    this.y = t.y
}
function createBalloon(t, e) {
    var i = e + 20
      , o = t + 20
      , n = new createjs.Shape;
    return n.graphics.setStrokeStyle(1).beginStroke("#888888").beginFill("#FFFFFF"),
    n.graphics.moveTo(5, 0).arcTo(o, 0, o, 5, 5).arcTo(o, i, o - 5, i, 5).lineTo(80, i).lineTo(70, i + 10).lineTo(70, i).arcTo(0, i, 0, i - 5, 5).arcTo(0, 0, 5, 0, 5),
    n.x = 0 - o / 2,
    n.y = -10,
    n
}
function BeepItem(t) {
    this.mc = new createjs.Container;
    var e = new createjs.Graphics;
    e.beginFill("black"),
    e.drawRect(0, 100, 850, 200);
    var i = new createjs.Shape(e);
    this.mc.addChild(i);
    var o = new createjs.Bitmap("/media/icons/" + t.itemId + ".png");
    o.regX = 80,
    o.regY = 80,
    o.x = 425,
    o.y = 120,
    this.mc.addChild(o),
    t.name && (t.title = t.name);
    var n = new createjs.Text(t.title,"40px Luckiest Guy","#ffffff");
    if (n.textAlign = "center",
    n.lineHeight = 40,
    n.lineWidth = 400,
    n.x = 425,
    n.y = 210,
    this.mc.addChild(n),
    t.text) {
        var s = new createjs.Text(t.text,"16px Arial","#AAAAAA");
        s.textAlign = "center",
        s.lineWidth = 300,
        s.x = 425,
        s.y = 250,
        this.mc.addChild(s)
    }
}
function CritterContainer(t) {
    createjs.MovieClip.call(this),
    this.state = "stand",
    this.isMoving = !1,
    this.isForward = !0,
    this.hasTail = !1,
    this.currentDirection = 4,
    this.framerate = 30,
    this.loop = -1,
    this.regX = 68,
    this.regY = 140;
    var e = new createjs.SpriteSheet(t);
    this.bodyContainer = new createjs.Container,
    this.feetContainer = new createjs.Container,
    this.baseContainer = new createjs.Container,
    this.addChild(this.baseContainer, this.feetContainer, this.bodyContainer),
    this.skin = new createjs.Container,
    this.face = new createjs.Container,
    this.feet = new createjs.Container,
    this.tail = new createjs.Container,
    this.skin.sprite = new createjs.Sprite(e,"body4"),
    this.skin.addChild(this.skin.sprite),
    this.face.sprite = new createjs.Sprite(e,"smile4"),
    this.face.addChild(this.face.sprite),
    this.feet.sprite = new createjs.Sprite(e,"feet"),
    this.feetContainer.addChild(this.feet.sprite),
    t.animations.tail4 && (this.tail.sprite = new createjs.Sprite(e,"tail4"),
    this.tail.addChild(this.tail.sprite),
    this.hasTail = !0),
    this.slots = {
        eyes: new createjs.Container,
        ears: new createjs.Container,
        head: new createjs.Container,
        hand: new createjs.Container,
        cape: new createjs.Container,
        neck: new createjs.Container,
        belt: new createjs.Container,
        mask: new createjs.Container,
        body: new createjs.Container,
        pack: new createjs.Container,
        weapon: new createjs.Container
    },
    this.backs = {
        eyes: new createjs.Container,
        ears: new createjs.Container,
        cape: new createjs.Container,
        neck: new createjs.Container,
        belt: new createjs.Container,
        pack: new createjs.Container
    },
    this.forward = [this.tail, this.backs.cape, this.backs.pack, this.slots.weapon, this.backs.neck, this.backs.belt, this.backs.eyes, this.backs.ears, this.skin, this.face, this.slots.mask, this.slots.body, this.slots.head, this.slots.ears, this.slots.eyes, this.slots.pack, this.slots.neck, this.slots.belt, this.slots.cape, this.slots.hand],
    this.backward = [this.slots.hand, this.backs.cape, this.backs.pack, this.backs.neck, this.backs.belt, this.backs.ears, this.backs.eyes, this.skin, this.face, this.slots.eyes, this.slots.mask, this.slots.body, this.slots.head, this.slots.ears, this.slots.pack, this.slots.weapon, this.slots.belt, this.slots.neck, this.slots.cape, this.tail];
    for (var i = 0; i < this.forward.length; i++)
        this.bodyContainer.addChild(this.forward[i]);
    t.animations.shadow && (this.baseContainer.sprite = new createjs.Sprite(e,"shadow"),
    this.baseContainer.addChild(this.baseContainer.sprite)),
    this.timeline.addTween(createjs.Tween.get(this.bodyContainer).wait(1).to({
        y: 4
    }).wait(1).to({
        y: -12
    }).wait(1).to({
        y: -16
    }).wait(1).to({
        y: -8
    }).wait(1)),
    this.timeline.addTween(createjs.Tween.get(this.feetContainer).wait(2).to({
        y: -8
    }).wait(1).to({
        y: -16
    }).wait(1).to({
        y: -6
    }).wait(1)),
    this.timeline.addTween(createjs.Tween.get(this.baseContainer)),
    this.updateDirection(),
    this.stop()
}
function ItemSprite(t) {
    var e = new createjs.Sprite(itemSS,0);
    return e.name = t,
    e
}
function MascotContainer(t) {
    createjs.MovieClip.call(this),
    this.scaleX = 1,
    this.scaleY = 1,
    this.framerate = 30,
    this.loop = -1,
    this.currentDirection,
    this.directionFrames = [0, 1, 3, 3, 4, 5, 5, 7];
    var e = new createjs.SpriteSheet(t);
    this.sprite = new createjs.Sprite(e,"body4"),
    this.addChild(this.sprite),
    this.stop()
}
function MenuContainer(e) {
    createjs.Container.call(this);
    var t = new boot.Icon("box");
    t.setTransform(760, 420, .5, .5),
    t.click(function() {
        var t = new Inventory(e.player);
        e.stage.menu.addChild(t),
        recordEvent("click", {
            button: "inventory"
        })
    });
    var i = new boot.Icon("stats");
    i.setTransform(700, 410, .5, .5),
    i.click(function() {
        recordEvent("click", {
            button: "stats"
        })
    }),
    this.addChild(t, i)
}
function NicknameContainer(t) {
    createjs.Container.call(this);
    var e = new createjs.Text(t.n,"12px Arial","#000000");
    e.textAlign = "center",
    e.lineWidth = 100,
    e.y = 15,
    this.addChild(e),
    this.x = t.x,
    this.y = t.y
}
function PlayerContainer(t, e) {
    createjs.Container.call(this),
    this.isLocal = !1,
    this.playerId = t.i,
    this.critterId = t.c,
    this.isMoving = !1,
    this.nickname,
    this.balloon,
    this.direction = findDirection(t.r),
    this.animation = "none",
    this.speed = 5,
    this.x = t.x,
    this.y = t.y,
    this.targetX = t.x,
    this.targetY = t.y,
    "RocketSnail" == t.n ? this.critter = new MascotContainer(world.critters[this.critterId]) : this.critter = new CritterContainer(world.critters[this.critterId]),
    this.critter.scaleX = .5,
    this.critter.scaleY = .5,
    t.g && this.updateGear(t.g),
    this.addChild(this.critter),
    this.updateDirection(this.direction),
    this.updateState("stand")
}
function RoomContainer(t) {
    if (createjs.Container.call(this),
    this.playerlist = {},
    this.background = new createjs.Container,
    this.foreground = new createjs.Container,
    this.game = new createjs.Container,
    this.balloons = new createjs.Container,
    this.nicknames = new createjs.Container,
    this.addChild(this.background),
    this.addChild(this.game),
    this.addChild(this.foreground),
    this.addChild(this.nicknames),
    this.addChild(this.balloons),
    t.artwork && t.artwork.background && this.addBackground(t.artwork.background),
    t.artwork && t.artwork.foreground && this.addForeground(t.artwork.foreground),
    t.artwork && t.artwork.sprites && this.addSprites(t.artwork.sprites),
    null != t.playerlist)
        for (var e = 0; e < t.playerlist.length; e++)
            this.addPlayer(t.playerlist[e]);
    this.game.addEventListener("tick", function(t) {
        t.target.children.sort(function(t, e) {
            return t.y - e.y
        })
    })
}
!function() {
    var e = {
        primary: ["#007bff", "#ffffff"],
        secondary: ["#6c757d", "#ffffff"],
        success: ["#28a745", "#ffffff"],
        warning: ["#ffc107", "#212529"],
        danger: ["#dc3545", "#ffffff"],
        light: ["#f8f9fa", "#212529"],
        dark: ["#343a40", "#ffffff"]
    }
      , i = {
        sm: [.875, .5, .5],
        md: [1, 1, .625],
        lg: [1.25, 1.25, .75]
    };
    function h(t) {
        t = t || {};
        this.style = t.style || "primary",
        this.size = t.size || "md",
        this.base = t.base || 16,
        this.width = t.width,
        this.height = t.height,
        this.radius = .25 * this.base,
        this.font_size = t.font_size || i[this.size][0] * this.base,
        this.font_colour = e[this.style][1],
        this.font_family = t.font_family || "Arial",
        this.font = this.font_size + "px " + this.font_family,
        this.fill = e[this.style][0],
        this.mx = i[this.size][1] * this.font_size,
        this.my = i[this.size][2] * this.font_size
    }
    function t(t, e) {
        createjs.Container.call(this);
        e = new h(e);
        var i = new createjs.Text(t,e.font,e.font_colour);
        i.textBaseline = "middle",
        i.x = e.mx,
        i.y = e.my + e.font_size / 2 + 2,
        i.snapToPixel = !0;
        var o = i.getBounds()
          , n = Math.floor(o.width)
          , s = e.font_size
          , r = n + 2 * e.mx
          , a = s + 2 * e.my
          , c = new createjs.Shape;
        c.graphics.beginFill(e.fill).drawRoundRect(0, 0, r, a, e.radius),
        this.addChild(c, i),
        this.setBounds(0, 0, r, a)
    }
    function o(t) {
        createjs.Container.call(this);
        var e = new createjs.Sprite(uxSS,t);
        this.addChild(e)
    }
    function n(t) {
        createjs.Container.call(this),
        this.background = new createjs.Sprite(uxSS,"item"),
        this.icon = new createjs.Bitmap(t),
        this.icon.setTransform(2, 2, .5, .5),
        this.isActive = !1,
        this.addChild(this.background, this.icon)
    }
    function s(t) {
        createjs.Container.call(this);
        var e = (t = new h(t)).width || 200
          , i = t.height || t.base
          , o = t.radius
          , n = new createjs.Shape;
        n.graphics.beginFill("#f8f9fa").drawRoundRect(0, 0, e, i, o);
        var s = new createjs.Shape;
        s.graphics.beginFill(t.fill).drawRect(0, 0, e, i),
        s.mask = n,
        s.scaleX = 0,
        this.mc = s,
        this.addChild(n, s)
    }
    function r(t, e, i, o, n) {
        createjs.Container.call(this),
        this.setBounds(2, 2, t, e),
        this.width = t,
        this.height = e,
        this.columns = i,
        this.rows = o,
        this.tileWidth = Math.floor(t / i),
        this.tileHeight = Math.floor(e / o),
        this.maxItems = this.columns * this.rows,
        this.page = 0,
        n && Array.isArray(n) ? (this.list = n,
        this.update()) : this.list = []
    }
    (t.prototype = Object.create(createjs.Container.prototype)).click = function(t) {
        this.on("click", t)
    }
    ,
    (o.prototype = Object.create(createjs.Container.prototype)).click = function(t) {
        this.on("click", t)
    }
    ,
    (n.prototype = Object.create(createjs.Container.prototype)).click = function(t) {
        this.on("click", t)
    }
    ,
    n.prototype.setActive = function(t) {
        t ? (this.background.gotoAndStop("item_active"),
        this.isActive = !0) : (this.background.gotoAndStop("item"),
        this.isActive = !1)
    }
    ,
    (s.prototype = Object.create(createjs.Container.prototype)).update = function(t) {
        var e = t / 100;
        this.mc.scaleX = e
    }
    ,
    s.prototype.center = function() {}
    ,
    (r.prototype = Object.create(createjs.Container.prototype)).update = function(t) {
        this.removeAllChildren();
        for (var e = t || 0, i = 0; i < this.rows; i++)
            for (var o = 0; o < this.columns; o++) {
                var n = this.list[e];
                n && (n.x = o * this.tileWidth,
                n.y = i * this.tileHeight,
                this.addChild(n)),
                e++
            }
    }
    ,
    r.prototype.nextPage = function() {
        var t = Math.floor(this.list.length / this.maxItems);
        this.page + 1 <= t && (this.page = this.page + 1,
        this.update(this.page * this.maxItems))
    }
    ,
    r.prototype.lastPage = function() {
        0 <= this.page - 1 && (this.page = this.page - 1,
        this.update(this.page * this.maxItems))
    }
    ,
    boot.Button = t,
    boot.ProgressBar = s,
    boot.Grid = r,
    boot.Item = n,
    boot.Icon = o
}(),
Chat.prototype.sendMessage = function(t, e) {
    "/" === (t = t.trim()).substr(0, 1) || (this.socket.emit("sendMessage", {
        message: t
    }),
    e && e(t))
}
,
Crumb.prototype.get = function(t) {
    return this[t]
}
,
BalloonContainer.prototype = Object.create(createjs.Container.prototype),
BalloonContainer.prototype.showMessage = function(t) {
    var e = t.m
      , i = new createjs.Container
      , o = new createjs.Text(e,"12px Arial","#000000");
    o.textAlign = "center",
    o.lineWidth = 100;
    var n = o.getBounds()
      , s = createBalloon(100, n.height);
    i.addChild(s, o),
    i.y = 0 - n.height - 80,
    this.addChild(i);
    s = this;
    setTimeout(function() {
        s.removeChild(i)
    }, 5e3)
}
,
CritterContainer.prototype = Object.create(createjs.MovieClip.prototype),
CritterContainer.prototype.addItem = function(t, e) {
    if (itemData && itemData.items[e])
        var i = itemData.items[e];
    if (i) {
        if (this.removeItem(t),
        this.slots[t]) {
            var o = new ItemSprite(e);
            this.slots[t].addChild(o)
        }
        if (this.backs[t]) {
            o = new ItemSprite(e);
            this.backs[t].addChild(o)
        }
        this.updateDirection()
    } else
        console.error("Item missing", e)
}
,
CritterContainer.prototype.removeItem = function(t) {
    this.slots[t] && this.slots[t].removeAllChildren(),
    this.backs[t] && this.backs[t].removeAllChildren()
}
,
CritterContainer.prototype.updateGear = function(t) {
    for (var e in this.slots)
        this.removeItem(e);
    for (var e in t)
        this.addItem(e, t[e])
}
,
CritterContainer.prototype.updateDirection = function(t) {
    for (var e in void 0 === t && (t = this.currentDirection),
    1 < t && t < 7 ? (this.isForward || (this.isForward = !0,
    this.updateDepth()),
    this.face.sprite.gotoAndStop("smile" + t),
    this.face.visible = !0) : (this.isForward && (this.isForward = !1,
    this.updateDepth()),
    this.face.visible = !1),
    this.slots) {
        if ((o = this.slots[e]).children[0]) {
            var i = o.children[0];
            (n = itemData.items[i.name]).f && "number" == typeof n.f[t] ? (i.gotoAndStop(n.f[t]),
            o.visible = !0) : (i.gotoAndStop(0),
            o.visible = !1)
        }
    }
    for (var e in this.backs) {
        var o;
        if ((o = this.backs[e]).children[0]) {
            var n;
            i = o.children[0];
            (n = itemData.items[i.name]).b && "number" == typeof n.b[t] ? (i.gotoAndStop(n.b[t]),
            o.visible = !0) : (i.gotoAndStop(0),
            o.visible = !1)
        }
    }
    this.skin.sprite.gotoAndStop("body" + t),
    this.hasTail && this.tail.sprite.gotoAndStop("tail" + t),
    this.currentDirection = t
}
,
CritterContainer.prototype.updateDepth = function() {
    if (this.isForward)
        var t = this.forward;
    else
        t = this.backward;
    for (var e = 0; e < t.length; e++) {
        var i = t[e];
        this.bodyContainer.setChildIndex(i, e)
    }
}
,
CritterContainer.prototype.updateState = function(t) {
    "move" == t ? (this.state = t,
    this.gotoAndPlay(0)) : (this.state = t,
    this.gotoAndStop(0))
}
,
MascotContainer.prototype = Object.create(createjs.MovieClip.prototype),
MascotContainer.prototype.updateDirection = function(t) {
    void 0 === t ? t = this.currentDirection : this.currentDirection = t;
    var e = this.directionFrames[t];
    null != e && this.sprite.gotoAndStop("body" + e)
}
,
MascotContainer.prototype.addItem = function() {}
,
MascotContainer.prototype.removeItem = function() {}
,
MascotContainer.prototype.updateGear = function() {}
,
MascotContainer.prototype.updateState = function(t) {
    "move" == t ? this.sprite.gotoAndPlay("body" + this.currentDirection) : this.updateDirection()
}
,
MenuContainer.prototype = Object.create(createjs.Container.prototype),
NicknameContainer.prototype = Object.create(createjs.Container.prototype),
PlayerContainer.prototype = Object.create(createjs.Container.prototype),
PlayerContainer.prototype.updateDirection = function(t) {
    this.direction = t,
    this.critter.updateDirection(t)
}
,
PlayerContainer.prototype.updateRotation = function(t) {
    this.character.rotation = t
}
,
PlayerContainer.prototype.updateState = function(t) {
    this.critter.updateState(t)
}
,
PlayerContainer.prototype.updateGear = function(t) {
    this.critter.updateGear(t)
}
,
PlayerContainer.prototype.moveTo = function(t, e, i) {
    if (!this.isMoving || this.targetX != t || this.targetY != e) {
        void 0 === i && (i = Math.floor(calculateAngle(this.x, this.y, t, e))),
        this.isMoving = !0,
        this.targetX = t,
        this.targetY = e;
        var o = findDirection(i);
        this.updateDirection(o),
        this.updateState("move");
        var n = calculateDistance(this.x, this.y, t, e) * this.speed
          , s = this;
        this.tween = createjs.Tween.get(this, {
            override: !0
        }).to({
            x: t,
            y: e
        }, n, createjs.Ease.linear).call(function() {
            this.isMoving = !1,
            this.updateState("stand"),
            this.nickname.x = this.x,
            this.nickname.y = this.y,
            this.balloon.x = this.x,
            this.balloon.y = this.y
        }).addEventListener("change", function() {
            s.nickname.x = s.x,
            s.nickname.y = s.y,
            s.balloon.x = s.x,
            s.balloon.y = s.y
        })
    }
}
,
RoomContainer.prototype = Object.create(createjs.Container.prototype),
RoomContainer.prototype.addBackground = function(t) {
    var e = new createjs.Bitmap(t);
    this.background.addChild(e)
}
,
RoomContainer.prototype.addForeground = function(t) {
    var e = new createjs.Bitmap(t);
    this.foreground.addChild(e)
}
,
RoomContainer.prototype.addSprites = function(t) {
    for (var e = new createjs.SpriteSheet(t), i = t.frames, o = i.length, n = 0; n < o; n++) {
        var s = new createjs.Sprite(e);
        s.gotoAndStop(n),
        s.x = i[n][7],
        s.y = i[n][8],
        this.game.addChild(s)
    }
}
,
RoomContainer.prototype.addPlayer = function(t) {
    var e = t.i;
    if (null == this.playerlist[e]) {
        var i = new PlayerContainer(t);
        this.game.addChild(i),
        (this.playerlist[e] = i).balloon = new BalloonContainer(t),
        this.balloons.addChild(i.balloon),
        i.nickname = new NicknameContainer(t),
        this.nicknames.addChild(i.nickname)
    }
}
,
RoomContainer.prototype.getPlayer = function(t) {
    return this.playerlist[t]
}
,
RoomContainer.prototype.removePlayer = function(t) {
    var e = t.i;
    if (this.playerlist[e]) {
        var i = this.playerlist[e];
        this.game.removeChild(i),
        this.balloons.removeChild(i.balloon),
        this.nicknames.removeChild(i.nickname),
        delete this.playerlist[e]
    }
}
,
RoomContainer.prototype.updateGear = function(t) {
    var e = this.getPlayer(t.i);
    e && e.updateGear(t.g)
}
,
RoomContainer.prototype.showMessage = function(t) {
    console.info(t.n, ":", t.m);
    var e = this.getPlayer(t.i);
    e && e.balloon.showMessage(t)
}
,
RoomContainer.prototype.movePlayer = function(t) {
    this.getPlayer(t.i).moveTo(t.x, t.y, t.r)
}
,
RoomContainer.prototype.addEffect = function(o) {
    this.getPlayer[o.i];
    var t = new createjs.LoadQueue;
    t.loadFile(o.d.images[0]),
    t.on("complete", function(t) {
        var e = new createjs.SpriteSheet(o.d)
          , i = new createjs.Sprite(e,"start");
        i.setTransform(o.x, o.y),
        this.game.addChild(i)
    }, this)
}
;
var uxData = {
    images: ["/media/ux/ux.png"],
    frames: [[1, 1, 85, 108, 0, 0, 0], [1, 111, 104, 86, 0, 0, 0], [88, 1, 84, 84, 0, 0, 0], [107, 87, 84, 84, 0, 0, 0], [107, 173, 40, 40, 0, 0, 0], [149, 173, 40, 40, 0, 0, 0]],
    animations: {
        stats: {
            frames: [0]
        },
        box: {
            frames: [1]
        },
        item_active: {
            frames: [2]
        },
        item: {
            frames: [3]
        },
        close: {
            frames: [4]
        },
        open_btn: {
            frames: [5]
        }
    }
}
  , uxSS = new createjs.SpriteSheet(uxData);
function Inventory(e) {
    createjs.Container.call(this);
    var i = this;
    this.player = e;
    var t = new Background
      , o = new CritterContainer(world.critters[e.critterId]);
    o.setTransform(660, 140);
    for (var n = [], s = {}, r = e.inventory.length, a = 0; a < r; a++) {
        var c = e.inventory[a]
          , h = new boot.Item("/media/icons/" + c.itemId + ".png");
        h.data = c,
        e.gear[c.slot] == c.itemId && (s[c.slot] = h,
        o.addItem(c.slot, c.itemId),
        h.setActive(!0)),
        h.click(function() {
            var t = this.data.slot;
            this.isActive ? (o.removeItem(t),
            delete s[t],
            this.setActive(!1)) : (o.addItem(t, this.data.itemId),
            s[t] && s[t].setActive(!1),
            (s[t] = this).setActive(!0)),
            recordEvent("click", {
                button: "item"
            })
        }),
        n.push(h)
    }
    var l = new boot.Grid(600,400,6,4,n);
    l.setTransform(20, 20);
    var d = new boot.Icon("close");
    d.setTransform(790, 20),
    d.click(function() {
        for (var t in e.gear = {},
        s)
            e.gear[t] = s[t].data.itemId;
        world.player.updateGear(e.gear),
        recordEvent("updateGear"),
        i.close()
    });
    var p = new boot.Button("Next Page");
    p.setTransform(140, 420),
    p.click(function() {
        l.nextPage()
    });
    var m = new boot.Button("Last Page");
    m.setTransform(20, 420),
    m.click(function() {
        l.lastPage()
    }),
    this.addChild(t, l, o, p, m, d)
}
function Background() {
    createjs.Container.call(this);
    var t = new createjs.Graphics;
    t.beginFill("black"),
    t.drawRect(0, 0, 850, 480);
    var e = new createjs.Shape(t);
    e.alpha = .6,
    e.on("click", function() {}),
    this.addChild(e)
}
Inventory.prototype = Object.create(createjs.Container.prototype),
Inventory.prototype.close = function() {
    this.parent.removeChild(this)
}
,
Background.prototype = Object.create(createjs.Container.prototype);
