# Chat Events


Chat delivery és send rejection. 


Events: **2**

## `1. CHAT_MESSAGE_RECEIVED`
A kliens számára jogosan kézbesíthető chatüzenet érkezett.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `message` | `ChatMessageInfo` | `ChatMessageInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("CHAT_MESSAGE_RECEIVED", payload => {
    // payload.<field>
});
```

C# publisher: `ChatEvents.PublishMessageReceived(...)`

## `2. CHAT_MESSAGE_REJECTED`
A lokális send request rate-limit/moderation/validation miatt nem került kézbesítésre.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `channel` | `ChatChannel` | `string` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("CHAT_MESSAGE_REJECTED", payload => {
    // payload.<field>
});
```

C# publisher: `ChatEvents.PublishMessageRejected(...)`

