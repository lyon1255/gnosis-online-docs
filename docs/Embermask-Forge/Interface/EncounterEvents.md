# Encounter Events

Instance and encounter lifecycle events for boss fights, difficulty, challenge timers, raid lockouts, and first-kill records.

## Event index

| Event | Description |
|---|---|
| `CHALLENGE_TIMER_ENDED` | Published when challenge timer reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable. |
| `CHALLENGE_TIMER_STARTED` | Published when challenge timer starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state. |
| `ENCOUNTER_COMPLETED` | Published when encounter completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume. |
| `ENCOUNTER_DIFFICULTY_CHANGED` | Published when the authoritative encounter difficulty state changes. The payload contains the resulting state and identifiers needed by Encounter UI or AddOns to update without polling. |
| `ENCOUNTER_PHASE_CHANGED` | Published when the authoritative encounter phase state changes. The payload contains the resulting state and identifiers needed by Encounter UI or AddOns to update without polling. |
| `ENCOUNTER_RESET` | Published when encounter is reset to its authoritative baseline state. |
| `ENCOUNTER_STARTED` | Published when encounter starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state. |
| `ENCOUNTER_WIPED` | Published when encounter is recognized as a wipe by the authoritative encounter state. |
| `FIRST_KILL_RECORDED` | Published when first kill is authoritatively recorded and becomes part of the player's visible progression state. |
| `INSTANCE_ENTERED` | Published when the authoritative 'INSTANCE_ENTERED' gameplay event occurs. The payload contains only client-visible state intended for Encounter UI and AddOns. |
| `INSTANCE_LEFT` | Published when instance leaves the relevant social, group, or world context. |
| `RAID_LOOT_LOCKOUT_CHANGED` | Published when the authoritative raid loot lockout state changes. The payload contains the resulting state and identifiers needed by Encounter UI or AddOns to update without polling. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `CHALLENGE_TIMER_ENDED`

