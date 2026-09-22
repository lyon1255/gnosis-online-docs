# Trade Events


Direct Trade lifecycle. 


Events: **7**

## `1. TRADE_CANCELLED`
Trade completion nélkül lezárult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `tradeId` | `System.Guid` | `string` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("TRADE_CANCELLED", payload => {
    // payload.<field>
});
```

C# publisher: `TradeEvents.PublishCancelled(...)`

## `2. TRADE_COMPLETED`
Mindkét fél megerősítése után az atomi Realm-tranzakció sikeresen lezárult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `tradeId` | `System.Guid` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("TRADE_COMPLETED", payload => {
    // payload.<field>
});
```

C# publisher: `TradeEvents.PublishCompleted(...)`

## `3. TRADE_CONFIRMATION_CHANGED`
Egy fél aktuális offerVersionre vonatkozó megerősítési állapota változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `tradeId` | `System.Guid` | `string` | No |  |
| `offerVersion` | `long` | `number` | No | Non-negative revision/identifier; represented as Long in the public Forge schema. |
| `playerGuid` | `System.Guid` | `string` | No |  |
| `confirmed` | `bool` | `boolean` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("TRADE_CONFIRMATION_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `TradeEvents.PublishConfirmationChanged(...)`

## `4. TRADE_FAILED`
A véglegesítés validációs vagy tranzakciós okból nem hajtható végre.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `tradeId` | `System.Guid` | `string` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("TRADE_FAILED", payload => {
    // payload.<field>
});
```

C# publisher: `TradeEvents.PublishFailed(...)`

## `5. TRADE_OFFER_CHANGED`
Valamely fél item/money ajánlata változott; minden korábbi megerősítés invalidálódik.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `tradeId` | `System.Guid` | `string` | No |  |
| `offerVersion` | `long` | `number` | No | Non-negative revision/identifier; represented as Long in the public Forge schema. |
| `playerGuid` | `System.Guid` | `string` | No | módosító fél |
| `offer` | `TradeOfferInfo` | `TradeOfferInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("TRADE_OFFER_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `TradeEvents.PublishOfferChanged(...)`

## `6. TRADE_REQUESTED`
Másik játékos Direct Trade kérést küldött.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `tradeId` | `System.Guid` | `string` | No |  |
| `requester` | `EntityRef` | `EntityRef` | No |  |
| `target` | `EntityRef` | `EntityRef` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("TRADE_REQUESTED", payload => {
    // payload.<field>
});
```

C# publisher: `TradeEvents.PublishRequested(...)`

## `7. TRADE_STARTED`
A kérés elfogadása után létrejött a tárgyalási session.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `tradeId` | `System.Guid` | `string` | No |  |
| `participants` | `System.Collections.Generic.List<EntityRef>` | `ReadonlyArray<EntityRef>` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("TRADE_STARTED", payload => {
    // payload.<field>
});
```

C# publisher: `TradeEvents.PublishStarted(...)`

