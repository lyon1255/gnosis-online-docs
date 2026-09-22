# Encounter Events


Instance/Boss/Raid encounter lifecycle. 


Events: **12**

## `1. CHALLENGE_TIMER_ENDED`
Challenge timer sikerrel vagy timeouttal lezárult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `instanceId` | `System.Guid` | `string` | No |  |
| `elapsed` | `long` | `number` | No | Stored as milliseconds. |
| `success` | `bool` | `boolean` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("CHALLENGE_TIMER_ENDED", payload => {
    // payload.<field>
});
```

C# publisher: `EncounterEvents.PublishChallengeTimerEnded(...)`

## `2. CHALLENGE_TIMER_STARTED`
Időzített challenge futam órája elindult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `instanceId` | `System.Guid` | `string` | No |  |
| `startedAt` | `System.DateTime` | `string` | No |  |
| `endsAt` | `System.DateTime` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("CHALLENGE_TIMER_STARTED", payload => {
    // payload.<field>
});
```

C# publisher: `EncounterEvents.PublishChallengeTimerStarted(...)`

## `3. ENCOUNTER_COMPLETED`
A group sikeresen teljesítette az encountert.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `encounterId` | `System.Guid` | `string` | No |  |
| `bossId` | `int?` | `number | null` | Yes |  |
| `difficulty` | `EncounterDifficulty` | `string` | No |  |
| `duration` | `long` | `number` | No | Stored as milliseconds. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ENCOUNTER_COMPLETED", payload => {
    // payload.<field>
});
```

C# publisher: `EncounterEvents.PublishEncounterCompleted(...)`

## `4. ENCOUNTER_DIFFICULTY_CHANGED`
Az instance/encounter kiválasztott difficulty profile-ja változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `instanceId` | `System.Guid` | `string` | No |  |
| `difficulty` | `EncounterDifficulty` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ENCOUNTER_DIFFICULTY_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `EncounterEvents.PublishDifficultyChanged(...)`

## `5. ENCOUNTER_PHASE_CHANGED`
A publikus encounter phase megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `encounterId` | `System.Guid` | `string` | No |  |
| `phaseId` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ENCOUNTER_PHASE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `EncounterEvents.PublishEncounterPhaseChanged(...)`

## `6. ENCOUNTER_RESET`
Boss HP/fázisok authoritative resetet kaptak.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `encounterId` | `System.Guid` | `string` | No |  |
| `resetAt` | `System.DateTime` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ENCOUNTER_RESET", payload => {
    // payload.<field>
});
```

C# publisher: `EncounterEvents.PublishEncounterReset(...)`

## `7. ENCOUNTER_STARTED`
A boss/dungeon encounter authoritative combat lifecycle-ja elindult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `encounter` | `EncounterInfo` | `EncounterInfo` | No |  |
| `startedAt` | `System.DateTime` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ENCOUNTER_STARTED", payload => {
    // payload.<field>
});
```

C# publisher: `EncounterEvents.PublishEncounterStarted(...)`

## `8. ENCOUNTER_WIPED`
A group wipe feltétele teljesült.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `encounterId` | `System.Guid` | `string` | No |  |
| `wipedAt` | `System.DateTime` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ENCOUNTER_WIPED", payload => {
    // payload.<field>
});
```

C# publisher: `EncounterEvents.PublishEncounterWiped(...)`

## `9. FIRST_KILL_RECORDED`
A kliens számára látható First Kill rekord létrejött.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `bossId` | `int` | `number` | No |  |
| `recordId` | `System.Guid` | `string` | No |  |
| `recordedAt` | `System.DateTime` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("FIRST_KILL_RECORDED", payload => {
    // payload.<field>
});
```

C# publisher: `EncounterEvents.PublishFirstKillRecorded(...)`

## `10. INSTANCE_ENTERED`
A lokális karakter/group privát dungeon/raid instance-ba került.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `encounter` | `EncounterInfo` | `EncounterInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("INSTANCE_ENTERED", payload => {
    // payload.<field>
});
```

C# publisher: `EncounterEvents.PublishInstanceEntered(...)`

## `11. INSTANCE_LEFT`
A karakter elhagyta az instance-t.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `instanceId` | `System.Guid` | `string` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("INSTANCE_LEFT", payload => {
    // payload.<field>
});
```

C# publisher: `EncounterEvents.PublishInstanceLeft(...)`

## `12. RAID_LOOT_LOCKOUT_CHANGED`
Egy raid boss személyes heti loot-eligibility állapota változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `bossId` | `int` | `number` | No |  |
| `eligible` | `bool` | `boolean` | No |  |
| `resetAt` | `System.DateTime?` | `string | null` | Yes |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("RAID_LOOT_LOCKOUT_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `EncounterEvents.PublishRaidLootLockoutChanged(...)`

