# Inventory Events

Inventory-content and layout events covering item insertion, removal, quantity changes, slot movement, capacity, and layout revisions.

## Event index

| Event | Description |
|---|---|
| `INVENTORY_CAPACITY_CHANGED` | Published when the authoritative inventory capacity state changes. The payload contains the resulting state and identifiers needed by Inventory UI or AddOns to update without polling. |
| `INVENTORY_ITEM_ADDED` | Published when inventory item is added to the local client's authoritative public state. The payload identifies the newly available object or entity. |
| `INVENTORY_ITEM_MOVED` | Published when the authoritative 'INVENTORY_ITEM_MOVED' gameplay event occurs. The payload contains only client-visible state intended for Inventory UI and AddOns. |
| `INVENTORY_ITEM_QUANTITY_CHANGED` | Published when the authoritative inventory item quantity state changes. The payload contains the resulting state and identifiers needed by Inventory UI or AddOns to update without polling. |
| `INVENTORY_ITEM_REMOVED` | Published when inventory item is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state. |
| `INVENTORY_LAYOUT_CHANGED` | Published when the authoritative inventory layout state changes. The payload contains the resulting state and identifiers needed by Inventory UI or AddOns to update without polling. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `INVENTORY_CAPACITY_CHANGED`

Published when the authoritative inventory capacity state changes. The payload contains the resulting state and identifiers needed by Inventory UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `capacity` | `int` | `number` | No | Current number of available inventory slots. |
| `used` | `int` | `number` | No | Amount consumed or used by the operation. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("INVENTORY_CAPACITY_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
InventoryEvents.PublishCapacityChanged(
    eventBus,
    capacity,
    used
);
```

## `INVENTORY_ITEM_ADDED`

Published when inventory item is added to the local client's authoritative public state. The payload identifies the newly available object or entity.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `item` | `ItemStackInfo` | `ItemStackInfo` | No | Authoritative item value associated with this payload. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("INVENTORY_ITEM_ADDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
InventoryEvents.PublishItemAdded(
    eventBus,
    item
);
```

## `INVENTORY_ITEM_MOVED`

Published when the authoritative 'INVENTORY_ITEM_MOVED' gameplay event occurs. The payload contains only client-visible state intended for Inventory UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No | Stable identifier of the concrete item instance. |
| `fromSlot` | `int` | `number` | No | Source slot index before the item move. |
| `toSlot` | `int` | `number` | No | Destination slot index after the item move. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("INVENTORY_ITEM_MOVED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
InventoryEvents.PublishItemMoved(
    eventBus,
    itemInstanceGuid,
    fromSlot,
    toSlot
);
```

## `INVENTORY_ITEM_QUANTITY_CHANGED`

Published when the authoritative inventory item quantity state changes. The payload contains the resulting state and identifiers needed by Inventory UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No | Stable identifier of the concrete item instance. |
| `itemId` | `int` | `number` | No | Stable content identifier of the item definition. |
| `previous` | `int` | `number` | No | Authoritative value before the change. |
| `current` | `int` | `number` | No | Authoritative current value after the change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("INVENTORY_ITEM_QUANTITY_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
InventoryEvents.PublishItemQuantityChanged(
    eventBus,
    itemInstanceGuid,
    itemId,
    previous,
    current
);
```

## `INVENTORY_ITEM_REMOVED`

Published when inventory item is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No | Stable identifier of the concrete item instance. |
| `itemId` | `int` | `number` | No | Stable content identifier of the item definition. |
| `quantity` | `int` | `number` | No | Current or transferred stack quantity. |
| `slot` | `int?` | `number | null` | Yes | Optional container slot index associated with the item. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("INVENTORY_ITEM_REMOVED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
InventoryEvents.PublishItemRemoved(
    eventBus,
    itemInstanceGuid,
    itemId,
    quantity,
    slot
);
```

## `INVENTORY_LAYOUT_CHANGED`

Published when the authoritative inventory layout state changes. The payload contains the resulting state and identifiers needed by Inventory UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `revision` | `int` | `number` | No | Monotonically increasing revision number used to detect stale cached state. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("INVENTORY_LAYOUT_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
InventoryEvents.PublishLayoutChanged(
    eventBus,
    revision
);
```

