# Currency Events

Authoritative gameplay-currency changes for the local player, including the resulting balance and the semantic reason for the change.

## Event index

| Event | Description |
|---|---|
| `PLAYER_MONEY_CHANGED` | Published when the local player's authoritative gameplay-currency balance changes. The payload contains the resulting balance, signed delta, and semantic reason for the change. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `PLAYER_MONEY_CHANGED`

Published when the local player's authoritative gameplay-currency balance changes. The payload contains the resulting balance, signed delta, and semantic reason for the change.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `current` | `int` | `number` | No | Authoritative current value after the change. |
| `delta` | `int` | `number` | No | Signed difference applied by this change. |
| `reason` | `CurrencyChangeReason` | `CurrencyChangeReason` | No | Stable semantic reason associated with the event. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("PLAYER_MONEY_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
CurrencyEvents.PublishMoneyChanged(
    eventBus,
    current,
    delta,
    reason
);
```

