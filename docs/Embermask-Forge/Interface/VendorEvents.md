# Vendor Events


Vendor tranzakciók eredménye. 


Events: **2**

## `1. VENDOR_PURCHASE_COMPLETED`
Vendor buy tranzakció véglegesen commitolt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `vendor` | `EntityRef` | `EntityRef` | No |  |
| `itemId` | `int` | `number` | No |  |
| `quantity` | `int` | `number` | No |  |
| `totalPrice` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("VENDOR_PURCHASE_COMPLETED", payload => {
    // payload.<field>
});
```

C# publisher: `VendorEvents.PublishPurchaseCompleted(...)`

## `2. VENDOR_SALE_COMPLETED`
Item NPC-vendornak történő eladása commitolt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `vendor` | `EntityRef` | `EntityRef` | No |  |
| `itemId` | `int` | `number` | No |  |
| `quantity` | `int` | `number` | No |  |
| `totalReceived` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("VENDOR_SALE_COMPLETED", payload => {
    // payload.<field>
});
```

C# publisher: `VendorEvents.PublishSaleCompleted(...)`

