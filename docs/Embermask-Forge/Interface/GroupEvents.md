# Group Events


Party/Raid/LFG/Ready Check. 


Events: **14**

## `1. GROUP_TYPE_CHANGED`
Party Raid formációvá vagy vissza alakult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `groupId` | `System.Guid` | `string` | No |  |
| `previous` | `GroupType` | `string` | No |  |
| `current` | `GroupType` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GROUP_TYPE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `GroupEvents.PublishGroupTypeChanged(...)`

## `2. LFG_LISTING_CHANGED`
A saját party/LFG listing létrejött, módosult vagy megszűnt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `listingId` | `System.Guid` | `string` | No |  |
| `active` | `bool` | `boolean` | No |  |
| `revision` | `long` | `number` | No | Non-negative revision/identifier; represented as Long in the public Forge schema. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("LFG_LISTING_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `GroupEvents.PublishLfgListingChanged(...)`

## `3. PARTY_CREATED`
Létrejött a karakter aktív partyja.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `partyId` | `System.Guid` | `string` | No |  |
| `leaderGuid` | `System.Guid` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PARTY_CREATED", payload => {
    // payload.<field>
});
```

C# publisher: `GroupEvents.PublishPartyCreated(...)`

## `4. PARTY_DISBANDED`
Az aktív party megszűnt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `partyId` | `System.Guid` | `string` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PARTY_DISBANDED", payload => {
    // payload.<field>
});
```

C# publisher: `GroupEvents.PublishPartyDisbanded(...)`

## `5. PARTY_INVITE_ENDED`
Party invite elfogadás/elutasítás/lejárat miatt lezárult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `inviteId` | `System.Guid` | `string` | No |  |
| `resultCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PARTY_INVITE_ENDED", payload => {
    // payload.<field>
});
```

C# publisher: `GroupEvents.PublishPartyInviteEnded(...)`

## `6. PARTY_INVITE_RECEIVED`
Lejáró party invitation érkezett.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `inviteId` | `System.Guid` | `string` | No |  |
| `inviter` | `EntityRef` | `EntityRef` | No |  |
| `expiresAt` | `System.DateTime` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PARTY_INVITE_RECEIVED", payload => {
    // payload.<field>
});
```

C# publisher: `GroupEvents.PublishPartyInviteReceived(...)`

## `7. PARTY_LAYER_STATUS_CHANGED`
Egy member Layer-egyezési állapota megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `partyId` | `System.Guid` | `string` | No |  |
| `memberGuid` | `System.Guid` | `string` | No |  |
| `sameLayer` | `bool` | `boolean` | No |  |
| `layerId` | `string` | `string | null` | Yes |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PARTY_LAYER_STATUS_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `GroupEvents.PublishPartyLayerStatusChanged(...)`

## `8. PARTY_LEADER_CHANGED`
A party leader megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `partyId` | `System.Guid` | `string` | No |  |
| `previousLeaderGuid` | `System.Guid` | `string` | No |  |
| `currentLeaderGuid` | `System.Guid` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PARTY_LEADER_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `GroupEvents.PublishPartyLeaderChanged(...)`

## `9. PARTY_MEMBER_JOINED`
Új member csatlakozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `partyId` | `System.Guid` | `string` | No |  |
| `member` | `PartyMemberInfo` | `PartyMemberInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PARTY_MEMBER_JOINED", payload => {
    // payload.<field>
});
```

C# publisher: `GroupEvents.PublishPartyMemberJoined(...)`

## `10. PARTY_MEMBER_LEFT`
Member elhagyta vagy elvesztette a tagságot.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `partyId` | `System.Guid` | `string` | No |  |
| `memberGuid` | `System.Guid` | `string` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PARTY_MEMBER_LEFT", payload => {
    // payload.<field>
});
```

C# publisher: `GroupEvents.PublishPartyMemberLeft(...)`

## `11. PARTY_MEMBER_UPDATED`
UI-releváns member metadata változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `partyId` | `System.Guid` | `string` | No |  |
| `member` | `PartyMemberInfo` | `PartyMemberInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PARTY_MEMBER_UPDATED", payload => {
    // payload.<field>
});
```

C# publisher: `GroupEvents.PublishPartyMemberUpdated(...)`

## `12. READY_CHECK_COMPLETED`
Ready Check lezárult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `readyCheckId` | `System.Guid` | `string` | No |  |
| `responses` | `System.Collections.Generic.List<ReadyCheckMemberInfo>` | `ReadonlyArray<ReadyCheckMemberInfo>` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("READY_CHECK_COMPLETED", payload => {
    // payload.<field>
});
```

C# publisher: `GroupEvents.PublishReadyCheckCompleted(...)`

## `13. READY_CHECK_RESPONSE_CHANGED`
Egy member ready válasza módosult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `readyCheckId` | `System.Guid` | `string` | No |  |
| `memberGuid` | `System.Guid` | `string` | No |  |
| `response` | `ReadyCheckResponse` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("READY_CHECK_RESPONSE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `GroupEvents.PublishReadyCheckResponseChanged(...)`

## `14. READY_CHECK_STARTED`
A leader Ready Checket indított.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `readyCheckId` | `System.Guid` | `string` | No |  |
| `partyId` | `System.Guid` | `string` | No |  |
| `initiatorGuid` | `System.Guid` | `string` | No |  |
| `expiresAt` | `System.DateTime` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("READY_CHECK_STARTED", payload => {
    // payload.<field>
});
```

C# publisher: `GroupEvents.PublishReadyCheckStarted(...)`

