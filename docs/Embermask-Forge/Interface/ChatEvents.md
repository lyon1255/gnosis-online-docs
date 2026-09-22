# Chat Events

Chat delivery and send-rejection events for supported social channels.

## Event index

| Event | Description |
|---|---|
| `CHAT_MESSAGE_RECEIVED` | Published when a chat message is successfully delivered to the local client through a supported channel. |
| `CHAT_MESSAGE_REJECTED` | Published when an attempted outgoing chat message is rejected before delivery. The payload exposes a stable non-localized reason code suitable for UI handling. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `CHAT_MESSAGE_RECEIVED`

Published when a chat message is successfully delivered to the local client through a supported channel.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `message` | `ChatMessageInfo` | `ChatMessageInfo` | No | Delivered or rejected chat-message payload. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("CHAT_MESSAGE_RECEIVED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
ChatEvents.PublishMessageReceived(
    eventBus,
    message
);
```

## `CHAT_MESSAGE_REJECTED`

Published when an attempted outgoing chat message is rejected before delivery. The payload exposes a stable non-localized reason code suitable for UI handling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `channel` | `ChatChannel` | `ChatChannel` | No | Chat channel through which the message was delivered. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("CHAT_MESSAGE_REJECTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
ChatEvents.PublishMessageRejected(
    eventBus,
    channel,
    reasonCode
);
```

