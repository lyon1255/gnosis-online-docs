# Aura Events

Lifecycle events for public buff and debuff instances, including creation, updates, stack or duration changes, and removal.

## Event index

| Event | Description |
|---|---|
| `AURA_ADDED` | Published when aura is added to the local client's authoritative public state. The payload identifies the newly available object or entity. |
| `AURA_REMOVED` | Published when aura is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state. |
| `AURA_UPDATED` | Published when the public state of aura is updated. The payload contains the latest authoritative snapshot or delta required by consumers. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `AURA_ADDED`

Published when aura is added to the local client's authoritative public state. The payload identifies the newly available object or entity.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No | Forge unit token whose public state is being described. |
| `guid` | `System.Guid` | `string` | No | Stable identifier of the affected entity. |
| `aura` | `AuraInfo` | `AuraInfo` | No | Snapshot of the affected aura instance. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("AURA_ADDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AuraEvents.PublishAdded(
    eventBus,
    unit,
    guid,
    aura
);
```

## `AURA_REMOVED`

Published when aura is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No | Forge unit token whose public state is being described. |
| `guid` | `System.Guid` | `string` | No | Stable identifier of the affected entity. |
| `effectInstanceId` | `System.Guid` | `string` | No | Stable identifier of the individual aura or effect instance. |
| `spellId` | `int` | `number` | No | Stable content identifier of the spell or ability. |
| `reason` | `AuraRemovalReason` | `AuraRemovalReason` | No | Stable semantic reason associated with the event. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("AURA_REMOVED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AuraEvents.PublishRemoved(
    eventBus,
    unit,
    guid,
    effectInstanceId,
    spellId,
    reason
);
```

## `AURA_UPDATED`

Published when the public state of aura is updated. The payload contains the latest authoritative snapshot or delta required by consumers.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No | Forge unit token whose public state is being described. |
| `guid` | `System.Guid` | `string` | No | Stable identifier of the affected entity. |
| `aura` | `AuraInfo` | `AuraInfo` | No | Snapshot of the affected aura instance. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("AURA_UPDATED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AuraEvents.PublishUpdated(
    eventBus,
    unit,
    guid,
    aura
);
```

