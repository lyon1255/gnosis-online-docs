# Auction Events

Auction House events for the local player's visible listings and transactions, including bids, buyouts, expirations, wins, sales, and returned items.

## Event index

| Event | Description |
|---|---|
| `AUCTION_BID_PLACED` | Published when auction bid is successfully placed and accepted by the authoritative system. |
| `AUCTION_BUYOUT_COMPLETED` | Published when auction buyout completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume. |
| `AUCTION_ITEM_RETURNED` | Published when auction item is returned to the local player after the authoritative transaction lifecycle ends. |
| `AUCTION_LISTING_CANCELLED` | Published when auction listing is cancelled before normal completion. The payload identifies the cancelled lifecycle and any public reason information. |
| `AUCTION_LISTING_CREATED` | Published when auction listing is created and becomes visible to the local client. |
| `AUCTION_LISTING_EXPIRED` | Published when auction listing expires according to authoritative game state. |
| `AUCTION_OUTBID` | Published when the local player is outbid on auction. The payload contains only information the client is allowed to know. |
| `AUCTION_SOLD` | Published when auction is sold and the authoritative transaction result is available. |
| `AUCTION_WON` | Published when the local player wins auction and the result becomes authoritative. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `AUCTION_BID_PLACED`

Published when auction bid is successfully placed and accepted by the authoritative system.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `auctionId` | `System.Guid` | `string` | No | Stable identifier of the Auction House listing. |
| `amount` | `int` | `number` | No | Resolved numeric amount associated with the event. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("AUCTION_BID_PLACED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AuctionEvents.PublishBidPlaced(
    eventBus,
    auctionId,
    amount
);
```

## `AUCTION_BUYOUT_COMPLETED`

Published when auction buyout completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `auctionId` | `System.Guid` | `string` | No | Stable identifier of the Auction House listing. |
| `itemId` | `int` | `number` | No | Stable content identifier of the item definition. |
| `quantity` | `int` | `number` | No | Current or transferred stack quantity. |
| `totalPaid` | `int` | `number` | No | Total currency paid by the local player. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("AUCTION_BUYOUT_COMPLETED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AuctionEvents.PublishBuyoutCompleted(
    eventBus,
    auctionId,
    itemId,
    quantity,
    totalPaid
);
```

## `AUCTION_ITEM_RETURNED`

Published when auction item is returned to the local player after the authoritative transaction lifecycle ends.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `auctionId` | `System.Guid` | `string` | No | Stable identifier of the Auction House listing. |
| `item` | `ItemStackInfo` | `ItemStackInfo` | No | Authoritative item value associated with this payload. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("AUCTION_ITEM_RETURNED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AuctionEvents.PublishItemReturned(
    eventBus,
    auctionId,
    item
);
```

## `AUCTION_LISTING_CANCELLED`

Published when auction listing is cancelled before normal completion. The payload identifies the cancelled lifecycle and any public reason information.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `auctionId` | `System.Guid` | `string` | No | Stable identifier of the Auction House listing. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("AUCTION_LISTING_CANCELLED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AuctionEvents.PublishListingCancelled(
    eventBus,
    auctionId
);
```

## `AUCTION_LISTING_CREATED`

Published when auction listing is created and becomes visible to the local client.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `auction` | `AuctionInfo` | `AuctionInfo` | No | Snapshot of the Auction House listing. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("AUCTION_LISTING_CREATED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AuctionEvents.PublishListingCreated(
    eventBus,
    auction
);
```

## `AUCTION_LISTING_EXPIRED`

Published when auction listing expires according to authoritative game state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `auctionId` | `System.Guid` | `string` | No | Stable identifier of the Auction House listing. |
| `hadWinningBid` | `bool` | `boolean` | No | Whether the local player held the winning bid immediately before the listing ended. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("AUCTION_LISTING_EXPIRED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AuctionEvents.PublishListingExpired(
    eventBus,
    auctionId,
    hadWinningBid
);
```

## `AUCTION_OUTBID`

Published when the local player is outbid on auction. The payload contains only information the client is allowed to know.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `auctionId` | `System.Guid` | `string` | No | Stable identifier of the Auction House listing. |
| `refunded` | `int` | `number` | No | Currency returned to the player as part of the operation. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("AUCTION_OUTBID", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AuctionEvents.PublishOutbid(
    eventBus,
    auctionId,
    refunded
);
```

## `AUCTION_SOLD`

Published when auction is sold and the authoritative transaction result is available.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `auctionId` | `System.Guid` | `string` | No | Stable identifier of the Auction House listing. |
| `grossPrice` | `int` | `number` | No | Gross sale value before fees. |
| `fee` | `int` | `number` | No | Auction fee deducted from the gross sale value. |
| `netProceeds` | `int` | `number` | No | Final sale proceeds after fees. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("AUCTION_SOLD", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AuctionEvents.PublishSold(
    eventBus,
    auctionId,
    grossPrice,
    fee,
    netProceeds
);
```

## `AUCTION_WON`

Published when the local player wins auction and the result becomes authoritative.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `auctionId` | `System.Guid` | `string` | No | Stable identifier of the Auction House listing. |
| `item` | `ItemStackInfo` | `ItemStackInfo` | No | Authoritative item value associated with this payload. |
| `winningBid` | `int` | `number` | No | Final winning bid amount. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("AUCTION_WON", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
AuctionEvents.PublishWon(
    eventBus,
    auctionId,
    item,
    winningBid
);
```

