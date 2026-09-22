# PvP Events


Jóváhagyott PvP: Duel. 


Events: **4**

## `1. DUEL_ENDED`
A Duel halál nélkül, a GDD szerinti 1 HP-s defeat vagy más legitim befejezés miatt véget ért.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `duelId` | `System.Guid` | `string` | No |  |
| `winnerGuid` | `System.Guid?` | `string | null` | Yes |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("DUEL_ENDED", payload => {
    // payload.<field>
});
```

C# publisher: `PvpEvents.PublishDuelEnded(...)`

## `2. DUEL_REQUESTED`
Másik játékos kölcsönös consentet igénylő Duel kérést küldött.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `duelId` | `System.Guid` | `string` | No |  |
| `challenger` | `EntityRef` | `EntityRef` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("DUEL_REQUESTED", payload => {
    // payload.<field>
});
```

C# publisher: `PvpEvents.PublishDuelRequested(...)`

## `3. DUEL_REQUEST_ENDED`
A Duel request elfogadás, elutasítás, cancel vagy timeout miatt lezárult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `duelId` | `System.Guid` | `string` | No |  |
| `resultCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("DUEL_REQUEST_ENDED", payload => {
    // payload.<field>
});
```

C# publisher: `PvpEvents.PublishDuelRequestEnded(...)`

## `4. DUEL_STARTED`
A kölcsönösen elfogadott Duel aktív lett.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `duelId` | `System.Guid` | `string` | No |  |
| `opponent` | `EntityRef` | `EntityRef` | No |  |
| `startedAt` | `System.DateTime` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("DUEL_STARTED", payload => {
    // payload.<field>
});
```

C# publisher: `PvpEvents.PublishDuelStarted(...)`

