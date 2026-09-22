# Appearance Events

Character appearance, cosmetic equipment, and transmog events exposed to appearance-related UI.

## Event index

| Event | Description |
|---|---|
| `CHARACTER_APPEARANCE_CHANGED` | Published when the authoritative character appearance state changes. The payload contains the resulting state and identifiers needed by Appearance UI or AddOns to update without polling. |
| `COSMETIC_EQUIPPED` | Published when cosmetic is authoritatively equipped and the resulting equipment state becomes active. |
| `COSMETIC_UNEQUIPPED` | Published when cosmetic is authoritatively unequipped and removed from its active equipment slot. |
| `TRANSMOG_CHANGED` | Published when the authoritative transmog state changes. The payload contains the resulting state and identifiers needed by Appearance UI or AddOns to update without polling. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `CHARACTER_APPEARANCE_CHANGED`

Published when the authoritative character appearance state changes. The payload contains the resulting state and identifiers needed by Appearance UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `characterGuid` | `System.Guid` | `string` | No | Stable identifier of the character. |
| `appearanceRevision` | `int` | `number` | No | Revision number of the character's appearance state. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("CHARACTER_APPEARANCE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AppearanceEvents.PublishCharacterAppearanceChanged(
    eventBus,
    characterGuid,
    appearanceRevision
);
```

## `COSMETIC_EQUIPPED`

Published when cosmetic is authoritatively equipped and the resulting equipment state becomes active.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `cosmeticDefinitionId` | `string` | `string` | No | Stable content identifier of the cosmetic definition. |
| `slotId` | `string` | `string` | No | Stable identifier of the affected loadout or equipment slot. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("COSMETIC_EQUIPPED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AppearanceEvents.PublishCosmeticEquipped(
    eventBus,
    cosmeticDefinitionId,
    slotId
);
```

## `COSMETIC_UNEQUIPPED`

Published when cosmetic is authoritatively unequipped and removed from its active equipment slot.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `cosmeticDefinitionId` | `string` | `string` | No | Stable content identifier of the cosmetic definition. |
| `slotId` | `string` | `string` | No | Stable identifier of the affected loadout or equipment slot. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("COSMETIC_UNEQUIPPED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AppearanceEvents.PublishCosmeticUnequipped(
    eventBus,
    cosmeticDefinitionId,
    slotId
);
```

## `TRANSMOG_CHANGED`

Published when the authoritative transmog state changes. The payload contains the resulting state and identifiers needed by Appearance UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No | Stable identifier of the concrete item instance. |
| `appearanceId` | `string` | `string | null` | Yes | Stable content identifier of the appearance or cosmetic configuration. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("TRANSMOG_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AppearanceEvents.PublishTransmogChanged(
    eventBus,
    itemInstanceGuid,
    appearanceId
);
```

