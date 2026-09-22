# Quest Events


Quest és objective lifecycle. 


Events: **12**

## `1. QUEST_ABANDONED`
A lokális játékos eldobta a questet és az aktív progress elveszett.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("QUEST_ABANDONED", payload => {
    // payload.<field>
});
```

C# publisher: `QuestEvents.PublishAbandoned(...)`

## `2. QUEST_ACCEPTED`
A quest prerequisite/level validáció után az aktív logba került.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No |  |
| `state` | `QuestState` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("QUEST_ACCEPTED", payload => {
    // payload.<field>
});
```

C# publisher: `QuestEvents.PublishAccepted(...)`

## `3. QUEST_COMPLETED`
A turn-in commitolt és a quest completed state-be került.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No |  |
| `reward` | `RewardInfo` | `RewardInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("QUEST_COMPLETED", payload => {
    // payload.<field>
});
```

C# publisher: `QuestEvents.PublishCompleted(...)`

## `4. QUEST_FAILED`
Fail-képes quest feltétele megbukott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No |  |
| `reasonCode` | `string` | `string` | No |  |
| `canRetry` | `bool` | `boolean` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("QUEST_FAILED", payload => {
    // payload.<field>
});
```

C# publisher: `QuestEvents.PublishFailed(...)`

## `5. QUEST_OBJECTIVE_COMPLETED`
Egy objective elérte a teljesítési feltételt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No |  |
| `objectiveId` | `int` | `number` | No |  |
| `objectiveType` | `QuestObjectiveType` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("QUEST_OBJECTIVE_COMPLETED", payload => {
    // payload.<field>
});
```

C# publisher: `QuestEvents.PublishObjectiveCompleted(...)`

## `6. QUEST_OBJECTIVE_PROGRESS_CHANGED`
Egy objective szerveroldali progressze változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No |  |
| `objective` | `QuestObjectiveProgress` | `QuestObjectiveProgress` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("QUEST_OBJECTIVE_PROGRESS_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `QuestEvents.PublishObjectiveProgressChanged(...)`

## `7. QUEST_READY_TO_TURN_IN`
Minden kötelező objective teljes és a quest leadhatóvá vált.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("QUEST_READY_TO_TURN_IN", payload => {
    // payload.<field>
});
```

C# publisher: `QuestEvents.PublishReadyToTurnIn(...)`

## `8. QUEST_RESET`
Daily/weekly vagy explicit lifecycle reset új progress-state-et hozott létre.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No |  |
| `resetAt` | `System.DateTime` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("QUEST_RESET", payload => {
    // payload.<field>
});
```

C# publisher: `QuestEvents.PublishReset(...)`

## `9. QUEST_REWARD_CHOICE_REQUIRED`
Leadás előtt a quest explicit player reward-választást kér.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No |  |
| `choices` | `System.Collections.Generic.List<RewardChoiceInfo>` | `ReadonlyArray<RewardChoiceInfo>` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("QUEST_REWARD_CHOICE_REQUIRED", payload => {
    // payload.<field>
});
```

C# publisher: `QuestEvents.PublishRewardChoiceRequired(...)`

## `10. QUEST_REWARD_CHOICE_SELECTED`
A szerver elfogadta a választott reward optiont.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No |  |
| `choiceId` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("QUEST_REWARD_CHOICE_SELECTED", payload => {
    // payload.<field>
});
```

C# publisher: `QuestEvents.PublishRewardChoiceSelected(...)`

## `11. QUEST_SHARED`
A lokális játékos quest-share kérése egy jogosult targethez eljutott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `shareId` | `System.Guid` | `string` | No |  |
| `questId` | `int` | `number` | No |  |
| `target` | `EntityRef` | `EntityRef` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("QUEST_SHARED", payload => {
    // payload.<field>
});
```

C# publisher: `QuestEvents.PublishShared(...)`

## `12. QUEST_SHARE_RECEIVED`
Party tag megosztható questet ajánlott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `shareId` | `System.Guid` | `string` | No |  |
| `questId` | `int` | `number` | No |  |
| `sender` | `EntityRef` | `EntityRef` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("QUEST_SHARE_RECEIVED", payload => {
    // payload.<field>
});
```

C# publisher: `QuestEvents.PublishShareReceived(...)`

