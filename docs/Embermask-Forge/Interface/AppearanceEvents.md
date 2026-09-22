# Appearance Events


Appearance/cosmetic/transmog. 


Events: **4**

## `1. CHARACTER_APPEARANCE_CHANGED`
Egy látható karakter megjelenési snapshotja változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `characterGuid` | `System.Guid` | `string` | No |  |
| `appearanceRevision` | `long` | `number` | No | Non-negative revision/identifier; represented as Long in the public Forge schema. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("CHARACTER_APPEARANCE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `AppearanceEvents.PublishCharacterAppearanceChanged(...)`

## `2. COSMETIC_EQUIPPED`
A szerver/platform entitlement alapján jóváhagyott cosmetic aktív lett.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `cosmeticDefinitionId` | `string` | `string` | No |  |
| `slotId` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("COSMETIC_EQUIPPED", payload => {
    // payload.<field>
});
```

C# publisher: `AppearanceEvents.PublishCosmeticEquipped(...)`

## `3. COSMETIC_UNEQUIPPED`
Cosmetic eltávolításra került az appearance slotból.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `cosmeticDefinitionId` | `string` | `string` | No |  |
| `slotId` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("COSMETIC_UNEQUIPPED", payload => {
    // payload.<field>
});
```

C# publisher: `AppearanceEvents.PublishCosmeticUnequipped(...)`

## `4. TRANSMOG_CHANGED`
Egy gameplay equipment item megjelenési override-ja változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No |  |
| `appearanceId` | `string` | `string | null` | Yes | null/üres override eltávolítást jelent a végleges schema szabálya szerint |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("TRANSMOG_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `AppearanceEvents.PublishTransmogChanged(...)`

