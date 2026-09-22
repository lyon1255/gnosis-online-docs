# Achievement Events

Achievement progress and completion events visible to the local player.

## Event index

| Event | Description |
|---|---|
| `ACHIEVEMENT_COMPLETED` | Published when achievement completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume. |
| `ACHIEVEMENT_PROGRESS_CHANGED` | Published when the authoritative achievement progress state changes. The payload contains the resulting state and identifiers needed by Achievement UI or AddOns to update without polling. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `ACHIEVEMENT_COMPLETED`

Published when achievement completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `achievementId` | `int` | `number` | No | Stable identifier of the achievement referenced by this payload. |
| `completedAt` | `System.DateTime` | `string` | No | Authoritative timestamp associated with completed. |
| `reward` | `RewardInfo` | `RewardInfo | null` | Yes | Reward package associated with this choice. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ACHIEVEMENT_COMPLETED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AchievementEvents.PublishCompleted(
    eventBus,
    achievementId,
    completedAt,
    reward
);
```

## `ACHIEVEMENT_PROGRESS_CHANGED`

Published when the authoritative achievement progress state changes. The payload contains the resulting state and identifiers needed by Achievement UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `achievementId` | `int` | `number` | No | Stable identifier of the achievement referenced by this payload. |
| `current` | `int` | `number` | No | Authoritative current value after the change. |
| `required` | `int` | `number` | No | Value required to complete the tracked progress. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("ACHIEVEMENT_PROGRESS_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AchievementEvents.PublishProgressChanged(
    eventBus,
    achievementId,
    current,
    required
);
```

