# Loot Events

Semantic reward events for loot that has already been granted to the player. This domain never exposes unrevealed drop tables.

## Event index

| Event | Description |
|---|---|
| `LOOT_GRANTED` | Published after loot or a semantic reward package has actually been granted to the player. It never exposes unrevealed drop-table information. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `LOOT_GRANTED`

Published after loot or a semantic reward package has actually been granted to the player. It never exposes unrevealed drop-table information.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef | null` | Yes | Optional entity responsible for creating the effect or state change. |
| `reward` | `RewardInfo` | `RewardInfo` | No | Reward package associated with this choice. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("LOOT_GRANTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
LootEvents.PublishGranted(
    eventBus,
    source,
    reward
);
```

