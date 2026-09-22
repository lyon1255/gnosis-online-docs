# Platform Events


Steam/platform auth, purchase, entitlement. 


Events: **6**

## `1. COSMETIC_ENTITLEMENTS_SYNCED`
Teljes entitlement reconciliation befejeződött.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `revision` | `long` | `number` | No | Non-negative revision/identifier; represented as Long in the public Forge schema. |
| `verifiedAt` | `System.DateTime` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("COSMETIC_ENTITLEMENTS_SYNCED", payload => {
    // payload.<field>
});
```

C# publisher: `PlatformEvents.PublishCosmeticEntitlementsSynced(...)`

## `2. COSMETIC_ENTITLEMENT_GRANTED`
Hiteles platformállapot alapján új cosmetic entitlement vált érvényessé.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `entitlement` | `CosmeticEntitlementInfo` | `CosmeticEntitlementInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("COSMETIC_ENTITLEMENT_GRANTED", payload => {
    // payload.<field>
});
```

C# publisher: `PlatformEvents.PublishCosmeticEntitlementGranted(...)`

## `3. COSMETIC_ENTITLEMENT_REVOKED`
Hiteles refund/chargeback/fraud/platform revocation miatt entitlement megszűnt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `entitlement` | `CosmeticEntitlementInfo` | `CosmeticEntitlementInfo` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("COSMETIC_ENTITLEMENT_REVOKED", payload => {
    // payload.<field>
});
```

C# publisher: `PlatformEvents.PublishCosmeticEntitlementRevoked(...)`

## `4. PLATFORM_AUTH_STATE_CHANGED`
A platform identity bridge auth-state-je változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `state` | `PlatformAuthState` | `string` | No |  |
| `reasonCode` | `string` | `string | null` | Yes |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PLATFORM_AUTH_STATE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `PlatformEvents.PublishAuthStateChanged(...)`

## `5. PLATFORM_AVAILABILITY_CHANGED`
A Steam/platform runtime elérhetősége változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `available` | `bool` | `boolean` | No |  |
| `reasonCode` | `string` | `string | null` | Yes |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PLATFORM_AVAILABILITY_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `PlatformEvents.PublishAvailabilityChanged(...)`

## `6. PURCHASE_STATE_CHANGED`
Saját kozmetikai purchase order UI-releváns állapota megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `purchase` | `PurchaseInfo` | `PurchaseInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PURCHASE_STATE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `PlatformEvents.PublishPurchaseStateChanged(...)`

