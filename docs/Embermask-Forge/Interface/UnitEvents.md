# Unit Events

Events for addressable unit tokens and the public state of entities currently exposed through those tokens, including health, resources, level, combat state, and target binding.

## Event index

| Event | Description |
|---|---|
| `TARGET_CHANGED` | Published when the local target binding changes, including when a new entity becomes targeted or the target is cleared. Consumers should treat the payload as the authoritative target identity snapshot. |
| `UNIT_ADDED` | Published when unit is added to the local client's authoritative public state. The payload identifies the newly available object or entity. |
| `UNIT_COMBAT_STATE_CHANGED` | Published when the authoritative unit combat state state changes. The payload contains the resulting state and identifiers needed by Unit UI or AddOns to update without polling. |
| `UNIT_HEALTH_CHANGED` | Published when the authoritative health of an addressable unit changes. The payload contains the resulting current and maximum health values for the affected unit token. |
| `UNIT_LEVEL_CHANGED` | Published when the authoritative unit level state changes. The payload contains the resulting state and identifiers needed by Unit UI or AddOns to update without polling. |
| `UNIT_REMOVED` | Published when unit is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state. |
| `UNIT_RESOURCE_CHANGED` | Published when an addressable unit's public ability resource changes. The payload identifies the resource type and its resulting current and maximum values. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `TARGET_CHANGED`

Published when the local target binding changes, including when a new entity becomes targeted or the target is cleared. Consumers should treat the payload as the authoritative target identity snapshot.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `guid` | `System.Guid?` | `string | null` | Yes | Stable identifier of the affected entity. |
| `entityType` | `EntityType?` | `EntityType | null` | Yes | High-level public category of the referenced entity. |
| `spawnGeneration` | `int?` | `number | null` | Yes | Lifecycle generation of the entity binding. It changes when an identity is reused for a new runtime spawn. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("TARGET_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
UnitEvents.PublishTargetChanged(
    eventBus,
    guid,
    entityType,
    spawnGeneration
);
```

## `UNIT_ADDED`

Published when unit is added to the local client's authoritative public state. The payload identifies the newly available object or entity.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No | Forge unit token whose public state is being described. |
| `guid` | `System.Guid` | `string` | No | Stable identifier of the affected entity. |
| `entityType` | `EntityType` | `EntityType` | No | High-level public category of the referenced entity. |
| `spawnGeneration` | `int` | `number` | No | Lifecycle generation of the entity binding. It changes when an identity is reused for a new runtime spawn. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("UNIT_ADDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
UnitEvents.PublishAdded(
    eventBus,
    unit,
    guid,
    entityType,
    spawnGeneration
);
```

## `UNIT_COMBAT_STATE_CHANGED`

Published when the authoritative unit combat state state changes. The payload contains the resulting state and identifiers needed by Unit UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No | Forge unit token whose public state is being described. |
| `guid` | `System.Guid` | `string` | No | Stable identifier of the affected entity. |
| `state` | `UnitCombatState` | `UnitCombatState` | No | Current lifecycle state represented by this payload. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("UNIT_COMBAT_STATE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
UnitEvents.PublishCombatStateChanged(
    eventBus,
    unit,
    guid,
    state
);
```

## `UNIT_HEALTH_CHANGED`

Published when the authoritative health of an addressable unit changes. The payload contains the resulting current and maximum health values for the affected unit token.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No | Forge unit token whose public state is being described. |
| `guid` | `System.Guid` | `string` | No | Stable identifier of the affected entity. |
| `current` | `int` | `number` | No | Authoritative current value after the change. |
| `max` | `int` | `number` | No | Authoritative maximum value after the change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("UNIT_HEALTH_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
UnitEvents.PublishHealthChanged(
    eventBus,
    unit,
    guid,
    current,
    max
);
```

## `UNIT_LEVEL_CHANGED`

Published when the authoritative unit level state changes. The payload contains the resulting state and identifiers needed by Unit UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No | Forge unit token whose public state is being described. |
| `guid` | `System.Guid` | `string` | No | Stable identifier of the affected entity. |
| `level` | `int` | `number` | No | Current authoritative level. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("UNIT_LEVEL_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
UnitEvents.PublishLevelChanged(
    eventBus,
    unit,
    guid,
    level
);
```

## `UNIT_REMOVED`

Published when unit is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No | Forge unit token whose public state is being described. |
| `guid` | `System.Guid` | `string` | No | Stable identifier of the affected entity. |
| `spawnGeneration` | `int` | `number` | No | Lifecycle generation of the entity binding. It changes when an identity is reused for a new runtime spawn. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("UNIT_REMOVED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
UnitEvents.PublishRemoved(
    eventBus,
    unit,
    guid,
    spawnGeneration
);
```

## `UNIT_RESOURCE_CHANGED`

Published when an addressable unit's public ability resource changes. The payload identifies the resource type and its resulting current and maximum values.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No | Forge unit token whose public state is being described. |
| `guid` | `System.Guid` | `string` | No | Stable identifier of the affected entity. |
| `powerType` | `PowerType` | `PowerType` | No | Resource pool whose value changed. |
| `current` | `int` | `number` | No | Authoritative current value after the change. |
| `max` | `int` | `number` | No | Authoritative maximum value after the change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("UNIT_RESOURCE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
UnitEvents.PublishResourceChanged(
    eventBus,
    unit,
    guid,
    powerType,
    current,
    max
);
```

