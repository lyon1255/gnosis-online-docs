# Item Events


Item-instance állapot. 


Events: **7**

## `1. ITEM_BINDING_CHANGED`
Az item instance kötöttségi állapota megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No |  |
| `itemId` | `int` | `number` | No |  |
| `isBound` | `bool` | `boolean` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ITEM_BINDING_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `ItemEvents.PublishBindingChanged(...)`

## `2. ITEM_BROKEN`
Egy item elérte a törött/inaktív durability állapotot.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No |  |
| `itemId` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ITEM_BROKEN", payload => {
    // payload.<field>
});
```

C# publisher: `ItemEvents.PublishBroken(...)`

## `3. ITEM_CHARGE_CHANGED`
Egy Charge-alapú item aktuális töltöttsége megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No |  |
| `itemId` | `int` | `number` | No |  |
| `current` | `float` | `number` | No |  |
| `max` | `float` | `number` | No |  |
| `effectActive` | `bool` | `boolean` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ITEM_CHARGE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `ItemEvents.PublishChargeChanged(...)`

## `4. ITEM_DURABILITY_CHANGED`
Egy item durability állapota változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No |  |
| `itemId` | `int` | `number` | No |  |
| `current` | `int` | `number` | No |  |
| `max` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ITEM_DURABILITY_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `ItemEvents.PublishDurabilityChanged(...)`

## `5. ITEM_RECHARGED`
NPC vagy későbbi engedélyezett rendszer feltöltötte az item Charge-ját.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No |  |
| `itemId` | `int` | `number` | No |  |
| `current` | `float` | `number` | No |  |
| `max` | `float` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ITEM_RECHARGED", payload => {
    // payload.<field>
});
```

C# publisher: `ItemEvents.PublishRecharged(...)`

## `6. ITEM_REPAIRED`
Egy item sikeresen javítva lett. Repair All esetén itemenként publikálható.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No |  |
| `itemId` | `int` | `number` | No |  |
| `current` | `int` | `number` | No |  |
| `max` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ITEM_REPAIRED", payload => {
    // payload.<field>
});
```

C# publisher: `ItemEvents.PublishRepaired(...)`

## `7. ITEM_USED`
Egy gameplay item használata szerveroldalon sikeresen megtörtént.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No |  |
| `itemId` | `int` | `number` | No |  |
| `quantity` | `int` | `number` | No | felhasznált mennyiség |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ITEM_USED", payload => {
    // payload.<field>
});
```

C# publisher: `ItemEvents.PublishUsed(...)`

