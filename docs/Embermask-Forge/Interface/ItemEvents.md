# Item Events

Per-item-instance lifecycle events such as use, durability, breakage, repairs, binding, charges, and recharge state.

## Event index

| Event | Description |
|---|---|
| `ITEM_BINDING_CHANGED` | Published when the authoritative item binding state changes. The payload contains the resulting state and identifiers needed by Item UI or AddOns to update without polling. |
| `ITEM_BROKEN` | Published when item becomes broken in authoritative game state. The payload contains the public context required by consumers. |
| `ITEM_CHARGE_CHANGED` | Published when the authoritative item charge state changes. The payload contains the resulting state and identifiers needed by Item UI or AddOns to update without polling. |
| `ITEM_DURABILITY_CHANGED` | Published when the authoritative item durability state changes. The payload contains the resulting state and identifiers needed by Item UI or AddOns to update without polling. |
| `ITEM_RECHARGED` | Published when item is recharged in authoritative game state. The payload contains the public context required by consumers. |
| `ITEM_REPAIRED` | Published when item is repaired in authoritative game state. The payload contains the public context required by consumers. |
| `ITEM_USED` | Published when item is used in authoritative game state. The payload contains the public context required by consumers. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `ITEM_BINDING_CHANGED`

Published when the authoritative item binding state changes. The payload contains the resulting state and identifiers needed by Item UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No | Stable identifier of the concrete item instance. |
| `itemId` | `int` | `number` | No | Stable content identifier of the item definition. |
| `isBound` | `bool` | `boolean` | No | Whether the item instance is currently bound. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ITEM_BINDING_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
ItemEvents.PublishBindingChanged(
    eventBus,
    itemInstanceGuid,
    itemId,
    isBound
);
```

## `ITEM_BROKEN`

Published when item becomes broken in authoritative game state. The payload contains the public context required by consumers.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No | Stable identifier of the concrete item instance. |
| `itemId` | `int` | `number` | No | Stable content identifier of the item definition. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ITEM_BROKEN", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
ItemEvents.PublishBroken(
    eventBus,
    itemInstanceGuid,
    itemId
);
```

## `ITEM_CHARGE_CHANGED`

Published when the authoritative item charge state changes. The payload contains the resulting state and identifiers needed by Item UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No | Stable identifier of the concrete item instance. |
| `itemId` | `int` | `number` | No | Stable content identifier of the item definition. |
| `current` | `float` | `number` | No | Authoritative current value after the change. |
| `max` | `float` | `number` | No | Authoritative maximum value after the change. |
| `effectActive` | `bool` | `boolean` | No | Whether the associated gameplay effect is currently active. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ITEM_CHARGE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
ItemEvents.PublishChargeChanged(
    eventBus,
    itemInstanceGuid,
    itemId,
    current,
    max,
    effectActive
);
```

## `ITEM_DURABILITY_CHANGED`

Published when the authoritative item durability state changes. The payload contains the resulting state and identifiers needed by Item UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No | Stable identifier of the concrete item instance. |
| `itemId` | `int` | `number` | No | Stable content identifier of the item definition. |
| `current` | `int` | `number` | No | Authoritative current value after the change. |
| `max` | `int` | `number` | No | Authoritative maximum value after the change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ITEM_DURABILITY_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
ItemEvents.PublishDurabilityChanged(
    eventBus,
    itemInstanceGuid,
    itemId,
    current,
    max
);
```

## `ITEM_RECHARGED`

Published when item is recharged in authoritative game state. The payload contains the public context required by consumers.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No | Stable identifier of the concrete item instance. |
| `itemId` | `int` | `number` | No | Stable content identifier of the item definition. |
| `current` | `float` | `number` | No | Authoritative current value after the change. |
| `max` | `float` | `number` | No | Authoritative maximum value after the change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ITEM_RECHARGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
ItemEvents.PublishRecharged(
    eventBus,
    itemInstanceGuid,
    itemId,
    current,
    max
);
```

## `ITEM_REPAIRED`

Published when item is repaired in authoritative game state. The payload contains the public context required by consumers.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No | Stable identifier of the concrete item instance. |
| `itemId` | `int` | `number` | No | Stable content identifier of the item definition. |
| `current` | `int` | `number` | No | Authoritative current value after the change. |
| `max` | `int` | `number` | No | Authoritative maximum value after the change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ITEM_REPAIRED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
ItemEvents.PublishRepaired(
    eventBus,
    itemInstanceGuid,
    itemId,
    current,
    max
);
```

## `ITEM_USED`

Published when item is used in authoritative game state. The payload contains the public context required by consumers.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No | Stable identifier of the concrete item instance. |
| `itemId` | `int` | `number` | No | Stable content identifier of the item definition. |
| `quantity` | `int` | `number` | No | Current or transferred stack quantity. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ITEM_USED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
ItemEvents.PublishUsed(
    eventBus,
    itemInstanceGuid,
    itemId,
    quantity
);
```

