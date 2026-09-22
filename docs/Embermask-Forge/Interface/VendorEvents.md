# Vendor Events

Completed vendor transaction events for purchases and sales that have been accepted by the authoritative game state.

## Event index

| Event | Description |
|---|---|
| `VENDOR_PURCHASE_COMPLETED` | Published when vendor purchase completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume. |
| `VENDOR_SALE_COMPLETED` | Published when vendor sale completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `VENDOR_PURCHASE_COMPLETED`

Published when vendor purchase completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `vendor` | `EntityRef` | `EntityRef` | No | Safe reference to the vendor involved in the transaction. |
| `itemId` | `int` | `number` | No | Stable content identifier of the item definition. |
| `quantity` | `int` | `number` | No | Current or transferred stack quantity. |
| `totalPrice` | `int` | `number` | No | Total price paid in the game's smallest public currency unit. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("VENDOR_PURCHASE_COMPLETED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
VendorEvents.PublishPurchaseCompleted(
    eventBus,
    vendor,
    itemId,
    quantity,
    totalPrice
);
```

## `VENDOR_SALE_COMPLETED`

Published when vendor sale completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `vendor` | `EntityRef` | `EntityRef` | No | Safe reference to the vendor involved in the transaction. |
| `itemId` | `int` | `number` | No | Stable content identifier of the item definition. |
| `quantity` | `int` | `number` | No | Current or transferred stack quantity. |
| `totalReceived` | `int` | `number` | No | Total currency received in the game's smallest public currency unit. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("VENDOR_SALE_COMPLETED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
VendorEvents.PublishSaleCompleted(
    eventBus,
    vendor,
    itemId,
    quantity,
    totalReceived
);
```

