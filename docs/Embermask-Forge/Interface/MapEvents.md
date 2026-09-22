# Map Events


Discovery/Fog of War/map copy. 


Events: **5**

## `1. MAP_COPY_APPLIED`
A kompatibilis, whitelistelt discovery-réteg átadásra került.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `mapId` | `int` | `number` | No |  |
| `mapVersion` | `string` | `string` | No |  |
| `delta` | `MapDiscoveryDelta` | `MapDiscoveryDelta` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("MAP_COPY_APPLIED", payload => {
    // payload.<field>
});
```

C# publisher: `MapEvents.PublishCopyApplied(...)`

## `2. MAP_COPY_CONSUMED`
Egy map-copy item használatkor elfogyott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `itemInstanceGuid` | `System.Guid` | `string` | No |  |
| `mapId` | `int` | `number` | No |  |
| `mapVersion` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("MAP_COPY_CONSUMED", payload => {
    // payload.<field>
});
```

C# publisher: `MapEvents.PublishCopyConsumed(...)`

## `3. MAP_COPY_CREATED`
A saját feltárt mapből kereskedhető map-item sikeresen létrejött.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `item` | `ItemStackInfo` | `ItemStackInfo` | No |  |
| `mapId` | `int` | `number` | No |  |
| `mapVersion` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("MAP_COPY_CREATED", payload => {
    // payload.<field>
});
```

C# publisher: `MapEvents.PublishCopyCreated(...)`

## `4. MAP_DISCOVERY_CHANGED`
Fog-of-War discovery adat változott; az update batchelhető.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `mapId` | `int` | `number` | No |  |
| `mapVersion` | `string` | `string` | No |  |
| `delta` | `MapDiscoveryDelta` | `MapDiscoveryDelta` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("MAP_DISCOVERY_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `MapEvents.PublishDiscoveryChanged(...)`

## `5. SECRET_DISCOVERED`
A karakter számára egy korábban rejtett secret ténylegesen felfedezetté vált.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `secretId` | `int` | `number` | No |  |
| `mapId` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("SECRET_DISCOVERED", payload => {
    // payload.<field>
});
```

C# publisher: `MapEvents.PublishSecretDiscovered(...)`

