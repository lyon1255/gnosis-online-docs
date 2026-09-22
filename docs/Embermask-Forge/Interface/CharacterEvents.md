# Character Events


XP, level, talent, spec, spellbook/loadout. 


Events: **9**

## `1. ABILITY_LOADOUT_CHANGED`
Egy aktív ability-bar slot szerver által elfogadott tartalma változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `slotIndex` | `int` | `number` | No |  |
| `spellId` | `int?` | `number | null` | Yes | új spell vagy üres slot |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ABILITY_LOADOUT_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `CharacterEvents.PublishAbilityLoadoutChanged(...)`

## `2. PLAYER_LEVEL_CHANGED`
A helyi karakter szintje változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `previous` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |
| `current` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PLAYER_LEVEL_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `CharacterEvents.PublishLevelChanged(...)`

## `3. PLAYER_ROLE_CHANGED`
A karakter aktív combat role-ja a kanonikus talent/spec logika szerint módosult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `previous` | `GroupRole?` | `string | null` | Yes |  |
| `current` | `GroupRole` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PLAYER_ROLE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `CharacterEvents.PublishRoleChanged(...)`

## `4. PLAYER_XP_CHANGED`
A lokális karakter XP-je authoritative jutalmazás után változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `current` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |
| `delta` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PLAYER_XP_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `CharacterEvents.PublishExperienceChanged(...)`

## `5. SPECIALIZATION_CHANGED`
A karakter aktív specializationje megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `previousSpecializationId` | `int?` | `number | null` | Yes |  |
| `currentSpecializationId` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("SPECIALIZATION_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `CharacterEvents.PublishSpecializationChanged(...)`

## `6. SPECIALIZATION_UNLOCKED`
Egy specialization elérhetővé vált a karakter számára.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `specializationId` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("SPECIALIZATION_UNLOCKED", payload => {
    // payload.<field>
});
```

C# publisher: `CharacterEvents.PublishSpecializationUnlocked(...)`

## `7. SPELLBOOK_CHANGED`
Egy spell bekerült vagy kikerült a lokális spellbookból.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `spellId` | `int` | `number` | No |  |
| `known` | `bool` | `boolean` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("SPELLBOOK_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `CharacterEvents.PublishSpellbookChanged(...)`

## `8. TALENT_CHANGED`
Egy talent node authoritative rankje módosult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `talentId` | `int` | `number` | No |  |
| `previousRank` | `int` | `number` | No |  |
| `currentRank` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("TALENT_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `CharacterEvents.PublishTalentChanged(...)`

## `9. TALENT_POINTS_CHANGED`
A szabad és/vagy összes talentpont állapota módosult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `available` | `int` | `number` | No |  |
| `spent` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("TALENT_POINTS_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `CharacterEvents.PublishTalentPointsChanged(...)`

