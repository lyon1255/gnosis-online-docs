# Achievement Events


Achievement progress/completion. 


Events: **2**

## `1. ACHIEVEMENT_COMPLETED`
Achievement először completed állapotba vált.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `achievementId` | `int` | `number` | No |  |
| `completedAt` | `System.DateTime` | `string` | No |  |
| `reward` | `RewardInfo` | `RewardInfo | null` | Yes |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ACHIEVEMENT_COMPLETED", payload => {
    // payload.<field>
});
```

C# publisher: `AchievementEvents.PublishCompleted(...)`

## `2. ACHIEVEMENT_PROGRESS_CHANGED`
Achievement kritérium progressze változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `achievementId` | `int` | `number` | No |  |
| `current` | `long` | `number` | No |  |
| `required` | `long` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("ACHIEVEMENT_PROGRESS_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `AchievementEvents.PublishProgressChanged(...)`

