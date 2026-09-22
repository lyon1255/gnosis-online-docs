# Stats Events

Events that invalidate or replace calculated player-stat snapshots exposed to Forge consumers.

## Event index

| Event | Description |
|---|---|
| `PLAYER_STATS_CHANGED` | Published when calculated player stats have changed and consumers should refresh their stat snapshot. The revision can be used to reject stale cached data. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `PLAYER_STATS_CHANGED`

Published when calculated player stats have changed and consumers should refresh their stat snapshot. The revision can be used to reject stale cached data.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `stats` | `System.Collections.Generic.List<StatValue>` | `ReadonlyArray<StatValue>` | No | Calculated stat entries included in this state snapshot. |
| `revision` | `int` | `number` | No | Monotonically increasing revision number used to detect stale cached state. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PLAYER_STATS_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
StatsEvents.PublishStatsChanged(
    eventBus,
    stats,
    revision
);
```

