# Unit Events


Addressable unit state és target binding. 


Events: **7**

## `1. TARGET_CHANGED`
A lokális `target` token más entitáshoz kötődik vagy kiürül.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `guid` | `System.Guid?` | `string | null` | Yes | új target |
| `entityType` | `EntityType?` | `string | null` | Yes | új target típusa |
| `spawnGeneration` | `long?` | `number | null` | Yes | target lifecycle-generációja Non-negative value; represented as Long in the public Forge schema. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("TARGET_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `UnitEvents.PublishTargetChanged(...)`

## `2. UNIT_ADDED`
Egy publikus unit token egy legitim módon látható entitáshoz kötődik.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No | unit token |
| `guid` | `System.Guid` | `string` | No | entitásazonosító |
| `entityType` | `EntityType` | `string` | No | entitás típusa |
| `spawnGeneration` | `long` | `number` | No | aktuális lifecycle-generáció Non-negative value; represented as Long in the public Forge schema. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("UNIT_ADDED", payload => {
    // payload.<field>
});
```

C# publisher: `UnitEvents.PublishAdded(...)`

## `3. UNIT_COMBAT_STATE_CHANGED`
Egy addressable unit in/out-of-combat állapota változik.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No |  |
| `guid` | `System.Guid` | `string` | No |  |
| `state` | `UnitCombatState` | `string` | No | új combat state |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("UNIT_COMBAT_STATE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `UnitEvents.PublishCombatStateChanged(...)`

## `4. UNIT_HEALTH_CHANGED`
Egy addressable unit HP-állapota megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No | frissített alias |
| `guid` | `System.Guid` | `string` | No | entitás |
| `current` | `int` | `number` | No | változás utáni HP |
| `max` | `int` | `number` | No | változás utáni max HP |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("UNIT_HEALTH_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `UnitEvents.PublishHealthChanged(...)`

## `5. UNIT_LEVEL_CHANGED`
Egy olyan addressable unit látható szintje módosult, amelynél a kliens ezt jogszerűen ismeri.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No |  |
| `guid` | `System.Guid` | `string` | No |  |
| `level` | `int` | `number` | No | új szint Canonical import default: Integer, pending GAP-005 end-to-end numeric-width finalization. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("UNIT_LEVEL_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `UnitEvents.PublishLevelChanged(...)`

## `6. UNIT_REMOVED`
Egy unit token többé nem addressable az adott kliens számára.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No | megszűnt token |
| `guid` | `System.Guid` | `string` | No | korábbi entitás |
| `spawnGeneration` | `long` | `number` | No | eltávolított lifecycle-generáció Non-negative value; represented as Long in the public Forge schema. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("UNIT_REMOVED", payload => {
    // payload.<field>
});
```

C# publisher: `UnitEvents.PublishRemoved(...)`

## `7. UNIT_RESOURCE_CHANGED`
Egy látható unit resource-állapota megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No | frissített alias |
| `guid` | `System.Guid` | `string` | No | entitás |
| `powerType` | `PowerType` | `string` | No | resource típusa |
| `current` | `int` | `number` | No | új érték |
| `max` | `int` | `number` | No | aktuális maximum |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("UNIT_RESOURCE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `UnitEvents.PublishResourceChanged(...)`

