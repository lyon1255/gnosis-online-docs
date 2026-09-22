# Stats Events


Számított player statok. 


Events: **1**

## `1. PLAYER_STATS_CHANGED`
Egy vagy több végső, UI-releváns karakterstat megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `stats` | `System.Collections.Generic.List<StatValue>` | `ReadonlyArray<StatValue>` | No | csak a változott vagy az adapter policyje szerinti aktuális statértékek |
| `revision` | `long` | `number` | No | stat snapshot revision Non-negative revision/identifier; represented as Long in the public Forge schema. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PLAYER_STATS_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `StatsEvents.PublishStatsChanged(...)`

