# PvP Events

Approved PvP lifecycle events. In the current public contract this domain covers duels.

## Event index

| Event | Description |
|---|---|
| `DUEL_ENDED` | Published when duel reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable. |
| `DUEL_REQUESTED` | Published when the authoritative 'DUEL_REQUESTED' gameplay event occurs. The payload contains only client-visible state intended for PvP UI and AddOns. |
| `DUEL_REQUEST_ENDED` | Published when duel request reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable. |
| `DUEL_STARTED` | Published when duel starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `DUEL_ENDED`

Published when duel reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `duelId` | `System.Guid` | `string` | No | Stable identifier of the duel session. |
| `winnerGuid` | `System.Guid?` | `string | null` | Yes | Stable identifier of the winning character when the client is allowed to know it. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("DUEL_ENDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
PvpEvents.PublishDuelEnded(
    eventBus,
    duelId,
    winnerGuid,
    reasonCode
);
```

## `DUEL_REQUESTED`

Published when the authoritative 'DUEL_REQUESTED' gameplay event occurs. The payload contains only client-visible state intended for PvP UI and AddOns.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `duelId` | `System.Guid` | `string` | No | Stable identifier of the duel session. |
| `challenger` | `EntityRef` | `EntityRef` | No | Safe reference to the player issuing the duel challenge. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("DUEL_REQUESTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
PvpEvents.PublishDuelRequested(
    eventBus,
    duelId,
    challenger
);
```

## `DUEL_REQUEST_ENDED`

Published when duel request reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `duelId` | `System.Guid` | `string` | No | Stable identifier of the duel session. |
| `resultCode` | `string` | `string` | No | Stable non-localized result code for the operation. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("DUEL_REQUEST_ENDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
PvpEvents.PublishDuelRequestEnded(
    eventBus,
    duelId,
    resultCode
);
```

## `DUEL_STARTED`

Published when duel starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `duelId` | `System.Guid` | `string` | No | Stable identifier of the duel session. |
| `opponent` | `EntityRef` | `EntityRef` | No | Safe reference to the opposing player. |
| `startedAt` | `System.DateTime` | `string` | No | Authoritative timestamp at which the operation started. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("DUEL_STARTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
PvpEvents.PublishDuelStarted(
    eventBus,
    duelId,
    opponent,
    startedAt
);
```

