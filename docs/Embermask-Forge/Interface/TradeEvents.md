# Trade Events

Direct player-to-player trade lifecycle events, including requests, offer revisions, confirmations, completion, cancellation, and failure.

## Event index

| Event | Description |
|---|---|
| `TRADE_CANCELLED` | Published when trade is cancelled before normal completion. The payload identifies the cancelled lifecycle and any public reason information. |
| `TRADE_COMPLETED` | Published when trade completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume. |
| `TRADE_CONFIRMATION_CHANGED` | Published when the authoritative trade confirmation state changes. The payload contains the resulting state and identifiers needed by Trade UI or AddOns to update without polling. |
| `TRADE_FAILED` | Published when trade fails before reaching a successful final state. The payload includes stable context or reason information when available. |
| `TRADE_OFFER_CHANGED` | Published when the authoritative trade offer state changes. The payload contains the resulting state and identifiers needed by Trade UI or AddOns to update without polling. |
| `TRADE_REQUESTED` | Published when the authoritative 'TRADE_REQUESTED' gameplay event occurs. The payload contains only client-visible state intended for Trade UI and AddOns. |
| `TRADE_STARTED` | Published when trade starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `TRADE_CANCELLED`

Published when trade is cancelled before normal completion. The payload identifies the cancelled lifecycle and any public reason information.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `tradeId` | `System.Guid` | `string` | No | Stable identifier of the direct-trade session. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("TRADE_CANCELLED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
TradeEvents.PublishCancelled(
    eventBus,
    tradeId,
    reasonCode
);
```

## `TRADE_COMPLETED`

Published when trade completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `tradeId` | `System.Guid` | `string` | No | Stable identifier of the direct-trade session. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("TRADE_COMPLETED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
TradeEvents.PublishCompleted(
    eventBus,
    tradeId
);
```

## `TRADE_CONFIRMATION_CHANGED`

Published when the authoritative trade confirmation state changes. The payload contains the resulting state and identifiers needed by Trade UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `tradeId` | `System.Guid` | `string` | No | Stable identifier of the direct-trade session. |
| `offerVersion` | `int` | `number` | No | Revision number of the trade offer used to detect stale confirmations. |
| `playerGuid` | `System.Guid` | `string` | No | Authoritative player guid value associated with this payload. |
| `confirmed` | `bool` | `boolean` | No | Whether the participant has confirmed the current offer version. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("TRADE_CONFIRMATION_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
TradeEvents.PublishConfirmationChanged(
    eventBus,
    tradeId,
    offerVersion,
    playerGuid,
    confirmed
);
```

## `TRADE_FAILED`

Published when trade fails before reaching a successful final state. The payload includes stable context or reason information when available.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `tradeId` | `System.Guid` | `string` | No | Stable identifier of the direct-trade session. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("TRADE_FAILED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
TradeEvents.PublishFailed(
    eventBus,
    tradeId,
    reasonCode
);
```

## `TRADE_OFFER_CHANGED`

Published when the authoritative trade offer state changes. The payload contains the resulting state and identifiers needed by Trade UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `tradeId` | `System.Guid` | `string` | No | Stable identifier of the direct-trade session. |
| `offerVersion` | `int` | `number` | No | Revision number of the trade offer used to detect stale confirmations. |
| `playerGuid` | `System.Guid` | `string` | No | Authoritative player guid value associated with this payload. |
| `offer` | `TradeOfferInfo` | `TradeOfferInfo` | No | Current trade offer snapshot. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("TRADE_OFFER_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
TradeEvents.PublishOfferChanged(
    eventBus,
    tradeId,
    offerVersion,
    playerGuid,
    offer
);
```

## `TRADE_REQUESTED`

Published when the authoritative 'TRADE_REQUESTED' gameplay event occurs. The payload contains only client-visible state intended for Trade UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `tradeId` | `System.Guid` | `string` | No | Stable identifier of the direct-trade session. |
| `requester` | `EntityRef` | `EntityRef` | No | Safe reference to the entity that initiated the request. |
| `target` | `EntityRef` | `EntityRef` | No | Optional entity targeted by the action or cast. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("TRADE_REQUESTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
TradeEvents.PublishRequested(
    eventBus,
    tradeId,
    requester,
    target
);
```

## `TRADE_STARTED`

Published when trade starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `tradeId` | `System.Guid` | `string` | No | Stable identifier of the direct-trade session. |
| `participants` | `System.Collections.Generic.List<EntityRef>` | `ReadonlyArray<EntityRef>` | No | Authoritative participants value associated with this payload. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("TRADE_STARTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
TradeEvents.PublishStarted(
    eventBus,
    tradeId,
    participants
);
```