Published when challenge timer reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `instanceId` | `System.Guid` | `string` | No | Stable identifier of the active game instance. |
| `elapsed` | `int` | `number` | No | Elapsed timer duration in milliseconds. |
| `success` | `bool` | `boolean` | No | Whether the operation completed successfully. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("CHALLENGE_TIMER_ENDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
EncounterEvents.PublishChallengeTimerEnded(
    eventBus,
    instanceId,
    elapsed,
    success
);
```

## `CHALLENGE_TIMER_STARTED`

Published when challenge timer starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `instanceId` | `System.Guid` | `string` | No | Stable identifier of the active game instance. |
| `startedAt` | `System.DateTime` | `string` | No | Authoritative timestamp at which the operation started. |
| `endsAt` | `System.DateTime` | `string` | No | Optional authoritative timestamp at which the operation is expected to end. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("CHALLENGE_TIMER_STARTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
EncounterEvents.PublishChallengeTimerStarted(
    eventBus,
    instanceId,
    startedAt,
    endsAt
);
```

## `ENCOUNTER_COMPLETED`

Published when encounter completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `encounterId` | `System.Guid` | `string` | No | Stable identifier of the encounter instance. |
| `bossId` | `int?` | `number | null` | Yes | Optional stable content identifier of the primary boss. |
| `difficulty` | `EncounterDifficulty` | `EncounterDifficulty` | No | Difficulty mode of the encounter. |
| `duration` | `int` | `number` | No | Elapsed duration in milliseconds. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ENCOUNTER_COMPLETED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
EncounterEvents.PublishEncounterCompleted(
    eventBus,
    encounterId,
    bossId,
    difficulty,
    duration
);
```

## `ENCOUNTER_DIFFICULTY_CHANGED`

Published when the authoritative encounter difficulty state changes. The payload contains the resulting state and identifiers needed by Encounter UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `instanceId` | `System.Guid` | `string` | No | Stable identifier of the active game instance. |
| `difficulty` | `EncounterDifficulty` | `EncounterDifficulty` | No | Difficulty mode of the encounter. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ENCOUNTER_DIFFICULTY_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
EncounterEvents.PublishDifficultyChanged(
    eventBus,
    instanceId,
    difficulty
);
```

## `ENCOUNTER_PHASE_CHANGED`

Published when the authoritative encounter phase state changes. The payload contains the resulting state and identifiers needed by Encounter UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `encounterId` | `System.Guid` | `string` | No | Stable identifier of the encounter instance. |
| `phaseId` | `string` | `string` | No | Stable identifier of the current encounter phase. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ENCOUNTER_PHASE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
EncounterEvents.PublishEncounterPhaseChanged(
    eventBus,
    encounterId,
    phaseId
);
```

## `ENCOUNTER_RESET`

Published when encounter is reset to its authoritative baseline state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `encounterId` | `System.Guid` | `string` | No | Stable identifier of the encounter instance. |
| `resetAt` | `System.DateTime` | `string` | No | Authoritative timestamp at which the lockout or state resets. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ENCOUNTER_RESET", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
EncounterEvents.PublishEncounterReset(
    eventBus,
    encounterId,
    resetAt
);
```

## `ENCOUNTER_STARTED`

Published when encounter starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `encounter` | `EncounterInfo` | `EncounterInfo` | No | Encounter identity and configuration snapshot. |
| `startedAt` | `System.DateTime` | `string` | No | Authoritative timestamp at which the operation started. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ENCOUNTER_STARTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
EncounterEvents.PublishEncounterStarted(
    eventBus,
    encounter,
    startedAt
);
```

## `ENCOUNTER_WIPED`

Published when encounter is recognized as a wipe by the authoritative encounter state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `encounterId` | `System.Guid` | `string` | No | Stable identifier of the encounter instance. |
| `wipedAt` | `System.DateTime` | `string` | No | Authoritative timestamp at which the encounter wipe was recognized. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ENCOUNTER_WIPED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
EncounterEvents.PublishEncounterWiped(
    eventBus,
    encounterId,
    wipedAt
);
```

## `FIRST_KILL_RECORDED`

Published when first kill is authoritatively recorded and becomes part of the player's visible progression state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `bossId` | `int` | `number` | No | Optional stable content identifier of the primary boss. |
| `recordId` | `System.Guid` | `string` | No | Stable identifier of the persisted record. |
| `recordedAt` | `System.DateTime` | `string` | No | Authoritative timestamp at which the record was created. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("FIRST_KILL_RECORDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
EncounterEvents.PublishFirstKillRecorded(
    eventBus,
    bossId,
    recordId,
    recordedAt
);
```

## `INSTANCE_ENTERED`

Published when the authoritative 'INSTANCE_ENTERED' gameplay event occurs. The payload contains only client-visible state intended for Encounter UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `encounter` | `EncounterInfo` | `EncounterInfo` | No | Encounter identity and configuration snapshot. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("INSTANCE_ENTERED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
EncounterEvents.PublishInstanceEntered(
    eventBus,
    encounter
);
```

## `INSTANCE_LEFT`

Published when instance leaves the relevant social, group, or world context.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `instanceId` | `System.Guid` | `string` | No | Stable identifier of the active game instance. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("INSTANCE_LEFT", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
EncounterEvents.PublishInstanceLeft(
    eventBus,
    instanceId,
    reasonCode
);
```

## `RAID_LOOT_LOCKOUT_CHANGED`

Published when the authoritative raid loot lockout state changes. The payload contains the resulting state and identifiers needed by Encounter UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `bossId` | `int` | `number` | No | Optional stable content identifier of the primary boss. |
| `eligible` | `bool` | `boolean` | No | Whether the local player is currently eligible for the operation or reward. |
| `resetAt` | `System.DateTime?` | `string | null` | Yes | Authoritative timestamp at which the lockout or state resets. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("RAID_LOOT_LOCKOUT_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
EncounterEvents.PublishRaidLootLockoutChanged(
    eventBus,
    bossId,
    eligible,
    resetAt
);
```

