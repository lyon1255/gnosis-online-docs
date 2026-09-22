# Reputation Events

Reputation-value and standing changes for organizations, settlements, or other reputation-bearing factions visible to the player.

## Event index

| Event | Description |
|---|---|
| `REPUTATION_CHANGED` | Published when the authoritative reputation state changes. The payload contains the resulting state and identifiers needed by Reputation UI or AddOns to update without polling. |
| `REPUTATION_STANDING_CHANGED` | Published when the authoritative reputation standing state changes. The payload contains the resulting state and identifiers needed by Reputation UI or AddOns to update without polling. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `REPUTATION_CHANGED`

Published when the authoritative reputation state changes. The payload contains the resulting state and identifiers needed by Reputation UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `organizationId` | `int` | `number` | No | Stable identifier of the reputation-bearing organization or faction. |
| `current` | `int` | `number` | No | Authoritative current value after the change. |
| `delta` | `int` | `number` | No | Signed difference applied by this change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("REPUTATION_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
ReputationEvents.PublishChanged(
    eventBus,
    organizationId,
    current,
    delta
);
```

## `REPUTATION_STANDING_CHANGED`

Published when the authoritative reputation standing state changes. The payload contains the resulting state and identifiers needed by Reputation UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `organizationId` | `int` | `number` | No | Stable identifier of the reputation-bearing organization or faction. |
| `previousStandingId` | `string` | `string | null` | Yes | Previous stable standing identifier before the change. |
| `currentStandingId` | `string` | `string` | No | Current stable standing identifier after the change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("REPUTATION_STANDING_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
ReputationEvents.PublishStandingChanged(
    eventBus,
    organizationId,
    previousStandingId,
    currentStandingId
);
```

