# Quest Events

Quest lifecycle and objective-progress events, including acceptance, progress, completion, failure, reset, sharing, and reward-choice flow.

## Event index

| Event | Description |
|---|---|
| `QUEST_ABANDONED` | Published when quest is abandoned by the local player and removed from active progression. |
| `QUEST_ACCEPTED` | Published when the authoritative 'QUEST_ACCEPTED' gameplay event occurs. The payload contains only client-visible state intended for Quest UI and AddOns. |
| `QUEST_COMPLETED` | Published when quest completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume. |
| `QUEST_FAILED` | Published when quest fails before reaching a successful final state. The payload includes stable context or reason information when available. |
| `QUEST_OBJECTIVE_COMPLETED` | Published when quest objective completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume. |
| `QUEST_OBJECTIVE_PROGRESS_CHANGED` | Published when the authoritative quest objective progress state changes. The payload contains the resulting state and identifiers needed by Quest UI or AddOns to update without polling. |
| `QUEST_READY_TO_TURN_IN` | Published when the authoritative 'QUEST_READY_TO_TURN_IN' gameplay event occurs. The payload contains only client-visible state intended for Quest UI and AddOns. |
| `QUEST_RESET` | Published when quest is reset to its authoritative baseline state. |
| `QUEST_REWARD_CHOICE_REQUIRED` | Published when quest reward choice becomes required before the current flow can continue. |
| `QUEST_REWARD_CHOICE_SELECTED` | Published when quest reward choice is selected and accepted by the authoritative game state. |
| `QUEST_SHARED` | Published when quest is successfully shared through the authoritative quest or social system. |
| `QUEST_SHARE_RECEIVED` | Published when quest share is received by the local client and becomes available to the relevant UI or AddOn. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `QUEST_ABANDONED`

Published when quest is abandoned by the local player and removed from active progression.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No | Stable content identifier of the quest. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("QUEST_ABANDONED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
QuestEvents.PublishAbandoned(
    eventBus,
    questId
);
```

## `QUEST_ACCEPTED`

Published when the authoritative 'QUEST_ACCEPTED' gameplay event occurs. The payload contains only client-visible state intended for Quest UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No | Stable content identifier of the quest. |
| `state` | `QuestState` | `QuestState` | No | Current lifecycle state represented by this payload. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("QUEST_ACCEPTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
QuestEvents.PublishAccepted(
    eventBus,
    questId,
    state
);
```

## `QUEST_COMPLETED`

Published when quest completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No | Stable content identifier of the quest. |
| `reward` | `RewardInfo` | `RewardInfo` | No | Reward package associated with this choice. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("QUEST_COMPLETED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
QuestEvents.PublishCompleted(
    eventBus,
    questId,
    reward
);
```

## `QUEST_FAILED`

Published when quest fails before reaching a successful final state. The payload includes stable context or reason information when available.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No | Stable content identifier of the quest. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |
| `canRetry` | `bool` | `boolean` | No | Whether the failed operation may currently be retried. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("QUEST_FAILED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
QuestEvents.PublishFailed(
    eventBus,
    questId,
    reasonCode,
    canRetry
);
```

## `QUEST_OBJECTIVE_COMPLETED`

Published when quest objective completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No | Stable content identifier of the quest. |
| `objectiveId` | `int` | `number` | No | Stable identifier of the quest objective. |
| `objectiveType` | `QuestObjectiveType` | `QuestObjectiveType` | No | Semantic category of the quest objective. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("QUEST_OBJECTIVE_COMPLETED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
QuestEvents.PublishObjectiveCompleted(
    eventBus,
    questId,
    objectiveId,
    objectiveType
);
```

## `QUEST_OBJECTIVE_PROGRESS_CHANGED`

Published when the authoritative quest objective progress state changes. The payload contains the resulting state and identifiers needed by Quest UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No | Stable content identifier of the quest. |
| `objective` | `QuestObjectiveProgress` | `QuestObjectiveProgress` | No | Current snapshot of the affected quest objective. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("QUEST_OBJECTIVE_PROGRESS_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
QuestEvents.PublishObjectiveProgressChanged(
    eventBus,
    questId,
    objective
);
```

## `QUEST_READY_TO_TURN_IN`

Published when the authoritative 'QUEST_READY_TO_TURN_IN' gameplay event occurs. The payload contains only client-visible state intended for Quest UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No | Stable content identifier of the quest. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("QUEST_READY_TO_TURN_IN", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
QuestEvents.PublishReadyToTurnIn(
    eventBus,
    questId
);
```

## `QUEST_RESET`

Published when quest is reset to its authoritative baseline state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No | Stable content identifier of the quest. |
| `resetAt` | `System.DateTime` | `string` | No | Authoritative timestamp at which the lockout or state resets. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("QUEST_RESET", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
QuestEvents.PublishReset(
    eventBus,
    questId,
    resetAt
);
```

## `QUEST_REWARD_CHOICE_REQUIRED`

Published when quest reward choice becomes required before the current flow can continue.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No | Stable content identifier of the quest. |
| `choices` | `System.Collections.Generic.List<RewardChoiceInfo>` | `ReadonlyArray<RewardChoiceInfo>` | No | Available reward choices presented to the player. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("QUEST_REWARD_CHOICE_REQUIRED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
QuestEvents.PublishRewardChoiceRequired(
    eventBus,
    questId,
    choices
);
```

## `QUEST_REWARD_CHOICE_SELECTED`

Published when quest reward choice is selected and accepted by the authoritative game state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `questId` | `int` | `number` | No | Stable content identifier of the quest. |
| `choiceId` | `int` | `number` | No | Stable identifier of the selectable reward option. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("QUEST_REWARD_CHOICE_SELECTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
QuestEvents.PublishRewardChoiceSelected(
    eventBus,
    questId,
    choiceId
);
```

## `QUEST_SHARED`

Published when quest is successfully shared through the authoritative quest or social system.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `shareId` | `System.Guid` | `string` | No | Stable identifier of the share referenced by this payload. |
| `questId` | `int` | `number` | No | Stable content identifier of the quest. |
| `target` | `EntityRef` | `EntityRef` | No | Optional entity targeted by the action or cast. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("QUEST_SHARED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
QuestEvents.PublishShared(
    eventBus,
    shareId,
    questId,
    target
);
```

## `QUEST_SHARE_RECEIVED`

Published when quest share is received by the local client and becomes available to the relevant UI or AddOn.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `shareId` | `System.Guid` | `string` | No | Stable identifier of the share referenced by this payload. |
| `questId` | `int` | `number` | No | Stable content identifier of the quest. |
| `sender` | `EntityRef` | `EntityRef` | No | Authoritative sender value associated with this payload. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("QUEST_SHARE_RECEIVED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
QuestEvents.PublishShareReceived(
    eventBus,
    shareId,
    questId,
    sender
);
```

