# Equipment Events

Equipment-slot lifecycle events emitted when item instances are equipped or unequipped.

## Event index

| Event | Description |
|---|---|
| `ITEM_EQUIPPED` | Published when item is authoritatively equipped and the resulting equipment state becomes active. |
| `ITEM_UNEQUIPPED` | Published when item is authoritatively unequipped and removed from its active equipment slot. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `ITEM_EQUIPPED`

Published when item is authoritatively equipped and the resulting equipment state becomes active.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No | Stable identifier of the concrete item instance. |
| `itemId` | `int` | `number` | No | Stable content identifier of the item definition. |
| `slotMask` | `int` | `number` | No | Bit mask identifying the currently occupied equipment slots. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ITEM_EQUIPPED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
EquipmentEvents.PublishEquipped(
    eventBus,
    itemInstanceGuid,
    itemId,
    slotMask
);
```

## `ITEM_UNEQUIPPED`

Published when item is authoritatively unequipped and removed from its active equipment slot.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No | Stable identifier of the concrete item instance. |
| `itemId` | `int` | `number` | No | Stable content identifier of the item definition. |
| `previousSlotMask` | `int` | `number` | No | Bit mask identifying the previously occupied equipment slots. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ITEM_UNEQUIPPED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
EquipmentEvents.PublishUnequipped(
    eventBus,
    itemInstanceGuid,
    itemId,
    previousSlotMask
);
```

