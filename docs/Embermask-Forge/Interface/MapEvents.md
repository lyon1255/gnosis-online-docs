# Map Events

Map and discovery events for Fog-of-War updates, copied-map items, and secret discoveries that are legitimately visible to the local client.

## Event index

| Event | Description |
|---|---|
| `MAP_COPY_APPLIED` | Published when map copy is successfully applied to authoritative game state. |
| `MAP_COPY_CONSUMED` | Published when map copy is consumed and the authoritative state reflects that consumption. |
| `MAP_COPY_CREATED` | Published when map copy is created and becomes visible to the local client. |
| `MAP_DISCOVERY_CHANGED` | Published when new Fog-of-War cells become discovered. The payload contains only the discovery delta and its authoritative revision. |
| `SECRET_DISCOVERED` | Published when secret is discovered and becomes legitimately known to the local player. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `MAP_COPY_APPLIED`

Published when map copy is successfully applied to authoritative game state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `mapId` | `int` | `number` | No | Stable content identifier of the relevant map. |
| `mapVersion` | `string` | `string` | No | Authoritative map version value associated with this payload. |
| `delta` | `MapDiscoveryDelta` | `MapDiscoveryDelta` | No | Signed difference applied by this change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("MAP_COPY_APPLIED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MapEvents.PublishCopyApplied(
    eventBus,
    mapId,
    mapVersion,
    delta
);
```

## `MAP_COPY_CONSUMED`

Published when map copy is consumed and the authoritative state reflects that consumption.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No | Stable identifier of the concrete item instance. |
| `mapId` | `int` | `number` | No | Stable content identifier of the relevant map. |
| `mapVersion` | `string` | `string` | No | Authoritative map version value associated with this payload. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("MAP_COPY_CONSUMED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MapEvents.PublishCopyConsumed(
    eventBus,
    itemInstanceGuid,
    mapId,
    mapVersion
);
```

## `MAP_COPY_CREATED`

Published when map copy is created and becomes visible to the local client.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `item` | `ItemStackInfo` | `ItemStackInfo` | No | Authoritative item value associated with this payload. |
| `mapId` | `int` | `number` | No | Stable content identifier of the relevant map. |
| `mapVersion` | `string` | `string` | No | Authoritative map version value associated with this payload. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("MAP_COPY_CREATED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MapEvents.PublishCopyCreated(
    eventBus,
    item,
    mapId,
    mapVersion
);
```

## `MAP_DISCOVERY_CHANGED`

Published when new Fog-of-War cells become discovered. The payload contains only the discovery delta and its authoritative revision.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `mapId` | `int` | `number` | No | Stable content identifier of the relevant map. |
| `mapVersion` | `string` | `string` | No | Authoritative map version value associated with this payload. |
| `delta` | `MapDiscoveryDelta` | `MapDiscoveryDelta` | No | Signed difference applied by this change. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("MAP_DISCOVERY_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MapEvents.PublishDiscoveryChanged(
    eventBus,
    mapId,
    mapVersion,
    delta
);
```

## `SECRET_DISCOVERED`

Published when secret is discovered and becomes legitimately known to the local player.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `secretId` | `int` | `number` | No | Stable content identifier of the discovered secret. |
| `mapId` | `int` | `number` | No | Stable content identifier of the relevant map. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("SECRET_DISCOVERED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
MapEvents.PublishSecretDiscovered(
    eventBus,
    secretId,
    mapId
);
```

