# Group Events

Party, raid, group-finder, layer-status, and ready-check events exposed to group-related UI and AddOns.

## Event index

| Event | Description |
|---|---|
| `GROUP_TYPE_CHANGED` | Published when the authoritative group type state changes. The payload contains the resulting state and identifiers needed by Group UI or AddOns to update without polling. |
| `LFG_LISTING_CHANGED` | Published when the authoritative lfg listing state changes. The payload contains the resulting state and identifiers needed by Group UI or AddOns to update without polling. |
| `PARTY_CREATED` | Published when party is created and becomes visible to the local client. |
| `PARTY_DISBANDED` | Published when party is disbanded in authoritative game state. The payload contains the public context required by consumers. |
| `PARTY_INVITE_ENDED` | Published when party invite reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable. |
| `PARTY_INVITE_RECEIVED` | Published when party invite is received by the local client and becomes available to the relevant UI or AddOn. |
| `PARTY_LAYER_STATUS_CHANGED` | Published when the authoritative party layer status state changes. The payload contains the resulting state and identifiers needed by Group UI or AddOns to update without polling. |
| `PARTY_LEADER_CHANGED` | Published when the authoritative party leader state changes. The payload contains the resulting state and identifiers needed by Group UI or AddOns to update without polling. |
| `PARTY_MEMBER_JOINED` | Published when party member joins the relevant social or group context and becomes visible to the local client. |
| `PARTY_MEMBER_LEFT` | Published when party member leaves the relevant social, group, or world context. |
| `PARTY_MEMBER_UPDATED` | Published when the public state of party member is updated. The payload contains the latest authoritative snapshot or delta required by consumers. |
| `READY_CHECK_COMPLETED` | Published when ready check completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume. |
| `READY_CHECK_RESPONSE_CHANGED` | Published when the authoritative ready check response state changes. The payload contains the resulting state and identifiers needed by Group UI or AddOns to update without polling. |
| `READY_CHECK_STARTED` | Published when ready check starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `GROUP_TYPE_CHANGED`

Published when the authoritative group type state changes. The payload contains the resulting state and identifiers needed by Group UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `groupId` | `System.Guid` | `string` | No | Stable identifier of the participating group. |
| `previous` | `GroupType` | `GroupType` | No | Authoritative value before the change. |
| `current` | `GroupType` | `GroupType` | No | Authoritative current value after the change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GROUP_TYPE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GroupEvents.PublishGroupTypeChanged(
    eventBus,
    groupId,
    previous,
    current
);
```

## `LFG_LISTING_CHANGED`

Published when the authoritative lfg listing state changes. The payload contains the resulting state and identifiers needed by Group UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `listingId` | `System.Guid` | `string` | No | Stable identifier of the group-finder listing. |
| `active` | `bool` | `boolean` | No | Whether the relationship or state is currently active. |
| `revision` | `int` | `number` | No | Monotonically increasing revision number used to detect stale cached state. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("LFG_LISTING_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GroupEvents.PublishLfgListingChanged(
    eventBus,
    listingId,
    active,
    revision
);
```

## `PARTY_CREATED`

Published when party is created and becomes visible to the local client.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `partyId` | `System.Guid` | `string` | No | Stable identifier of the party. |
| `leaderGuid` | `System.Guid` | `string` | No | Stable identifier of the current group leader. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PARTY_CREATED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GroupEvents.PublishPartyCreated(
    eventBus,
    partyId,
    leaderGuid
);
```

## `PARTY_DISBANDED`

Published when party is disbanded in authoritative game state. The payload contains the public context required by consumers.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `partyId` | `System.Guid` | `string` | No | Stable identifier of the party. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PARTY_DISBANDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GroupEvents.PublishPartyDisbanded(
    eventBus,
    partyId,
    reasonCode
);
```

## `PARTY_INVITE_ENDED`

Published when party invite reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `inviteId` | `System.Guid` | `string` | No | Stable identifier of the group invitation. |
| `resultCode` | `string` | `string` | No | Stable non-localized result code for the operation. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PARTY_INVITE_ENDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GroupEvents.PublishPartyInviteEnded(
    eventBus,
    inviteId,
    resultCode
);
```

## `PARTY_INVITE_RECEIVED`

Published when party invite is received by the local client and becomes available to the relevant UI or AddOn.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `inviteId` | `System.Guid` | `string` | No | Stable identifier of the group invitation. |
| `inviter` | `EntityRef` | `EntityRef` | No | Safe reference to the player who sent the invitation. |
| `expiresAt` | `System.DateTime` | `string` | No | Optional authoritative expiration timestamp. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PARTY_INVITE_RECEIVED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GroupEvents.PublishPartyInviteReceived(
    eventBus,
    inviteId,
    inviter,
    expiresAt
);
```

