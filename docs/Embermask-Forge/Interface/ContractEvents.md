# Contract Events

Adventurer Contract lifecycle events covering acquisition, progress, suspension, revocation, and expiration.

## Event index

| Event | Description |
|---|---|
| `CONTRACT_ACQUIRED` | Published when the authoritative 'CONTRACT_ACQUIRED' gameplay event occurs. The payload contains only client-visible state intended for Contract UI and AddOns. |
| `CONTRACT_EXPIRED` | Published when contract expires according to authoritative game state. |
| `CONTRACT_PROGRESS_CHANGED` | Published when the authoritative contract progress state changes. The payload contains the resulting state and identifiers needed by Contract UI or AddOns to update without polling. |
| `CONTRACT_REVOKED` | Published when contract is authoritatively revoked and should no longer be treated as active or owned. |
| `CONTRACT_SUSPENDED` | Published when contract is suspended and temporarily stops progressing while remaining part of authoritative state. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `CONTRACT_ACQUIRED`

Published when the authoritative 'CONTRACT_ACQUIRED' gameplay event occurs. The payload contains only client-visible state intended for Contract UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `contract` | `ContractInfo` | `ContractInfo` | No | Current public snapshot of the Adventurer Contract. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("CONTRACT_ACQUIRED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
ContractEvents.PublishAcquired(
    eventBus,
    contract
);
```

## `CONTRACT_EXPIRED`

Published when contract expires according to authoritative game state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `contractId` | `System.Guid` | `string` | No | Stable identifier of the Adventurer Contract. |
| `expiredAt` | `System.DateTime` | `string` | No | Authoritative timestamp at which the object expired. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("CONTRACT_EXPIRED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
ContractEvents.PublishExpired(
    eventBus,
    contractId,
    expiredAt
);
```

## `CONTRACT_PROGRESS_CHANGED`

Published when the authoritative contract progress state changes. The payload contains the resulting state and identifiers needed by Contract UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `contract` | `ContractInfo` | `ContractInfo` | No | Current public snapshot of the Adventurer Contract. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("CONTRACT_PROGRESS_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
ContractEvents.PublishProgressChanged(
    eventBus,
    contract
);
```

## `CONTRACT_REVOKED`

Published when contract is authoritatively revoked and should no longer be treated as active or owned.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `contractId` | `System.Guid` | `string` | No | Stable identifier of the Adventurer Contract. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("CONTRACT_REVOKED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
ContractEvents.PublishRevoked(
    eventBus,
    contractId,
    reasonCode
);
```

## `CONTRACT_SUSPENDED`

Published when contract is suspended and temporarily stops progressing while remaining part of authoritative state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `contractId` | `System.Guid` | `string` | No | Stable identifier of the Adventurer Contract. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("CONTRACT_SUSPENDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
ContractEvents.PublishSuspended(
    eventBus,
    contractId,
    reasonCode
);
```

