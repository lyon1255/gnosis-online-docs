# Spell Events


Cast és cooldown lifecycle. 


Events: **8**

## `1. SPELL_CAST_COMMITTED`
A cast elérte azt a pontot, amely után az effect saját szabályai szerint folytatódik.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `castId` | `System.Guid` | `string` | No |  |
| `spellId` | `int` | `number` | No |  |
| `caster` | `EntityRef` | `EntityRef` | No |  |
| `target` | `EntityRef` | `EntityRef | null` | Yes |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("SPELL_CAST_COMMITTED", payload => {
    // payload.<field>
});
```

C# publisher: `SpellEvents.PublishCastCommitted(...)`

## `2. SPELL_CAST_FAILED`
Egy cast request vagy cast-lifecycle érvényesítés miatt nem teljesült.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `castId` | `System.Guid?` | `string | null` | Yes | ha már létrejött |
| `spellId` | `int` | `number` | No |  |
| `caster` | `EntityRef` | `EntityRef` | No |  |
| `reason` | `CastFailureReason` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("SPELL_CAST_FAILED", payload => {
    // payload.<field>
});
```

C# publisher: `SpellEvents.PublishCastFailed(...)`

## `3. SPELL_CAST_INTERRUPTED`
Egy már elindult, még nem committed cast megszakadt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `castId` | `System.Guid` | `string` | No |  |
| `spellId` | `int` | `number` | No |  |
| `caster` | `EntityRef` | `EntityRef` | No |  |
| `reason` | `CastInterruptReason` | `string` | No |  |
| `interrupter` | `EntityRef` | `EntityRef | null` | Yes |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("SPELL_CAST_INTERRUPTED", payload => {
    // payload.<field>
});
```

C# publisher: `SpellEvents.PublishCastInterrupted(...)`

## `4. SPELL_CAST_STARTED`
A szerver elfogadta és elindította a cast lifecycle-t.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `cast` | `SpellCastInfo` | `SpellCastInfo` | No | cast snapshot |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("SPELL_CAST_STARTED", payload => {
    // payload.<field>
});
```

C# publisher: `SpellEvents.PublishCastStarted(...)`

## `5. SPELL_CAST_SUCCEEDED`
A cast sikeresen befejezte a szerveroldali cast fázist.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `castId` | `System.Guid` | `string` | No |  |
| `spellId` | `int` | `number` | No |  |
| `caster` | `EntityRef` | `EntityRef` | No |  |
| `target` | `EntityRef` | `EntityRef | null` | Yes |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("SPELL_CAST_SUCCEEDED", payload => {
    // payload.<field>
});
```

C# publisher: `SpellEvents.PublishCastSucceeded(...)`

## `6. SPELL_COOLDOWNS_RESET`
A lokális cooldown state szerveroldali reset vagy authoritative resync miatt újraértékelendő.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `spellIds` | `System.Collections.Generic.List<int>` | `ReadonlyArray<number>` | No | resetelt spell ID-k; üres lista teljes snapshot-resetet jelenthet csak akkor, ha ezt a későbbi schema explicit rögzíti |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("SPELL_COOLDOWNS_RESET", payload => {
    // payload.<field>
});
```

C# publisher: `SpellEvents.PublishCooldownsReset(...)`

## `7. SPELL_COOLDOWN_ENDED`
Egy lokális spell-cooldown lejárt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `spellId` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("SPELL_COOLDOWN_ENDED", payload => {
    // payload.<field>
});
```

C# publisher: `SpellEvents.PublishCooldownEnded(...)`

## `8. SPELL_COOLDOWN_STARTED`
A lokális karakter egy spell-cooldownja elindult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `spellId` | `int` | `number` | No |  |
| `startedAt` | `System.DateTime` | `string` | No |  |
| `endsAt` | `System.DateTime` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("SPELL_COOLDOWN_STARTED", payload => {
    // payload.<field>
});
```

C# publisher: `SpellEvents.PublishCooldownStarted(...)`

