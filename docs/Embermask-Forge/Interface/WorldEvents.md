# World Events

World-navigation events for floor access, area changes, bind points, fast travel, temporary portals, and public world-event state.

## Event index

| Event | Description |
|---|---|
| `AREA_CHANGED` | Published when the authoritative area state changes. The payload contains the resulting state and identifiers needed by World UI or AddOns to update without polling. |
| `BIND_POINT_CHANGED` | Published when the authoritative bind point state changes. The payload contains the resulting state and identifiers needed by World UI or AddOns to update without polling. |
| `FAST_TRAVEL_COMPLETED` | Published when fast travel completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume. |
| `FAST_TRAVEL_FAILED` | Published when fast travel fails before reaching a successful final state. The payload includes stable context or reason information when available. |
| `FAST_TRAVEL_STARTED` | Published when fast travel starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state. |
| `FLOOR_ACCESS_CHANGED` | Published when the authoritative floor access state changes. The payload contains the resulting state and identifiers needed by World UI or AddOns to update without polling. |
| `FLOOR_CHANGED` | Published when the authoritative floor state changes. The payload contains the resulting state and identifiers needed by World UI or AddOns to update without polling. |
| `WORLD_EVENT_ENDED` | Published when world event reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable. |
| `WORLD_EVENT_STARTED` | Published when world event starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state. |
| `WORLD_EVENT_UPDATED` | Published when the public state of world event is updated. The payload contains the latest authoritative snapshot or delta required by consumers. |
| `WORLD_PORTAL_CLOSED` | Published when world portal closes or is no longer available to the local player. |
| `WORLD_PORTAL_OPENED` | Published when world portal becomes open and available to the local player. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `AREA_CHANGED`

Published when the authoritative area state changes. The payload contains the resulting state and identifiers needed by World UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `floorId` | `int` | `number` | No | Stable content identifier of the relevant floor. |
| `areaId` | `int` | `number` | No | Stable content identifier of the associated world area. |
| `subzoneId` | `int?` | `number | null` | Yes | Stable identifier of the subzone referenced by this payload. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("AREA_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
WorldEvents.PublishAreaChanged(
    eventBus,
    floorId,
    areaId,
    subzoneId
);
```

## `BIND_POINT_CHANGED`

Published when the authoritative bind point state changes. The payload contains the resulting state and identifiers needed by World UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `bindPointId` | `int` | `number` | No | Stable identifier of the current bind point. |
| `floorId` | `int` | `number` | No | Stable content identifier of the relevant floor. |
| `mapId` | `int` | `number` | No | Stable content identifier of the relevant map. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("BIND_POINT_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
WorldEvents.PublishBindPointChanged(
    eventBus,
    bindPointId,
    floorId,
    mapId
);
```

## `FAST_TRAVEL_COMPLETED`

Published when fast travel completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `travelId` | `System.Guid` | `string` | No | Stable identifier of the fast-travel operation. |
| `floorId` | `int` | `number` | No | Stable content identifier of the relevant floor. |
| `mapId` | `int` | `number` | No | Stable content identifier of the relevant map. |
| `position` | `UnityEngine.Vector3` | `{ x: number; y: number; z: number }` | No | Authoritative world-space position. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("FAST_TRAVEL_COMPLETED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
WorldEvents.PublishFastTravelCompleted(
    eventBus,
    travelId,
    floorId,
    mapId,
    position
);
```

## `FAST_TRAVEL_FAILED`

Published when fast travel fails before reaching a successful final state. The payload includes stable context or reason information when available.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `travelId` | `System.Guid?` | `string | null` | Yes | Stable identifier of the fast-travel operation. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("FAST_TRAVEL_FAILED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
WorldEvents.PublishFastTravelFailed(
    eventBus,
    travelId,
    reasonCode
);
```

## `FAST_TRAVEL_STARTED`

Published when fast travel starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `travelId` | `System.Guid` | `string` | No | Stable identifier of the fast-travel operation. |
| `destinationId` | `int` | `number` | No | Stable identifier of the travel destination. |
| `cost` | `int` | `number` | No | Currency cost paid for the operation. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("FAST_TRAVEL_STARTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
WorldEvents.PublishFastTravelStarted(
    eventBus,
    travelId,
    destinationId,
    cost
);
```

## `FLOOR_ACCESS_CHANGED`

Published when the authoritative floor access state changes. The payload contains the resulting state and identifiers needed by World UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `floorId` | `int` | `number` | No | Stable content identifier of the relevant floor. |
| `unlocked` | `bool` | `boolean` | No | Whether the referenced feature is currently unlocked. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("FLOOR_ACCESS_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
WorldEvents.PublishFloorAccessChanged(
    eventBus,
    floorId,
    unlocked,
    reasonCode
);
```

## `FLOOR_CHANGED`

Published when the authoritative floor state changes. The payload contains the resulting state and identifiers needed by World UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `previousFloorId` | `int?` | `number | null` | Yes | Previous floor identifier before the transition. |
| `currentFloorId` | `int` | `number` | No | Current floor identifier after the transition. |
| `mapId` | `int` | `number` | No | Stable content identifier of the relevant map. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("FLOOR_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
WorldEvents.PublishFloorChanged(
    eventBus,
    previousFloorId,
    currentFloorId,
    mapId
);
```

## `WORLD_EVENT_ENDED`

Published when world event reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `worldEventId` | `System.Guid` | `string` | No | Stable identifier of the runtime world-event instance. |
| `resultCode` | `string` | `string` | No | Stable non-localized result code for the operation. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("WORLD_EVENT_ENDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
WorldEvents.PublishWorldEventEnded(
    eventBus,
    worldEventId,
    resultCode
);
```

## `WORLD_EVENT_STARTED`

Published when world event starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `worldEvent` | `WorldEventInfo` | `WorldEventInfo` | No | Public snapshot of the world event. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("WORLD_EVENT_STARTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
WorldEvents.PublishWorldEventStarted(
    eventBus,
    worldEvent
);
```

## `WORLD_EVENT_UPDATED`

Published when the public state of world event is updated. The payload contains the latest authoritative snapshot or delta required by consumers.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `worldEvent` | `WorldEventInfo` | `WorldEventInfo` | No | Public snapshot of the world event. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("WORLD_EVENT_UPDATED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
WorldEvents.PublishWorldEventUpdated(
    eventBus,
    worldEvent
);
```

## `WORLD_PORTAL_CLOSED`

Published when world portal closes or is no longer available to the local player.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `portalId` | `int` | `number` | No | Stable identifier of the temporary world portal. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("WORLD_PORTAL_CLOSED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
WorldEvents.PublishWorldPortalClosed(
    eventBus,
    portalId
);
```

## `WORLD_PORTAL_OPENED`

Published when world portal becomes open and available to the local player.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `portalId` | `int` | `number` | No | Stable identifier of the temporary world portal. |
| `floorId` | `int` | `number` | No | Stable content identifier of the relevant floor. |
| `closesAt` | `System.DateTime?` | `string | null` | Yes | Authoritative timestamp at which the portal is scheduled to close. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("WORLD_PORTAL_OPENED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
WorldEvents.PublishWorldPortalOpened(
    eventBus,
    portalId,
    floorId,
    closesAt
);
```

