# Movement Events

Authoritative movement events for the local player, including movement-speed changes and server reconciliation corrections.

## Event index

| Event | Description |
|---|---|
| `PLAYER_MOVEMENT_SPEED_CHANGED` | Published when the authoritative player movement speed state changes. The payload contains the resulting state and identifiers needed by Movement UI or AddOns to update without polling. |
| `PLAYER_POSITION_CORRECTED` | Published when server reconciliation corrects the local player's predicted position. The payload contains the authoritative position and the correction distance. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `PLAYER_MOVEMENT_SPEED_CHANGED`

Published when the authoritative player movement speed state changes. The payload contains the resulting state and identifiers needed by Movement UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `current` | `float` | `number` | No | Authoritative current value after the change. |
| `previous` | `float` | `number` | No | Authoritative value before the change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PLAYER_MOVEMENT_SPEED_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MovementEvents.PublishMoveSpeedChanged(
    eventBus,
    current,
    previous
);
```

## `PLAYER_POSITION_CORRECTED`

Published when server reconciliation corrects the local player's predicted position. The payload contains the authoritative position and the correction distance.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `position` | `UnityEngine.Vector3` | `{ x: number; y: number; z: number }` | No | Authoritative world-space position. |
| `correctionDistance` | `float` | `number` | No | Distance between the predicted and authoritative positions before reconciliation. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PLAYER_POSITION_CORRECTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MovementEvents.PublishPositionCorrected(
    eventBus,
    position,
    correctionDistance
);
```

