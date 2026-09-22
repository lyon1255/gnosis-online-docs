# Death Events

Death, respawn, and resurrection lifecycle events for the local player and other client-visible units.

## Event index

| Event | Description |
|---|---|
| `PLAYER_RESPAWNED` | Published when the authoritative 'PLAYER_RESPAWNED' gameplay event occurs. The payload contains only client-visible state intended for Death UI and AddOns. |
| `PLAYER_RESPAWN_SCHEDULED` | Published when the authoritative 'PLAYER_RESPAWN_SCHEDULED' gameplay event occurs. The payload contains only client-visible state intended for Death UI and AddOns. |
| `RESURRECTION_OFFERED` | Published when the authoritative 'RESURRECTION_OFFERED' gameplay event occurs. The payload contains only client-visible state intended for Death UI and AddOns. |
| `RESURRECTION_OFFER_ENDED` | Published when resurrection offer reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable. |
| `UNIT_DIED` | Published when unit dies in authoritative game state. The payload contains the public context required by consumers. |
| `UNIT_RESURRECTED` | Published when the authoritative 'UNIT_RESURRECTED' gameplay event occurs. The payload contains only client-visible state intended for Death UI and AddOns. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `PLAYER_RESPAWNED`

Published when the authoritative 'PLAYER_RESPAWNED' gameplay event occurs. The payload contains only client-visible state intended for Death UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `position` | `UnityEngine.Vector3` | `{ x: number; y: number; z: number }` | No | Authoritative world-space position. |
| `floorId` | `int` | `number` | No | Stable content identifier of the relevant floor. |
| `mapId` | `int` | `number` | No | Stable content identifier of the relevant map. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PLAYER_RESPAWNED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
DeathEvents.PublishRespawned(
    eventBus,
    position,
    floorId,
    mapId
);
```

## `PLAYER_RESPAWN_SCHEDULED`

Published when the authoritative 'PLAYER_RESPAWN_SCHEDULED' gameplay event occurs. The payload contains only client-visible state intended for Death UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `respawnAt` | `System.DateTime` | `string` | No | Authoritative time at which respawn becomes available or occurs. |
| `bindPointId` | `int?` | `number | null` | Yes | Stable identifier of the current bind point. |
| `floorId` | `int` | `number` | No | Stable content identifier of the relevant floor. |
| `mapId` | `int` | `number` | No | Stable content identifier of the relevant map. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PLAYER_RESPAWN_SCHEDULED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
DeathEvents.PublishRespawnScheduled(
    eventBus,
    respawnAt,
    bindPointId,
    floorId,
    mapId
);
```

## `RESURRECTION_OFFERED`

Published when the authoritative 'RESURRECTION_OFFERED' gameplay event occurs. The payload contains only client-visible state intended for Death UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `offerId` | `System.Guid` | `string` | No | Stable identifier of the resurrection or transaction offer. |
| `caster` | `EntityRef` | `EntityRef` | No | Entity that initiated the cast. |
| `spellId` | `int` | `number` | No | Stable content identifier of the spell or ability. |
| `expiresAt` | `System.DateTime?` | `string | null` | Yes | Optional authoritative expiration timestamp. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("RESURRECTION_OFFERED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
DeathEvents.PublishResurrectionOffered(
    eventBus,
    offerId,
    caster,
    spellId,
    expiresAt
);
```

## `RESURRECTION_OFFER_ENDED`

Published when resurrection offer reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `offerId` | `System.Guid` | `string` | No | Stable identifier of the resurrection or transaction offer. |
| `result` | `ResurrectionOfferResult` | `ResurrectionOfferResult` | No | Stable semantic result of the operation. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("RESURRECTION_OFFER_ENDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
DeathEvents.PublishResurrectionOfferEnded(
    eventBus,
    offerId,
    result
);
```

## `UNIT_DIED`

Published when unit dies in authoritative game state. The payload contains the public context required by consumers.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `EntityRef` | `EntityRef` | No | Forge unit token whose public state is being described. |
| `killer` | `EntityRef` | `EntityRef | null` | Yes | Optional entity credited with the death. |
| `spellId` | `int?` | `number | null` | Yes | Stable content identifier of the spell or ability. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("UNIT_DIED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
DeathEvents.PublishDied(
    eventBus,
    unit,
    killer,
    spellId
);
```

## `UNIT_RESURRECTED`

Published when the authoritative 'UNIT_RESURRECTED' gameplay event occurs. The payload contains only client-visible state intended for Death UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `EntityRef` | `EntityRef` | No | Forge unit token whose public state is being described. |
| `caster` | `EntityRef` | `EntityRef | null` | Yes | Entity that initiated the cast. |
| `spellId` | `int?` | `number | null` | Yes | Stable content identifier of the spell or ability. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("UNIT_RESURRECTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
DeathEvents.PublishResurrected(
    eventBus,
    unit,
    caster,
    spellId
);
```

