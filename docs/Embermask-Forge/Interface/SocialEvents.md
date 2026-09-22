# Social Events

Friend, block-list, and presence events for social identities visible to the local player.

## Event index

| Event | Description |
|---|---|
| `BLOCK_ADDED` | Published when block is added to the local client's authoritative public state. The payload identifies the newly available object or entity. |
| `BLOCK_REMOVED` | Published when block is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state. |
| `FRIEND_ADDED` | Published when friend is added to the local client's authoritative public state. The payload identifies the newly available object or entity. |
| `FRIEND_PRESENCE_CHANGED` | Published when the authoritative friend presence state changes. The payload contains the resulting state and identifiers needed by Social UI or AddOns to update without polling. |
| `FRIEND_REMOVED` | Published when friend is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `BLOCK_ADDED`

Published when block is added to the local client's authoritative public state. The payload identifies the newly available object or entity.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `socialIdentityId` | `string` | `string` | No | Stable identifier of the social identity or account-level relationship. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("BLOCK_ADDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SocialEvents.PublishBlockAdded(
    eventBus,
    socialIdentityId
);
```

## `BLOCK_REMOVED`

Published when block is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `socialIdentityId` | `string` | `string` | No | Stable identifier of the social identity or account-level relationship. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("BLOCK_REMOVED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SocialEvents.PublishBlockRemoved(
    eventBus,
    socialIdentityId
);
```

## `FRIEND_ADDED`

Published when friend is added to the local client's authoritative public state. The payload identifies the newly available object or entity.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `socialIdentityId` | `string` | `string` | No | Stable identifier of the social identity or account-level relationship. |
| `displayName` | `string` | `string` | No | Display name safe for presentation to the local player. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("FRIEND_ADDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SocialEvents.PublishFriendAdded(
    eventBus,
    socialIdentityId,
    displayName
);
```

## `FRIEND_PRESENCE_CHANGED`

Published when the authoritative friend presence state changes. The payload contains the resulting state and identifiers needed by Social UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `socialIdentityId` | `string` | `string` | No | Stable identifier of the social identity or account-level relationship. |
| `online` | `bool` | `boolean` | No | Whether the member is currently online. |
| `locationId` | `int?` | `number | null` | Yes | Stable identifier of the relevant location. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("FRIEND_PRESENCE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SocialEvents.PublishFriendPresenceChanged(
    eventBus,
    socialIdentityId,
    online,
    locationId
);
```

## `FRIEND_REMOVED`

Published when friend is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `socialIdentityId` | `string` | `string` | No | Stable identifier of the social identity or account-level relationship. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("FRIEND_REMOVED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SocialEvents.PublishFriendRemoved(
    eventBus,
    socialIdentityId
);
```

