# Guild Events

Guild membership, roster, rank, progression, investment, bank, quest, boss, application, calendar, and alliance events.

## Event index

| Event | Description |
|---|---|
| `GUILD_ALLIANCE_CHANGED` | Published when the authoritative guild alliance state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling. |
| `GUILD_APPLICATION_CHANGED` | Published when the authoritative guild application state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling. |
| `GUILD_BANK_CHANGED` | Published when the authoritative guild bank state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling. |
| `GUILD_BOSS_STATE_CHANGED` | Published when the authoritative guild boss state state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling. |
| `GUILD_CALENDAR_CHANGED` | Published when the authoritative guild calendar state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling. |
| `GUILD_INVESTMENT_CHANGED` | Published when the authoritative guild investment state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling. |
| `GUILD_JOINED` | Published when guild joins the relevant social or group context and becomes visible to the local client. |
| `GUILD_LEADER_CHANGED` | Published when the authoritative guild leader state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling. |
| `GUILD_LEFT` | Published when guild leaves the relevant social, group, or world context. |
| `GUILD_LEVEL_CHANGED` | Published when the authoritative guild level state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling. |
| `GUILD_MEMBER_JOINED` | Published when guild member joins the relevant social or group context and becomes visible to the local client. |
| `GUILD_MEMBER_LEFT` | Published when guild member leaves the relevant social, group, or world context. |
| `GUILD_MEMBER_UPDATED` | Published when the public state of guild member is updated. The payload contains the latest authoritative snapshot or delta required by consumers. |
| `GUILD_QUEST_CHANGED` | Published when the authoritative guild quest state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling. |
| `GUILD_RANK_CHANGED` | Published when the authoritative guild rank state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `GUILD_ALLIANCE_CHANGED`

Published when the authoritative guild alliance state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No | Stable identifier of the guild. |
| `allianceId` | `System.Guid?` | `string | null` | Yes | Stable identifier of the guild alliance. |
| `active` | `bool` | `boolean` | No | Whether the relationship or state is currently active. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GUILD_ALLIANCE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GuildEvents.PublishAllianceChanged(
    eventBus,
    guildId,
    allianceId,
    active
);
```

## `GUILD_APPLICATION_CHANGED`

Published when the authoritative guild application state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `applicationId` | `System.Guid` | `string` | No | Stable identifier of the guild application. |
| `guildId` | `System.Guid` | `string` | No | Stable identifier of the guild. |
| `stateCode` | `string` | `string` | No | Stable non-localized state code describing the current lifecycle state. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GUILD_APPLICATION_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GuildEvents.PublishApplicationChanged(
    eventBus,
    applicationId,
    guildId,
    stateCode
);
```

## `GUILD_BANK_CHANGED`

Published when the authoritative guild bank state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No | Stable identifier of the guild. |
| `revision` | `int` | `number` | No | Monotonically increasing revision number used to detect stale cached state. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GUILD_BANK_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GuildEvents.PublishBankChanged(
    eventBus,
    guildId,
    revision
);
```

## `GUILD_BOSS_STATE_CHANGED`

Published when the authoritative guild boss state state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No | Stable identifier of the guild. |
| `bossId` | `int` | `number` | No | Optional stable content identifier of the primary boss. |
| `stateCode` | `string` | `string` | No | Stable non-localized state code describing the current lifecycle state. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GUILD_BOSS_STATE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GuildEvents.PublishBossStateChanged(
    eventBus,
    guildId,
    bossId,
    stateCode
);
```

## `GUILD_CALENDAR_CHANGED`

Published when the authoritative guild calendar state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No | Stable identifier of the guild. |
| `revision` | `int` | `number` | No | Monotonically increasing revision number used to detect stale cached state. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GUILD_CALENDAR_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GuildEvents.PublishCalendarChanged(
    eventBus,
    guildId,
    revision
);
```

## `GUILD_INVESTMENT_CHANGED`

Published when the authoritative guild investment state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No | Stable identifier of the guild. |
| `contributorGuid` | `System.Guid` | `string` | No | Stable character identifier of the member responsible for the contribution. |
| `amount` | `int` | `number` | No | Resolved numeric amount associated with the event. |
| `totalInvestment` | `int` | `number` | No | Authoritative total guild investment after the change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GUILD_INVESTMENT_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GuildEvents.PublishInvestmentChanged(
    eventBus,
    guildId,
    contributorGuid,
    amount,
    totalInvestment
);
```

