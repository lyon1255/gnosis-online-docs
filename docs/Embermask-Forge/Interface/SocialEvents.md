# Social Events


Friends/block/presence. 


Events: **5**

## `1. BLOCK_ADDED`
Block kapcsolat létrejött.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `socialIdentityId` | `string` | `string` | No | identity scope GAP-032 |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("BLOCK_ADDED", payload => {
    // payload.<field>
});
```

C# publisher: `SocialEvents.PublishBlockAdded(...)`

## `2. BLOCK_REMOVED`
Block kapcsolat megszűnt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `socialIdentityId` | `string` | `string` | No | identity scope GAP-032 |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("BLOCK_REMOVED", payload => {
    // payload.<field>
});
```

C# publisher: `SocialEvents.PublishBlockRemoved(...)`

## `3. FRIEND_ADDED`
Új friend kapcsolat létrejött.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `socialIdentityId` | `string` | `string` | No | **DESIGN DECISION REQUIRED: account vagy character identity** |
| `displayName` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("FRIEND_ADDED", payload => {
    // payload.<field>
});
```

C# publisher: `SocialEvents.PublishFriendAdded(...)`

## `4. FRIEND_PRESENCE_CHANGED`
Engedélyezett friend presence információ változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `socialIdentityId` | `string` | `string` | No |  |
| `online` | `bool` | `boolean` | No |  |
| `locationId` | `int?` | `number | null` | Yes | csak ha privacy policy megengedi |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("FRIEND_PRESENCE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `SocialEvents.PublishFriendPresenceChanged(...)`

## `5. FRIEND_REMOVED`
Friend kapcsolat megszűnt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `socialIdentityId` | `string` | `string` | No | identity scope GAP-032 |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("FRIEND_REMOVED", payload => {
    // payload.<field>
});
```

C# publisher: `SocialEvents.PublishFriendRemoved(...)`

