# Combat Events


Combat-log jellegű akciók. 


Events: **9**

## `1. AUTO_ATTACK_STARTED`
Egy legitim basic/auto attack sorozat elindult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef` | No |  |
| `target` | `EntityRef` | `EntityRef` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("AUTO_ATTACK_STARTED", payload => {
    // payload.<field>
});
```

C# publisher: `CombatEvents.PublishAutoAttackStarted(...)`

## `2. AUTO_ATTACK_STOPPED`
Az aktív basic/auto attack sorozat megszűnt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef` | No |  |
| `target` | `EntityRef` | `EntityRef | null` | Yes |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("AUTO_ATTACK_STOPPED", payload => {
    // payload.<field>
});
```

C# publisher: `CombatEvents.PublishAutoAttackStopped(...)`

## `3. COMBAT_ABSORB`
Egy shield beérkező hatást nyelt el.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef | null` | Yes | shield eredeti forrása, ha ismert |
| `target` | `EntityRef` | `EntityRef` | No |  |
| `spellId` | `int?` | `number | null` | Yes |  |
| `amount` | `int` | `number` | No | elnyelt érték |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("COMBAT_ABSORB", payload => {
    // payload.<field>
});
```

C# publisher: `CombatEvents.PublishAbsorb(...)`

## `4. COMBAT_DAMAGE`
Egy találat tényleges HP-sebzést okozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef` | No | okozó |
| `target` | `EntityRef` | `EntityRef` | No | cél |
| `spellId` | `int?` | `number | null` | Yes | spell/ability, ha van |
| `amount` | `int` | `number` | No | HP-ra jutó sebzés |
| `absorbed` | `int` | `number` | No | shield által elnyelt rész |
| `blocked` | `int` | `number` | No | block által csökkentett rész |
| `damageType` | `DamageType` | `string` | No |  |
| `critical` | `bool` | `boolean` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("COMBAT_DAMAGE", payload => {
    // payload.<field>
});
```

C# publisher: `CombatEvents.PublishDamage(...)`

## `5. COMBAT_DISPEL`
Egy dispel eltávolított egy publikus aura instance-t.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef` | No |  |
| `target` | `EntityRef` | `EntityRef` | No |  |
| `spellId` | `int?` | `number | null` | Yes |  |
| `effectInstanceId` | `System.Guid` | `string` | No | eltávolított aura |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("COMBAT_DISPEL", payload => {
    // payload.<field>
});
```

C# publisher: `CombatEvents.PublishDispel(...)`

## `6. COMBAT_HEAL`
Egy combat/healing effect HP-t állított helyre.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef` | No |  |
| `target` | `EntityRef` | `EntityRef` | No |  |
| `spellId` | `int?` | `number | null` | Yes |  |
| `amount` | `int` | `number` | No | tényleges gyógyítás |
| `critical` | `bool` | `boolean` | No | ha a heal rendszer támogatja az adott critet |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("COMBAT_HEAL", payload => {
    // payload.<field>
});
```

C# publisher: `CombatEvents.PublishHeal(...)`

## `7. COMBAT_INTERRUPT`
Egy forrás megszakított egy még megszakítható castot.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef` | No |  |
| `target` | `EntityRef` | `EntityRef` | No |  |
| `spellId` | `int?` | `number | null` | Yes | interruptot okozó ability |
| `interruptedSpellId` | `int` | `number` | No |  |
| `castId` | `System.Guid` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("COMBAT_INTERRUPT", payload => {
    // payload.<field>
});
```

C# publisher: `CombatEvents.PublishInterrupt(...)`

## `8. COMBAT_MISS`
Egy támadás az exclusive hit/avoidance lépésben nem okozott hitet.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef` | No |  |
| `target` | `EntityRef` | `EntityRef` | No |  |
| `spellId` | `int?` | `number | null` | Yes |  |
| `result` | `CombatAvoidanceResult` | `string` | No | miss/dodge/parry |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("COMBAT_MISS", payload => {
    // payload.<field>
});
```

C# publisher: `CombatEvents.PublishMiss(...)`

## `9. COMBAT_TAUNT`
Taunt effect sikeresen kényszerített threat/target reakciót.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef` | No |  |
| `target` | `EntityRef` | `EntityRef` | No |  |
| `spellId` | `int?` | `number | null` | Yes |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("COMBAT_TAUNT", payload => {
    // payload.<field>
});
```

C# publisher: `CombatEvents.PublishTaunt(...)`