## `GUILD_JOINED`

Published when guild joins the relevant social or group context and becomes visible to the local client.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No | Stable identifier of the guild. |
| `guildName` | `string` | `string` | No | Display name of the guild. |
| `rank` | `GuildRank` | `GuildRank` | No | Public guild rank assigned to the member. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GUILD_JOINED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GuildEvents.PublishJoined(
    eventBus,
    guildId,
    guildName,
    rank
);
```

## `GUILD_LEADER_CHANGED`

Published when the authoritative guild leader state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No | Stable identifier of the guild. |
| `previousLeaderGuid` | `System.Guid` | `string` | No | Stable identifier of the previous group leader. |
| `currentLeaderGuid` | `System.Guid` | `string` | No | Stable identifier of the new group leader. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GUILD_LEADER_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GuildEvents.PublishLeaderChanged(
    eventBus,
    guildId,
    previousLeaderGuid,
    currentLeaderGuid
);
```

## `GUILD_LEFT`

Published when guild leaves the relevant social, group, or world context.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No | Stable identifier of the guild. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GUILD_LEFT", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GuildEvents.PublishLeft(
    eventBus,
    guildId,
    reasonCode
);
```

## `GUILD_LEVEL_CHANGED`

Published when the authoritative guild level state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No | Stable identifier of the guild. |
| `previous` | `int` | `number` | No | Authoritative value before the change. |
| `current` | `int` | `number` | No | Authoritative current value after the change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GUILD_LEVEL_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GuildEvents.PublishLevelChanged(
    eventBus,
    guildId,
    previous,
    current
);
```

## `GUILD_MEMBER_JOINED`

Published when guild member joins the relevant social or group context and becomes visible to the local client.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No | Stable identifier of the guild. |
| `member` | `GuildMemberInfo` | `GuildMemberInfo` | No | Current public snapshot of the group member. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GUILD_MEMBER_JOINED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GuildEvents.PublishMemberJoined(
    eventBus,
    guildId,
    member
);
```

## `GUILD_MEMBER_LEFT`

Published when guild member leaves the relevant social, group, or world context.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No | Stable identifier of the guild. |
| `memberGuid` | `System.Guid` | `string` | No | Stable character identifier of the group member. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GUILD_MEMBER_LEFT", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GuildEvents.PublishMemberLeft(
    eventBus,
    guildId,
    memberGuid,
    reasonCode
);
```

## `GUILD_MEMBER_UPDATED`

Published when the public state of guild member is updated. The payload contains the latest authoritative snapshot or delta required by consumers.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No | Stable identifier of the guild. |
| `member` | `GuildMemberInfo` | `GuildMemberInfo` | No | Current public snapshot of the group member. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GUILD_MEMBER_UPDATED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GuildEvents.PublishMemberUpdated(
    eventBus,
    guildId,
    member
);
```

## `GUILD_QUEST_CHANGED`

Published when the authoritative guild quest state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No | Stable identifier of the guild. |
| `questId` | `int` | `number` | No | Stable content identifier of the quest. |
| `revision` | `int` | `number` | No | Monotonically increasing revision number used to detect stale cached state. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GUILD_QUEST_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GuildEvents.PublishQuestChanged(
    eventBus,
    guildId,
    questId,
    revision
);
```

## `GUILD_RANK_CHANGED`

Published when the authoritative guild rank state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No | Stable identifier of the guild. |
| `memberGuid` | `System.Guid` | `string` | No | Stable character identifier of the group member. |
| `previous` | `GuildRank` | `GuildRank` | No | Authoritative value before the change. |
| `current` | `GuildRank` | `GuildRank` | No | Authoritative current value after the change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GUILD_RANK_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GuildEvents.PublishRankChanged(
    eventBus,
    guildId,
    memberGuid,
    previous,
    current
);
```

