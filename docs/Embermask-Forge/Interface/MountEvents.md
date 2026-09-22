# Mount Events

Mount collection, mounting state, dismounting, and availability changes for the local character.

## Event index

| Event | Description |
|---|---|
| `DISMOUNTED` | Published when the authoritative 'DISMOUNTED' gameplay event occurs. The payload contains only client-visible state intended for Mount UI and AddOns. |
| `MOUNTED` | Published when the authoritative 'MOUNTED' gameplay event occurs. The payload contains only client-visible state intended for Mount UI and AddOns. |
| `MOUNT_AVAILABILITY_CHANGED` | Published when the authoritative mount availability state changes. The payload contains the resulting state and identifiers needed by Mount UI or AddOns to update without polling. |
| `MOUNT_COLLECTED` | Published when the authoritative 'MOUNT_COLLECTED' gameplay event occurs. The payload contains only client-visible state intended for Mount UI and AddOns. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `DISMOUNTED`

Published when the authoritative 'DISMOUNTED' gameplay event occurs. The payload contains only client-visible state intended for Mount UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `mountId` | `int` | `number` | No | Stable content identifier of the mount. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("DISMOUNTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MountEvents.PublishDismounted(
    eventBus,
    mountId,
    reasonCode
);
```

## `MOUNTED`

Published when the authoritative 'MOUNTED' gameplay event occurs. The payload contains only client-visible state intended for Mount UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `mountId` | `int` | `number` | No | Stable content identifier of the mount. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("MOUNTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MountEvents.PublishMounted(
    eventBus,
    mountId
);
```

## `MOUNT_AVAILABILITY_CHANGED`

Published when the authoritative mount availability state changes. The payload contains the resulting state and identifiers needed by Mount UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `mountId` | `int` | `number` | No | Stable content identifier of the mount. |
| `available` | `bool` | `boolean` | No | Whether the feature or action is currently available. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("MOUNT_AVAILABILITY_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MountEvents.PublishAvailabilityChanged(
    eventBus,
    mountId,
    available,
    reasonCode
);
```

## `MOUNT_COLLECTED`

Published when the authoritative 'MOUNT_COLLECTED' gameplay event occurs. The payload contains only client-visible state intended for Mount UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `mountId` | `int` | `number` | No | Stable content identifier of the mount. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("MOUNT_COLLECTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MountEvents.PublishCollected(
    eventBus,
    mountId
);
```

