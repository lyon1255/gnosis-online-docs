# Character Events

Character-progression events for experience, level, talents, specializations, spellbook state, ability loadouts, and combat role.

## Event index

| Event | Description |
|---|---|
| `ABILITY_LOADOUT_CHANGED` | Published when the authoritative ability loadout state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling. |
| `PLAYER_LEVEL_CHANGED` | Published when the authoritative player level state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling. |
| `PLAYER_ROLE_CHANGED` | Published when the authoritative player role state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling. |
| `PLAYER_XP_CHANGED` | Published when the local player's experience total changes. The payload contains the resulting experience value and signed delta applied by the change. |
| `SPECIALIZATION_CHANGED` | Published when the authoritative specialization state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling. |
| `SPECIALIZATION_UNLOCKED` | Published when the authoritative 'SPECIALIZATION_UNLOCKED' gameplay event occurs. The payload contains only client-visible state intended for Character UI and AddOns. |
| `SPELLBOOK_CHANGED` | Published when the authoritative spellbook state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling. |
| `TALENT_CHANGED` | Published when the authoritative talent state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling. |
| `TALENT_POINTS_CHANGED` | Published when the authoritative talent points state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `ABILITY_LOADOUT_CHANGED`

Published when the authoritative ability loadout state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `slotIndex` | `int` | `number` | No | Zero-based slot index within the relevant container or loadout. |
| `spellId` | `int?` | `number | null` | Yes | Stable content identifier of the spell or ability. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ABILITY_LOADOUT_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CharacterEvents.PublishAbilityLoadoutChanged(
    eventBus,
    slotIndex,
    spellId
);
```

## `PLAYER_LEVEL_CHANGED`

Published when the authoritative player level state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `previous` | `int` | `number` | No | Authoritative value before the change. |
| `current` | `int` | `number` | No | Authoritative current value after the change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PLAYER_LEVEL_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CharacterEvents.PublishLevelChanged(
    eventBus,
    previous,
    current
);
```

## `PLAYER_ROLE_CHANGED`

Published when the authoritative player role state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `previous` | `GroupRole?` | `GroupRole | null` | Yes | Authoritative value before the change. |
| `current` | `GroupRole` | `GroupRole` | No | Authoritative current value after the change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PLAYER_ROLE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CharacterEvents.PublishRoleChanged(
    eventBus,
    previous,
    current
);
```

## `PLAYER_XP_CHANGED`

Published when the local player's experience total changes. The payload contains the resulting experience value and signed delta applied by the change.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `current` | `int` | `number` | No | Authoritative current value after the change. |
| `delta` | `int` | `number` | No | Signed difference applied by this change. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PLAYER_XP_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CharacterEvents.PublishExperienceChanged(
    eventBus,
    current,
    delta,
    reasonCode
);
```

## `SPECIALIZATION_CHANGED`

Published when the authoritative specialization state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `previousSpecializationId` | `int?` | `number | null` | Yes | Previous specialization identifier before the change. |
| `currentSpecializationId` | `int` | `number` | No | Current specialization identifier after the change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("SPECIALIZATION_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CharacterEvents.PublishSpecializationChanged(
    eventBus,
    previousSpecializationId,
    currentSpecializationId
);
```

## `SPECIALIZATION_UNLOCKED`

Published when the authoritative 'SPECIALIZATION_UNLOCKED' gameplay event occurs. The payload contains only client-visible state intended for Character UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `specializationId` | `int` | `number` | No | Stable content identifier of the specialization. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("SPECIALIZATION_UNLOCKED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CharacterEvents.PublishSpecializationUnlocked(
    eventBus,
    specializationId
);
```

## `SPELLBOOK_CHANGED`

Published when the authoritative spellbook state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `spellId` | `int` | `number` | No | Stable content identifier of the spell or ability. |
| `known` | `bool` | `boolean` | No | Whether the referenced content is currently known to the player. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("SPELLBOOK_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CharacterEvents.PublishSpellbookChanged(
    eventBus,
    spellId,
    known
);
```

## `TALENT_CHANGED`

Published when the authoritative talent state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `talentId` | `int` | `number` | No | Stable content identifier of the talent. |
| `previousRank` | `int` | `number` | No | Guild rank before the change. |
| `currentRank` | `int` | `number` | No | Guild rank after the change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("TALENT_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CharacterEvents.PublishTalentChanged(
    eventBus,
    talentId,
    previousRank,
    currentRank
);
```

## `TALENT_POINTS_CHANGED`

Published when the authoritative talent points state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `available` | `int` | `number` | No | Whether the feature or action is currently available. |
| `spent` | `int` | `number` | No | Number of points currently spent in the relevant progression system. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("TALENT_POINTS_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CharacterEvents.PublishTalentPointsChanged(
    eventBus,
    available,
    spent
);
```

