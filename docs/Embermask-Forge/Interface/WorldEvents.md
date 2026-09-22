# World Events


Floor, area, travel, timed portal, world event. 


Events: **12**

## `1. AREA_CHANGED`
A player egy másik publikus area/subzone területre lépett.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `floorId` | `int` | `number` | No |  |
| `areaId` | `int` | `number` | No |  |
| `subzoneId` | `int?` | `number | null` | Yes |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("AREA_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `WorldEvents.PublishAreaChanged(...)`

## `2. BIND_POINT_CHANGED`
Az authoritative respawn/bind point módosult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `bindPointId` | `int` | `number` | No |  |
| `floorId` | `int` | `number` | No |  |
| `mapId` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("BIND_POINT_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `WorldEvents.PublishBindPointChanged(...)`

## `3. FAST_TRAVEL_COMPLETED`
A gyorsutazás befejeződött az authoritative célon.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `travelId` | `System.Guid` | `string` | No |  |
| `floorId` | `int` | `number` | No |  |
| `mapId` | `int` | `number` | No |  |
| `position` | `UnityEngine.Vector3` | `{ x: number; y: number; z: number }` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("FAST_TRAVEL_COMPLETED", payload => {
    // payload.<field>
});
```

C# publisher: `WorldEvents.PublishFastTravelCompleted(...)`

## `4. FAST_TRAVEL_FAILED`
Elfogadási vagy végrehajtási ok miatt nem történt meg a travel.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `travelId` | `System.Guid?` | `string | null` | Yes |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("FAST_TRAVEL_FAILED", payload => {
    // payload.<field>
});
```

C# publisher: `WorldEvents.PublishFastTravelFailed(...)`

## `5. FAST_TRAVEL_STARTED`
A szerver elfogadta a fizetős gyorsutazást.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `travelId` | `System.Guid` | `string` | No |  |
| `destinationId` | `int` | `number` | No |  |
| `cost` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("FAST_TRAVEL_STARTED", payload => {
    // payload.<field>
});
```

C# publisher: `WorldEvents.PublishFastTravelStarted(...)`

## `6. FLOOR_ACCESS_CHANGED`
A karakter személyes Floor-hozzáférése feloldódott vagy invalidálódott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `floorId` | `int` | `number` | No |  |
| `unlocked` | `bool` | `boolean` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("FLOOR_ACCESS_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `WorldEvents.PublishFloorAccessChanged(...)`

## `7. FLOOR_CHANGED`
A lokális karakter aktív Floorja megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `previousFloorId` | `int?` | `number | null` | Yes |  |
| `currentFloorId` | `int` | `number` | No |  |
| `mapId` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("FLOOR_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `WorldEvents.PublishFloorChanged(...)`

## `8. WORLD_EVENT_ENDED`
A world event véget ért.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `worldEventId` | `System.Guid` | `string` | No |  |
| `resultCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("WORLD_EVENT_ENDED", payload => {
    // payload.<field>
});
```

C# publisher: `WorldEvents.PublishWorldEventEnded(...)`

## `9. WORLD_EVENT_STARTED`
Egy player-visible world event aktív lett.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `worldEvent` | `WorldEventInfo` | `WorldEventInfo` | No | Player-visible world event snapshot. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("WORLD_EVENT_STARTED", payload => {
    // payload.<field>
});
```

C# publisher: `WorldEvents.PublishWorldEventStarted(...)`

## `10. WORLD_EVENT_UPDATED`
Egy már látható world event publikus progress/state-je változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `worldEvent` | `WorldEventInfo` | `WorldEventInfo` | No | Player-visible world event snapshot. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("WORLD_EVENT_UPDATED", payload => {
    // payload.<field>
});
```

C# publisher: `WorldEvents.PublishWorldEventUpdated(...)`

## `11. WORLD_PORTAL_CLOSED`
A korábban publikus portal bezárult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `portalId` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("WORLD_PORTAL_CLOSED", payload => {
    // payload.<field>
});
```

C# publisher: `WorldEvents.PublishWorldPortalClosed(...)`

## `12. WORLD_PORTAL_OPENED`
Egy player-visible timed/world portal aktívvá vált.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `portalId` | `int` | `number` | No |  |
| `floorId` | `int` | `number` | No |  |
| `closesAt` | `System.DateTime?` | `string | null` | Yes |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("WORLD_PORTAL_OPENED", payload => {
    // payload.<field>
});
```

C# publisher: `WorldEvents.PublishWorldPortalOpened(...)`

