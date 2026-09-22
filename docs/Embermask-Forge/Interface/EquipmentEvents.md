# Equipment Events


Felszerelés lifecycle. 


Events: **2**

## `1. ITEM_EQUIPPED`
Egy item authoritative equipment helyre került.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No |  |
| `itemId` | `int` | `number` | No |  |
| `slotMask` | `int` | `number` | No | 16 bites EquipSlot footprint 16-bit unsigned semantic value; represented as Integer in the public Forge schema. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ITEM_EQUIPPED", payload => {
    // payload.<field>
});
```

C# publisher: `EquipmentEvents.PublishEquipped(...)`

## `2. ITEM_UNEQUIPPED`
Egy item elhagyta az equipment state-et; automatikus ütközésfeloldáskor is publikálódik.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No |  |
| `itemId` | `int` | `number` | No |  |
| `previousSlotMask` | `int` | `number` | No | 16-bit unsigned semantic value; represented as Integer in the public Forge schema. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ITEM_UNEQUIPPED", payload => {
    // payload.<field>
});
```

C# publisher: `EquipmentEvents.PublishUnequipped(...)`

