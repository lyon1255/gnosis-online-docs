# Inventory Events


Táska tartalma és layoutja. 


Events: **6**

## `1. INVENTORY_CAPACITY_CHANGED`
A használható bag-kapacitás változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `capacity` | `int` | `number` | No |  |
| `used` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("INVENTORY_CAPACITY_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `InventoryEvents.PublishCapacityChanged(...)`

## `2. INVENTORY_ITEM_ADDED`
Új item instance vagy stack jelent meg a gameplay inventoryban.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `item` | `ItemStackInfo` | `ItemStackInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("INVENTORY_ITEM_ADDED", payload => {
    // payload.<field>
});
```

C# publisher: `InventoryEvents.PublishItemAdded(...)`

## `3. INVENTORY_ITEM_MOVED`
Egy item a táskán belül másik slotba került.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No |  |
| `fromSlot` | `int` | `number` | No |  |
| `toSlot` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("INVENTORY_ITEM_MOVED", payload => {
    // payload.<field>
});
```

C# publisher: `InventoryEvents.PublishItemMoved(...)`

## `4. INVENTORY_ITEM_QUANTITY_CHANGED`
Egy meglévő stack mennyisége változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No |  |
| `itemId` | `int` | `number` | No |  |
| `previous` | `int` | `number` | No |  |
| `current` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("INVENTORY_ITEM_QUANTITY_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `InventoryEvents.PublishItemQuantityChanged(...)`

## `5. INVENTORY_ITEM_REMOVED`
Egy item/stack teljesen elhagyta a táskát.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No |  |
| `itemId` | `int` | `number` | No |  |
| `quantity` | `int` | `number` | No | eltávolított mennyiség |
| `slot` | `int?` | `number | null` | Yes | korábbi slot |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("INVENTORY_ITEM_REMOVED", payload => {
    // payload.<field>
});
```

C# publisher: `InventoryEvents.PublishItemRemoved(...)`

## `6. INVENTORY_LAYOUT_CHANGED`
Több slotot érintő rendezés vagy authoritative resync történt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `revision` | `long` | `number` | No | inventory layout revision Non-negative revision/identifier; represented as Long in the public Forge schema. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("INVENTORY_LAYOUT_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `InventoryEvents.PublishLayoutChanged(...)`

