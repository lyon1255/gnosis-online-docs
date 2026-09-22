# Spell Events

Spell and ability cast lifecycle events, including cast start, commitment, success, failure, interruption, and cooldown changes.

## Event index

| Event | Description |
|---|---|
| `SPELL_CAST_COMMITTED` | Published when the authoritative 'SPELL_CAST_COMMITTED' gameplay event occurs. The payload contains only client-visible state intended for Spell UI and AddOns. |
| `SPELL_CAST_FAILED` | Published when spell cast fails before reaching a successful final state. The payload includes stable context or reason information when available. |
| `SPELL_CAST_INTERRUPTED` | Published when the authoritative 'SPELL_CAST_INTERRUPTED' gameplay event occurs. The payload contains only client-visible state intended for Spell UI and AddOns. |
| `SPELL_CAST_STARTED` | Published when the authoritative game state accepts and starts a spell or ability cast. The payload contains the initial cast snapshot required by cast bars and related UI. |
| `SPELL_CAST_SUCCEEDED` | Published when the authoritative 'SPELL_CAST_SUCCEEDED' gameplay event occurs. The payload contains only client-visible state intended for Spell UI and AddOns. |
| `SPELL_COOLDOWNS_RESET` | Published when spell cooldowns is reset to its authoritative baseline state. |
| `SPELL_COOLDOWN_ENDED` | Published when spell cooldown reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable. |
| `SPELL_COOLDOWN_STARTED` | Published when spell cooldown starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `SPELL_CAST_COMMITTED`

Published when the authoritative 'SPELL_CAST_COMMITTED' gameplay event occurs. The payload contains only client-visible state intended for Spell UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `castId` | `System.Guid` | `string` | No | Stable identifier of this cast lifecycle. |
| `spellId` | `int` | `number` | No | Stable content identifier of the spell or ability. |
| `caster` | `EntityRef` | `EntityRef` | No | Entity that initiated the cast. |
| `target` | `EntityRef` | `EntityRef | null` | Yes | Optional entity targeted by the action or cast. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("SPELL_CAST_COMMITTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SpellEvents.PublishCastCommitted(
    eventBus,
    castId,
    spellId,
    caster,
    target
);
```

## `SPELL_CAST_FAILED`

Published when spell cast fails before reaching a successful final state. The payload includes stable context or reason information when available.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `castId` | `System.Guid?` | `string | null` | Yes | Stable identifier of this cast lifecycle. |
| `spellId` | `int` | `number` | No | Stable content identifier of the spell or ability. |
| `caster` | `EntityRef` | `EntityRef` | No | Entity that initiated the cast. |
| `reason` | `CastFailureReason` | `CastFailureReason` | No | Stable semantic reason associated with the event. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("SPELL_CAST_FAILED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SpellEvents.PublishCastFailed(
    eventBus,
    castId,
    spellId,
    caster,
    reason
);
```

## `SPELL_CAST_INTERRUPTED`

Published when the authoritative 'SPELL_CAST_INTERRUPTED' gameplay event occurs. The payload contains only client-visible state intended for Spell UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `castId` | `System.Guid` | `string` | No | Stable identifier of this cast lifecycle. |
| `spellId` | `int` | `number` | No | Stable content identifier of the spell or ability. |
| `caster` | `EntityRef` | `EntityRef` | No | Entity that initiated the cast. |
| `reason` | `CastInterruptReason` | `CastInterruptReason` | No | Stable semantic reason associated with the event. |
| `interrupter` | `EntityRef` | `EntityRef | null` | Yes | Entity responsible for the interrupt. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("SPELL_CAST_INTERRUPTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SpellEvents.PublishCastInterrupted(
    eventBus,
    castId,
    spellId,
    caster,
    reason,
    interrupter
);
```

## `SPELL_CAST_STARTED`

Published when the authoritative game state accepts and starts a spell or ability cast. The payload contains the initial cast snapshot required by cast bars and related UI.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `cast` | `SpellCastInfo` | `SpellCastInfo` | No | Authoritative cast value associated with this payload. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("SPELL_CAST_STARTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SpellEvents.PublishCastStarted(
    eventBus,
    cast
);
```

## `SPELL_CAST_SUCCEEDED`

Published when the authoritative 'SPELL_CAST_SUCCEEDED' gameplay event occurs. The payload contains only client-visible state intended for Spell UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `castId` | `System.Guid` | `string` | No | Stable identifier of this cast lifecycle. |
| `spellId` | `int` | `number` | No | Stable content identifier of the spell or ability. |
| `caster` | `EntityRef` | `EntityRef` | No | Entity that initiated the cast. |
| `target` | `EntityRef` | `EntityRef | null` | Yes | Optional entity targeted by the action or cast. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("SPELL_CAST_SUCCEEDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SpellEvents.PublishCastSucceeded(
    eventBus,
    castId,
    spellId,
    caster,
    target
);
```

## `SPELL_COOLDOWNS_RESET`

Published when spell cooldowns is reset to its authoritative baseline state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `spellIds` | `System.Collections.Generic.List<int>` | `ReadonlyArray<number>` | No | Stable content identifiers of the spells affected by the update. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("SPELL_COOLDOWNS_RESET", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SpellEvents.PublishCooldownsReset(
    eventBus,
    spellIds
);
```

## `SPELL_COOLDOWN_ENDED`

Published when spell cooldown reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `spellId` | `int` | `number` | No | Stable content identifier of the spell or ability. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("SPELL_COOLDOWN_ENDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SpellEvents.PublishCooldownEnded(
    eventBus,
    spellId
);
```

## `SPELL_COOLDOWN_STARTED`

Published when spell cooldown starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `spellId` | `int` | `number` | No | Stable content identifier of the spell or ability. |
| `startedAt` | `System.DateTime` | `string` | No | Authoritative timestamp at which the operation started. |
| `endsAt` | `System.DateTime` | `string` | No | Optional authoritative timestamp at which the operation is expected to end. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("SPELL_COOLDOWN_STARTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SpellEvents.PublishCooldownStarted(
    eventBus,
    spellId,
    startedAt,
    endsAt
);
```