## `PARTY_LAYER_STATUS_CHANGED`

Published when the authoritative party layer status state changes. The payload contains the resulting state and identifiers needed by Group UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `partyId` | `System.Guid` | `string` | No | Stable identifier of the party. |
| `memberGuid` | `System.Guid` | `string` | No | Stable character identifier of the group member. |
| `sameLayer` | `bool` | `boolean` | No | Whether the member is currently on the same world layer as the local player. |
| `layerId` | `string` | `string | null` | Yes | Optional public identifier of the active world layer. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PARTY_LAYER_STATUS_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GroupEvents.PublishPartyLayerStatusChanged(
    eventBus,
    partyId,
    memberGuid,
    sameLayer,
    layerId
);
```

## `PARTY_LEADER_CHANGED`

Published when the authoritative party leader state changes. The payload contains the resulting state and identifiers needed by Group UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `partyId` | `System.Guid` | `string` | No | Stable identifier of the party. |
| `previousLeaderGuid` | `System.Guid` | `string` | No | Stable identifier of the previous group leader. |
| `currentLeaderGuid` | `System.Guid` | `string` | No | Stable identifier of the new group leader. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PARTY_LEADER_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GroupEvents.PublishPartyLeaderChanged(
    eventBus,
    partyId,
    previousLeaderGuid,
    currentLeaderGuid
);
```

## `PARTY_MEMBER_JOINED`

Published when party member joins the relevant social or group context and becomes visible to the local client.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `partyId` | `System.Guid` | `string` | No | Stable identifier of the party. |
| `member` | `PartyMemberInfo` | `PartyMemberInfo` | No | Current public snapshot of the group member. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PARTY_MEMBER_JOINED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GroupEvents.PublishPartyMemberJoined(
    eventBus,
    partyId,
    member
);
```

## `PARTY_MEMBER_LEFT`

Published when party member leaves the relevant social, group, or world context.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `partyId` | `System.Guid` | `string` | No | Stable identifier of the party. |
| `memberGuid` | `System.Guid` | `string` | No | Stable character identifier of the group member. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PARTY_MEMBER_LEFT", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GroupEvents.PublishPartyMemberLeft(
    eventBus,
    partyId,
    memberGuid,
    reasonCode
);
```

## `PARTY_MEMBER_UPDATED`

Published when the public state of party member is updated. The payload contains the latest authoritative snapshot or delta required by consumers.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `partyId` | `System.Guid` | `string` | No | Stable identifier of the party. |
| `member` | `PartyMemberInfo` | `PartyMemberInfo` | No | Current public snapshot of the group member. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PARTY_MEMBER_UPDATED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GroupEvents.PublishPartyMemberUpdated(
    eventBus,
    partyId,
    member
);
```

## `READY_CHECK_COMPLETED`

Published when ready check completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `readyCheckId` | `System.Guid` | `string` | No | Stable identifier of the ready-check session. |
| `responses` | `System.Collections.Generic.List<ReadyCheckMemberInfo>` | `ReadonlyArray<ReadyCheckMemberInfo>` | No | Final or current ready-check responses for participating members. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("READY_CHECK_COMPLETED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GroupEvents.PublishReadyCheckCompleted(
    eventBus,
    readyCheckId,
    responses
);
```

## `READY_CHECK_RESPONSE_CHANGED`

Published when the authoritative ready check response state changes. The payload contains the resulting state and identifiers needed by Group UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `readyCheckId` | `System.Guid` | `string` | No | Stable identifier of the ready-check session. |
| `memberGuid` | `System.Guid` | `string` | No | Stable character identifier of the group member. |
| `response` | `ReadyCheckResponse` | `ReadyCheckResponse` | No | Current response state for the ready check. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("READY_CHECK_RESPONSE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GroupEvents.PublishReadyCheckResponseChanged(
    eventBus,
    readyCheckId,
    memberGuid,
    response
);
```

## `READY_CHECK_STARTED`

Published when ready check starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `readyCheckId` | `System.Guid` | `string` | No | Stable identifier of the ready-check session. |
| `partyId` | `System.Guid` | `string` | No | Stable identifier of the party. |
| `initiatorGuid` | `System.Guid` | `string` | No | Authoritative initiator guid value associated with this payload. |
| `expiresAt` | `System.DateTime` | `string` | No | Optional authoritative expiration timestamp. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("READY_CHECK_STARTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
GroupEvents.PublishReadyCheckStarted(
    eventBus,
    readyCheckId,
    partyId,
    initiatorGuid,
    expiresAt
);
```

