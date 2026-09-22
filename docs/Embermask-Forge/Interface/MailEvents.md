# Mail Events


Mail lifecycle. 


Events: **6**

## `1. MAIL_ATTACHMENT_CLAIMED`
Item/money attachment atomi átvétele sikeres volt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `mailId` | `System.Guid` | `string` | No |  |
| `reward` | `RewardInfo` | `RewardInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("MAIL_ATTACHMENT_CLAIMED", payload => {
    // payload.<field>
});
```

C# publisher: `MailEvents.PublishAttachmentClaimed(...)`

## `2. MAIL_EXPIRED`
Egy levél a később meghatározott expiry policy szerint lejárt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `mailId` | `System.Guid` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("MAIL_EXPIRED", payload => {
    // payload.<field>
});
```

C# publisher: `MailEvents.PublishExpired(...)`

## `3. MAIL_READ_CHANGED`
A levél read/unread state-je változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `mailId` | `System.Guid` | `string` | No |  |
| `isRead` | `bool` | `boolean` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("MAIL_READ_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `MailEvents.PublishReadChanged(...)`

## `4. MAIL_RECEIVED`
Új levél került a lokális mailboxba.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `mail` | `MailSummaryInfo` | `MailSummaryInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("MAIL_RECEIVED", payload => {
    // payload.<field>
});
```

C# publisher: `MailEvents.PublishReceived(...)`

## `5. MAIL_REMOVED`
A levél már nem része a mailboxnak.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `mailId` | `System.Guid` | `string` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("MAIL_REMOVED", payload => {
    // payload.<field>
});
```

C# publisher: `MailEvents.PublishRemoved(...)`

## `6. MAIL_SENT`
Mail send tranzakció sikeresen commitolt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `mailId` | `System.Guid` | `string` | No |  |
| `recipientIdentity` | `string` | `string` | No | címzési scope GAP-033 szerint véglegesítendő |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("MAIL_SENT", payload => {
    // payload.<field>
});
```

C# publisher: `MailEvents.PublishSent(...)`

