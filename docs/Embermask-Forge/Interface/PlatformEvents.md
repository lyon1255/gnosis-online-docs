# Platform Events

Platform integration events for availability, authentication, commerce state, and verified cosmetic entitlements without exposing provider secrets.

## Event index

| Event | Description |
|---|---|
| `COSMETIC_ENTITLEMENTS_SYNCED` | Published when the authoritative 'COSMETIC_ENTITLEMENTS_SYNCED' gameplay event occurs. The payload contains only client-visible state intended for Platform UI and AddOns. |
| `COSMETIC_ENTITLEMENT_GRANTED` | Published after cosmetic entitlement has been authoritatively granted to the local player. |
| `COSMETIC_ENTITLEMENT_REVOKED` | Published when cosmetic entitlement is authoritatively revoked and should no longer be treated as active or owned. |
| `PLATFORM_AUTH_STATE_CHANGED` | Published when the authoritative platform auth state state changes. The payload contains the resulting state and identifiers needed by Platform UI or AddOns to update without polling. |
| `PLATFORM_AVAILABILITY_CHANGED` | Published when the authoritative platform availability state changes. The payload contains the resulting state and identifiers needed by Platform UI or AddOns to update without polling. |
| `PURCHASE_STATE_CHANGED` | Published when the authoritative purchase state state changes. The payload contains the resulting state and identifiers needed by Platform UI or AddOns to update without polling. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `COSMETIC_ENTITLEMENTS_SYNCED`

Published when the authoritative 'COSMETIC_ENTITLEMENTS_SYNCED' gameplay event occurs. The payload contains only client-visible state intended for Platform UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `revision` | `int` | `number` | No | Monotonically increasing revision number used to detect stale cached state. |
| `verifiedAt` | `System.DateTime` | `string` | No | Timestamp at which ownership was last authoritatively verified. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("COSMETIC_ENTITLEMENTS_SYNCED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
PlatformEvents.PublishCosmeticEntitlementsSynced(
    eventBus,
    revision,
    verifiedAt
);
```

## `COSMETIC_ENTITLEMENT_GRANTED`

Published after cosmetic entitlement has been authoritatively granted to the local player.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `entitlement` | `CosmeticEntitlementInfo` | `CosmeticEntitlementInfo` | No | Verified cosmetic-entitlement snapshot. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("COSMETIC_ENTITLEMENT_GRANTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
PlatformEvents.PublishCosmeticEntitlementGranted(
    eventBus,
    entitlement
);
```

## `COSMETIC_ENTITLEMENT_REVOKED`

Published when cosmetic entitlement is authoritatively revoked and should no longer be treated as active or owned.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `entitlement` | `CosmeticEntitlementInfo` | `CosmeticEntitlementInfo` | No | Verified cosmetic-entitlement snapshot. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("COSMETIC_ENTITLEMENT_REVOKED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
PlatformEvents.PublishCosmeticEntitlementRevoked(
    eventBus,
    entitlement,
    reasonCode
);
```

## `PLATFORM_AUTH_STATE_CHANGED`

Published when the authoritative platform auth state state changes. The payload contains the resulting state and identifiers needed by Platform UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `state` | `PlatformAuthState` | `PlatformAuthState` | No | Current lifecycle state represented by this payload. |
| `reasonCode` | `string` | `string | null` | Yes | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PLATFORM_AUTH_STATE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
PlatformEvents.PublishAuthStateChanged(
    eventBus,
    state,
    reasonCode
);
```

## `PLATFORM_AVAILABILITY_CHANGED`

Published when the authoritative platform availability state changes. The payload contains the resulting state and identifiers needed by Platform UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `available` | `bool` | `boolean` | No | Whether the feature or action is currently available. |
| `reasonCode` | `string` | `string | null` | Yes | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PLATFORM_AVAILABILITY_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
PlatformEvents.PublishAvailabilityChanged(
    eventBus,
    available,
    reasonCode
);
```

## `PURCHASE_STATE_CHANGED`

Published when the authoritative purchase state state changes. The payload contains the resulting state and identifiers needed by Platform UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `purchase` | `PurchaseInfo` | `PurchaseInfo` | No | Provider-secret-free purchase snapshot. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PURCHASE_STATE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
PlatformEvents.PublishPurchaseStateChanged(
    eventBus,
    purchase
);
```

