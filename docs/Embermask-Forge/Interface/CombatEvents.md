# Combat Events

Combat-log style events describing resolved combat actions such as damage, healing, absorbs, avoidance, interrupts, dispels, taunts, and auto-attack state.

## Event index

| Event | Description |
|---|---|
| `AUTO_ATTACK_STARTED` | Published when auto attack starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state. |
| `AUTO_ATTACK_STOPPED` | Published when the authoritative 'AUTO_ATTACK_STOPPED' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns. |
| `COMBAT_ABSORB` | Published when the authoritative 'COMBAT_ABSORB' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns. |
| `COMBAT_DAMAGE` | Published when a resolved combat action deals actual health damage. The payload identifies source, target, ability context, damage type, amount, and critical/absorb information when available. |
| `COMBAT_DISPEL` | Published when the authoritative 'COMBAT_DISPEL' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns. |
| `COMBAT_HEAL` | Published when a resolved combat or healing effect restores health. The payload describes the source, target, ability context, restored amount, and critical result when applicable. |
| `COMBAT_INTERRUPT` | Published when the authoritative 'COMBAT_INTERRUPT' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns. |
| `COMBAT_MISS` | Published when the authoritative 'COMBAT_MISS' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns. |
| `COMBAT_TAUNT` | Published when the authoritative 'COMBAT_TAUNT' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `AUTO_ATTACK_STARTED`

Published when auto attack starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef` | No | Optional entity responsible for creating the effect or state change. |
| `target` | `EntityRef` | `EntityRef` | No | Optional entity targeted by the action or cast. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("AUTO_ATTACK_STARTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CombatEvents.PublishAutoAttackStarted(
    eventBus,
    source,
    target
);
```

## `AUTO_ATTACK_STOPPED`

Published when the authoritative 'AUTO_ATTACK_STOPPED' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef` | No | Optional entity responsible for creating the effect or state change. |
| `target` | `EntityRef` | `EntityRef | null` | Yes | Optional entity targeted by the action or cast. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("AUTO_ATTACK_STOPPED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CombatEvents.PublishAutoAttackStopped(
    eventBus,
    source,
    target,
    reasonCode
);
```

## `COMBAT_ABSORB`

Published when the authoritative 'COMBAT_ABSORB' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef | null` | Yes | Optional entity responsible for creating the effect or state change. |
| `target` | `EntityRef` | `EntityRef` | No | Optional entity targeted by the action or cast. |
| `spellId` | `int?` | `number | null` | Yes | Stable content identifier of the spell or ability. |
| `amount` | `int` | `number` | No | Resolved numeric amount associated with the event. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("COMBAT_ABSORB", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CombatEvents.PublishAbsorb(
    eventBus,
    source,
    target,
    spellId,
    amount
);
```

## `COMBAT_DAMAGE`

Published when a resolved combat action deals actual health damage. The payload identifies source, target, ability context, damage type, amount, and critical/absorb information when available.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef` | No | Optional entity responsible for creating the effect or state change. |
| `target` | `EntityRef` | `EntityRef` | No | Optional entity targeted by the action or cast. |
| `spellId` | `int?` | `number | null` | Yes | Stable content identifier of the spell or ability. |
| `amount` | `int` | `number` | No | Resolved numeric amount associated with the event. |
| `absorbed` | `int` | `number` | No | Amount absorbed by shielding or mitigation, when applicable. |
| `blocked` | `int` | `number` | No | Whether the social identity is currently blocked. |
| `damageType` | `DamageType` | `DamageType` | No | Damage category used for this resolved combat action. |
| `critical` | `bool` | `boolean` | No | Whether the resolved combat action was a critical result. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("COMBAT_DAMAGE", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CombatEvents.PublishDamage(
    eventBus,
    source,
    target,
    spellId,
    amount,
    absorbed,
    blocked,
    damageType,
    critical
);
```

## `COMBAT_DISPEL`

Published when the authoritative 'COMBAT_DISPEL' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef` | No | Optional entity responsible for creating the effect or state change. |
| `target` | `EntityRef` | `EntityRef` | No | Optional entity targeted by the action or cast. |
| `spellId` | `int?` | `number | null` | Yes | Stable content identifier of the spell or ability. |
| `effectInstanceId` | `System.Guid` | `string` | No | Stable identifier of the individual aura or effect instance. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("COMBAT_DISPEL", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CombatEvents.PublishDispel(
    eventBus,
    source,
    target,
    spellId,
    effectInstanceId
);
```

## `COMBAT_HEAL`

Published when a resolved combat or healing effect restores health. The payload describes the source, target, ability context, restored amount, and critical result when applicable.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef` | No | Optional entity responsible for creating the effect or state change. |
| `target` | `EntityRef` | `EntityRef` | No | Optional entity targeted by the action or cast. |
| `spellId` | `int?` | `number | null` | Yes | Stable content identifier of the spell or ability. |
| `amount` | `int` | `number` | No | Resolved numeric amount associated with the event. |
| `critical` | `bool` | `boolean` | No | Whether the resolved combat action was a critical result. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("COMBAT_HEAL", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CombatEvents.PublishHeal(
    eventBus,
    source,
    target,
    spellId,
    amount,
    critical
);
```

## `COMBAT_INTERRUPT`

Published when the authoritative 'COMBAT_INTERRUPT' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef` | No | Optional entity responsible for creating the effect or state change. |
| `target` | `EntityRef` | `EntityRef` | No | Optional entity targeted by the action or cast. |
| `spellId` | `int?` | `number | null` | Yes | Stable content identifier of the spell or ability. |
| `interruptedSpellId` | `int` | `number` | No | Stable content identifier of the spell that was interrupted. |
| `castId` | `System.Guid` | `string` | No | Stable identifier of this cast lifecycle. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("COMBAT_INTERRUPT", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CombatEvents.PublishInterrupt(
    eventBus,
    source,
    target,
    spellId,
    interruptedSpellId,
    castId
);
```

## `COMBAT_MISS`

Published when the authoritative 'COMBAT_MISS' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef` | No | Optional entity responsible for creating the effect or state change. |
| `target` | `EntityRef` | `EntityRef` | No | Optional entity targeted by the action or cast. |
| `spellId` | `int?` | `number | null` | Yes | Stable content identifier of the spell or ability. |
| `result` | `CombatAvoidanceResult` | `CombatAvoidanceResult` | No | Stable semantic result of the operation. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("COMBAT_MISS", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CombatEvents.PublishMiss(
    eventBus,
    source,
    target,
    spellId,
    result
);
```

## `COMBAT_TAUNT`

Published when the authoritative 'COMBAT_TAUNT' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef` | No | Optional entity responsible for creating the effect or state change. |
| `target` | `EntityRef` | `EntityRef` | No | Optional entity targeted by the action or cast. |
| `spellId` | `int?` | `number | null` | Yes | Stable content identifier of the spell or ability. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("COMBAT_TAUNT", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CombatEvents.PublishTaunt(
    eventBus,
    source,
    target,
    spellId
);
```

