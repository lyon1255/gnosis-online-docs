# Auction Events


AH saját ügyleteinek lifecycle-ja. 


Events: **9**

## `1. AUCTION_BID_PLACED`
A lokális játékos licitje commitolt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `auctionId` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |
| `amount` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("AUCTION_BID_PLACED", payload => {
    // payload.<field>
});
```

C# publisher: `AuctionEvents.PublishBidPlaced(...)`

## `2. AUCTION_BUYOUT_COMPLETED`
A lokális vevő buyout tranzakciója sikeresen lezárult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `auctionId` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |
| `itemId` | `int` | `number` | No |  |
| `quantity` | `int` | `number` | No |  |
| `totalPaid` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("AUCTION_BUYOUT_COMPLETED", payload => {
    // payload.<field>
});
```

C# publisher: `AuctionEvents.PublishBuyoutCompleted(...)`

## `3. AUCTION_ITEM_RETURNED`
Sikertelen/cancelled aukció itemje visszakerült a jogos tulajdonoshoz.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `auctionId` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |
| `item` | `ItemStackInfo` | `ItemStackInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("AUCTION_ITEM_RETURNED", payload => {
    // payload.<field>
});
```

C# publisher: `AuctionEvents.PublishItemReturned(...)`

## `4. AUCTION_LISTING_CANCELLED`
Saját listinget sikeresen visszavontak.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `auctionId` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("AUCTION_LISTING_CANCELLED", payload => {
    // payload.<field>
});
```

C# publisher: `AuctionEvents.PublishListingCancelled(...)`

## `5. AUCTION_LISTING_CREATED`
A saját listing sikeresen escrow-ba került.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `auction` | `AuctionInfo` | `AuctionInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("AUCTION_LISTING_CREATED", payload => {
    // payload.<field>
});
```

C# publisher: `AuctionEvents.PublishListingCreated(...)`

## `6. AUCTION_LISTING_EXPIRED`
Saját listing lejárati lifecycle-ja befejeződött.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `auctionId` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |
| `hadWinningBid` | `bool` | `boolean` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("AUCTION_LISTING_EXPIRED", payload => {
    // payload.<field>
});
```

C# publisher: `AuctionEvents.PublishListingExpired(...)`

## `7. AUCTION_OUTBID`
A lokális játékos korábbi legmagasabb bidjét túllépték és escrow pénze visszajárt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `auctionId` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |
| `refunded` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("AUCTION_OUTBID", payload => {
    // payload.<field>
});
```

C# publisher: `AuctionEvents.PublishOutbid(...)`

## `8. AUCTION_SOLD`
Saját listing sikeresen elkelt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `auctionId` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |
| `grossPrice` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |
| `fee` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |
| `netProceeds` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("AUCTION_SOLD", payload => {
    // payload.<field>
});
```

C# publisher: `AuctionEvents.PublishSold(...)`

## `9. AUCTION_WON`
A lokális bidder a listing lezárásakor megnyerte az aukciót.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `auctionId` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |
| `item` | `ItemStackInfo` | `ItemStackInfo` | No |  |
| `winningBid` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("AUCTION_WON", payload => {
    // payload.<field>
});
```

C# publisher: `AuctionEvents.PublishWon(...)`

