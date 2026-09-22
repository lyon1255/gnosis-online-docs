# Guild Events


Guild tagság, rang, bank, progress, social. 


Events: **15**

## `1. GUILD_ALLIANCE_CHANGED`
A guild alliance tagsága/state-je megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No |  |
| `allianceId` | `System.Guid?` | `string | null` | Yes |  |
| `active` | `bool` | `boolean` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GUILD_ALLIANCE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `GuildEvents.PublishAllianceChanged(...)`

## `2. GUILD_APPLICATION_CHANGED`
Saját Guild Finder jelentkezés állapota változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `applicationId` | `System.Guid` | `string` | No |  |
| `guildId` | `System.Guid` | `string` | No |  |
| `stateCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GUILD_APPLICATION_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `GuildEvents.PublishApplicationChanged(...)`

## `3. GUILD_BANK_CHANGED`
A guildbank engedélyezett nézete megváltozott; a részletes state Query API-ból kérhető jogosultság szerint.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No |  |
| `revision` | `long` | `number` | No | Non-negative revision/identifier; represented as Long in the public Forge schema. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GUILD_BANK_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `GuildEvents.PublishBankChanged(...)`

## `4. GUILD_BOSS_STATE_CHANGED`
Guild Boss summon/encounter hozzáférési state változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No |  |
| `bossId` | `int` | `number` | No |  |
| `stateCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GUILD_BOSS_STATE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `GuildEvents.PublishBossStateChanged(...)`

## `5. GUILD_CALENDAR_CHANGED`
A guild calendar saját jogosultságon belüli state-je módosult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No |  |
| `revision` | `long` | `number` | No | Non-negative revision/identifier; represented as Long in the public Forge schema. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GUILD_CALENDAR_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `GuildEvents.PublishCalendarChanged(...)`

## `6. GUILD_INVESTMENT_CHANGED`
Visszavonhatatlan progression-befizetés commitolt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No |  |
| `contributorGuid` | `System.Guid` | `string` | No |  |
| `amount` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |
| `totalInvestment` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GUILD_INVESTMENT_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `GuildEvents.PublishInvestmentChanged(...)`

## `7. GUILD_JOINED`
A lokális karakter guildtagságot kapott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No |  |
| `guildName` | `string` | `string` | No |  |
| `rank` | `GuildRank` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GUILD_JOINED", payload => {
    // payload.<field>
});
```

C# publisher: `GuildEvents.PublishJoined(...)`

## `8. GUILD_LEADER_CHANGED`
A guild vezetője megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No |  |
| `previousLeaderGuid` | `System.Guid` | `string` | No |  |
| `currentLeaderGuid` | `System.Guid` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GUILD_LEADER_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `GuildEvents.PublishLeaderChanged(...)`

## `9. GUILD_LEFT`
A lokális karakter guildtagsága megszűnt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GUILD_LEFT", payload => {
    // payload.<field>
});
```

C# publisher: `GuildEvents.PublishLeft(...)`

## `10. GUILD_LEVEL_CHANGED`
Guild progression level változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No |  |
| `previous` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |
| `current` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GUILD_LEVEL_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `GuildEvents.PublishLevelChanged(...)`

## `11. GUILD_MEMBER_JOINED`
Új member került a guild rosterbe.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No |  |
| `member` | `GuildMemberInfo` | `GuildMemberInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GUILD_MEMBER_JOINED", payload => {
    // payload.<field>
});
```

C# publisher: `GuildEvents.PublishMemberJoined(...)`

## `12. GUILD_MEMBER_LEFT`
Member kikerült a rosterből.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No |  |
| `memberGuid` | `System.Guid` | `string` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GUILD_MEMBER_LEFT", payload => {
    // payload.<field>
});
```

C# publisher: `GuildEvents.PublishMemberLeft(...)`

## `13. GUILD_MEMBER_UPDATED`
Publikus roster/presence metadata változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No |  |
| `member` | `GuildMemberInfo` | `GuildMemberInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GUILD_MEMBER_UPDATED", payload => {
    // payload.<field>
});
```

C# publisher: `GuildEvents.PublishMemberUpdated(...)`

## `14. GUILD_QUEST_CHANGED`
Az aktív guild quest/progress state módosult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No |  |
| `questId` | `int` | `number` | No |  |
| `revision` | `long` | `number` | No | Non-negative revision/identifier; represented as Long in the public Forge schema. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GUILD_QUEST_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `GuildEvents.PublishQuestChanged(...)`

## `15. GUILD_RANK_CHANGED`
Egy member rangja módosult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `guildId` | `System.Guid` | `string` | No |  |
| `memberGuid` | `System.Guid` | `string` | No |  |
| `previous` | `GuildRank` | `string` | No |  |
| `current` | `GuildRank` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GUILD_RANK_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `GuildEvents.PublishRankChanged(...)`

