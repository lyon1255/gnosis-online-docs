# System Events

Client lifecycle events covering gameplay connectivity, loading, world entry, reconnection, global announcements, and character-selection state visible to the local client.

## Event index

| Event | Description |
|---|---|
| `CHARACTER_ROSTER_CHANGED` | Published when the account's visible character roster changes. The revision allows UI to invalidate and refresh a cached roster snapshot. |
| `CHARACTER_SELECTION_CHANGED` | Published when the authoritative character selection state changes. The payload contains the resulting state and identifiers needed by System UI or AddOns to update without polling. |
| `CONNECTION_STATE_CHANGED` | Published when the authoritative connection state state changes. The payload contains the resulting state and identifiers needed by System UI or AddOns to update without polling. |
| `GLOBAL_ANNOUNCEMENT_RECEIVED` | Published when the client receives a global announcement that is intended to be shown to the player. |
| `LOADING_STATE_CHANGED` | Published when the authoritative loading state state changes. The payload contains the resulting state and identifiers needed by System UI or AddOns to update without polling. |
| `RECONNECT_COMPLETED` | Published when reconnect completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume. |
| `RECONNECT_FAILED` | Published when reconnect fails before reaching a successful final state. The payload includes stable context or reason information when available. |
| `RECONNECT_STARTED` | Published when reconnect starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state. |
| `WORLD_ENTRY_COMPLETED` | Published when world entry completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume. |
| `WORLD_ENTRY_FAILED` | Published when world entry fails before reaching a successful final state. The payload includes stable context or reason information when available. |
| `WORLD_ENTRY_STARTED` | Published when world entry starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `CHARACTER_ROSTER_CHANGED`

Published when the account's visible character roster changes. The revision allows UI to invalidate and refresh a cached roster snapshot.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `revision` | `int` | `number` | No | Monotonically increasing revision number used to detect stale cached state. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("CHARACTER_ROSTER_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SystemEvents.PublishCharacterRosterChanged(
    eventBus,
    revision
);
```

## `CHARACTER_SELECTION_CHANGED`

Published when the authoritative character selection state changes. The payload contains the resulting state and identifiers needed by System UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `characterGuid` | `System.Guid?` | `string | null` | Yes | Stable identifier of the character. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("CHARACTER_SELECTION_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SystemEvents.PublishCharacterSelectionChanged(
    eventBus,
    characterGuid
);
```

## `CONNECTION_STATE_CHANGED`

Published when the authoritative connection state state changes. The payload contains the resulting state and identifiers needed by System UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `state` | `ConnectionState` | `ConnectionState` | No | Current lifecycle state represented by this payload. |
| `reasonCode` | `string` | `string | null` | Yes | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("CONNECTION_STATE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SystemEvents.PublishConnectionStateChanged(
    eventBus,
    state,
    reasonCode
);
```

## `GLOBAL_ANNOUNCEMENT_RECEIVED`

Published when the client receives a global announcement that is intended to be shown to the player.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `message` | `string` | `string` | No | Delivered or rejected chat-message payload. |
| `severityCode` | `string` | `string` | No | Stable, non-localized severity classification. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("GLOBAL_ANNOUNCEMENT_RECEIVED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SystemEvents.PublishGlobalAnnouncementReceived(
    eventBus,
    message,
    severityCode
);
```

## `LOADING_STATE_CHANGED`

Published when the authoritative loading state state changes. The payload contains the resulting state and identifiers needed by System UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `state` | `LoadingState` | `LoadingState` | No | Current lifecycle state represented by this payload. |
| `context` | `string` | `string | null` | Yes | Stable context identifier describing the operation that changed state. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("LOADING_STATE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SystemEvents.PublishLoadingStateChanged(
    eventBus,
    state,
    context
);
```

## `RECONNECT_COMPLETED`

Published when reconnect completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `floorId` | `int` | `number` | No | Stable content identifier of the relevant floor. |
| `mapId` | `int` | `number` | No | Stable content identifier of the relevant map. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("RECONNECT_COMPLETED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SystemEvents.PublishReconnectCompleted(
    eventBus,
    floorId,
    mapId
);
```

## `RECONNECT_FAILED`

Published when reconnect fails before reaching a successful final state. The payload includes stable context or reason information when available.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |
| `willRetry` | `bool` | `boolean` | No | Whether the client or runtime intends to retry automatically. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("RECONNECT_FAILED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SystemEvents.PublishReconnectFailed(
    eventBus,
    reasonCode,
    willRetry
);
```

## `RECONNECT_STARTED`

Published when reconnect starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `attempt` | `int` | `number` | No | Current retry attempt number. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("RECONNECT_STARTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SystemEvents.PublishReconnectStarted(
    eventBus,
    attempt
);
```

## `WORLD_ENTRY_COMPLETED`

Published when world entry completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `floorId` | `int` | `number` | No | Stable content identifier of the relevant floor. |
| `mapId` | `int` | `number` | No | Stable content identifier of the relevant map. |
| `layerId` | `string` | `string | null` | Yes | Optional public identifier of the active world layer. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("WORLD_ENTRY_COMPLETED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SystemEvents.PublishWorldEntryCompleted(
    eventBus,
    floorId,
    mapId,
    layerId
);
```

## `WORLD_ENTRY_FAILED`

Published when world entry fails before reaching a successful final state. The payload includes stable context or reason information when available.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `floorId` | `int?` | `number | null` | Yes | Stable content identifier of the relevant floor. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("WORLD_ENTRY_FAILED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SystemEvents.PublishWorldEntryFailed(
    eventBus,
    floorId,
    reasonCode
);
```

## `WORLD_ENTRY_STARTED`

Published when world entry starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `floorId` | `int` | `number` | No | Stable content identifier of the relevant floor. |
| `mapId` | `int` | `number` | No | Stable content identifier of the relevant map. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("WORLD_ENTRY_STARTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SystemEvents.PublishWorldEntryStarted(
    eventBus,
    floorId,
    mapId
);
```

