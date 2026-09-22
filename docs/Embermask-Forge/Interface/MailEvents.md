# Mail Events

Mail lifecycle events for received and sent messages, read state, attachment claims, expiration, and removal.

## Event index

| Event | Description |
|---|---|
| `MAIL_ATTACHMENT_CLAIMED` | Published when the authoritative 'MAIL_ATTACHMENT_CLAIMED' gameplay event occurs. The payload contains only client-visible state intended for Mail UI and AddOns. |
| `MAIL_EXPIRED` | Published when mail expires according to authoritative game state. |
| `MAIL_READ_CHANGED` | Published when the authoritative mail read state changes. The payload contains the resulting state and identifiers needed by Mail UI or AddOns to update without polling. |
| `MAIL_RECEIVED` | Published when mail is received by the local client and becomes available to the relevant UI or AddOn. |
| `MAIL_REMOVED` | Published when mail is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state. |
| `MAIL_SENT` | Published after mail has been accepted for sending by the authoritative system. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `MAIL_ATTACHMENT_CLAIMED`

Published when the authoritative 'MAIL_ATTACHMENT_CLAIMED' gameplay event occurs. The payload contains only client-visible state intended for Mail UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `mailId` | `System.Guid` | `string` | No | Stable identifier of the mail message. |
| `reward` | `RewardInfo` | `RewardInfo` | No | Reward package associated with this choice. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("MAIL_ATTACHMENT_CLAIMED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MailEvents.PublishAttachmentClaimed(
    eventBus,
    mailId,
    reward
);
```

## `MAIL_EXPIRED`

Published when mail expires according to authoritative game state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `mailId` | `System.Guid` | `string` | No | Stable identifier of the mail message. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("MAIL_EXPIRED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MailEvents.PublishExpired(
    eventBus,
    mailId
);
```

## `MAIL_READ_CHANGED`

Published when the authoritative mail read state changes. The payload contains the resulting state and identifiers needed by Mail UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `mailId` | `System.Guid` | `string` | No | Stable identifier of the mail message. |
| `isRead` | `bool` | `boolean` | No | Whether the mail has been marked as read. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("MAIL_READ_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MailEvents.PublishReadChanged(
    eventBus,
    mailId,
    isRead
);
```

## `MAIL_RECEIVED`

Published when mail is received by the local client and becomes available to the relevant UI or AddOn.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `mail` | `MailSummaryInfo` | `MailSummaryInfo` | No | Mail summary visible to the local player. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("MAIL_RECEIVED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MailEvents.PublishReceived(
    eventBus,
    mail
);
```

## `MAIL_REMOVED`

Published when mail is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `mailId` | `System.Guid` | `string` | No | Stable identifier of the mail message. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("MAIL_REMOVED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MailEvents.PublishRemoved(
    eventBus,
    mailId,
    reasonCode
);
```

## `MAIL_SENT`

Published after mail has been accepted for sending by the authoritative system.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `mailId` | `System.Guid` | `string` | No | Stable identifier of the mail message. |
| `recipientIdentity` | `string` | `string` | No | Stable recipient identity used for the mail operation. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("MAIL_SENT", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MailEvents.PublishSent(
    eventBus,
    mailId,
    recipientIdentity
);
```

